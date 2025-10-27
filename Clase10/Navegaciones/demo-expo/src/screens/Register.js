import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  
  onSubmit = () => {
    console.log('Datos ingresados:');
    console.log('Email:', this.state.email);
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>

        
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />

        
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />

        
        <Pressable style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>

        
        <View >
          <Text >Vista previa:</Text>
          <Text>Email: {this.state.email}</Text>
          <Text>Usuario: {this.state.username}</Text>
          <Text>Contraseña: {this.state.password}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
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

  
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
  },

  
  buttonText: {
    color: '#fff',
  },
});

