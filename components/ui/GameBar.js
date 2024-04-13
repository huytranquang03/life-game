import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, color, height, borderRadius }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressContainer, { backgroundColor: color, height, borderRadius }]}>
        <View style={[styles.progressBar, { width: `${progress}%`, borderRadius }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green', 
  },
});

export default ProgressBar;
