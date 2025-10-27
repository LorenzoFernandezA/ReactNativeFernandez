import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import {db, auth } from '../firebase/config';


class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            userName:'',
            password:'',
        }
    }
    onSubmit(email, pass){
        console.log(this.state.email, this.state.password, this.state.userName);
        email = this.state.email
        pass = this.state.password
        auth.createUserWithEmailAndPassword(email, pass)
         .then(response => {
            this.setState({registered: true})
            db.collection('users').add({
              owner: auth.currentUser.email,
              username: this.state.userName,
              createdAt: Date.now(),
            })
            console.log(users)
            this.props.navigation.navigate('Login')
        })
        .catch(error => {
            this.setState({error: 'Fallo en el registro'})
        })
    }
    


    
    render(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Registro</Text>
            <Pressable style={styles.boton} onPress={()=>this.props.navigation.navigate('Login')}> 
                <Text>Ya tengo cuenta</Text>
            </Pressable>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" onChangeText={text=>this.setState({email:text})} value={this.state.email}/>
            <Text style={styles.subtitle}>Username</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({userName:text})} value={this.state.userName}/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({password:text})} value={this.state.password} secureTextEntry={true}/>
            <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Registrarme</Text>
            </Pressable>
        </View>
    )
}
}


const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
    },
    input: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
    },
    boton:{
        backgroundColor:'lightblue',
        borderRadius:4,
        padding:10,
        alignItems:'center',
    },
    boton2:{
        backgroundColor:'orange',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginBottom:7
    },
    conteiner:{
        padding:10
    },
    subtitle:{
        fontSize:15,
        fontWeight:'semibold',
        marginBottom:5
    }
  
  });

export default Register
