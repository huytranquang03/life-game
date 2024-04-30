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
        backgroundColor: '#f4f4f8', 
    },
    input: {
        width: '90%', 
        height: 50, 
        borderColor: '#ccc', 
        borderWidth: 1,
        marginBottom: 20, 
        borderRadius: 25, 
        paddingHorizontal: 15, 
        fontSize: 16, 
        backgroundColor: '#ffffff', 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        width: '50%', 
        borderRadius: 20, 
        padding: 10, 
        backgroundColor: '#007BFF', 
        color: '#ffffff', 
        fontSize: 18, 
        shadowColor: "#000", 
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
