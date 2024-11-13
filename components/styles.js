// components/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    fontSize: 20,
    color: 'red',
  },
  navText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default styles;
