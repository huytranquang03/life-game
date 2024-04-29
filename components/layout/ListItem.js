import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import IconImage from '../ui/IconImage';

function ListItem({ data, onPress }) {
  // Function to dynamically determine the image path based on the NPC's type
  const getImagePath = (itemType) => {
    switch (itemType) {
      case "Parent": return require("../../icon/Plus.png");
      case "Friend": return require("../../icon/Plus.png");
      case "Superior": return require("../../icon/Couple.png");
      case "Classmate": return require("../../icon/Plus.png");
      case "Sibling": return require("../../icon/Plus.png");
      case "Teacher": return require("../../icon/Plus.png");
      case "Lover": return require("../../icon/Plus.png");
      case "Husband/Wife": return require("../../icon/Plus.png");
      default: return require("../../icon/Fire.png"); // Default icon if none match
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.itemContent}>
        <IconImage image={getImagePath(item.item)} />
        <Ionicons name={item.icon} size={24} color="black" />
        <Text style={styles.text}>{item.item}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 30,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ListItem;
