import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/layout/ListItem"; // Import the ListItem component
import { UserContext } from "../store/UserContext";

const NPCDetailsScreen = ({ route, navigation }) => {
	const { actions, npcId } = route.params;
	const {
		setHappiness,
		getHappiness,
		setBalance,
		balance,
		setTime,
		time,
		getAppearance,
		setAppearance,
		setNpcProgress,
		getIntelligence,
		percentageSimulator,
		npc
	} = useContext(UserContext); // Destructure the needed functions from the context

	// Prepare data in the format that ListItem expects
	const data = Object.keys(actions)
		.filter((action) => actions[action])
		.map((action) => ({
			id: action, // Using action names as unique ids
			item: action, // Text to display
			icon: "checkbox-outline", // Assuming you use Ionicons and all actions use the same icon
		}));
	const npcById = npc.find(n => n.id === npcId)
	// Function to handle press on an action
	const handlePress = (item) => {
		switch (item.item) {
			case "Conversation":
				setTime(time + 10);
				if (percentageSimulator(npcById.progress * 0.5 + getIntelligence() * 0.3)) {
					setHappiness(getHappiness() + 5);
					setNpcProgress(npcId, 10, "increment");
				} else {
					setHappiness(getHappiness() - 10);
					setNpcProgress(npcId, 10, "decrement");
				}
				break;
			case "Ask For Money":
				setTime(time + 5);
				if (percentageSimulator(npcById.progress * 0.3 + 40)) {
					setNpcProgress(npcId, 5, "decrement");
					setBalance(balance + 100);
				} else {
					setNpcProgress(npcId, 10, "decrement");
				}
				break;
			case "Conmpliment":
				setTime(time + 5);
				if (percentageSimulator(70 + getIntelligence() * 0.2)) {
					setHappiness(getHappiness() + 5);
					setNpcProgress(npcId, 5, "increment");
				} else {
				}
				break;
			case "Insult":
				setTime(time + 5);
				if (percentageSimulator(30 + getIntelligence() * 0.5)) {
					setHappiness(getHappiness() + 30);
				} else {
					setAppearance(getAppearance() - 10);
				}
				break;
			case "Spend time":
				setTime(time + 20);
				if (percentageSimulator(npcById.progress * 0.9 + 20)) {
					setHappiness(getHappiness() + 10);
					setNpcProgress(npcId, 20, "increment");
				} else {
					setNpcProgress(npcId, 10, "decrement");
				}
				break;
			default:
				break;
		}
		navigation.navigate("RelationshipScreen");
	};

	return (
		<View style={styles.container}>
			<ListItem data={data} onPress={handlePress} />
		</View>
	);
};

// Styles, simplified as ListItem will handle item styling
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default NPCDetailsScreen;
