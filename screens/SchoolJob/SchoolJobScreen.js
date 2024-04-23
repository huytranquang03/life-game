import React, { useContext } from 'react';
import { View, Button, Image, StyleSheet, Text, Pressable } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../../store/UserContext';

const SchoolJobScreen = ({ navigation }) => {
    const { isGraduated, setGraduated } = useContext(UserContext);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.avatar}>
                        <Image
                            source={{ uri: "https://picsum.photos/100/100" }}
                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Current Grade:</Text>
                    </View>
                </View>
                {!isGraduated ? (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('SubjectListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Overall Grade</Text>
                            <GameBar progress={70} color={'green'} height={10} borderRadius={5} />
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ClassmateListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Classmate</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <View style={styles.skipClass}>
                            <IconButton icon={'happy'} size={50} color={'black'} text={'Skip class'} onPress={() => { }} />
                        </View>
                    </View>
                ) : (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('SubjectListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Performance</Text>
                            <GameBar progress={70} color={'green'} height={10} borderRadius={5} />
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ClassmateListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Colleague</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('FulltimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Full-time jobs</Text>
                        </Pressable>
                        <View style={styles.skipClass}>
                            <IconButton icon={'briefcase'} size={50} color={'black'} text={'Work Harder'} onPress={() => { }} />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
    topRow: {
        width: '80%',
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'beige',
        borderRadius: 20,
    },
    avatar: {
        margin: 30,
    },
    mainView: {
        width: '80%',
        backgroundColor: 'cornsilk',
        borderRadius: 20,
        margin: 30,
    },
    gradeBar: {
        margin: 20,
        fontSize: 14,
        fontWeight: '200',
        backgroundColor: 'coral',
        padding: 20,
        borderRadius: 20,
    },
    skipClass: {
        backgroundColor: 'red',
        borderRadius: 20,
        margin: 30,
    },
});

export default SchoolJobScreen;