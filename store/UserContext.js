import React, { createContext, useState } from 'react';
import { intelStatsData, statsData, npcData } from '../data/data.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Player');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);
    const [time, setTime] = useState(0);
    const [isGraduated, setGraduated] = useState(false);
    const [grade, setGrade] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [diploma, setDiploma] = useState('None');
    const [intelStats, setIntelStats] = useState(intelStatsData);
    const [stats, setStats] = useState(statsData);
    const [npc, setNpc] = useState(npcData);

    const statuses = {
        INFANT: 'infant',
        STUDENT: 'student',
        UNISTUDENT: 'uniStudent',
        UNEMPLOYED: 'unemployed',
        EMPLOYED: 'employed',
    };
    const [currentStatus, setCurrentStatus] = useState(statuses.INFANT); // Initialize with 'infant'

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
        setPerformance(performance + 5)
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

    const applyForFulltimeJob = () => {
        setCurrentStatus(statuses.EMPLOYED);
        console.log(`You're hired`);
        console.log(`Current status updated to: ${currentStatus}`);

    };

    intelStats[0].progress = (intelStats[1].progress + intelStats[2].progress + intelStats[3].progress) / 3

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };



    // update state
    const updateCurrentStatus = (age) => {
        if (age === 6) {
            setCurrentStatus(statuses.STUDENT);
        } else if (age === 18) {
            if (grade >= 50) {
                setCurrentStatus(statuses.UNISTUDENT);
            }
            else {
                setCurrentStatus(statuses.UNEMPLOYED);
            }
        } else if (age === 22 && currentStatus===statuses.UNISTUDENT) {
            setCurrentStatus(statuses.UNEMPLOYED);
        }
        console.log(`Current status updated to: ${currentStatus}`);
    }

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
            // Xác định giá trị giảm dựa trên độ tuổi
            let decrement;
            if (age >= 1 && age <= 39) {
                decrement = Math.floor(Math.random() * 5) + 1; // Giảm từ 1 đến 5
            } else if (age >= 40 && age <= 80) {
                decrement = Math.floor(Math.random() * 10) + 1; // Giảm từ 1 đến 10
            } else {
                decrement = 0; // Không giảm nếu nằm ngoài khoảng tuổi đã chỉ định
            }

            return { ...stat, progress: Math.max(0, stat.progress - decrement) };
        });

        const calculatedIntelStats = intelStats.map(intelStat => {
            return { ...intelStat, progress: Math.max(0, intelStat.progress - Math.floor(Math.random() * 5) + 1) };
        });

        setIntelStats(calculatedIntelStats);
        setStats(calculatedStats); // Cập nhật state của stats với giá trị mới đã được tính toán
        setGrade(Math.max(0, grade - Math.floor(Math.random() * 5) + 1))
    };


    const plusAge = () => {
        setTime(0);
        console.log(age);
        setAge(age + 1);
        decreaseStats();
        console.log(age);
        updateCurrentStatus(age + 1);
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
            applyForFulltimeJob,
            plusAge,
            performance, setPerformance,
            diploma, setDiploma,
            npc, setNpc
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
