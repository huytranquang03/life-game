import React, { useContext } from 'react';
import StoreItem from '../components/layout/StoreItem';
import { UserContext } from '../store/UserContext';

const FinanceScreen = ({ navigation }) => {
   const { finance } = useContext(UserContext);

   const handlePress = (item) => {
		console.log("Pressed item with ID:", item.id);
		navigation.navigate("MainGameScreen", {
			actions: item.actions,
		});
	};
    return (
        <StoreItem data={finance} onPress={handlePress} />
    );
    
};

export default FinanceScreen;