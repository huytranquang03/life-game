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
                            <Text style={styles.wage}>{item.wage} $</Text>
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
                            <Text style={styles.wage}>{item.wage} $</Text>
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
        backgroundColor: 'white', // Light grey background for the whole screen
        paddingTop: 20,
    },
    textjob: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#FFF379', // White background for items
        padding: 25,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensures space between job name and wage
        alignItems: 'center',
        shadowColor: '#000', // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3, // Elevation for Android
        borderColor: 'black',
        borderWidth: 1, // Subtle border for better definition
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Darker font for better readability
    },
    wage: {
        fontSize: 16,
    },
    pressed: {
        opacity: 0.85,
        backgroundColor: '#ddd', // Darken item on press for feedback
    },
    buttonContainer: {
        // You might want to define this style if used
    },
});



export { ParttimeJobListScreen, FulltimeJobListScreen };