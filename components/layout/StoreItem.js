import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const data = [
  { id: 1, icon: 'ios-shirt', item: 'Áo thun', price: '$10' },
];

function renderItem({ item }) {
  return (
    <Pressable
      onPress={() => handlePress(item.id)}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.itemContent}>
        <Ionicons name={item.icon} size={24} color="black" />
        <Text style={styles.text}>{item.item}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
    </Pressable>
  );
}

function handlePress(id) {
  console.log('Pressed item with ID:', id);
  // Add navigation here
}

function StoreItem() {
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginLeft: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default StoreItem;
