import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);

    // Define initial values for intelStats and stats as arrays
    const [intelStats] = useState([
        { name: 'Intelligence', progress: 0, color: 'yellow' },
        { name: 'IQ', progress: 80, color: 'red', description: "Your problem solving ability\nNeeded for certain profession" },
        { name: 'EQ', progress: 50, color: 'blue', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" },
        { name: 'Knowledge', progress: 70, color: 'green', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" }
    ]);

    const [stats] = useState([
        { name: 'Health', progress: 50, color: 'red', description: "Your healthiness level. The lower the stats, the more likely it is to get sick" },
        { name: 'Happiness', progress: 70, color: 'pink', description: "Your happiness level. The lower the stats, the likely it is to get mental illnesses." },
        { name: 'Appearance', progress: 70, color: 'blue', description: "Your looks. The higher it is, the more it would help with your relationships" }
    ]);

    // Function to calculate average progress
    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };

    // Calculate average progress for intelStats and update Intelligence progress
    const averageIntelProgress = calculateAverageProgress(intelStats);
    intelStats[0].progress = averageIntelProgress;

    return (
        <UserContext.Provider value={{ name, setName, gender, setGender, intelStats, stats, age, setAge, balance, setBalance }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
