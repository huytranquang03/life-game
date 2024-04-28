import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../store/UserContext';

const TimeBar = ({ duration, color, height }) => {
    const { time, setTime, plusAge } = useContext(UserContext);

    useEffect(() => {
        // This sets the timer to update every second.
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime < duration) {
                    return prevTime + 1;  // Increment time by one second until the duration is reached.
                } else {
                    clearInterval(interval);  // Stop the interval when the duration is reached.
                    return prevTime;  // Keep at duration until reset in the next effect block.
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [duration, setTime]);

    useEffect(() => {
        if (time >= duration) {
            plusAge();        // Run the plusAge function when duration is reached.
            setTime(0);       // Reset the time to 0 after reaching the duration.
        }
    }, [time, duration, setTime, plusAge]);  // Include all dependencies used in the effect.

    // Calculate the width of the progress bar as a percentage.
    const progressPercentage = time > duration ? 100 : (time / duration) * 100;

    return (
        <View style={styles.container}>
            <View style={[styles.progressContainer, { height }]}>
                <View style={[styles.progressBar, { backgroundColor: color, width: `${progressPercentage}%` }]} />
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
        backgroundColor: '#e0e0e0',  // Adding a background color for the progress container to visualize the unfilled area.
    },
    progressBar: {
        height: '100%',
    },
});

export default TimeBar;
