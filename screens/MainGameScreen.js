import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../components/ui/Card"; // Import Card
import PrimaryButton from "../components/ui/PrimaryButton"; // Import PrimaryButton
import IconButton from "../components/ui/IconButton"; // Import IconButton
import GameBar from "../components/ui/GameBar"; // Import GameBar

const MainGameScreen = ({ navigation }) => {
   const stats = [
      { name: 'Health', progress: 50, color: 'red',},
      { name: 'Happiness', progress: 70, color: 'pink', },
      { name: 'Intelligence', progress: 70, color: 'purple', },
      { name: 'Appearance', progress: 70, color: 'blue', },
  ];
	return (
		<View style={styles.container}>
			<View style={styles.buttonRow}>
				<Card style={styles.card}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton icon="school" size={16} color="white" onPress={() => {}} style={styles.iconButton} />
					</PrimaryButton>
					<Text style={styles.cardText}>School</Text>
				</Card>
				<Card style={styles.card}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton icon="add-outline" size={16} color="white" onPress={() => {}} style={styles.iconButton} />
					</PrimaryButton>
					<Text style={styles.cardText}>Finance</Text>
				</Card>
				<Card style={styles.card}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton icon="calendar" size={16} color="white" onPress={() => {}} style={styles.iconButton} />
					</PrimaryButton>
					<Text style={styles.cardText}>Age</Text>
				</Card>
				<Card style={styles.card}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton icon="heart" size={16} color="white" onPress={() => {}} style={styles.iconButton} />
					</PrimaryButton>
					<Text style={styles.cardText}>Relationship</Text>
				</Card>
				<Card style={styles.card}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton icon="fitness" size={16} color="white" onPress={() => {}} style={styles.iconButton} />
					</PrimaryButton>
					<Text style={styles.cardText}>Activity</Text>
				</Card>
			</View>
         <View style={styles.statsView}>
                {stats.map((stat) => (
                    <View key={stat.name} style={styles.statBar}>
                        <Text style={styles.statLabel}>{stat.name}</Text>
                        <GameBar progress={stat.progress} color={stat.color} height={10} borderRadius={5} />
                        <Text styles={styles.description}>{stat.description}</Text>
                    </View>
                ))}
            </View>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 400,
	},
	card: {
		width: 100, // Điều chỉnh độ rộng của Card
		height: 150, // Điều chỉnh độ cao của Card
		margin: 10,
		borderRadius: 20,
		padding: 10,
		backgroundColor: "white",
		alignItems: "center",
	},
	cardText: {
		fontSize: 12, // Giảm kích thước font chữ
		fontWeight: "bold",
	},
	iconButton: {
		width: 50, // Giảm kích thước của IconButton
		height: 50, // Giảm kích thước của IconButton
		padding: 10, // Giảm padding
		borderRadius: 10, // Tùy chỉnh border radius
		marginBottom: 5, // Điều chỉnh khoảng cách giữa nút và text
	},
	primaryButton: {
		padding: 10, // Giảm padding của PrimaryButton
		width: 80, // Giảm độ rộng của PrimaryButton
	},
   statsView: {
      padding: 20,
      width: 400,
   },   
});

export default MainGameScreen;
