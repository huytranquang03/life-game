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
            <Button title="New Game" onPress={handleNewGamePress} />
            <Button title="Continue" onPress={handleContinuePress} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
});

export default HomeScreen;
