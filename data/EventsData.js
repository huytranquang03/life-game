import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

const EventsData = () => {

const {getHappiness, getHealth, getAppearance} = useContext(UserContext);
const eventsData = [
    {
        id: 'oldAge',
        description: "You die of old age. Game Over.",
        ageTrigger: 70,
        statsTrigger: () => true,
        chance: 50,
        treatCost: null,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => { /* Game over logic */ },
        treatable: false
    },
    {
        id: 'acne',
        description: "You have acne. Treat it?",
        ageTrigger: 12,
        statsTrigger: () => true,
        chance: 30,
        treatCost: 100,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => {
            setHealth(getHealth() - 10);
            setAppearance(getAppearance() - 10);
        },
        treatable: true
    },
    {
        id: 'commonCold',
        description: "You have a common cold. Treat it?",
        ageTrigger: 0,
        statsTrigger: () => (getHealth() < 40),
        chance: 30,
        treatCost: 50,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => {
            setHealth(getHealth() - 20);
        },
        treatable: true
    }, {
        id: 'carAccident',
        description: "You ran into a car accident and die. Poor thing. Game Over.",
        ageTrigger: 10,
        statsTrigger: () => true,
        chance: 1,
        treatCost: null,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => {

        },
        treatable: null
    }, {
        id: 'depression',
        description: "You have depression. Treat it?",
        ageTrigger: 0,
        statsTrigger: () => (getHappiness() < 30),
        chance: 80,
        treatCost: 1000,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => {

        },
        treatable: true
    },
    {
        id: 'suddenDeath',
        description: "Oops. Looks like God did a little trolling on you. R.I.P. Game Over.",
        ageTrigger: 30,
        statsTrigger: () => true,
        chance: 1,
        treatCost: null,
        effectIfTreat: () => {

        },
        effectIfNotTreat: () => {

        },
        treatable: false
    },

];
return eventsData;
};

export default EventsData;
