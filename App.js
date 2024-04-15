import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import ProgressBar from './components/ui/GameBar'; 
import IconButton from './components/ui/IconButton';
import NPCItem from './components/layout/NPCitem';

export default function App() {
 
  const handlePress = () => {
    console.log('Icon button pressed!');
  };

  return (
    <View style={styles.container}>

      <NPCItem data={[
        { id: 1, icon: 'ios-person', item: 'NPC 1', progress: 50, color: 'blue', height: 10, borderRadius: 5 },
        { id: 2, icon: 'ios-person', item: 'NPC 2', progress: 75, color: 'green', height: 10, borderRadius: 5 },
      ]}/>
    
      <ProgressBar
        progress={50} 
        color="blue" 
        height={10} 
        borderRadius={5} 
      />

      
      <IconButton
        icon="add" 
        size={24} 
        color="blue" 
        onPress={handlePress} 
      />

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
