import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GameBar from '../ui/GameBar'; 
import { useNavigation } from '@react-navigation/native'; 

function NPCitem({ data }) {
    const navigation = useNavigation(); 
    const pressHandler = (id, actions) => { 
        navigation.navigate('NPCDetailsScreen', {
            npcId: id,
            actions: actions,
        });
    };

    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => pressHandler(item.id, item.actions)} 
            style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        >
            <View style={styles.iconContainer}>
                <Ionicons name={item.icon} size={28} color="black" marginLeft={1} />
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.barContainer}>
                    <Text style={styles.statusText}>Relationship</Text>
                    <View style={styles.barWrapper}>
                        <GameBar progress={item.progress} color={item.color} height={item.height} borderRadius={item.borderRadius} />
                    </View>
                </View>
            </View>
        </Pressable>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 5,
        padding: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    itemContainer: {
        flex: 1,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    barWrapper: {
        flex: 0.9, // Adjust this value to control the length of the GameBar
    },
    statusText: {
      marginRight: 10,
    },
});

export default NPCitem;
