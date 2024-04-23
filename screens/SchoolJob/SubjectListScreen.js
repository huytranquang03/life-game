import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { UserContext } from '../../store/UserContext';



const SubjectListScreen = () => {
    const { IQ, EQ, setIQ ,setEQ,subjects, time, setTime} = useContext(UserContext);

    const studyMath =() => {
        setIQ(IQ + 5);
        setEQ(EQ - 2);
        setTime(time - 30);
        
      }

    return (
        <View style={styles.container}>
            <FlatList
                data={subjects}
                renderItem={({ item }) => (
                    <View style={styles.item} key={item.id}>
                        <View style={{ width: 100 }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <GameBar progress={item.grade} color={'green'} height={10} borderRadius={5} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                            <IconButton icon={'book'} size={30} text={'Study'} onPress={studyMath} />

                            </View>
                            <View style={styles.button}>
                                <IconButton icon={'person'} size={30} text={'Teacher'} onPress={() => {}} />
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
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
