import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
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
    return (
        <View style={styles.container}>
            <View>
                <Text>Part-time jobs:</Text>
                <FlatList
                    data={partTime}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => { }}
                            style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.wage}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const FulltimeJobListScreen = ({ navigation }) => {
    const { applyForFulltimeJob } = useContext(UserContext);
    return (
        <View style={styles.container}>
            <View>
                <Text>Full-time jobs:</Text>
                <FlatList
                    data={fullTime}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => {
                            applyForFulltimeJob();
                            navigation.navigate('SchoolJobScreen');
                        }}
                            style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.wage}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    item: {
        backgroundColor: 'beige',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row', // Arrange image and name horizontally
        alignItems: 'center', // Align image and name vertically
    },
    name: {
        fontSize: 16,
        marginLeft: 10, // Add some space between image and name
    },
    pressed: {
        opacity: 0.75,
    },
});

export { ParttimeJobListScreen, FulltimeJobListScreen };