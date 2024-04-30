import React, {useContext} from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import GameBar from '../components/ui/GameBar'; 
import { UserContext  } from '../store/UserContext'; 
import Avatar from '../components/ui/Avatar';


const PlayerStatsScreen = () => {
    const {intelStats,stats, name, age } = useContext(UserContext);

    const emojiMap = {
        Health: '❤️',
        Happiness: '😊',
        Appearance: '💅',
        Intelligence: '🧠',
        IQ: '🧬', 
        EQ: '💖', 
        Knowledge: '📚'
    };

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.avatarView}>
                    <Avatar
                        name={name}
                        onPress={() => navigation.navigate("PlayerStatsScreen")}
                    />
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
        borderRadius: 40, 
        borderWidth: 2,
        borderColor: 'black', 
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