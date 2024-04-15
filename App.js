import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './components/ui/GameBar'; // Đường dẫn đến tệp ProgressBar
import IconButton from './components/ui/IconButton';
import { StatusBar } from 'react-native';

export default function App() {
  // Hàm xử lý sự kiện khi IconButton được nhấn
  const handlePress = () => {
    console.log('Icon button pressed!');
  };

  return (
    <View style={styles.container}>
      {/* Thêm ProgressBar vào giao diện */}
      <ProgressBar
        progress={50} // Giá trị tiến trình (phần trăm)
        color="blue" // Màu sắc của tiến trình
        height={10} // Chiều cao của thanh tiến trình
        borderRadius={5} // Bo góc cho thanh tiến trình
      />

      {/* Thêm IconButton vào giao diện */}
      <IconButton
        icon="add" // Biểu tượng Ionicons bạn muốn sử dụng
        size={24} // Kích thước biểu tượng
        color="blue" // Màu sắc biểu tượng
        onPress={handlePress} // Hàm xử lý khi nút được nhấn
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
