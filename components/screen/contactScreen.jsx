import React, { useState } from "react";
import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native-animatable";
import { Divider, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ContactScreen = () => {

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

    const handleSubmit = () => {
        if (validate()) {
            alert("Thanks for the call request, I will contact you sooner than expected.")
        } else {
            if (age == '') {
                sethasAge(false);
            }
            if (name == '') {
                sethasName(false);
            }
            if (surname == '') {
                sethasSurname(false);
            }
            if (location == '') {
                setLocation(false);
            }
        }
    }

    const validate = () => {

        if (age == '') {
            sethasAge(false);
            return false;
        }
        if (name == '') {
            sethasName(false);
            return false;
        }
        if (surname == '') {
            sethasSurname(false);
            return false;
        }
        if (location == '') {
            setLocation(false);
            return false;
        }

        return true;
    }


    return (


        <SafeAreaView style={styles.parent}>
            <View style={styles.contactCard}>
                <View style={styles.contactDetails}>
                    <Icon name="person" type="ionicons"
                        size={68} />

                    <View >
                        <Text style={styles.names}>Andries Sebola</Text>
                        <Text>
                            <Icon name="email" type="ionicons"
                                size={16} />  andriesmpontsheng@gmail.com</Text>
                        <Text>
                            <Icon name="phone" type="ionicons"
                                size={16} />  +27 63 783 8676</Text>
                        <Text>
                            <Icon name="person-outline" type="ionicon"
                                size={16} />  Software Developer</Text>
                        <Text>
                            <Icon name="location" type="ionicon"
                                size={16} />  Polokwane</Text>
                    </View>
                </View>
                <Divider width={2} />

                <View style={styles.contactInputs}>

                    <Text style={styles.inputHader}>
                        Also feel free to request a call if in need!  <Icon name="location1" type="ionicon"
                            size={16} /> <Icon name="location1" type="ionicon"
                                size={16} /> <Icon name="location1" type="ionicon"
                                    size={16} /> </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Names'
                        onEndEditing={(e) => handleSurnameVal(e.nativeEvent.text)} value={surname} onChangeText={(text) => setSurname(text)}
                    />
                    {hasSurname ? null :
                        <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                            Required
                        </Animatable.Text>}


                    <TextInput
                        style={styles.input}
                        placeholder='Contact'
                        onEndEditing={(e) => handleAgeVal(e.nativeEvent.text)} value={age} onChangeText={(text) => setAge(text)}
                    />
                    {hasAge ? null :
                        <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                            Required
                        </Animatable.Text>}


                    <TextInput
                        style={styles.input}
                        placeholder='Email'
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
                        <Text style={styles.bntText}> Request a call back</Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: width,
        height: height,
        justifyContent: 'center'
    },
    contactCard: {
        width: width - 60,
        marginBottom: 100,
        borderRadius: 8,
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: "white",
        paddingBottom: 20

    },
    contactDetails: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10

    },
    contactInputs: {

        paddingBottom: 10,
        paddingTop: 10
    },
    names: {
        fontSize: 28,
        textAlign: 'center'
    }, input: {
        height: 40,
        borderWidth: 1.5,
        borderColor: "#000000",
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 5,
        borderRadius: 7
    },
    button: {
        height: 40,
        backgroundColor: "#00ffcc",
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        fontSize: 18,
        color: "#ffffff",
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        borderRadius: 12

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
    },
    inputHader: {
        fontSize: 14,
        marginLeft: 15,
        paddingBottom: 15,
        fontWeight: 'bold',
        color: 'green'
    }
})
export default ContactScreen;