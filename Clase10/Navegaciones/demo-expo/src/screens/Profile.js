import React from "react";
import {View, Text, Pressable} from 'react-native';

function Profile(){
    return(
        <View>
            <Text>Hola Mundo</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
            <Text>Desloguearse</Text>
            </Pressable>
        </View>
    );
}

export default Profile;