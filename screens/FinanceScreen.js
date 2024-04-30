import React, { useContext, useState } from "react";
import StoreItem from "../components/layout/StoreItem";
import { UserContext } from "../store/UserContext";
import ConfirmAlert from "../components/layout/ConfirmAlert";
import { Alert, View } from "react-native";

const FinanceScreen = ({ navigation }) => {
	const {
		finance,
		setFinance,
		balance,
		setBalance,
		vehicleBonus,
		setVehicleBonus,
		stats,
	} = useContext(UserContext);

	const [selectedItem, setSelectedItem] = useState(null);
	const [confirmVisible, setConfirmVisible] = useState(false);
	const buyVehicle = (price) => {
		if (balance >= price) {
			setBalance((balance) => balance - price);
			let newVehicleBonus = vehicleBonus;
			switch (price) {
				case 50:
					newVehicleBonus += 2;
					break;
				case 2000:
					newVehicleBonus += 3;
					break;
				case 100000:
					newVehicleBonus += 5;
					break;
				case 1000:
					stats[0].progress += 5;
					break;
				case 20000:
					stats[2].progress += 20;
					break;
				case 200000:
					stats[2].progress += 10;
					break;
				default:
					break;
			}
			setVehicleBonus(newVehicleBonus);
			return true; // Purchase was successful
		} else {
			Alert.alert("Notice", "Not enough money to buy the vehicle");
			return false; // Purchase was not successful
		}
	};

	const handleConfirm = () => {
		// If the item is successfully purchased, then remove it from the finance list
		if (buyVehicle(selectedItem.price)) {
			const updatedFinance = finance.filter(item => item.id !== selectedItem.id);
			setFinance(updatedFinance);
		}
		// Close the confirmation window in either case
		setConfirmVisible(false);
	};

	const handleCancel = () => {
		setConfirmVisible(false);
	};

	const handlePress = (item) => {
		setSelectedItem(item);
		setConfirmVisible(true);
	};

	return (
		<>

			<StoreItem data={finance} onPress={handlePress} />
			<ConfirmAlert
				visible={confirmVisible}
				message="Are you sure you want buy?"
				onCancel={handleCancel}
				onConfirm={handleConfirm}
			/>
		</>
	);
};

export default FinanceScreen;