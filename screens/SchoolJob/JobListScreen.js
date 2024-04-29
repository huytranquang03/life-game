import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { UserContext } from '../../store/UserContext';

const partTime = [
    { id: '1', name: 'Fuho', wage: '200' },
    { id: '2', name: 'Ban Diem', wage: '750' },
    { id: '3', name: 'Buon Lau', wage: '1250' },
];
const fullTime = [
    { id: '1', name: 'Fuho', wage: '400' },
    { id: '2', name: 'Ban Diem Fulltime', wage: '1500' },
    { id: '3', name: 'Buon Lau Fulltime', wage: '2500' },
    { id: '4', name: 'Van Phong Ho Tro Tai Chinh', wage: '3000' },
    { id: '5', name: 'Hai tac', wage: '6000000000000000' },
];

const ParttimeJobListScreen = () => {
    const { applyForParttimeJob } = useContext(UserContext); // Assuming a similar function exists for part-time jobs.

    return (
        <View style={styles.container}>
            <Text style={styles.textjob}>Part-time jobs:</Text>
            <FlatList
                data={partTime}
                renderItem={({ item }) => (
                    <Pressable onPress={() => { }}
                        style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.wage}>{item.wage} per Month</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const FulltimeJobListScreen = () => {
    const { applyForFulltimeJob } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.textjob}>Full-time jobs:</Text>
            <FlatList
                data={fullTime}
                renderItem={({ item }) => (
                    <Pressable onPress={() => applyForFulltimeJob(item)}
                        style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.wage}>{item.wage} per month</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    textjob: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 10,
        
    },
    item: {
        backgroundColor: '#FFF379',
        padding: 20,
        marginVertical: 15,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensures space between job name and wage
        alignItems: 'center',
        borderColor:'black',
        borderWidth:3,
    },
    name: {
        fontSize: 18,
        fontWeight:'bold',
    },
    wage: {
        fontSize: 16,
        color: '#555', // Different color for wage
    },
    pressed: {
        opacity: 0.75,
    },
    buttonContainer: {
        // You might want to define this style if used
    },
});


export { ParttimeJobListScreen, FulltimeJobListScreen };