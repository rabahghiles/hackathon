import { useState } from "react"
import { View, Text, Button, Switch, StyleSheet, Image, TouchableOpacity } from "react-native";

function ControlScreen ({navigation}){

    const [compteur, setCompteur] = useState(4);
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(previousState => !previousState);
    var icon = isOn
      ? require('../assets/lampeAllume.png')
      : require('../assets/lampe.png');

    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#f6d1d8"  ,
        flex: 1 ,
        flexDirection: "column" ,
      } ,
      menu: {
       flex: 2 ,
        padding: 50,
      }
    });

  return ( 
    <View style={styles.container}>
      <View style={{ flex: 1 , padding: 20 ,height: 0}} >
      <Text style={{ fontSize: 30, color: "#6699ff"}}> Suivre l'état de mes appareils </Text>
      </View>
      <View style={styles.menu} >
              <View style={{alignItems: 'center'  , marginBottom : 20 }} >
              <TouchableOpacity onPress={toggleSwitch}>
            <Image style={{width: 80 , height: 115 }} source={icon}  />
            </TouchableOpacity>

          </View>

           <Text style={{ fontSize: 20, color: "#6699ff"}}> Vous avez des appareils qui sont {isOn ? 'allumés' : 'éteints'} ,
             vous voulez {isOn ? 'les éteindre ' : 'les allumés'} ? </Text>
        </View>
    </View>
  )
}


export default ControlScreen;