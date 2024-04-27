import React, { useContext } from "react";
import ListItem from "../components/layout/ListItem";
import { UserContext } from "../store/UserContext";

const RelationshipScreen = ({ navigation }) => {
   const { npc, setNpc } = useContext(UserContext);

	const handlePress = (item) => {
		console.log("Pressed item with ID:", item.id);
		navigation.navigate("NPCDetailsScreen", {
			actions: item.actions,
		});
	};

	return <ListItem data={npc} onPress={handlePress} />;
};

export default RelationshipScreen;
