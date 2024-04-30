import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../store/UserContext';

const TimeBar = ({ duration, color, height }) => {
    const { time, setTime, plusAge, timerActive } = useContext(UserContext); // Get timerActive from context

    useEffect(() => {
        // Check if the timer is active before starting it
        if (timerActive) {
            const interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < duration) {
                        return prevTime + 1;
                    } else {
                        clearInterval(interval);
                        return prevTime;
                    }
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [duration, setTime, timerActive]);

    useEffect(() => {
        if (time >= duration) {
            plusAge();
        }
    }, [time, duration, setTime, plusAge]);

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
        backgroundColor: '#e0e0e0',
    },
    progressBar: {
        height: '100%',
    },
});

export default TimeBar;
