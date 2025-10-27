import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
            <Text>Probando Imagenes</Text>
            <Image 
            style={styles.image}
            source={require("../../assets/img/zonaMedia.jpeg")}
            ResizeMode="contain"/>
            
    </View>
  );
}

const styles = StyleSheet.create({
    image:{
        height:400 
    }
});
