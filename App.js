import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './components/ui/GameBar'; // Đường dẫn đến tệp ProgressBar
import IconButton from './components/ui/IconButton';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                  
                    <Stack.Screen name = "MainMenuScreen" component={MainMenuScreen}/>
                    <Stack.Screen name="ContinueGameScreen" component={ContinueGameScreen} />
                    <Stack.Screen name="SetupScreen" component={SetupScreen} />
                    <Stack.Screen name="MainGameScreen" component={MainGameScreen} />
                   
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
