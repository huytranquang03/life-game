import { View, StyleSheet } from 'react-native';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
  },
});