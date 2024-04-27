// LoadingScreen.js
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainMenuScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default LoadingScreen;
