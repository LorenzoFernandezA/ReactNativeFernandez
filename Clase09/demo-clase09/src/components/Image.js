import react from "react";
import { StyleSheet } from "react-native";
import {Image, View} from "react-native-web"

function Image(){
    return (
    <View>
        <Text>Probando Imagenes</Text>
        <Image 
        style={styles.image}
        source={require("../../assets/img/zonaMedia.jpeg")}
        ResizeMode="contain"/>
        
    </View>
        
    )
}
const styles = StyleSheet.create({
    image:{
        height:400 
    }
})


export default Image;