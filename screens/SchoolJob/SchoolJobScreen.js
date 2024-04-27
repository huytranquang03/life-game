import React, { useContext } from 'react';
import { View, Button, Image, StyleSheet, Text, Pressable } from 'react-native';
import GameBar from '../../components/ui/GameBar';
import IconButton from '../../components/ui/IconButton';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../../store/UserContext';

const SchoolJobScreen = ({ navigation }) => {
    const { grade, statuses, currentStatus, performance, skipClass, studyHarder, workHarder } = useContext(UserContext);
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
                    <View style={{margin: 20}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10}}>Curren Status: {currentStatus}</Text>
                    </View>
                </View>
                {currentStatus === 'student' && (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('SubjectListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Overall Grade</Text>
                            <GameBar progress={grade} color={'green'} height={10} borderRadius={5} />
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ClassmateListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Classmate</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'happy'} size={50} color={'black'} text={'Skip class'} onPress={skipClass} />
                        </View>
                    </View>
                )}
                {currentStatus === 'uniStudent' && (
                    <View style={styles.mainView}>
                        <View style={styles.gradeBar}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Overall Grade</Text>
                            <GameBar progress={grade} color={'green'} height={10} borderRadius={5} />
                        </View>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ClassmateListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Classmate</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'happy'} size={50} color={'black'} text={'Skip class'} onPress={skipClass} />
                        </View>
                        <View style={styles.functionButton}>
                            <IconButton icon={'sad'} size={50} color={'black'} text={'Study Harder'} onPress={studyHarder} />
                        </View>
                    </View>
                )}
                {currentStatus === 'unemployed' && (
                    <View style={styles.mainView}>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('FulltimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Full-time jobs</Text>
                        </Pressable>
                    </View>
                )}
                {currentStatus === 'employed' && (
                    <View style={styles.mainView}>
                        <View style={styles.gradeBar}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Performance</Text>
                            <GameBar progress={performance} color={'green'} height={10} borderRadius={5} />
                        </View>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ClassmateListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Colleague</Text>
                        </Pressable>
                        <Pressable style={styles.gradeBar} onPress={() => { navigation.navigate('ParttimeJobListScreen') }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Part-time jobs</Text>
                        </Pressable>
                        <View style={styles.functionButton}>
                            <IconButton icon={'briefcase'} size={50} color={'black'} text={'Work Harder'} onPress={workHarder} />
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
        justifyContent: 'space-around',
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
    functionButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        margin: 30,
    },
});

export default SchoolJobScreen;