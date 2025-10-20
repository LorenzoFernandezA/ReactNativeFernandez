import React from "react";
import {View, Text, Pressable} from 'react-native';

function Register(){
    return(
        <View>
            <Text>Hola Mundo</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
            <Text>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    );
}

export default Register;