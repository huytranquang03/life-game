import React from 'react';
import { View, StyleSheet } from 'react-native';

const GameBar = ({ progress, color, height, borderRadius }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.progressContainer, { height, borderRadius }]}>
                <View style={[styles.progressBar, { backgroundColor: color, width: `${progress}%`, borderRadius }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    progressContainer: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    progressBar: {
        height: '100%',
    },
});

export default GameBar;
