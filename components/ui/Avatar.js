import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

const Avatar = ({ source, name, onPress }) => (
  <Pressable style={styles.container} onPress={onPress}>
    <View style={styles.profileImageContainer}>
        <Image source={require('../../assets/images/avatar.jpg')} style={styles.profileImage} />
        <Text>{name}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
});

export default Avatar;
