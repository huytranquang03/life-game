import React, { createContext, useState } from 'react';
// this is a test comment to push
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Player');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);
    const [time, setTime] = useState(0);

    const statuses = ['infant', 'student', 'uniStudent', 'unemployed', 'employed'];
    const [currentStatus, setCurrentStatus] = useState(statuses[0]);

    const [grade, setGrade] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [diploma, setDiploma] = useState('None');

    // study harder
    const studyHarder = () => {
        const intelChanges = {
            IQ: 5,
            EQ: -1,
            Knowledge: 5,
        };
        const statsChanges = {
            Health: -10,
            Happiness: -2,
            Communication: -5,
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setTime(time + 90);
        setGrade(grade + 10)
    };
    //skip class
    const skipClass = () => {
        const intelChanges = {
            IQ: -2,
            EQ: 5,
            Knowledge: -5,
        };
        const statsChanges = {
            Health: -10,
            Happiness: 5,
            Communication: 5,
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setTime(time + 90);
        setGrade(grade + 10)
    };

    // word harder
    const workHarder = () => {
        const statsChanges = {
            Health: -10,
            Happiness: -10,
        };
        updateStats(statsChanges);
        setTime(time + 90);
        setPerformance(performance + 10)
    }

    // Study Subjects
    const studyMath = () => {
        const intelChanges = {
            IQ: 10,
            EQ: -1,
        };
        const statsChanges = {
            Happiness: -2
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges)
        setGrade(grade + 2);
        setTime(time + 30);
    };

    const studyLiterature = () => {
        const intelChanges = {
            IQ: -2,
            EQ: 2,
        };
        const statsChanges = {
            Happiness: -2
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setGrade(grade + 2);
        setTime(time + 30);
    };

    const studyForeignLanguage = () => {
        const intelChanges = {
            IQ: 2,
            EQ: -1,
        };
        const statsChanges = {
            Happiness: -2,
            Communication: 3,
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setGrade(grade + 2);
        setTime(time + 30);
    };

    // Define initial values for intelStats and stats as arrays

    const [intelStats, setIntelStats] = useState([
        { name: 'Intelligence', progress: 0, color: 'yellow' },
        { name: 'IQ', progress: 50, color: 'red', description: "Your problem solving ability\nNeeded for certain profession" },
        { name: 'EQ', progress: 50, color: 'blue', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" },
        { name: 'Knowledge', progress: 70, color: 'green', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" }
    ]);

    const [stats, setStats] = useState([
        { name: 'Health', progress: 50, color: 'red', description: "Your healthiness level. The lower the stats, the more likely it is to get sick" },
        { name: 'Happiness', progress: 70, color: 'pink', description: "Your happiness level. The lower the stats, the likely it is to get mental illnesses." },
        { name: 'Appearance', progress: 70, color: 'blue', description: "Your looks. The higher it is, the more it would help with your relationships" },
    ]);

    const [npcData] = useState([
        { id: 1, icon: "checkbox-outline", item: 'Parent', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false } },
        { id: 2, icon: "checkbox-outline", item: 'Friend', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false } },
        { id: 3, icon: "checkbox-outline", item: 'Superior', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': true, 'Have child': false, 'Promote/Raise': true } },
        { id: 4, icon: "checkbox-outline", item: 'Classmate', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': true, 'Bribe': false, 'Have child': false, 'Promote/Raise': false } },
        { id: 5, icon: "checkbox-outline", item: 'Sibling', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false } },
        { id: 6, icon: "checkbox-outline", item: 'Teacher', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': true, 'Have child': false, 'Promote/Raise': false } },
        { id: 7, icon: "checkbox-outline", item: 'Lover', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': true, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false } },
        { id: 8, icon: "checkbox-outline", item: 'Husband/Wife', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': true, 'Promote/Raise': false } },
    ]);

    intelStats[0].progress = (intelStats[1].progress + intelStats[2].progress + intelStats[3].progress) / 3

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };



    // update state
    const updateIntelStats = (changes) => {
        const updatedIntelStats = intelStats.map(stat => {
            if (!intelStats) return; // Check if intelStats is defined

            const change = changes[stat.name]; // Get change for this stat
            if (change) {
                return { ...stat, progress: Math.min(Math.max(0, stat.progress + change), 100) };
            }
            return stat;
        });
        const averageIntelProgress = calculateAverageProgress(updatedIntelStats);
        updatedIntelStats[0].progress = averageIntelProgress;
        setIntelStats(updatedIntelStats);
    };
    const updateStats = (changes) => {
        const updatedStats = stats.map(stat => {
            if (!stats) return; // Check if stats is defined

            const change = changes[stat.name]; // Get change for this stat
            if (change) {
                return { ...stat, progress: Math.min(Math.max(0, stat.progress + change), 100) };
            }
            return stat;
        });
        setStats(updatedStats);
    };





    const decreaseStats = () => {
        const calculatedStats = stats.map(stat => {
            return { ...stat, progress: Math.max(0, stat.progress - Math.floor(Math.random() * 5) + 1) };  // Cập nhật giá trị progress bằng cách trừ đi decrement
        });
        const calculatedIntelStats = intelStats.map(intelStat => {
            return { ...intelStat, progress: Math.max(0, intelStat.progress - Math.floor(Math.random() * 5) + 1) };  // Cập nhật giá trị progress bằng cách trừ đi decrement
        });

        setIntelStats(calculatedIntelStats);
        setStats(calculatedStats); // Cập nhật state của stats với giá trị mới đã được tính toán
        setGrade(Math.max(0, grade - Math.floor(Math.random() * 5) + 1))
    };

    const plusAge = () => {
        setTime(0);
        setAge(age + 1);
        decreaseStats();
    };

    return (
        <UserContext.Provider value={{
            name, setName,
            gender, setGender,
            intelStats,
            stats,
            grade,
            age, setAge,
            balance, setBalance,
            time, setTime,
            updateStats,
            skipClass,
            studyHarder,
            workHarder,
            studyMath,
            studyLiterature,
            studyForeignLanguage,
            statuses, currentStatus,
            plusAge,
            performance, setPerformance,
            diploma, setDiploma,
            npcData
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
