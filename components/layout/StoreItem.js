import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

function StoreItem({ description, asset, imageUrl }) {
 return (
    <Pressable
      onPress={storePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.storeItem}>
        <View style={styles.itemContent}>
        </View>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
          <View style={styles.itemText}>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={[styles.textBase, styles.asset]}>
              {asset}
            </Text>
          
      </View>
    </Pressable>
  );
}

export default StoreItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  storeItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 3,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    flex: 5, 
  },
  textBase: {
    color: 'black',
  },
  description: {
    fontSize: 25,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  asset: {
    fontSize: 11,
  },
  image: {
    flex: 1, 
    aspectRatio: 1, 
    borderRadius: 6, 
  },
});
