import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GameBar from '../components/ui/GameBar'; // Assuming your GameBar component is in a separate file
import { UserContext } from '../store/UserContext'; 


const PlayerStatsScreen = () => {
    const {intelStats,stats, name, age } = useContext(UserContext);


    const avatarUrl = 'https://picsum.photos/200/200'; // Replace with your avatar URL

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };

    const averageIntelProgress = calculateAverageProgress(intelStats);

    intelStats[0].progress = averageIntelProgress; // Update Intelligence progress
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.avatarView}>
                    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.ageText}>Age: {age}</Text>
                </View>
            </View>
            <View style={styles.istatsView}>
                {intelStats.map((stat) => (
                    <View key={stat.name} style={styles.statBar}>
                        <Text style={styles.statLabel}>{stat.name}</Text>
                        <GameBar progress={stat.progress} color={stat.color} height={10} borderRadius={5} />
                        <Text styles={styles.description}>{stat.description}</Text>
                    </View>
                ))}
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
        // alignItems: 'center',
        padding: 20,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarView: {
        margin: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    infoView: {
        marginBottom: 10,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ageText: {
        fontSize: 16,
        color: '#888',
    },
    istatsView: {
        padding: 20,
    },
    statsView: {
        padding: 20,
    },
    statBar: {
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    description: {
        margin: 10,
    }
});

export default PlayerStatsScreen;