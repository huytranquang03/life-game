import React, { createContext, useState } from 'react';


const UserContext = createContext();


const UserProvider = ({ children }) => {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    return (
        
        <UserContext.Provider value={{ name, setName, gender, setGender }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
