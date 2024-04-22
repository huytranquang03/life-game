import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../store/UserContext';

const TimeBar = ({ duration, color, height, borderRadius }) => {
    const { time, setTime, age, setAge, updateStats } = useContext(UserContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevProgress => {
                const newProgress = prevProgress + (100 / duration); // Update progress every second
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time >= 100) {
            setTime(0); // Reset the time
            setAge(age + 1); // Increment age
            updateStats(); // Update stats
        }
    }, [time]);

    return (
        <View style={styles.container}>
            <View style={[styles.progressContainer, { height, borderRadius }]}>
                <View style={[styles.progressBar, { backgroundColor: color, width: `${time}%`, borderRadius }]} />
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
    },
    progressBar: {
        height: '100%',
    },
});

export default TimeBar;
