import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { UserContext } from '../../store/UserContext';



const SubjectListScreen = () => {
    const { studyMath, studyLiterature, studyForeignLanguage, grade } = useContext(UserContext);

    const subjects = [
        { id: '1', name: 'Math' },
        { id: '2', name: 'Literature' },
        { id: '3', name: 'Foreign Language' },
    ];

    const study = (subject) => {
        if (subject.name === 'Math') {
            studyMath();
        } else if (subject.name === 'Literature') {
            studyLiterature();
        } else if (subject.name === 'Foreign Language') {
            studyForeignLanguage();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.gradeBar} onPress={() => { navigation.navigate('SubjectListScreen') }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Overall Grade</Text>
                <GameBar progress={grade} color={'green'} height={10} borderRadius={5} />
            </View>
            <FlatList
                data={subjects}
                renderItem={({ item }) => (
                    <View style={styles.item} key={item.id}>
                        <View style={styles.subjectItem}>
                            <Text style={styles.title}>{item.name}</Text>

                            <View style={styles.button}>
                                <IconButton icon={'book'} size={30} text={'Study'} onPress={() => study(item)} />
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
    gradeBar: {
        margin: 20,
        fontSize: 14,
        fontWeight: '200',
        backgroundColor: 'coral',
        padding: 20,
        borderRadius: 20,
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
        fontWeight: '500',
        width: 200,
        textAlign: 'left',
        alignSelf: 'center',
        margin: 10,
    },
    subjectItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 'auto',
        backgroundColor: 'aliceblue',
        borderRadius: 50,
        marginHorizontal: 5,
    },
});

export default SubjectListScreen;
