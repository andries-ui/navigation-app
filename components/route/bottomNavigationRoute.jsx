import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationStack from "./userNavigationStack";
import AboutScreen from "../screen/aboutScreen";
import ContactScreen from "../screen/contactScreen";
import { Icon } from "react-native-elements";

const Stack = createBottomTabNavigator();

const BottomNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" 
            component={NavigationStack}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" type="ionicons" color={color} size={32} />
                    ),

                }}/>
            <Stack.Screen name="About" 
            component={AboutScreen}
            options={{
                tabBarLabel:'Resume',
                tabBarIcon:({color})=>(
                    <Icon name='today' type='ionicons' color={color} size={32}/>
                ),
            }}
            />
            <Stack.Screen name="Contact"
            component={ContactScreen}
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color }) => (
                        <Icon name='call' type='ionicons' color={color} size={32} />
                    ),
                }}/>
        </Stack.Navigator>
    )
}

export default BottomNavigation;