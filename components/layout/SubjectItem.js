import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const data = [
  { id: 1, icon: 'ios-book', subject: 'Toán' },
  { id: 2, icon: 'ios-flask', subject: 'Hóa học' },
  { id: 3, icon: 'ios-leaf', subject: 'Sinh học' },
  // Add more subjects as needed
];

function SubjectList() {
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => handlePress(item.id)}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.itemContent}>
        <Ionicons name={item.icon} size={24} color="black" />
        <Text style={styles.text}>{item.subject}</Text>
      </View>
    </Pressable>
  );

  const handlePress = (id) => {
    console.log('Pressed subject with ID:', id);
  };

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
    marginLeft: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default SubjectList;