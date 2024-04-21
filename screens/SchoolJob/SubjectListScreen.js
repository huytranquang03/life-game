import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';

const subjects = [
    { id: '1', name: 'Math', grade: '50' },
    { id: '2', name: 'Literature', grade: '50' },
    { id: '3', name: 'Science', grade: '50' },
    { id: '4', name: 'History', grade: '50' },
    { id: '5', name: 'Geography', grade: '50' },
    { id: '6', name: 'Art', grade: '50' },
    { id: '7', name: 'IT', grade: '50' },
    { id: '8', name: 'PE', grade: '50' },
    { id: '9', name: 'Foreign Language', grade: '50' },
];

const SubjectListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={subjects}
                renderItem={({ item }) => (
                    <View style={styles.item} key={item.id}>
                        <View styles={{ with: 100 }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <GameBar progress={item.grade} color={'green'} height={10} borderRadius={5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <IconButton icon={'book'} size={30} text={'Study'} onPress={()=>{}}/>
                            </View>
                            <View style={styles.button}>
                                <IconButton icon={'person'} size={30} text={'Teacher'} onPress={()=>{}}/>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 20 }} // Add some padding at the bottom
                showsVerticalScrollIndicator={false} // Hide the scroll indicator
            />
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
    },
    title: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: 'auto',
        backgroundColor: 'aliceblue',
        borderRadius: 50,
        marginTop: 10,
        marginHorizontal: 20,
    },
});


export default SubjectListScreen;
