import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenuScreen'
import ContinueGameScreen from './screens/ContinueGameScreen';
import MainGameScreen from './screens/MainGameScreen';
import SetupScreen from './screens/SetupScreen';
import PlayerStatsScreen from './screens/PlayerStatsScreen'
import SchoolJobScreen from './screens/SchoolJob/SchoolJobScreen'
import RelationshipScreen from './screens/RelationshipScreen'
import FinanceScreen from './screens/FinanceScreen'
import ActivitiesScreen from './screens/ActivitiesScreen'
import SubjectListScreen from './screens/SchoolJob/SubjectListScreen';
import ClassmateListScreen from './screens/SchoolJob/ClassmateListScreen';
import { ParttimeJobListScreen, FulltimeJobListScreen } from './screens/SchoolJob/JobListScreen';
import NPCDetailsScreen from './screens/NPCDetailsScreen';


import { UserProvider } from './store/UserContext';
import LoadingScreen from './screens/LoadingScreen';
const Stack = createStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name = "LoadingScreen" component={LoadingScreen}/>
                    <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
                    <Stack.Screen name="ContinueGameScreen" component={ContinueGameScreen} />
                    <Stack.Screen name="SetupScreen" component={SetupScreen} />
                    <Stack.Screen name="MainGameScreen" component={MainGameScreen} />
                    <Stack.Screen name="PlayerStatsScreen" component={PlayerStatsScreen} />
                    <Stack.Screen name="SchoolJobScreen" component={SchoolJobScreen} />
                    <Stack.Screen name="RelationshipScreen" component={RelationshipScreen} />
                    <Stack.Screen name="FinanceScreen" component={FinanceScreen} />
                    <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} />
                    <Stack.Screen name="SubjectListScreen" component={SubjectListScreen} />
                    <Stack.Screen name="ClassmateListScreen" component={ClassmateListScreen} />
                    <Stack.Screen name="ParttimeJobListScreen" component={ParttimeJobListScreen} />
                    <Stack.Screen name="FulltimeJobListScreen" component={FulltimeJobListScreen} />
                    <Stack.Screen name="NPCDetailsScreen" component={NPCDetailsScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;