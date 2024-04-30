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
        fontSize: 40, // Kích thước văn bản của nút
    },
});

export default HomeScreen;
