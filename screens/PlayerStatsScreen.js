import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GameBar from '../components/ui/GameBar'; // Assuming your GameBar component is in a separate file
import { UserContext  } from '../store/UserContext'; 


const PlayerStatsScreen = () => {
    const {intelStats,stats, name, age } = useContext(UserContext);

    const avatarUrl = 'https://picsum.photos/200/200'; // Replace with your avatar URL
    const emojiMap = {
        Health: '❤️',
        Happiness: '😊',
        Appearance: '💅',
        Intelligence: '🧠',
        IQ: '🧬', // Replace with appropriate emoji
        EQ: '💖', // Replace with appropriate emoji
        Knowledge: '📚'
    };

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
                        <View style={styles.labelEmojiContainer}>
                            <Text style={styles.statLabel}>{stat.name}</Text>
                            <Text style={styles.emoji}>{emojiMap[stat.name]}</Text>
                        </View>

                        <GameBar progress={stat.progress} color={stat.color} height={20} borderRadius={10} />
                      
                    </View>
                ))}
            </View>
            <View style={styles.statsView}>
                {stats.map((stat) => (
                    <View key={stat.name} style={styles.statBar}>
                        <View style={styles.labelEmojiContainer}>
                            <Text style={styles.statLabel}>{stat.name}</Text>
                            <Text style={styles.emoji}>{emojiMap[stat.name]}</Text>
                        </View>
                        <GameBar progress={stat.progress} color={stat.color} height={20} borderRadius={10} />
                        
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
        backgroundColor: '#FFFBE2',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarView: {
        margin: 20,
      
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderRadius: 40, // Half of width and height to make it round
        borderWidth: 2,
        borderColor: 'green', // There is a green border in the screenshot
    },
    infoView: {
        marginBottom: 10,
    },
    nameText: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    ageText: {
        fontSize: 16,
    },
    istatsView: {
        padding: 20,
        backgroundColor:'#FFF379',
        borderRadius:10,
        marginTop:10,

    },
    statsView: {
        padding: 20,
        backgroundColor:'#FFF379',
        borderRadius:10,
        marginTop:40,

    },
    statBar: {
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    emoji: {
        fontSize: 23,
        marginHorizontal: 10,
        marginBottom: 3,
    },
    labelEmojiContainer: {
       flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        margin: 10,
    }
});

export default PlayerStatsScreen;