import React from "react";
import {View, Text} from 'react-native';
import DynamicForm from "../components/DynamicForm";

function Home(){
    return(
        <View>
            <Text>Hola Mundo</Text>
            <DynamicForm/>
        </View>
    );
}

export default Home;