import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Player');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);
    const [time, setTime] = useState(0);

    // Define initial values for intelStats and stats as arrays
    const [intelStats, setIntelStats] = useState([
        { name: 'Intelligence', progress: 0, color: 'yellow' },
        { name: 'IQ', progress: 80, color: 'red', description: "Your problem solving ability\nNeeded for certain profession" },
        { name: 'EQ', progress: 50, color: 'blue', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" },
        { name: 'Knowledge', progress: 70, color: 'green', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" }
    ]);

    const [stats, setStats] = useState([
        { name: 'Health', progress: 50, color: 'red', description: "Your healthiness level. The lower the stats, the more likely it is to get sick" },
        { name: 'Happiness', progress: 70, color: 'pink', description: "Your happiness level. The lower the stats, the likely it is to get mental illnesses." },
        { name: 'Appearance', progress: 70, color: 'blue', description: "Your looks. The higher it is, the more it would help with your relationships" },
    ]);

    const [npcData ] = useState([
      { id: 1, icon: "checkbox-outline", item: 'Parent', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false }},
      { id: 2, icon: "checkbox-outline", item: 'Friend', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false }},
      { id: 3, icon: "checkbox-outline", item: 'Superior', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': true, 'Have child': false, 'Promote/Raise': true }},
      { id: 4, icon: "checkbox-outline", item: 'Classmate', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': true, 'Bribe': false, 'Have child': false, 'Promote/Raise': false }},
      { id: 5, icon: "checkbox-outline", item: 'Sibling', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false }},
      { id: 6, icon: "checkbox-outline", item: 'Teacher', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': false, 'Spendtime': true, 'Compliment': true, 'Flirt': true, 'Ask out': true, 'Propose': false, 'Be friend': false, 'Bribe': true, 'Have child': false, 'Promote/Raise': false }},
      { id: 7, icon: "checkbox-outline", item: 'Lover', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': true, 'Be friend': false, 'Bribe': false, 'Have child': false, 'Promote/Raise': false }},
      { id: 8, icon: "checkbox-outline", item: 'Husband/Wife', actions: { 'Conversation': true, 'Insult': true, 'Ask For Money': true, 'Spendtime': true, 'Compliment': true, 'Flirt': false, 'Ask out': false, 'Propose': false, 'Be friend': false, 'Bribe': false, 'Have child': true, 'Promote/Raise': false }},
   ]);

    intelStats[0].progress = (intelStats[1].progress + intelStats[2].progress + intelStats[3].progress) / 3

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };

    const averageIntelProgress = calculateAverageProgress(intelStats);

    intelStats[0].progress = averageIntelProgress;

    const updateStats = () => {
        const calculatedStats = stats.map(stat => {
            return { ...stat, progress: Math.max(0, stat.progress - Math.floor(Math.random() * 5) + 1) };  // Cập nhật giá trị progress bằng cách trừ đi decrement
        });
        const calculatedIntelStats = intelStats.map(intelStat => {
            return { ...intelStat, progress: Math.max(0, intelStat.progress - Math.floor(Math.random() * 5) + 1) };  // Cập nhật giá trị progress bằng cách trừ đi decrement
        });
        setIntelStats(calculatedIntelStats);
        setStats(calculatedStats); // Cập nhật state của stats với giá trị mới đã được tính toán
    };


    return (
        <UserContext.Provider value={{ name, setName, gender, setGender, intelStats, stats, setStats, age, setAge, balance, setBalance, time, setTime, updateStats, setIntelStats, npcData }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
