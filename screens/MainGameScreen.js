import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import IconButton from "../components/ui/IconButton";
import GameBar from "../components/ui/GameBar";
import TimeBar from "../components/ui/TimeBar";
import { UserContext } from "../store/UserContext";

const MainGameScreen = ({ navigation }) => {
	const { stats, intelStats, name, age, balance, setAge, setTime } = useContext(UserContext);

	const plusAgeButton = () => {
		setTime(0);
		setAge(age + 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<Pressable style={styles.profileImageContainer} onPress={() => navigation.navigate("PlayerStatsScreen")}>
					<Image source={{ uri: "https://picsum.photos/100/100" }} style={styles.profileImage} />
				</Pressable>
				<Pressable style={styles.profileInfoContainer} onPress={() => navigation.navigate("PlayerStatsScreen")}>
					<Text style={styles.profileName}>{name}</Text>
					<Text style={styles.ageText}>Age: {age}</Text>
				</Pressable>
				<Pressable style={styles.balanceContainer} onPress={() => navigation.navigate("FinanceScreen")}>
					<Text style={styles.balanceText}>$$$ {balance}</Text>
				</Pressable>
			</View>
			<View style={styles.textBox}>
				<Text style={styles.text}>This is text box</Text>
			</View>

			<TimeBar duration={10} color="pink" height={20} borderRadius={10} />

			<View style={styles.buttonRow}>
				<ActionButton icon="school" text="School" onPress={() => navigation.navigate("SchoolJobScreen")} />
				<ActionButton icon="logo-usd" text="Finance" onPress={() => navigation.navigate("FinanceScreen")} />
				<ActionButton icon="add-circle" text="Age" onPress={plusAgeButton} />
				<ActionButton icon="heart" text="Relationship" onPress={() => navigation.navigate("RelationshipScreen")} />
				<ActionButton icon="fitness" text="Activity" onPress={() => navigation.navigate("ActivitiesScreen")} />
			</View>

			<View style={styles.statsView}>
				{stats.map((stat) => (
					<StatBar key={stat.name} name={stat.name} progress={stat.progress} color={stat.color} onPress={() => navigation.navigate("PlayerStatsScreen")}/>
				))}
				<StatBar key={intelStats[0].name} name={intelStats[0].name} progress={intelStats[0].progress} color={intelStats[0].color} onPress={() => navigation.navigate("PlayerStatsScreen")}/>
			</View>
		</View>
	);
};

const ActionButton = ({ icon, text, onPress }) => (
	<View style={styles.actionButton}>
		<PrimaryButton onPress={onPress} style={styles.primaryButton}>
			<IconButton onPress={onPress} icon={icon} size={16} color="white" style={styles.iconButton} />
		</PrimaryButton>
		<Text style={styles.actionButtonText}>{text}</Text>
	</View>
);

const StatBar = ({ name, progress, color, onPress }) => (
	<Pressable style={styles.statBar} onPress={onPress}>
		<Text style={styles.statLabel}>{name}</Text>
		<GameBar progress={progress} color={color} height={10} borderRadius={5} />
	</Pressable>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	topRow: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginTop: 20,
	},
	profileImageContainer: {
		padding: 20,
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
	},
	ageText: {
		fontSize: 16,
		color: "#888",
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
	textBox: {
		width: "100%",
		height: 300,
		backgroundColor: "black",
		marginTop: 20,
	},
	text:{
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
	statLabel: {
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 5,
	},
});

export default MainGameScreen;
