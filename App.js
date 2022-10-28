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
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        
      >
        <Tab.Screen
          name="Data"
          component={DataScreen}
        />
        <Tab.Screen name="Control" component={ControlScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;