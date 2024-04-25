import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../components/layout/ListItem';  // Import the ListItem component

const NPCDetailsScreen = ({ route, navigation }) => {
  const { actions } = route.params;

  // Prepare data in the format that ListItem expects
  const data = Object.keys(actions).filter(action => actions[action]).map(action => ({
    id: action,  // Using action names as unique ids
    item: action,  // Text to display
    icon: 'checkbox-outline',  // Assuming you use Ionicons and all actions use the same icon
  }));

  // Function to handle press on an action
  const handlePress = (item) => {
    console.log("Action pressed:", item.item);
    navigation.navigate("MainGameScreen")
    // Additional logic based on the action pressed
  };

  return (
    <View style={styles.container}>
      <ListItem data={data} onPress={handlePress} />
    </View>
  );
};

// Styles, simplified as ListItem will handle item styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NPCDetailsScreen;
