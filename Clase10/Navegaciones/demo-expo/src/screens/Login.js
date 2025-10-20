import React from "react";
import {View, Text, Pressable} from 'react-native';

function Login(){
    return(
        <View>
            <Text>Hola Mundo</Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text >Registrarse</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('HomeMenu')}>
                <Text>Entrar en la app</Text>
            </Pressable>
        </View>
    );
}

export default Login;