import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const ConfirmAlert = ({ visible, message, onCancel, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>{message}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={onCancel} style={{ padding: 10, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 }}>
              <Text style={{ color: 'white' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmAlert;