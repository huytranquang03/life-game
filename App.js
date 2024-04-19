import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SubjectItem from './components/layout/SubjectItem';
import ListItem from './components/layout/ListItem';
import StoreItem from './components/layout/StoreItem';
import NPCItem from './components/layout/NPCItem';
const data = [
  { id: 1, icon: 'person', item: 'NPC 1', progress: 50, color: 'blue', height: 10, borderRadius: 5 },
  { id: 2, icon: 'person', item: 'NPC 2', progress: 75, color: 'green', height: 10, borderRadius: 5 },
];
export default function App() {
  // Hàm xử lý sự kiện khi IconButton được nhấn
  const handlePress = () => {
    console.log('Icon button pressed!');
  };

  return (
    <View style={styles.container}>
      <SubjectItem />
      <ListItem/>
      <StoreItem/>
      <NPCItem data={data} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
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
>>>>>>> huytranquang
