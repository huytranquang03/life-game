import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../store/UserContext'; 

const SetupScreen = ({ navigation }) => {
   
    const { name, setName, gender, setGender } = useContext(UserContext);

  
    const handleSave = () => {
        console.log('Data saved successfully');
       
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
            <TextInput
                style={styles.input}
                placeholder="Enter your gender"
                value={gender}
                onChangeText={setGender}
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
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SetupScreen;
