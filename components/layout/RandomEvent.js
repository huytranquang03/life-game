import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../../store/UserContext';

const RandomEvent = () => {
    const { currentEvent, handleUserChoice } = useContext(UserContext);

    if (!currentEvent || !currentEvent.visible) {
        return null;
    } else {
        return (
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    <Text style={styles.popupText}>{currentEvent.description}</Text>
                    <View style={styles.buttonContainer}>
                        {currentEvent.treatable && (
                            <TouchableOpacity 
                                style={[styles.button, styles.treatButton]} 
                                onPress={() => handleUserChoice('treat')}>
                                <Text style={styles.buttonText}>Treat (${currentEvent.treatCost})</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity 
                            style={[styles.button, styles.doNothingButton]} 
                            onPress={() => handleUserChoice('do nothing')}>
                            <Text style={styles.buttonText}>Do Nothing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 999,
    },
    popup: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        width: '90%', // Making the popup responsive to screen size
    },
    popupText: {
        fontSize: 18,
        marginBottom: 20,
        color: "#333",
        textAlign: 'center', // Center align text for better readability
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around", // Better spacing around buttons
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "45%", // Ensures both buttons are of equal width
        alignItems: "center",
    },
    treatButton: {
        backgroundColor: "#28a745", // Green button for positive action
    },
    doNothingButton: {
        backgroundColor: "#dc3545", // Red button for negative or neutral action
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default RandomEvent;
