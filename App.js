import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ControlScreen from "./screens/Control";
import DataScreen from "./screens/Data";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App (){
  return ( 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Control" component={ControlScreen} />
        <Tab.Screen name="Data" component={DataScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;