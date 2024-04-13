import { FlatList } from 'react-native';

import StoreItem from './StoreItem';

function renderStoreItem(itemData) {
  return <StoreItem {...itemData.item} />;
}

function ListItem({ StoreItem }) {
  return (
    <FlatList
      data={StoreItem}
      renderItem={renderStoreItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListItem;
