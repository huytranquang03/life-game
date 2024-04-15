import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import ProgressBar from '../ui/GameBar'; 

const data = [
  { id: 1, icon: 'ios-person', item: 'NPC 1', progress: 50, color: 'blue', height: 10, borderRadius: 5 },
  { id: 2, icon: 'ios-person', item: 'NPC 2', progress: 75, color: 'green', height: 10, borderRadius: 5 },
];

function NPCItem({ data }) {
    // const navigation = useNavigation(); 
    // const PressHandler = (id) => { 
    //     navigation.navigate('NPCDetalScreen', {
    //       npcId: id
    //     });
    //   }
    const renderItem = ({ item }) => (
    <Pressable
        onPress={() => PressHandler(item.id)} 
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color="black" />
      </View>
      <View style={styles.itemContainer}>
        <Text>{item.item}</Text>
        <ProgressBar progress={item.progress} color={item.color} height={item.height} borderRadius={item.borderRadius} />
      </View>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  itemContainer: {
    flex: 1,
  },
});

export default NPCItem;