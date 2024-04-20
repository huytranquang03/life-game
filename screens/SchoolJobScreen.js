import React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';

const SchoolJobScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container}>
              <Text> This is School/Job Screen  </Text>       
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

export default SchoolJobScreen;