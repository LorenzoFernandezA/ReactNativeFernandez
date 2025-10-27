import React, { Component } from "react";
import { View, Text, FlatList } from "react-native-web";
import {db, auth} from '../firebase/config';

class Usuarios extends Component{
    constructor(props){
    super(props)
    this.state={
        usuarios: [],
    }
    }

    componentDidMount(){
    db.collection('users').onSnapshot(
        docs => {
            let users = [];
            docs.forEach(doc=>{
                users.push({
                    id: doc.id,
                    data: doc.data(),
                })

        this.setState({
            usuarios: users,
            loading: false,
        })
        })
        }
    )
    };

    render(){
    console.log(this.state.usuarios);

        return(
            <View>
                <Text>Lista de Usuarios: </Text>
                <FlatList data={this.state.usuarios} keyExtractor={(item)=> item.id.toString()} renderItem={({item})=><Text>{item.data.owner}</Text>}/>
            </View>
        )
    }
};

export default Usuarios;