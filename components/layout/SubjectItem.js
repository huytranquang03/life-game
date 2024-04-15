import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const data = [
  { id: 1, icon: 'leaf', subject: 'Toán' },
  { id: 2, icon: 'ios-flask', subject: 'Hóa học' },
  { id: 3, icon: 'ios-leaf', subject: 'Sinh học' },
  // Add more subjects as needed
];

function SubjectItem() {
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
    width:700,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'left',
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginLeft: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});

<<<<<<< HEAD
export default SubjectItem;
=======
export default SubjectList;
>>>>>>> 1c08b472100b534443d1a5ead0b18fb7fb16af4e
