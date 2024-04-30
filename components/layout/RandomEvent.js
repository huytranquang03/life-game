import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { UserContext } from '../../store/UserContext';
import { Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RandomEvent = () => {
    const navigation = useNavigation();
    const { currentEvent, handleUserChoice } = useContext(UserContext);
    if (!currentEvent)
        return (null);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={currentEvent.visible}
        >
            <View style={styles.overlay}>
                <View style={styles.popupContainer}>
                    <View style={styles.popup}>
                        <Text style={styles.popupText}>{currentEvent.description}</Text>
                        <View style={styles.buttonContainer}>
                            {currentEvent.treatable ? (
                                <>
                                    <TouchableOpacity
                                        style={[styles.button, styles.treatButton]}
                                        onPress={() => {
                                            handleUserChoice('treat');
                                        }}
                                    >
                                        <Text style={styles.buttonText}>Treat (${currentEvent.treatCost})</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.button, styles.doNothingButton]}
                                        onPress={() => {
                                            handleUserChoice(false);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>Do Nothing</Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <TouchableOpacity
                                    style={[styles.button, styles.doNothingButton]}
                                    onPress={() => {
                                        handleUserChoice(false);
                                        navigation.navigate('MainMenuScreen')
                                    }}
                                >
                                    <Text style={styles.buttonText}>Do Nothing</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
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
        width: '90%',
    },
    popupText: {
        fontSize: 18,
        marginBottom: 20,
        color: "#333",
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "46%", 
        alignItems: "center",
    },
    treatButton: {
        backgroundColor: "#28a745", 
    },
    doNothingButton: {
        backgroundColor: "#dc3545", 
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default RandomEvent;
