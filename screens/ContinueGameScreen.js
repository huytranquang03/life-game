import React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';

const ContinueGameScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container}>
              <Text> continue game screen  </Text>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
});

export default ContinueGameScreen;