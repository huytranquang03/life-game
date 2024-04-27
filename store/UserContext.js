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
    const [finance, setFinance] = useState([
        { id: 1, icon: "checkbox-outline", item: 'Bike', price: 50, description: "Helps you work more efficiently" },
        { id: 2, icon: "checkbox-outline", item: 'Motorbike', price: 2000, description: "Helps you work more efficiently" },
        { id: 3, icon: "checkbox-outline", item: 'Car', price: 100000, description: "Helps you work more efficiently" },
        { id: 4, icon: "checkbox-outline", item: 'Apartment', price: 21000, description: "Give you a shelter in exchange for an amount of rent every year. Having no shelter will make your health worse." },
        { id: 5, icon: "checkbox-outline", item: 'House', price: 200000, description: "Give you a permanent shelter. Having no shelter will make your health worse." },
        { id: 6, icon: "checkbox-outline", item: 'Gym subscription', price: 1000, description: "Helps improve your health every year." },
        { id: 7, icon: "checkbox-outline", item: 'Luxurious clothes', price: 20000, description: "Improves on your appearance" },
     ]);
  
      const [activity, setActivity] = useState([
        { id: 1, icon: "checkbox-outline", item: 'Play sports'},
        { id: 2, icon: "checkbox-outline", item: 'Read a book'},
        { id: 3, icon: "checkbox-outline", item: 'Play video games'},
        { id: 4, icon: "checkbox-outline", item: 'Go to a spa', price: 100},
        { id: 5, icon: "checkbox-outline", item: 'Join a club'},
     ]);   
     const [vehicleBonus, setVehicleBonus] = useState(0); // Thêm state vehicleBonus

    // study harder
    const studyHarder = () => {
        setIQ(IQ + 5);
        setEQ(EQ - 1);
        setTime(time + 90);
        setHealth(health - 1);
        setHappiness(happiness - 10);
        setKnowledge(knowledge + 5);
        setCommunication(communication - 5);
        setGrade(grade + 10)
    };

    // word harder
    const workHarder = () => {
        setTime(time + 90);
        setHealth(health - 10);
        setHappiness(happiness - 10);
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
    const getHealth = () => stats[0].progress
    const getAppearance = () => stats[2].progress
    const getHappiness = () => stats[1].progress
 
    const getIQ = () => intelStats[1].progress
    const getEQ = () => intelStats[2].progress
    const getKnowledge = () => intelStats[3].progress
 
    const setHealth = (newHealth) => {
       stats[0].progress=newHealth
    }
    const setHappiness = (newHappiness) => {
       stats[1].progress=newHappiness
    }
    const setAppearance = (newAppearance) => {
       stats[2].progress=newAppearance
    }
 
    const setIQ = (newIQ) => {
       intelStats[1].progress=newIQ
    }
    const setEQ = (newEQ) => { 
       intelStats[2].progress=newEQ
    }
    const setKnowledge = (newKnowledge) => {
       intelStats[3].progress=newKnowledge
    }
 
    // Define initial values for intelStats and stats as arrays

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
            studyMath,
            studyLiterature,
            studyForeignLanguage,
            isGraduated, setGraduated,
            plusAge,
            performance, setPerformance,
            diploma, setDiploma,
            npc, setNpc,
            finance, setFinance,
            vehicleBonus, setVehicleBonus, // Thêm vehicleBonus vào context
            activity, setActivity,
            setHealth, setHappiness, setAppearance, setIQ, setEQ, setKnowledge, getHealth, getAppearance, getHappiness, getIQ, getEQ, getKnowledge

        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
