import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()

class HomeMenu extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ()=> <Entypo name ="home" size={24} color="black"/>}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ()=> <MaterialIcons name ="account-circle" size={24} color="black"/>}}/>
      </Tab.Navigator>
    )
  }
}

export default HomeMenu;
