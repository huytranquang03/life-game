import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenuScreen'
import ContinueGameScreen from './screens/ContinueGameScreen';
import MainGameScreen from './screens/MainGameScreen';
import SetupScreen from './screens/SetupScreen';
import PlayerStatsScreen from './screens/PlayerStatsScreen'
import SchoolJobScreen from './screens/SchoolJobScreen'
import RelationshipScreen from './screens/RelationshipScreen'
import FinanceScreen from './screens/FinanceScreen'
import ActivitiesScreen from './screens/ActivitiesScreen'

import { UserProvider } from './store/UserContext';
const Stack = createStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">

                    <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
                    <Stack.Screen name="ContinueGameScreen" component={ContinueGameScreen} />
                    <Stack.Screen name="SetupScreen" component={SetupScreen} />
                    <Stack.Screen name="MainGameScreen" component={MainGameScreen} />
                    <Stack.Screen name="PlayerStatsScreen" component={PlayerStatsScreen} />
                    <Stack.Screen name="SchoolJobScreen" component={SchoolJobScreen} />
                    <Stack.Screen name="RelationshipScreen" component={RelationshipScreen} />
                    <Stack.Screen name="FinanceScreen" component={FinanceScreen} />
                    <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} />


                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;