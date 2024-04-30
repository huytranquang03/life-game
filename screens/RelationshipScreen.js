import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import NPCitem from "../components/layout/NPCitem";

const RelationshipScreen = ({ navigation }) => {
    const { npc, age } = useContext(UserContext);

    const filteredNpc = npc.filter(item => {
        if (age >= 0 && age < 5) {
            return [1].includes(item.id);
        } else if (age >= 5 && age < 15) {
            return [1, 2, 3].includes(item.id);
        } else if (age >= 15 && age < 25) {
            return [1, 2, 3, 4].includes(item.id);
        } else if (age >= 25) {
            return [1, 2, 3, 5].includes(item.id);
        }
        return false;
    });

    return (
        <NPCitem data={filteredNpc} />
    );
};

export default RelationshipScreen;
