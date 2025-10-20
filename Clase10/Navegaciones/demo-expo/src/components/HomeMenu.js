import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Home Menu 🏠</Text>
      
      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
