import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={{ width: 100, height: 100 }} />
    </TouchableOpacity>
  );
};

export default ImageButton;
