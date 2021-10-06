import React, {useState} from "react";
import { Picker, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import uuid from 'react-native-uuid'

const Form=({AddData})=>{

    const [hasName, sethasName] = useState(true)
    const [hasSurname, sethasSurname] = useState(true)
    const [hasAge, sethasAge] = useState(true)
    const [hasLocation, sethasLocation] = useState(true)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')

    const [valid, setvalid] = useState(false)
    

// ============================================================

    const handleNameVal = (val) => {
        if (val.trim().length > 2) {
            sethasName(true);
        } else {
            sethasName(false);
        }
    }

    const handleSurnameVal = (val) => {
        if (val.trim().length > 2) {
            sethasSurname(true);
        } else {
            sethasSurname(false);
        }
    }

    const handleAgeVal = (val) => {
        if (val.trim().length < 3) {
            sethasAge(true);
        } else {
            sethasAge(false);
        }
    }

    const handleLocationVal = (val) => {
        if (val.trim().length > 2) {
            sethasLocation(true);
        } else {
            sethasLocation(false);
        }
    }


const handleSubmit=()=>{
    if(validate()){
    AddData(uuid.v4(),name,surname,age,location);
    }else {
        if(age == ''){
            sethasAge(false);
        }
         if(name == ''){
            sethasName(false);
        }
         if(surname == ''){
            sethasSurname(false);
        }
         if(location == ''){
            setLocation(false);
        }
    }
}


const validate=()=>{

        if(age == ''){
            sethasAge(false);
            return false;
        }
         if(name == ''){
            sethasName(false);
            return false;
        }
         if(surname == ''){
            sethasSurname(false);
            return false;
        }
         if(location == ''){
            setLocation(false);
            return false;
        }

        return true;
}
// ============================================================

    return(
        <SafeAreaView style={styles.form}>
            <Text>Record a new user</Text>
            
            <View style={styles.form}>

                    <TextInput  
                    style={styles.input}
                    placeholder='User Name'
                    onEndEditing={(e) => handleNameVal(e.nativeEvent.text)} value={name} onChangeText={(text) => setName(text)}
                    />
                {hasName ? null :
                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                        Required
                    </Animatable.Text>}



                <TextInput
                    style={styles.input}
                    placeholder='User Surname'
                    onEndEditing={(e) => handleSurnameVal(e.nativeEvent.text)} value={surname} onChangeText={(text) => setSurname(text)}
                />
                 {hasSurname ? null :
                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                        Required
                    </Animatable.Text>}   


                <TextInput
                    style={styles.input}
                    placeholder='User Age'
                    onEndEditing={(e) => handleAgeVal(e.nativeEvent.text)} value={age} onChangeText={(text) => setAge(text)}
                />
                {hasAge ? null :
                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                        Required
                    </Animatable.Text>}


                <TextInput
                    style={styles.input}
                    placeholder='User Address'
                    onEndEditing={(e) => handleLocationVal(e.nativeEvent.text)} value={location} onChangeText={(text) => setLocation(text)}
                />
                {hasLocation ? null :
                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                        Required
                    </Animatable.Text>}

                <Pressable
                    style={styles.button}
                    icon="send"
                    mode="contained" 
                    onPress={handleSubmit}>
                    <Text style={styles.bntText}> Sign user up </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        borderWidth:1.5,
        borderColor:"#000000", 
        marginTop: 5,
        marginLeft: 15,
        marginRight:15,
        paddingLeft:5,
        borderRadius:7
    },
    button:{
        height:40,
        backgroundColor:"#00ffcc",
        marginRight:15,
        marginLeft:15,
        marginTop:15,
        fontSize:18,
        color:"#ffffff",
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:12

    },
    form:{
        height:400,
        justifyContent:'center'
    },
    errText: {
        color: "red",
        fontSize: 14,
        fontWeight: "200",
        marginLeft: 10
    },
    bntText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    }

})
export default Form;