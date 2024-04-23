import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Player');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);
    const [time, setTime] = useState(0);
    const [isGraduated, setGraduated] = useState(false);

    // Define initial values for intelStats and stats as arrays
    const[IQ,setIQ] = useState(100);
    const[EQ,setEQ] = useState(100);
    const[health, setHealth] =useState(100);
    const[happiness, setHappiness] =useState(100);
    const[knowledge, setKnowledge] =useState(0);
    const[communication, setCommunication] =useState(100);
    const[appearance, setAppearance] =useState(100);
    const[grade, setGrade] =useState(100);
    const[performance, setPerformance] = useState(100);

    // study harder
    const studyHarder = () => {
        setIQ(IQ + 5);
        setEQ(EQ - 1);
        setTime(time - 90);
        setHealth(health-1);
        setHappiness(happiness-10);
        setKnowledge(knowledge+5);
        setCommunication(communication-5);
        setGrade(grade+10)
      };

      // word harder
      const workHarder = () =>{
        setTime(time - 90);
        setHealth(health-10);
        setHappiness(happiness-10);
        setPerformance(performance+10)
      }


      // Study Subjects
      const studyMath =() => {
        setIQ(IQ + 5);
        setEQ(EQ - 2);
        setTime(time - 30);
        
      }
      const studyLiterature =() => {
        setIQ(IQ - 2);
        setEQ(EQ + 2);
        setTime(time - 30);
        setKnowledge(knowledge +3 );
        setCommunication(communication + 3);
     
      }
      const studyScience =() => {
        setIQ(IQ + 3);
        setEQ(EQ - 1);
        setTime(time - 30);
        setHappiness(happiness + 2);
        setKnowledge(knowledge + 3);
       
      }

      const studyHistory =() => {
        setIQ(IQ + 5);
        setEQ(EQ - 1);
        setTime(time - 90);
        setHealth(health-1);
        setHappiness(happiness-10);
        setKnowledge(knowledge+5);
        setCommunication(communication-5);
        setGrade(grade+10)
      }

      const studyForeignLanguage =() => {
        setIQ(IQ + 5);
        setEQ(EQ - 1);
        setTime(time - 90);
        setHealth(health-1);
        setHappiness(happiness-10);
        setKnowledge(knowledge+5);
        setCommunication(communication-5);
        setGrade(grade+10)
      }
      
      

    // Define initial values for intelStats and stats as arrays
    const [subjects,setSubject] = useState([ 
        { id: '1', name: 'Math', grade: '50' },
        { id: '2', name: 'Literature', grade: '50' },
        { id: '3', name: 'Science', grade: '50' },
        { id: '4', name: 'History', grade: '50' },
        { id: '5', name: 'Geography', grade: '50' },
        { id: '6', name: 'Art', grade: '50' },
        { id: '7', name: 'IT', grade: '50' },
        { id: '8', name: 'PE', grade: '50' },
        { id: '9', name: 'Foreign Language', grade: '50' },
    ]);


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

    intelStats[0].progress = (intelStats[1].progress + intelStats[2].progress + intelStats[3].progress) / 3

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };

    const averageIntelProgress = calculateAverageProgress(intelStats);

    intelStats[0].progress = averageIntelProgress;
    // update state
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
        <UserContext.Provider value={{ name, setName, gender, setGender, intelStats, stats, age, setAge, balance, setBalance, time, setTime, updateStats,studyMath,subjects,setSubject, isGraduated, setGraduated }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
