import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SubjectItem from './components/layout/SubjectItem';
import ListItem from './components/layout/ListItem';
import StoreItem from './components/layout/StoreItem';
import NPCItem from './components/layout/NPCItem';
const data = [
  { id: 1, icon: 'person', item: 'NPC 1', progress: 50, color: 'blue', height: 10, borderRadius: 5 },
  { id: 2, icon: 'person', item: 'NPC 2', progress: 75, color: 'green', height: 10, borderRadius: 5 },
];
=======
import { View, Text, StyleShee } from 'react-native';
import ProgressBar from './components/ui/GameBar'; // Đường dẫn đến tệp ProgressBar
import IconButton from './components/ui/IconButton';

>>>>>>> 1c08b472100b534443d1a5ead0b18fb7fb16af4e
export default function App() {
  // Hàm xử lý sự kiện khi IconButton được nhấn
  const handlePress = () => {
    console.log('Icon button pressed!');
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <SubjectItem />
      <ListItem/>
      <StoreItem/>
      <NPCItem data={data} />
=======
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

>>>>>>> 1c08b472100b534443d1a5ead0b18fb7fb16af4e
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
