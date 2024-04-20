import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';

const classmates = [
    { id: '1', name: 'Minh', image: 'https://picsum.photos/100/100' },
    { id: '2', name: 'Huy', image: 'https://picsum.photos/100/100' },
    { id: '3', name: 'Hien', image: 'https://picsum.photos/100/100' },
    { id: '4', name: 'Nguyen', image: 'https://picsum.photos/100/100' },
    { id: '5', name: 'Dang', image: 'https://picsum.photos/100/100' },

    // ... add more classmates here
];

const ClassmateListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={classmates}
                renderItem={({ item }) => (
                    <Pressable onPress={() => { }}
                        style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
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
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    pressed: {
        opacity: 0.75,
    },
});

export default ClassmateListScreen;