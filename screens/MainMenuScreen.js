import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { UserContext } from '../store/UserContext';

const HomeScreen = ({ navigation }) => {
    const {gameOver, setTimerActive} = useContext(UserContext)
    const handleNewGamePress = () => {
        gameOver()
        setTimerActive(false)
        navigation.navigate('SetupScreen');
    };

    const handleContinuePress = () => {
        navigation.navigate('MainGameScreen');
        setTimerActive(true)
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
        alignItems: 'center',

    },
    button: {
        marginTop:100,
        marginHorizontal:10,
        margin: 30,
    },
});

export default HomeScreen;
