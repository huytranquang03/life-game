import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo'; // Import SplashScreen from expo-splash-screen
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { UserProvider } from './store/UserContext';
import WelcomeScreen from './screens/WelcomeScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import ContinueGameScreen from './screens/ContinueGameScreen';
import SetupScreen from './screens/SetupScreen';
import MainGameScreen from './screens/MainGameScreen';
import PlayerStatsScreen from './screens/PlayerStatsScreen';
import SchoolJobScreen from './screens/SchoolJob/SchoolJobScreen';
import RelationshipScreen from './screens/RelationshipScreen';
import FinanceScreen from './screens/FinanceScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import SubjectListScreen from './screens/SchoolJob/SubjectListScreen';
import ClassmateListScreen from './screens/SchoolJob/ClassmateListScreen';
import { ParttimeJobListScreen, FulltimeJobListScreen } from './screens/SchoolJob/JobListScreen';
import NPCDetailsScreen from './screens/NPCDetailsScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

import DepartmentChoose from './components/layout/DepartmentChoose';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />

    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <UserProvider>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
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
      <DepartmentChoose />
    </UserProvider>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
      } catch (error) {

        // console.error("Error fetching token:", error);

      } finally {
        setIsTryingLogin(false);
        // SplashScreen.hideAsync(); // Ẩn splash screen khi đã tải xong
      }
    }

    fetchToken();
  }, []);


  if (isTryingLogin) {
    return null; // Return null instead of AppLoading
  }

  return <Navigation />;
}

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
