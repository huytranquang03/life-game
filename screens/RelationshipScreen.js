import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import ListItem from "../components/layout/ListItem";
import { UserContext } from "../store/UserContext";

const RelationshipScreen = ({ navigation }) => {
   const { npcData } = useContext(UserContext);

	const handlePress = (item) => {
		console.log("Pressed item with ID:", item.id);
		navigation.navigate("NPCDetailsScreen", {
			actions: item.actions,
		});
	};

	return <ListItem data={npcData} onPress={handlePress} />;
};

const styles = StyleSheet.create({
	item: {
		width: 700,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	itemContent: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
	},
	text: {
		marginLeft: 20,
		fontSize: 30,
	},
	pressed: {
		opacity: 0.5,
	},
});

export default RelationshipScreen;
