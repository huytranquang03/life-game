import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import NPCitem from "../components/layout/NPCitem"; // Ensure correct path

const RelationshipScreen = ({ navigation }) => {
    const { npc } = useContext(UserContext);

    return <NPCitem data={npc} />;
};

export default RelationshipScreen;
