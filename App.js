import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlayerStatsScreen from './screens/PlayerStatsScreen'; // Import your PlayerStatsScreen component
import GameBar from './components/ui/GameBar';
import IconButton from './components/ui/IconButton';

const App = () => {
    return (
        <View style={styles.container}>
            <PlayerStatsScreen/>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
