import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';

const classmates = [
    { id: '1', name: 'Minh', image: 'https://picsum.photos/100/100' },
    { id: '2', name: 'Huy', image: 'https://picsum.photos/100/100' },
    { id: '3', name: 'Hien', image: 'https://picsum.photos/100/100' },
    { id: '4', name: 'Nguyen', image: 'https://picsum.photos/100/100' },
    { id: '5', name: 'Dang', image: 'https://picsum.photos/100/100' },
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
        backgroundColor: 'white',  // Light grey background for the whole screen
        paddingTop: 20,
    },
    item: {
        backgroundColor: '#FFF379',  // White background for items
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth:3,
        borderColor:'black',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',  // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,  
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',  
        marginLeft: 20,  
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,  
    },
    pressed: {
        opacity: 0.85,
        backgroundColor: '#ddd',  
    },
});

export default ClassmateListScreen;
