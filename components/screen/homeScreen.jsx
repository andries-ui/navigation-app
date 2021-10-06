import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Header, Icon, ListItem } from "react-native-elements";
import UserList from '../class/userClass';
import * as Animatable from 'react-native-animatable';
import Form from '../function/form';



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

    const [bottomSheet, setBottomSheet] = useState(false);


    const [users, setusers] = useState(UserList.list)
    


    const AddData=(_key,_name,_surname,_age,_location)=>{
        UserList.list.push(
        {Key:_key,
        Name: _name,
        Surname:_surname,
        Age:_age,
        Location:_location})

    }


    return (
        <SafeAreaView style={styles.parent}>

         


            <View style={styles.header}>
                <Text style={styles.homeText}>Home</Text>

                <Icon 
                style={styles.addIcon}
                    name="add"
                    type="ionicons"
                    size={32} color="#ffffff"
                    onPress={()=> setBottomSheet(true)} />
            </View>

            <Icon 
                name="people-outline"
                type="ionicons"
                size={78} color="#000000"
                onPress={() => setBottomSheet(false)} />
           
           
            <View style={styles.base}>
               
               
                {
                UserList.list.map((action) => 
                <ListItem style={styles.item} bottomDivider={5} shadowColor="#000000" shadowOpacity={5}
                key={action.Key} onPress={()=> navigation.navigate("DetailsScreen",{itemKey: action.Key})}>
                <Icon 
                        name="person"
                        type='ionicon'
                        size={30}
                        onPress={() => createSetDone( item.key,item.status, item.date, item.time, item.title)}
                        marginRight={10}
                        paddingRight={10} />
                        <ListItem.Content style={styles.content}>
                            <ListItem.Title>
                                {action.Name} {action.Surname}
                            </ListItem.Title>
                            
                            <ListItem.Subtitle>
                                <Icon
                                    name="location"
                                    type='ionicon'
                                    size={13}
                                    color="green"
                                    onPress={() => createSetDone(item.key, item.status, item.date, item.time, item.title)}
                                    marginRight={10}
                                    paddingRight={10} />  {action.Location}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                </ListItem>

                ) }
        
       

            </View>


        {bottomSheet ?
                <View 
                        style={styles.form} >    
                          <Icon 
                        name="cancel"
                        type="ionicons"
                        size={32} color="#000000"
                        onPress={() => setBottomSheet(false)} />

                        <Form AddData = {AddData} />
                </View> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    parent:{
height:height,
    },
    header: {
        height: 65,
        backgroundColor: '#33ccff',
        flexDirection: "row",
        paddingTop: 30,
        paddingLeft:15,
        paddingRight:25,
        paddingBottom:5,
        alignItems:'baseline',

    },
    homeText: {
        width: width - 45,
        height: "100%",
        color: "#ffffff",
        fontSize:22,
        fontWeight:"800",
    },
    base: {
        position: 'absolute',
        height: height - 150,
        top: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: width,
        padding: 10,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
        
    },
    form:{
        backgroundColor: "white",
        position:'absolute',
        width: width,
        bottom:0
    },
    addIcon:{
        color:'black',
        marginRight:10
    },
    item:{
        marginTop:5,
        borderRadius:12,
        padding: 0,
        backgroundColor: 'red'
    },
    content:{
        borderRadius: 12,
    }
   

})

export default HomeScreen;