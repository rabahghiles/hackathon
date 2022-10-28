import { useState } from "react";
import { View, Text, Button, Switch, StyleSheet, Image, TouchableOpacity } from "react-native";

function ControlScreen ({navigation}){

    const [isOn, setIsOn] = useState(true);
    const turn = isOn ? 'off' : 'on';
    const url = "https://shelly-51-eu.shelly.cloud/device/relay/control?channel=0&turn="+turn+"&id=0cdc7ef58310&auth_key=MTQxYTZldWlk362DCE2304242B175C1255E35BD893B37007BA633F35D40C767336868C8D9FBE58261888397DD623"
    const toggleSwitch = () => {setIsOn(previousState => !previousState ) ; postExample };
    var icon = isOn
      ? require('../assets/lampeAllume.png')
      : require('../assets/lampe.png');

    let formdata = new FormData();

    let formdataStatus = new FormData();

    formdata.append("id", '0cdc7ef58310')
    formdata.append("channel", 0)
    formdata.append("turn", turn)
    formdata.append("auth_key", 'MTQxYTZldWlk362DCE2304242B175C1255E35BD893B37007BA633F35D40C767336868C8D9FBE58261888397DD623')

    formdataStatus.append("id", '0cdc7ef58310')
    formdataStatus.append("auth_key", 'MTQxYTZldWlk362DCE2304242B175C1255E35BD893B37007BA633F35D40C767336868C8D9FBE58261888397DD623')
    const postExample = async () => {
    setIsOn(previousState => !previousState );
    const params = {
          method: 'POST',
          headers: {
          'Content-Type': 'multipart/form-data' ,
          },
          body: formdata
        };
        fetch('https://shelly-51-eu.shelly.cloud/device/relay/control', params)
          .then(response => response.json())
          .then(data => console.log(data));
    }

     const getStatus = () => {
     const params = {
          method: 'POST',
          headers: {
          'Content-Type': 'multipart/form-data' ,
          },
          body: formdataStatus
        };
     fetch('https://shelly-51-eu.shelly.cloud/device/status', params)
          .then(response => response.json())
          .then(data => {
            console.log(data.data.online)
            setIsOn(data.data.online)
          });
 }

    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#f0f0f2"  ,
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
      <Text style={{ fontSize: 30, color: "#000000", textAlign:'center'  }}> Suivre l'état de mes appareils </Text>
      </View>
      <View style={styles.menu} >
              <View style={{alignItems: 'center'  , marginBottom : 25 }} >
              <TouchableOpacity onPress={postExample}>
            <Image style={{width: 80 , height: 115 }} source={icon}  />
            </TouchableOpacity>
          </View>

           <Text style={{ fontSize: 20, color: "#000000", textAlign:'center'}}> Vous avez des appareils qui sont {isOn ? 'allumés' : 'éteints'} ,
             vous voulez {isOn ? 'les éteindre ' : 'les allumés'} ? </Text>
        </View>
    </View>
  )
}


export default ControlScreen;