import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import ConfirmAlert from "../components/layout/ConfirmAlert";
import { Alert, Appearance } from "react-native";
import ListItem from "../components/layout/ListItem";

const ActivitiesScreen = () => {
	const {
		activity,
		balance,
		setBalance,
		time,
		setTime,
      updateStats, 
      updateIntelStats
	} = useContext(UserContext);
	const [selectedItem, setSelectedItem] = useState(null);
	const [confirmVisible, setConfirmVisible] = useState(false);
	const [confirmMessage, setConfirmMessage] = useState("");

    const generateConfirmMessage = (item) => {
        const defaultPrefix = "Are you sure you want to";

        const actionMap = {
            1: "play sports?",
            2: "read a book?",
            3: "start playing video games now?",
            4: `spend $${item.price} to go to the spa?`, 
            5: "join this club?",
        };

        return `${defaultPrefix} ${actionMap[item.id] || "proceed?"}`;
    };

    const useActivity = (id) => {
        switch (id) {
            case 1:
                setTime(time + 90);
                updateStats({ Health: 5, Happiness: 5, Appearance: 5 });
                break;
            case 2:
                setTime(time + 90);
                updateIntelStats({ IQ: 5, EQ: 2, Knowledge: 5 });
                break;
            case 3:
                setTime(time + 90);
                updateStats({ Happiness: 5 });
                updateIntelStats({ IQ: -5, EQ: -5 });
                break;
            case 4:
                if (balance >= selectedItem.price) {
                    setBalance(balance - selectedItem.price);
                    setTime(time + 90);
                    updateStats({ Appearance: 10 });
                    return true;
                } else {
                    Alert.alert("Notice", "Not enough money to go to the spa");
                    return false;
                }
            case 5:
                setTime(time + 120);
                updateIntelStats({ EQ: 5, Knowledge: 5 });
                break;
            default:
                break;
        }
    };

	const handleConfirm = () => {
		setConfirmVisible(false);
      useActivity(selectedItem.id);
	};

    const handleCancel = () => {
        setConfirmVisible(false); 
    };

    const handlePress = (item) => {
        setSelectedItem(item);
        setConfirmMessage(generateConfirmMessage(item)); 
        setConfirmVisible(true);
    };

    return (
        <>
            <ListItem data={activity} onPress={handlePress} />
            <ConfirmAlert
                visible={confirmVisible}
                message={confirmMessage} 
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </>
    );
};

export default ActivitiesScreen;