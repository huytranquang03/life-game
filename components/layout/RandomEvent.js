import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { UserContext } from '../../store/UserContext';
import { useNavigation } from '@react-navigation/native';
const RandomEvent = () => {
    const { currentEvent, handleUserChoice } = useContext(UserContext);
    const navigation = useNavigation();

    if (!currentEvent || !currentEvent.visible) {
        return null;
    }
    return (
        <View style={styles.overlay}>
            <View style={styles.popupContainer}>
                <View style={styles.popup}>
                    <Text style={styles.popupText}>{currentEvent.description}</Text>
                    <View style={styles.buttonContainer}>
                        {currentEvent.treatable && (
                            <TouchableOpacity style={styles.button} onPress={() => handleUserChoice(true)}>
                                <Text style={styles.buttonText}>Treat (${currentEvent.treatCost})</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={styles.button} onPress={() => {
                            handleUserChoice(false);
                            if (!currentEvent.treatable)
                                navigation.navigate('SetupScreen')
                        }}>
                            <Text style={styles.buttonText}>Do Nothing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        width: '80%', // Adjust width as necessary
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    popupText: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        width: "45%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default RandomEvent;
