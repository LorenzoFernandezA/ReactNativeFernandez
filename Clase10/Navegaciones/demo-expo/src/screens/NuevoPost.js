import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import {db, auth } from '../firebase/config';


class NuevoPost extends Component{
    constructor(props){
        super(props)
        this.state={
            error: '',
            mensaje: '',
            userName: '',
        }
    }
    onSubmit() {
    const mensaje = this.state.mensaje
    const userName = this.state.userName

    
    if (mensaje.trim().length === 0) {
      this.setState({ error: "El mensaje no puede estar vacío." });
      return;
    }

    
    db.collection("posts")
      .add({
        owner: auth.currentUser.email,
        userName: userName,
        mensaje: mensaje,
        createdAt: Date.now(),
      })
      .then(() => {
        console.log("Post creado correctamente");
        this.setState({ mensaje: "", userName: "", error: "" });
        this.props.navigation.navigate("HomeMenu"); 
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error al crear el post" });
      });
  }
    


    
    render(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Nuevo Post</Text>
            <TextInput
                      style={styles.input}
                      placeholder="Escribí tu comentario..."
                      onChangeText={text => this.setState({ mensaje: text })}
                      value={this.state.mensaje}
            />
            <Text style={styles.subtitle}>Username</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({userName:text})} value={this.state.userName}/>
            <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Crear Post</Text>
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

export default NuevoPost