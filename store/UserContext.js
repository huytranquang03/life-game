import React, { createContext, useState, useEffect } from 'react';
import { intelStatsData, statsData, npcData, financeData, activityData, fulltimeJob, parttimeJob, departments } from '../data/data.js';
import moment from 'moment';


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Player');
    const [age, setAge] = useState(0);
    const [balance, setBalance] = useState(0);
    const [annualWage, setAnnualWage] = useState(0);
    const [time, setTime] = useState(0);
    const [grade, setGrade] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [diploma, setDiploma] = useState('None');
    const [intelStats, setIntelStats] = useState(intelStatsData);
    const [stats, setStats] = useState(statsData);
    const [npc, setNpc] = useState(npcData);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [vehicleBonus, setVehicleBonus] = useState(0); // Thêm state vehicleBonus
    const [finance, setFinance] = useState(financeData);
    const [activity, setActivity] = useState(activityData);
    const [timerActive, setTimerActive] = useState(true); // State to control timer activity
    const [parttime, setParttime] = useState(parttimeJob);
    const [fulltime, setFulltime] = useState(fulltimeJob);
    const [department, setDepartment] = useState(null);
    const [job, setJob] = useState(null);
    const [universityDepartments, setUniversityDepartments] = useState(departments);
    const [departmentPopupVisible, setDepartmentPopupVisible] = useState(false);


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
            IQ: 3,
            EQ: -1,
            Knowledge: 3,
        };
        const statsChanges = {
            Health: -3,
            Happiness: -2,
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setTime(time + 180 - 10 * vehicleBonus);
        setGrade(grade + 5)
    };
    //skip class
    const skipClass = () => {
        const intelChanges = {
            IQ: -2,
            EQ: 3,
            Knowledge: -2,
        };
        const statsChanges = {
            Health: -5,
            Happiness: 5,
        };
        updateIntelStats(intelChanges);
        updateStats(statsChanges);
        setTime(time + 90);
        setGrade(Math.max(0, grade - 5));
        console.log(grade)
    };

    // word harder
    const workHarder = () => {
        updateStats(statsChanges);
        const statsChanges = {
            Health: -5,
            Happiness: -5,
        };
        updateStats(statsChanges);
        setTime(time + 300 - 15 * vehicleBonus);
        setPerformance(performance + 5)
    }

    //quit job
    const quitJob = () => {
        setJob(null);
        setAnnualWage(0);
        setCurrentStatus(statuses.UNEMPLOYED);
        setPerformance(0);
    }

    // Study Subjects
    const study = (subject) => {
        let intelChanges;
        let statsChanges;
        switch (subject) {
            case 'Math':
                intelChanges = {
                    IQ: 3,
                    EQ: -1,
                    Knowledge: 1
                };
                statsChanges = {
                    Happiness: -1
                };
                break;
            case 'Literature':
                intelChanges = {
                    IQ: -2,
                    EQ: 2,
                    Knowledge: 2,
                };
                statsChanges = {
                    Happiness: -1
                };
                break;
            case 'Science':
                intelChanges = {
                    IQ: 2,
                    EQ: -1,
                    Knowledge: 2
                };
                statsChanges = {
                    Happiness: 1
                };
                break;
            case 'History':
                intelChanges = {
                    IQ: 1,
                    EQ: -1,
                    Knowledge: 3
                };
                statsChanges = {

                };
                break;
            case 'Geography':
                intelChanges = {
                    IQ: 1,
                    EQ: -1,
                    Knowledge: 3
                };
                statsChanges = {

                };
                break;
            case 'Art':
                intelChanges = {
                    IQ: -1,
                    EQ: 3,
                    Knowledge: 1
                };
                statsChanges = {
                    Happiness: 2
                };
                break;
            case 'Information Technology':
                intelChanges = {
                    IQ: 3,
                    EQ: -2,
                    Knowledge: 1,
                };
                statsChanges = {
                    Happiness: 3
                };
                break;
            case 'Physical Education':
                intelChanges = {
                    IQ: -2,
                };
                statsChanges = {
                    Health: 5,
                    Happiness: 2,
                    Appearance: 3
                };
                break;
            case 'Foreign Language':
                intelChanges = {
                    IQ: -1,
                    EQ: 2,
                    Knowledge: 2,
                };
                statsChanges = {
                    Happiness: 1
                };
                break;
        }
        updateIntelStats(intelChanges);
        updateStats(statsChanges)
        setGrade(grade + 2);
        setTime(time + 180);
    };

    const getHealth = () => stats[0].progress
    const getHappiness = () => stats[1].progress
    const getAppearance = () => stats[2].progress

    const getIntelligence = () => intelStats[0].progress
    const getIQ = () => intelStats[1].progress
    const getEQ = () => intelStats[2].progress
    const getKnowledge = () => intelStats[3].progress

    const applyForParttimeJob = (job) => {
        if (percentageSimulator(job.chance)) {
            alert(`You're hired as a part-time ${job.name}`);
            updateStats(job);
            updateIntelStats(job);
            setBalance(balance + job.wage);
            setTime(time + job.time);
        }
        else {
            setTime(time + 60);
            alert(`Sorry...You're not hired`);
        }
    };
    const applyForFulltimeJob = (job) => {
        if (department && department.id === job.require) {
            let successRate = 10;
            if (diploma === 'C')
                successRate = 50;
            if (diploma === 'B')
                successRate = 70;
            if (diploma === 'A')
                successRate = 90;
            if (diploma === 'A+')
                successRate = 100;

            if (percentageSimulator(successRate) && percentageSimulator(job.chance)) {
                setJob(job.name);
                setCurrentStatus(statuses.EMPLOYED);
                alert(`You're hired`);
                setAnnualWage(job.wage);
            }
            else {
                setTime(time + 60);
                alert(`Sorry...You're not hired`);
            }
        }
        else {
            setTime(time + 60);
            alert(`You're not qualified for this job 💩`);
        }
    };

    intelStats[0].progress = (intelStats[1].progress + intelStats[2].progress + intelStats[3].progress) / 3

    const calculateAverageProgress = (arr) => {
        const totalProgress = arr.reduce((acc, stat) => acc + stat.progress, 0);
        return Math.round(totalProgress / arr.length); // Round the average
    };

    const meetsDepartmentRequirements = (department) => {
        // Check if userStats and department objects are valid
        if (!intelStats || !department || !department.requirements) {
            return false;
        }

        // Extract user stats (IQ, EQ, Knowledge)
        const progressMap = intelStats.map((stat) => stat.progress);
        const IQ = progressMap[1];
        const EQ = progressMap[2];
        const Knowledge = progressMap[3];

        // Extract department requirements
        const requirements = department.requirements;

        // Check if user stats meet or exceed each department requirement
        return (
            IQ >= requirements.IQ &&
            EQ >= requirements.EQ &&
            Knowledge >= requirements.Knowledge
        );
    }

    // update state
    const updateCurrentStatus = (age) => {
        if (age === 6) {
            setCurrentStatus(statuses.STUDENT);
        } else if (age === 18) {
            if (grade >= 50) {
                setDepartmentPopupVisible(true);
            }
            else {
                setCurrentStatus(statuses.UNEMPLOYED);
            }
        } else if (age === 22 && currentStatus === statuses.UNISTUDENT) {
            if (grade < 70)
                alert(`You are expelled from school!`)
            if (grade >= 70 && grade < 80) {
                setDiploma('C');
                alert(`You graduated from University with C diploma`);
            }
            if (grade >= 80 && grade < 90) {
                setDiploma('B');
                alert(`You graduated from University with B diploma`);
            }
            if (grade >= 90 && grade < 100) {
                setDiploma('A');
                alert(`You graduated from University with A diploma`);
            }
            if (grade === 100) {
                setDiploma('A+');
                alert(`You graduated from University with A+ diploma`);
            }

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
            console.log(changes);
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
            console.log(changes);
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
        // setGrade(Math.max(0, grade - Math.floor(Math.random() * 5) + 1))
    };


    const plusAge = () => {
        setTime(0);
        console.log(age);
        setAge(age + 1);
        decreaseStats();
        updateCurrentStatus(age + 1);
        handleEvents();
        setBalance(balance + annualWage);
        setNpc(prevNpcs => prevNpcs.map(npc => ({
            ...npc,
            progress: Math.max(0, npc.progress - 3)
        })));
    };

    //
    const percentageSimulator = (percentage) => {
        // Generate a random number from 1 to 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        // Check if the random number is less than or equal to the percentage
        return randomNumber <= percentage;
    }
    const events = [

        {
            id: 'oldAge',
            description: "You die of old age. Game Over.",
            ageTrigger: 70,
            statsTrigger: () => true,
            chance: (age - 70) * 2,
            treatCost: null,
            effectIfTreat: () => {
            },
            effectIfNotTreat: () => { gameOver() },
            treatable: false
        },
        {
            id: 'acne',
            description: "You have acne. Treat it?",
            ageTrigger: 12,
            ageStop: 30,
            statsTrigger: () => true,
            chance: 20,
            treatCost: 50,
            effectIfTreat: () => {
                updateStats({ Appearance: +5 });
            },
            effectIfNotTreat: () => {
                updateStats({ Health: -5, Appearance: -5, Happiness: -5 });
            },
            treatable: true
        },
        {
            id: 'commonCold',
            description: "You have a common cold. Treat it?",
            ageTrigger: 0,
            statsTrigger: () => (getHealth() < 50),
            chance: 30,
            treatCost: 50,
            effectIfTreat: () => {
                updateStats({ Health: +15 });
            },
            effectIfNotTreat: () => {
                updateStats({ Health: -15 });
            },
            treatable: true
        }, {
            id: 'carAccident',
            description: "You ran into a car accident and die. Poor thing. Game Over.",
            ageTrigger: 20,
            statsTrigger: () => true,
            chance: 1,
            treatCost: null,
            effectIfTreat: () => {
            },
            effectIfNotTreat: () => {
                gameOver()
            },
            treatable: false
        }, {
            id: 'depression',
            description: "You have depression. Treat it?",
            ageTrigger: 0,
            statsTrigger: () => (getHappiness() < 30),
            chance: 60,
            treatCost: 1000,
            effectIfTreat: () => {
                updateStats({ Happiness: +25 });
            },
            effectIfNotTreat: () => {
            },
            treatable: true
        },
        {
            id: 'suddenDeath',
            description: "Oops. Looks like God did a little trolling on you. R.I.P. Game Over.",
            ageTrigger: 40,
            statsTrigger: () => true,
            chance: 2,
            treatCost: null,
            effectIfTreat: () => {

            },
            effectIfNotTreat: () => {
                gameOver()
            },
            treatable: false
        },
        {
            id: 'gangAccident',
            description: "You owe to much money! The boss you lent money from sent his goon to took care of you. Game Over.",
            ageTrigger: 20,
            statsTrigger: () => balance < -10000,
            chance: 50,
            treatCost: null,
            effectIfTreat: () => {

            },
            effectIfNotTreat: () => {
                gameOver()
            },
            treatable: false
        },
        {
            id: 'healthProblem',
            description: "Your unhealthy lifestyle has finally caught up to you! Game Over.",
            ageTrigger: 0,
            statsTrigger: () => (getHealth() <= 0),
            chance: 100,
            treatCost: null,
            effectIfTreat: () => {

            },
            effectIfNotTreat: () => {
                gameOver()
            },
            treatable: false
        }


    ];


    const handleEvents = () => {
        let eventTriggered = false;
        events.forEach(event => {
            if (!eventTriggered && age >= event.ageTrigger && (event.ageStop ? age <= event.ageStop : true) && percentageSimulator(event.chance) && event.statsTrigger()) {
                console.log(`Event triggered: ${event.description}`);  // Debug log
                setCurrentEvent({
                    ...event,
                    visible: true,
                });
                setTimerActive(false); // Stop the timer
                eventTriggered = true; // Ensure only one event can trigger per age increment
            }
        });
    };

    // Handling user's choice directly in context
    const handleUserChoice = (choice) => {
        if (choice && currentEvent && currentEvent.treatable) {
            setBalance(balance - currentEvent.treatCost);
            currentEvent.effectIfTreat();
            setTimerActive(true);
        } else {
            setTimerActive(true)
            currentEvent.effectIfNotTreat();
        }

        if (currentEvent.id == 'depression' && !choice && percentageSimulator(30)) {
            setCurrentEvent({
                id: 'suicide',
                description: "The depression was too much for you to handle. Game Over.",
                effectIfNotTreat: () => {
                    gameOver()
                },
                treatable: false,
                visible: true
            });
            setTimerActive(false)
        }

        else
            setCurrentEvent(null)
    };


    const gameOver = () => {
        setName('Player');          // Resets name to 'Player'
        setAge(0);                 // Resets age to 0
        setBalance(0);             // Resets balance to 0
        setTime(0);                // Resets time to 0
        setGrade(0);               // Resets grade to 0
        setPerformance(0);         // Resets performance to 0
        setDiploma('None');        // Resets diploma to 'None'
        setIntelStats(intelStatsData);  // Resets intellectual stats to their default data
        setStats(statsData);       // Resets general stats to their default data
        setNpc(npcData);           // Resets NPC data to default
        setCurrentEvent(null);     // Clears any current events
        setVehicleBonus(0);        // Resets vehicle bonus to 0
        setFinance(financeData);     // Resets financial information to default store data
        setActivity(activityData); // Resets activities to their default data
        quitJob();
        setCurrentStatus(statuses.INFANT);
        setDepartment(null);
        setDepartmentPopupVisible(false);
        setTimerActive(false)

    };
    const setNpcProgress = (npcId, value, mode = 'increment') => {
        setNpc(prevNpcs => {
            return prevNpcs.map(npc => {
                if (npc.id === npcId) {
                    let newProgress;
                    switch (mode) {
                        case 'increment':
                            newProgress = Math.min(100, npc.progress + value);  // Prevent exceeding 100
                            break;
                        case 'decrement':
                            newProgress = Math.max(0, npc.progress - value);  // Prevent going below 0
                            break;
                        default:
                            newProgress = npc.progress;  // No change if mode is unrecognized
                            break;
                    }
                    return { ...npc, progress: newProgress };
                }
                return npc;
            });
        });
    };
    const currentTime = moment();
    const dayOfWeekString = currentTime.format('dddd');
    const [currentReward, setCurrentReward] = useState(null);
    const rewardData = [
        {
            id: 'Monday',
            getReward: 100,
        },
        {
            id: 'Tuesday',
            getReward: 200

        },
        {

            id: 'Wednesday',
            getReward: 300

        },
        {
            id: 'Thursday',
            getReward: 400

        },
        {
            id: 'Friday',
            getReward: 500

        },
        {
            id: 'Saturday',
            getReward: 600

        },
        {
            id: 'Sunday =',
            getReward: 700

        },
    ];
    // 
    const handleRewards = () => {
        let rewardTriggered = false;
        rewardData.forEach(reward => {
            if (!rewardTriggered && dayOfWeekString === reward.id.trim()) { // Also trim any whitespace
                setCurrentReward({
                    ...reward,
                    visible: true,
                });
                rewardTriggered = true;
            }
        });
    };
    useEffect(() => {
        handleRewards();  // Ensure it's called at component mount or when required
    }, [dayOfWeekString]);  // Dependency array should include variables that trigger the update




    // 
    const handleRewardChoice = (choice) => {
        if (choice === 'get' && currentReward) {
            setBalance(balance + currentReward.getReward);
        }
        setCurrentReward(null);
    };

    return (
        <UserContext.Provider value={{
            name, setName,
            intelStats,
            stats, setStats,
            grade, setGrade,
            age, setAge,
            balance, setBalance,
            time, setTime,
            fulltime,
            parttime,
            job, setJob,
            updateStats,
            updateIntelStats,
            skipClass,
            studyHarder,
            workHarder,
            quitJob,
            study,
            statuses, currentStatus, setCurrentStatus,
            applyForParttimeJob,
            applyForFulltimeJob,
            plusAge,
            performance, setPerformance,
            diploma, setDiploma,
            npc, setNpc,
            finance, setFinance,
            vehicleBonus, setVehicleBonus, // Thêm vehicleBonus vào context
            activity, setActivity,
            getHealth, getAppearance, getHappiness, getIQ, getEQ, getKnowledge, percentageSimulator,
            currentEvent, setCurrentEvent, handleUserChoice,
            timerActive, setTimerActive, gameOver,
            universityDepartments, setUniversityDepartments,
            meetsDepartmentRequirements,
            department, setDepartment,
            departmentPopupVisible, setDepartmentPopupVisible,
            getHealth, getAppearance, getHappiness, getIntelligence, getIQ, getEQ, getKnowledge, percentageSimulator,
            currentEvent, setCurrentEvent, handleUserChoice,
            currentReward, setCurrentReward, handleRewards, handleRewardChoice,
            setNpcProgress,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
