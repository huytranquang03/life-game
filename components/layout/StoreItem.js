import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function StoreItem({ data, onPress }) {
  function renderItem({ item }) {
    return (
      <Pressable
        onPress={() => onPress(item)}
        style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      >
        <View style={styles.itemContent}>
          <View style={styles.leftContainer}>
            <Ionicons name={item.icon} size={24} color="black" />
            <Text style={styles.storeText}>{item.item}</Text>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </Pressable>
    );
  }

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
    width: '100%',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusts items to opposite sides
    alignItems: 'center',
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeText: {
    marginLeft: 10,
    fontSize: 30,
  },
  price: {
    fontSize: 30,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default StoreItem;
