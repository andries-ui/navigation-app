import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Divider, Header, Icon, Image } from "react-native-elements";
import UsersList from '../class/userClass';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailsScreen = ({ route, navigation }) => {

    const { itemKey } = route.params;
    const key = itemKey;

    const [bottomSheetNames, setBottomSheetNames] = useState(false);
    const [bottomSheetAge, setBottomSheetAge] = useState(false);
    const [bottomSheetLocation, setBottomSheetLocation] = useState(false);

    const [hasName, sethasName] = useState(true)
    const [hasSurname, sethasSurname] = useState(true)
    const [hasAge, sethasAge] = useState(true)
    const [hasLocation, sethasLocation] = useState(true)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')
    const [userInfo, setuserInfo] = useState([])

    const [_name, setname] = useState('');
    const [_surname, setsurname] = useState('');
    const [_age, setage] = useState('');
    const [_gender, setgender] = useState('');
    const [_location, setlocation] = useState('');



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
        if (val.trim().length < 2) {
            sethasAge(true);
        } else {
            sethasAge(false);
        }
    }

    const handleLocationVal = (val) => {
        if (val.trim().length > 3) {
            sethasLocation(true);
        } else {
            sethasLocation(false);
        }
    }



    const pressHandlerUpdateNames = (id, e) => {

        const index = UsersList.list.findIndex((user) => {
            return user.Key === id
        });

        const user = Object.assign({}, UsersList.list[index]);

        user.Key = id;
        user.Name = { name };
        user.Surname = { surname };
        user.Age = item().Age;
        user.Location = item().Location;

        const users = Object.assign([], UsersList.list);

    }


    const pressHandlerDelete = (id, e) => {

        const index = UsersList.list.findIndex((user) => {
            return user.Key === id
        });

        UsersList.list.splice(index, 1);

        navigation.navigate("HomeScreen");

    }

    let item = () => {
        return UsersList.list.filter(action => {
            return action.Key === key
        })
    }
    console.log(item());

    useEffect(() => {

        setuserInfo(item())

    }, [])



    return (
        <SafeAreaView >


            {userInfo ?
                userInfo.map(info =>

                    <View style={styles.parent}>
                        <View style={styles.header}>


                            <Image source={require('../images/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg')} style={styles.image} >
                                <Icon name="arrow-back" type="ionicons" size={25} style={styles.back}
                                    onPress={() => navigation.navigate('HomeScreen')} />
                            </Image>

                            <View style={styles.options}>

                                <Text style={styles.name}> {info.Name} {info.Surname}</Text>
                                <Icon name="create" type="ionicons" size={25} style={styles.edit}
                                    onPress={() => { setBottomSheetLocation(false); setBottomSheetNames(true); setBottomSheetAge(false) }} />

                                <Icon name="delete" type="ionicons" size={25} style={styles.delete}
                                    onPress={() => pressHandlerDelete(info.Key)} />

                            </View>


                        </View>


                        {/* body */}
                        <ScrollView>
                            <View style={styles.body}>

                                <Text style={styles.textheader}>
                                    Personal details
                                </Text>
                                <View style={styles.item}>
                                    <Text style={styles.valName}>
                                        Age
                                    </Text>
                                    <Divider />
                                    <View style={styles.valView}>
                                        <Text style={styles.value}>
                                            {info.Age}
                                        </Text>

                                        <Icon name="create" type="ionicons" size={22} style={styles.delete}
                                            onPress={() => { setBottomSheetLocation(false); setBottomSheetNames(false); setBottomSheetAge(true) }} />
                                    </View>

                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.valName}>
                                        Location
                                    </Text>
                                    <Divider />
                                    <View style={styles.valView}>
                                        <Text style={styles.value}>
                                            {info.Location}
                                        </Text>

                                        <Icon name="create" type="ionicons" size={22} style={styles.delete}
                                            onPress={() => { setBottomSheetLocation(true); setBottomSheetNames(false); setBottomSheetAge(false) }} />
                                    </View>

                                </View>

                                <View style={styles.item}>
                                    <Text style={styles.valName}>
                                        ID
                                    </Text>
                                    <Divider />
                                    <View style={styles.valView}>
                                        <Text style={styles.value}>
                                            {key}
                                        </Text>

                                        <Icon name="create" type="ionicons" color="grey" size={22} />
                                    </View>

                                </View>

                            </View>

                        </ScrollView>


                        {bottomSheetNames ?
                            <View style={styles.editStyle}>

                                <Icon
                                    name="cancel"
                                    type="ionicons"
                                    size={32} color="#000000"
                                    onPress={() => setBottomSheetNames(false)} />


                                <TextInput
                                    style={styles.input}
                                    placeholder='Name'
                                    onEndEditing={(e) => handleNameVal(e.nativeEvent.text)} value={name} onChangeText={(text) => setName(text)}
                                />

                                {hasName ? null :
                                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                                        Required
                                    </Animatable.Text>}

                                <TextInput
                                    style={styles.input}
                                    placeholder='Surname'
                                    onEndEditing={(e) => handleSurnameVal(e.nativeEvent.text)} value={surname} onChangeText={(text) => setSurname(text)}
                                />

                                {hasSurname ? null :
                                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                                        Required
                                    </Animatable.Text>}

                                <Pressable
                                    style={styles.button}
                                    icon="send"
                                    mode="contained" onPress={pressHandlerUpdateNames(info.Key)}>
                                    <Text style={styles.bntText}> Update Names </Text>
                                </Pressable>
                            </View>
                            : null}

                        {bottomSheetAge ?
                            <View style={styles.editStyle}>

                                <Icon
                                    name="cancel"
                                    type="ionicons"
                                    size={32} color="#000000"
                                    onPress={() => setBottomSheetAge(false)} />


                                <TextInput
                                    style={styles.input}
                                    placeholder='Age'
                                    onEndEditing={(e) => handleAgeVal(e.nativeEvent.text)} value={age} onChangeText={(text) => setAge(text)}
                                />
                                {hasAge ? null :
                                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                                        Required
                                    </Animatable.Text>}

                                <Pressable
                                    style={styles.button}
                                    icon="send"
                                    mode="contained">
                                    <Text style={styles.bntText}> Update Age </Text>
                                </Pressable>
                            </View>
                            : null}

                        {bottomSheetLocation ?
                            <View style={styles.editStyle}>

                                <Icon
                                    name="cancel"
                                    type="ionicons"
                                    size={32} color="#000000"
                                    onPress={() => setBottomSheetLocation(false)} />


                                <TextInput
                                    style={styles.input}
                                    placeholder='Location'
                                    onEndEditing={(e) => handleLocationVal(e.nativeEvent.text)} value={location} onChangeText={(text) => setLocation(text)}
                                />
                                {hasLocation ? null :
                                    <Animatable.Text animation="fadeInLeft" duration={500} style={styles.errText}>
                                        Required
                                    </Animatable.Text>}

                                <Pressable
                                    style={styles.button}
                                    icon="send"
                                    mode="contained">
                                    <Text style={styles.bntText}> Update Address </Text>
                                </Pressable>
                            </View>
                            : null}

                    </View>

                )
                : null}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    parent: {
        height: height,
        width: width,
        paddingTop: 35,
        paddingBottom: 50
    },
    header: {
        height: 250,
        width: width,
        backgroundColor: '#33ccff',
        justifyContent: 'flex-start'
    },
    back: {
        width: 40
    },
    edit: {
        bottom: 0,
        right: 0,
    },
    delete: {
        bottom: 0,
        width: 40,
        marginRight: 10,
        marginRight: 20
    },
    image: {
        height: 220,
        width: width,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    name: {
        width: width - 60,
        color: 'white',
        fontSize: 22,
        fontWeight: '400'

    },
    body: {

        height: 350,
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 12,
        padding: 30
    },
    item: {
        marginTop: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    valName: {
        color: '#8C8E8A',
        fontSize: 16
    },
    valView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    value: {
        width: width - 110,
        fontSize: 18
    },
    textheader: {
        color: 'black',
        fontSize: 25
    },
    editStyle: {

        height: 250,
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: width,
        paddingLeft: 15,
        paddingRight: 15
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
    form: {
        height: 400,
        justifyContent: 'center'
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

export default DetailsScreen;