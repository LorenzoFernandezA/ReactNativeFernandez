import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeMenu from './src/components/HomeMenu';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{tabBarIcon: ()=><MaterialIcons name="login" size={24} color="black"/>}}/>
        <Stack.Screen name="Register" component={Register} options={{tabBarIcon: ()=><FontAwesome5 name="sign-out-alt" size={24} color="black"/>}}/>
        <Stack.Screen name="HomeMenu" component={HomeMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
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
