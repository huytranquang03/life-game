import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
// import View from "../components/ui/View"; // Import View
import PrimaryButton from "../components/ui/PrimaryButton"; // Import PrimaryButton
import IconButton from "../components/ui/IconButton"; // Import IconButton
import GameBar from "../components/ui/GameBar"; // Import GameBar


const MainGameScreen = ({ navigation }) => {


 
	const stats = [
		{ name: "Health", progress: 50, color: "red" },
		{ name: "Happiness", progress: 70, color: "pink" },
		{ name: "Intelligence", progress: 70, color: "purple" },
		{ name: "Appearance", progress: 70, color: "blue" },
	];
	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
            <Pressable style={{padding: 20}} onPress={() => {navigation.navigate('PlayerStatsScreen')}}>
					<Image
						source={{ uri: "https://picsum.photos/100/100" }}
						style={{ width: 80, height: 80, borderRadius: 50 }}
					/>
				</Pressable>
				<Pressable style={{padding: 1}} onPress={() => {navigation.navigate('PlayerStatsScreen')}}>
					<Text style={{fontSize: 24}}>Player</Text>
				</Pressable>
			</View>
         <View style={styles.box}></View>
			<View style={styles.buttonRow}>
				<View style={styles.View}>
					<PrimaryButton onPress={() => {navigation.navigate('SchoolJobScreen')}} style={styles.primaryButton}>
						<IconButton
							icon="school"
							size={16}
							color="white"
							onPress={() => {navigation.navigate('SchoolJobScreen')}}
							style={styles.iconButton}
						/>
					</PrimaryButton>
					<Text style={styles.ViewText}>School</Text>
				</View>
				<View style={styles.View}>
					<PrimaryButton onPress={() => {navigation.navigate('FinanceScreen')}} style={styles.primaryButton}>
						<IconButton
							icon="add-outline"
							size={16}
							color="white"
							onPress={() => {navigation.navigate('FinanceScreen')}}
							style={styles.iconButton}
						/>
					</PrimaryButton>
					<Text style={styles.ViewText}>Finance</Text>
				</View>
				<View style={styles.View}>
					<PrimaryButton onPress={() => {}} style={styles.primaryButton}>
						<IconButton
							icon="calendar"
							size={16}
							color="white"
							onPress={() => {}}
							style={styles.iconButton}
						/>
					</PrimaryButton>
					<Text style={styles.ViewText}>Age</Text>
				</View>
				<View style={styles.View}>
					<PrimaryButton onPress={() => {navigation.navigate('RelationshipScreen')}} style={styles.primaryButton}>
						<IconButton
							icon="heart"
							size={16}
							color="white"
							onPress={() => {navigation.navigate('RelationshipScreen')}}
							style={styles.iconButton}
						/>
					</PrimaryButton>
					<Text style={styles.ViewText}>Relationship</Text>
				</View>
				<View style={styles.View} >
					<PrimaryButton onPress={() => {navigation.navigate('ActivitiesScreen')}} style={styles.primaryButton}>
						<IconButton
							icon="fitness"
							size={16}
							color="white"
							onPress={() => {navigation.navigate('ActivitiesScreen')}}
							style={styles.iconButton}
						/>
					</PrimaryButton>
					<Text style={styles.ViewText}>Activity</Text>
				</View>
			</View>
			<View style={styles.statsView} >
				{stats.map((stat) => (
					<Pressable key={stat.name} style={styles.statBar} onPress={() => {navigation.navigate('PlayerStatsScreen')}}>
						<Text style={styles.statLabel} >{stat.name}</Text>
						<GameBar
							progress={stat.progress}
							color={stat.color}
							height={10}
							borderRadius={5}
							
						/>
						<Text styles={styles.description}>{stat.description}</Text>
					</Pressable>
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
	topRow: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginTop: 50,
	},
   box: {
      width: '100%',
      height: 300,
      backgroundColor: "black",
      marginTop: 20,
      
   },
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	View: {
		width: 81, // Điều chỉnh độ rộng của View
		height: 90, // Điều chỉnh độ cao của View
		margin: 10,
		borderRadius: 20,
		padding: 10,
		// backgroundColor: "white",
		alignItems: "center",
		// borderColor: 'black',
		// borderWidth: 1,
	},
	ViewText: {
		fontSize: 10, // Giảm kích thước font chữ
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
