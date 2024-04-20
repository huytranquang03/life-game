import React from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';

const RelationshipScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container}>
              <Text> This is Realtionship Screen  </Text>       
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

export default RelationshipScreen;