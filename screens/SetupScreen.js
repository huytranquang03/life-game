import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../store/UserContext';

const SetupScreen = ({ navigation }) => {

    const { name, setName, setTimerActive } = useContext(UserContext);


    const handleSave = () => {
        console.log('Data saved successfully');
        setTimerActive(true)
        navigation.navigate('MainGameScreen');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f8', // A light grey background for the whole screen
    },
    input: {
        width: '90%', // Slightly wider input
        height: 50, // Taller input for easier interaction
        borderColor: '#ccc', // Softer border color
        borderWidth: 1,
        marginBottom: 20, // More space between the input and the button
        borderRadius: 25, // Rounded corners
        paddingHorizontal: 15, // More horizontal padding for text inside input
        fontSize: 16, // Larger font size
        backgroundColor: '#ffffff', // White background for the input
        shadowColor: "#000", // Shadow to lift the element off the screen
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        width: '50%', // Button width
        borderRadius: 20, // Rounded corners for button
        padding: 10, // Padding inside the button
        backgroundColor: '#007BFF', // A pleasant blue for the button
        color: '#ffffff', // White text color
        fontSize: 18, // Larger font size for the button text
        shadowColor: "#000", // Similar shadow properties as input
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default SetupScreen;
