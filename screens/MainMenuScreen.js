import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { UserContext } from '../store/UserContext';

const HomeScreen = ({ navigation }) => {
    const {time, gameOver, setTimerActive} = useContext(UserContext)
    const handleNewGamePress = () => {
        gameOver()
        setTimerActive(false)
        navigation.navigate('SetupScreen');
    };

    const handleContinuePress = () => {
    if (time > 0){
        navigation.navigate('MainGameScreen');
        setTimerActive(true)
    }
    else
    alert('No current game process')
    };

    return (
        <View style={styles.container}>
            <Button title="New Game" onPress={handleNewGamePress} style={styles.button} />
            <View style={styles.buttonContainer}>
                <Button title="Continue" onPress={handleContinuePress} style={styles.button} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 300,
    },
    buttonContainer: {
        marginTop: 50,
    },
    button: {
        fontSize: 40,
    },
});

export default HomeScreen;
