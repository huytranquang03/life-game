import React, { useContext, useEffect , useState} from "react";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import IconButton from "../components/ui/IconButton";
import GameBar from "../components/ui/GameBar";
import TimeBar from "../components/ui/TimeBar";
import { UserContext } from "../store/UserContext";
import Avatar from "../components/ui/Avatar"; // Import Avatar component
import RandomEvent from "../components/layout/RandomEvent";



const MainGameScreen = ({ navigation }) => {
	const { stats, intelStats, name, age, balance, plusAge,setAge } = useContext(UserContext);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.random();
            const threshold = 0.5; // Change this threshold to adjust the probability
            if (randomNumber < threshold) {
                // Show popup
                setPopupVisible(true);
                const randomMessage = getRandomMessage();
                setPopupMessage(randomMessage);
            } else {
                // Hide popup
                setPopupVisible(false);
                setPopupMessage("");
            }
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    // Function to generate random message
    const getRandomMessage = () => {
		const age = useContext(UserContext).age;
		let messages = [];
		if (age > 10) {
			messages.push("Bạn bị cảm lạnh.");
		}
		if (age > 30) {
			messages.push("Bạn bị tai nạn xe hơi.");
		}
		if (age > 70) {
			messages.push("Bạn bị viêm đường ruột.");
		}
		if (age >= 20) {
			messages.push("Bạn bị cướp giết chết.");
		}
		if (age > 0) {
			messages.push("Bạn đã chết đột ngột.");
		}
	
		if (messages.length === 0) {
			// Nếu không có điều kiện nào được thỏa mãn, trả về một thông báo mặc định
			messages = [
				"Không có sự kiện đặc biệt nào xảy ra."
			];
		}
	
		// Chọn một thông báo ngẫu nhiên từ danh sách messages
		const randomIndex = Math.floor(Math.random() * messages.length);
		return messages[randomIndex];
	};
	
    const handleTreatPress = () => {
        console.log("Treat pressed");
        setPopupVisible(false);
      
    };

    const handledoNothingPress = () => {
        console.log("No pressed");
		setAge(0)
        setPopupVisible(false);
        navigation.navigate("MainMenuScreen");
    };



	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<Pressable style={styles.profileImageContainer} onPress={() => navigation.navigate("PlayerStatsScreen")}>
				<Avatar source={{ uri: "https://picsum.photos/100/100" }} name={name} onPress={() => navigation.navigate("PlayerStatsScreen")} />

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
				<ActionButton icon="add-circle" text="Age" onPress={plusAge} />
				<ActionButton icon="heart" text="Relationship" onPress={() => navigation.navigate("RelationshipScreen")} />
				<ActionButton icon="fitness" text="Activity" onPress={() => navigation.navigate("ActivitiesScreen")} />
			</View>

			<View style={styles.statsView}>
				{stats.map((stat) => (
					<StatBar key={stat.name} name={stat.name} progress={stat.progress} color={stat.color} onPress={() => navigation.navigate("PlayerStatsScreen")}/>
				))}
				<StatBar key={intelStats[0].name} name={intelStats[0].name} progress={intelStats[0].progress} color={intelStats[0].color} onPress={() => navigation.navigate("PlayerStatsScreen")}/>
			</View>
			<RandomEvent // random event
			 visible={popupVisible}
			 message={popupMessage}
			 onTreatPress={handleTreatPress}
			 doNothingPress={handledoNothingPress}/>
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
		marginTop: 10,
		padding:0,
	},
	profileImageContainer: {
		padding: 10,
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
		height: 310,
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
