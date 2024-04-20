import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress, text }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}
    >
      <View style={styles.innerContainer}>
        <Ionicons name={icon} size={size} color={color} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
  width: 300,
  height: 100,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    // marginLeft: 8, // Adjust spacing between icon and text as needed
  },
});
