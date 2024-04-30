import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import GameBar from '../ui/GameBar'; 
import { useNavigation } from '@react-navigation/native'; 
import IconImage from '../ui/IconImage';
function NPCitem({ data }) {
    const navigation = useNavigation(); 
    const pressHandler = (id, actions) => { 
        navigation.navigate('NPCDetailsScreen', {
            npcId: id,
            actions: actions,
        });
    };
    const getImagePath = (itemType) => {
        switch (itemType) {
            case "Parent": return require("../../icon/Family.png");
            case "Friend": return require("../../icon/hand.png");
            case "Classmate": return require("../../icon/classmate.png");
            case "Lover": return require("../../icon/lover.png");
            case "Husband/Wife": return require("../../icon/Couple.png");
           
          
            default: return require("../../icon/Fire.png"); // Default icon if none match
        }
    };

    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => pressHandler(item.id, item.actions)} 
            style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        >
            <View style={styles.iconContainer}>
            <IconImage image={getImagePath(item.name)} />
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.barContainer}>
                    <Text style={styles.statusText}>Relationship</Text>
                    <View style={styles.barWrapper}>
                        <GameBar progress={item.progress} color={"#5E17EB"} height={item.height} borderRadius={item.borderRadius} />
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
        padding: 2,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 2,
        marginTop: 5,
        backgroundColor:'#FFFBE2',
    },
    iconContainer: {
        marginRight: 10,
    },
    itemContainer: {
        flex: 1,
    },
    itemName: {
        fontWeight: 'bold',
        marginTop:15,
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
