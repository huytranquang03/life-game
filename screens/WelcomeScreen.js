import React, { useState, useEffect ,useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Thêm import này
import { AuthContext } from '../store/auth-context';

function SetupScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState(null); 
  const navigation = useNavigation(); 
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        'https://react-native-course-ad6f8-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=' +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style = {styles.text}>You authenticated successfully!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainMenuScreen')}
      >
        <Text style={styles.buttonText}>Main menu</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SetupScreen;

const styles = StyleSheet.create({
  text: {
    fontSize:23,

  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#004AAD',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
