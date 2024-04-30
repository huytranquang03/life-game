import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/layout/ListItem"; 
import { UserContext } from "../store/UserContext";

const NPCDetailsScreen = ({ route, navigation }) => {
    const { actions, npcId } = route.params;
    const {
        setBalance,
        balance,
        setTime,
        time,
        setNpcProgress,
        getIntelligence,
        percentageSimulator,
        npc,
        updateStats,
    } = useContext(UserContext); 

    const data = Object.keys(actions)
        .filter((action) => actions[action])
        .map((action) => ({
            id: action, 
            item: action, 
            icon: "checkbox-outline", // Assuming you use Ionicons and all actions use the same icon
        }));
    const npcById = npc.find(n => n.id === npcId)
    // Function to handle press on an action
    const handlePress = (item) => {
        switch (item.item) {
            case "Conversation":
                setTime(time + 120);
                if (percentageSimulator(npcById.progress * 0.5 + getIntelligence() * 0.3)) {
                    updateStats({ Happiness: 3 });
                    setNpcProgress(npcId, 5);
                } else {
                    updateStats({ Happiness: -7 });
                    setNpcProgress(npcId, -5);
                }
                break;
            case "Ask For Money":
                setTime(time + 80);
                if (percentageSimulator(npcById.progress * 0.3 + 40)) {
                    setNpcProgress(npcId, -5);
                    setBalance(balance + 100);
                } else {
                    setNpcProgress(npcId, -10);
                }
                break;
            case "Compliment":
                setTime(time + 60);
                if (percentageSimulator(70 + getIntelligence() * 0.2)) {
                    updateStats({ Happiness: 3 });
                    setNpcProgress(npcId, 3);
                } else {
                }
                break;
            case "Insult":
                setTime(time + 60);
                if (percentageSimulator(30 + getIntelligence() * 0.5)) {
                    updateStats({ Happiness: 7 });
                    setNpcProgress(npcId, -7);
                } else {
                    updateStats({ Appearance: -7 });
                    setNpcProgress(npcId, -5);
                }
                break;
            case "Spend time":
                setTime(time + 120);
                if (percentageSimulator(npcById.progress * 0.9 + 20)) {
                    updateStats({ Happiness: 7 });
                    setNpcProgress(npcId, 10);
                } else {
                    setNpcProgress(npcId, -5);
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NPCDetailsScreen;
