import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Contador from '../components/Contador';

export default function Home() {
  const handlePress = () => {
    console.log('me clickearon');
  };

  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>clickeame</Text>
      </Pressable>
      <Contador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',   
    padding: 10,           
  },
  button: {
    padding: 4,            
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',    
  },
});
