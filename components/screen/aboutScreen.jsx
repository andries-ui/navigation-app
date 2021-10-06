import React from "react";
import { Dimensions, SafeAreaView, Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { Icon } from "react-native-elements";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AboutScreen = () => {
    return (

        <SafeAreaView >
            <ScrollView>
                <Text style={styles.name}>Andries Sebola </Text>
                <View style={styles.parent}>
                    <View style={styles.view1}>

                        <Image source={require('../images/andries.jpg')} style={styles.image}/>

                        <Text style={styles.headerText}>Summary</Text>
                        <Text style={styles.smallText}>Summary</Text>

                        {/* Contacts  */}
                        <Text style={styles.headerText}>Contact</Text>
                        <Text style={styles.smallText}><Icon name="phone" type="ionicons" size={16}  />  +27 63 783 8676 </Text>
                        <Text style={styles.smallText}><Icon name="email" type="ionicons" size={16} />  andriesmpontsheng@gmail.com </Text>
                        <Text style={styles.smallText}><Icon name="logo-linkedin" type="ionicon" size={20} />  linkedin.com/in(AndriessebolaOba3851b1) </Text>


                        {/* Skills  */}
                        <Text style={styles.headerText}>Skill outline</Text>
                        <Text style={styles.smallText}>Project management</Text>
                        <Text style={styles.smallText}>Strong decision</Text>
                        <Text style={styles.smallText}>Complex problem solver</Text>
                        <Text style={styles.smallText}>Creative design </Text>
                        <Text style={styles.smallText}>Innovative Service-focused</Text>


                        {/* Skills  */}
                        <Text style={styles.headerText}>Languages</Text>
                        <Text style={styles.mediumText}>Can speak</Text>
                        <Text style={styles.smallText}>English</Text>
                        <Text style={styles.smallText}>Sepedi</Text>
                        <Text style={styles.mediumText}>Can understand Only</Text>
                        <Text style={styles.smallText}>Tswana</Text>
                        <Text style={styles.smallText}>Tsonga</Text>
                        <Text style={styles.smallText}>Venda</Text>
                        <Text style={styles.smallText}>Zulu</Text>


                        <Text style={styles.mediumText}>***************************</Text>
                        <Text style={styles.mediumText}>***************************</Text>
                        <Text style={styles.mediumText}>***************************</Text>
                        <Text style={styles.mediumText}>***************************</Text>
                    </View>
                    <View style={styles.view2}>

                        {/* Personell   */}
                        <Text style={styles.headerText}>Personell</Text>
                        <Text style={styles.smallText}>Nationality 	• SA CITIZEN</Text>
                        <Text style={styles.smallText}>Physical address 	• STAND NO 246, TZANEEN 0850</Text>
                        <Text style={styles.smallText}>Postal address	  • P.O BOX 242, LENYENYE 0857</Text>
                        

                        {/* Experience  */}
                        <Text style={styles.headerText}>Experience</Text>
                        <Text style={styles.smallText}> Mobile Developer - Personal Interest</Text>
                        <Text style={styles.smallText}>• SmartTech Support — Was a mobile app required by the school/lecturer introducing us to the mobile development environment.</Text>
                    
                        {/* Education   */}
                        <Text style={styles.headerText}>Education </Text>
                        <Text style={styles.smallText}> National Diploma: Information Technology - Tshwane University of Technology, Polokwane </Text>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: width - 30,
        height: height,
        flexDirection: 'row',
        padding: 15,
        borderRadius:12
         
    },
    view1: {
        width: (width - 30) / 2,
        backgroundColor:"#33ccff",
        paddingTop:10,
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12,
        paddingLeft:7
    },
    view2: {
        width: (width - 30) / 2,
        backgroundColor: "#A1A1A1",
        paddingTop: 10,
        borderTopRightRadius:12,
        borderBottomRightRadius: 12,
        paddingLeft: 7

    },
    image:{
        width:150,
        height:150,
        borderRadius:200,
        alignSelf:'center',
    },
    name:{
        textAlign:'center',
        fontSize:26,
        fontWeight:'800',
        textShadowColor:"#000000",
        textShadowOffset:{width:2, height:2},
        opacity:0.9,
        marginTop:10
    },
    smallText:{
        fontSize:12,
        color:'white',
        marginTop:5,
        fontWeight:'300'
    },
    mediumText: {
        fontSize: 16,
        color: 'white',
        marginTop: 5,
        fontWeight: '300'
    },
    largeText: {
        fontSize: 22,
        color: 'white',
        marginTop: 5,
        fontWeight: '300'
    },
    headerText:{
        fontSize: 22,
        color: 'white',
        marginTop: 15,
        fontWeight: '800',
        textDecorationLine:'underline'
    }
})

export default AboutScreen;