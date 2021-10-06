import React from "react";
import uuid from 'react-native-uuid'

class UserList{
    list = [{
        Key: uuid.v4(),
        Name: 'Andries',
        Surname: 'Sebola',
        Age: '15',
        Location: 'Polokwane'
    }]
}

export default new UserList();