

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RandomEvent = ({ visible, message, onTreatPress, onNoPress }) => {
    if (!visible) {
        return null;
    }

    return (
        <View style={styles.popupContainer}>
            <View style={styles.popup}>
                <Text style={styles.popupText}>{message}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onTreatPress}>
                        <Text style={styles.buttonText}>Treat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onNoPress}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    popupContainer: {
        position: "absolute",
        zIndex: 999,
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
