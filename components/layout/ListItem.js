import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import IconImage from '../ui/IconImage';

function ListItem({ data, onPress }) {
  const getImagePath = (itemType) => {
    switch (itemType) {
      case "Play sports": return require("../../icon/playsport.png");
      case "Read a book": return require("../../icon/readbook.png");
      case "Play video games": return require("../../icon/game.png");
      case "Go to a spa": return require("../../icon/spa.png");
      case "Join a club": return require("../../icon/club.png");
      case "Conversation": return require("../../icon/conversation.png");
      case "Insult": return require("../../icon/insult.png");
      case "Ask For Money": return require("../../icon/askformoney.png");
      case "Spend time": return require("../../icon/People Hugging.png");
      case "Compliment": return require("../../icon/compliment.png");

      default: return require("../../icon/Plus.png"); // Default icon if none match
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.itemContent}>
        <IconImage image={getImagePath(item.item)} />
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
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 2,
    marginTop: 5,
    backgroundColor:'#FFFBE2',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 2,
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  pressed: {
    backgroundColor: '#f0f0f0',
    opacity: 0.5,
  },
});



export default ListItem;
