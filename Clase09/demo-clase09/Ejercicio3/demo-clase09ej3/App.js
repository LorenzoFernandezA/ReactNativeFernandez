import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductList from './src/screens/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Probando Flatlist</Text>
      <FlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
