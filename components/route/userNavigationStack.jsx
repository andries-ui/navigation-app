import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screen/homeScreen';
import UserDetailsScreen from '../screen/userDetailsScreen';
import { Button } from "react-native-elements";

const Stack = createStackNavigator();

const NavigationStack =() =>{
    return(
        <>
            <Stack.Navigator >
                <Stack.Screen name="HomeScreen" 
                component={HomeScreen}  
                options={{ headerShown: false }}/>

                <Stack.Screen name="DetailsScreen"
                component={UserDetailsScreen}
                options={{headerShown:false}}/>
            </Stack.Navigator>
        </>
    )
}

export default NavigationStack;