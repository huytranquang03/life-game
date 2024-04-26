import React from 'react';
import StoreItem from '../components/layout/StoreItem';

const FinanceScreen = ({ navigation }) => {
   const data = [
      {id: 1, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 2, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 3, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 4, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 5, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 6, icon: 'checkbox-outline', item: 'Store1', price: 100},
      {id: 7, icon: 'checkbox-outline', item: 'Store1', price: 100},
   ]
   const handlePress = (item) => {
		console.log("Pressed item with ID:", item.id);
		navigation.navigate("MainGameScreen", {
			actions: item.actions,
		});
	};
    return (
        <StoreItem data={data} onPress={handlePress} />
    );
    
};

export default FinanceScreen;