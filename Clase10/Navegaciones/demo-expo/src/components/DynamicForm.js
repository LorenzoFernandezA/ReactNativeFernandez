import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }

  onSubmit = () => {
    console.log('Comentario ingresado:');
    console.log(this.state.comentario);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario de Comentarios</Text>

        
        <TextInput
          style={styles.input}
          placeholder="Escribí tu comentario..."
          onChangeText={text => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        
        <Pressable style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        
        <View>
          <Text>Comentario: {this.state.comentario}</Text>
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
