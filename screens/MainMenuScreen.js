import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleMainGamePress = () => {
       
        navigation.navigate('SetupScreen');
    };

    const handleContinuePress = () => {
        navigation.navigate('ContinueGameScreen');
    };

    return (
        <View style={styles.container}>
            <Button title="New Game" onPress={handleMainGamePress} />
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
