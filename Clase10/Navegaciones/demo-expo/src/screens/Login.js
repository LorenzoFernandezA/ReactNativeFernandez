import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import {auth} from '../firebase/config'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }
    onSubmit(email, pass){
        email = this.state.email
        pass = this.state.password
        if (!email.includes('@')) {
            this.setState({error: 'Email mal formateado'});
            return;
        }
        if (pass.length < 6) {
            this.setState({error: 'La password debe tener una longitud mínima de 6 caracteres'});
            return; 
        }
        auth.signInWithEmailAndPassword(email, pass)
        .then( (response) => {
            this.setState({loggedIn: true})
            this.props.navigation.navigate('HomeMenu')
        })
        .catch(error => {
            this.setState({error: 'Credenciales invalidas'})
        })
        console.log(this.state.email, this.state.password, this.state.userName);
    }
    render(){
        return(
            <View style={styles.conteiner}>
            <Text style={styles.title}>Ingresar</Text>
            <Pressable style={styles.boton2} onPress={()=>this.props.navigation.navigate('Register')}>
            <Text>Ir al registro</Text>
            </Pressable>
            <Pressable style={styles.boton} onPress={()=>this.props.navigation.navigate('HomeMenu')}>
            <Text>Entrar a la app</Text>
            </Pressable>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" onChangeText={text=>this.setState({email:text})} value={this.state.email}/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({password:text})} value={this.state.password} secureTextEntry={true}/>
            <Text style={styles.error}>{this.state.error}</Text>
            <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Logearme</Text>
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
        backgroundColor:'orange',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginBottom:7
    },
    boton2:{
        backgroundColor:'lightblue',
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
    },
    error:{
        color:'red'
    }
  
  });

export default Login

