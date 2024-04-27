import React, { createContext, useState,useEffect } from 'react';
import { intelStatsData, statsData, npcData, } from '../data/data.js';



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
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    

 
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

    //
    const percentageSimulator = (percentage) => {
        //generate a random number from 1-100
        const randomNumber = Math.floor(Math.random() * 99) + 1;

        //check if the random number is in the range
        if (randomNumber <= percentage)
            return true
        else
            return false;
    }
     
	useEffect(() => { checkAgeCondition();}, [age]); 
    const checkAgeCondition = () => {
		if (age > 0 && percentageSimulator(30)) {
			setPopupMessage("You're sick");
			setPopupVisible(true);

        } else if (age > 10 && percentageSimulator(20)) {
			setPopupMessage("You have cancer");
			setPopupVisible(true);

        } else if (age > 25 && percentageSimulator(10)) {
			setPopupMessage("You was hit by a stronger women");
			setPopupVisible(true);

		} else if (age > 30 && percentageSimulator(20)) {
			setPopupMessage("You've been in a car accident");
			setPopupVisible(true);

		} else if (age > 60 && percentageSimulator(30))  {
			setPopupMessage("You have a heart attack");
			setPopupVisible(true);

        }
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
            popupVisible, setPopupVisible
            ,popupMessage, setPopupMessage,
             checkAgeCondition, percentageSimulator
            
        
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
