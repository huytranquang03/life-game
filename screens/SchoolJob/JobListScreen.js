import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
import { UserContext } from '../../store/UserContext';


const ParttimeJobListScreen = ({navigation}) => {
    const { parttime, applyForParttimeJob } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View>
                <Text>Part-time jobs:</Text>
                <FlatList
                    data={parttime}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => {
                            applyForParttimeJob(item);
                            navigation.navigate('SchoolJobScreen');
                        }}
                            style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.wage}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const FulltimeJobListScreen = ({ navigation }) => {
    const { fulltime, applyForFulltimeJob } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View>
                <Text>Full-time jobs:</Text>
                <FlatList
                    data={fulltime}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => {
                            applyForFulltimeJob(item);
                            navigation.navigate('SchoolJobScreen');
                        }}
                            style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.wage}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    item: {
        backgroundColor: 'beige',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row', // Arrange image and name horizontally
        alignItems: 'center', // Align image and name vertically
    },
    name: {
        fontSize: 16,
        marginLeft: 10, // Add some space between image and name
    },
    pressed: {
        opacity: 0.75,
    },
});

export { ParttimeJobListScreen, FulltimeJobListScreen };