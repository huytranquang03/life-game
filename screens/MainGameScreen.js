
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Alert, Image } from "react-native";
import GameBar from "../components/ui/GameBar";
import TimeBar from "../components/ui/TimeBar";
import { UserContext } from "../store/UserContext";
import Avatar from "../components/ui/Avatar"; // Import Avatar component
import ImageView from "../components/ui/ImageView";
import DailyReward from "../components/layout/DailyReward";
import ImageButton from "../components/ui/ImageButton";

const MainGameScreen = ({ navigation }) => {
    const {
        stats,
        intelStats,
        name,
        age,
        balance,
        plusAge,
        currentReward
    } = useContext(UserContext);


    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Pressable
                    style={styles.profileImageContainer}
                    onPress={() => navigation.navigate("PlayerStatsScreen")}
                >
                    <Avatar
                        onPress={() => navigation.navigate("PlayerStatsScreen")}
                    />
                </Pressable>
                <Pressable
                    style={styles.profileInfoContainer}
                    onPress={() => navigation.navigate("PlayerStatsScreen")}
                >
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.ageText}>Age: {age}</Text>
                </Pressable>
                <Pressable
                    style={styles.balanceContainer}
                    onPress={() => navigation.navigate("FinanceScreen")}
                >
                    <Text style={styles.balanceText}>$$$ {balance}</Text>
                </Pressable>
            </View>

            <ImageView />

            <TimeBar duration={1000} color="#7ED957" height={20} />

            <View style={styles.buttonRow}>
                <ImageButton image={require("../icon/School.png")} text="School" onPress={() => navigation.navigate("SchoolJobScreen")} />
                <ImageButton image={require("../icon/Money Bag.png")} text="Finance" onPress={() => navigation.navigate("FinanceScreen")} />
                <ImageButton image={require("../icon/Plus.png")} text="Age" onPress={plusAge} />
                <ImageButton image={require("../icon/Green Heart.png")} text="Relationship" onPress={() => navigation.navigate("RelationshipScreen")} />
                <ImageButton image={require("../icon/playhandball.png")} text="Activity" onPress={() => navigation.navigate("ActivitiesScreen")} />
            </View>


            <View style={styles.statsView}>
                {stats.map((stat) => (
                    <StatBar
                        key={stat.name}
                        name={stat.name}
                        progress={stat.progress}
                        color={stat.color}
                        onPress={() => navigation.navigate("PlayerStatsScreen")}
                    />
                ))}
                <StatBar
                    key={intelStats[0].name}
                    name={intelStats[0].name}
                    progress={intelStats[0].progress}
                    color={intelStats[0].color}
                    onPress={() => navigation.navigate("PlayerStatsScreen")}
                />
            </View>
            <DailyReward reward={currentReward} />
        </View>
    );
};



const emojiMap = {
    Health: '❤️',
    Happiness: '😊',
    Appearance: '💅',
    Intelligence: '🧠',

};
const StatBar = ({ name, progress, color, onPress }) => (
    <Pressable style={styles.statBar} onPress={onPress}>
        <Text style={styles.labelImageContainer}>
            <Text style={styles.statLabel}>{name}</Text>
            <Text style={styles.emoji}>{emojiMap[name]}</Text> {/* Ensure this matches the keys in emojiMap */}

        </Text>
        <GameBar progress={progress} color={color} height={10} borderRadius={5} />
    </Pressable>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFFBE2',
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        padding: 0,
    },
    profileImageContainer: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#FFFBE2',

    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    profileInfoContainer: {
        padding: 1,
    },
    profileName: {
        fontSize: 24,
        fontWeight: "bold",

    },
    ageText: {
        fontSize: 16,
    },
    balanceContainer: {
        position: "absolute",
        right: 0,
        padding: 10,
    },
    balanceText: {
        fontSize: 20,
        color: "green",
        fontWeight: "bold",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    text: {
        color: 'white',
    },
    actionButton: {
        width: 81,
        height: 90,
        margin: 10,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
    },
    primaryButton: {
        padding: 10,
        width: 80,
    },
    iconButton: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,

    },
    actionButtonText: {
        fontSize: 10,
        fontWeight: "bold",
    },
    statsView: {
        padding: 20,
        width: 400,
    },
    statBar: {
        marginBottom: 10,
    },
    image: {
        width: 20,
        height: 20,
    },
    labelImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        marginRight: 20,
    },
    emoji: {
        fontSize: 23,
        marginHorizontal: 30,

    },

});

export default MainGameScreen;
