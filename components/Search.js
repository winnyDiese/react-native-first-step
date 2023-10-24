
import React, { useState } from 'react'
import {} from 'react-native'
import { TextInput } from 'react-native-web'

export default function Search(){
    const [city, setCity] = useState("Montpelier")
    return(
        <TextInput 
            underlineColorAndroid='transparent'
            style={{ height:40, borderColor:'gray', borderWidth:1}} 
            value={city}
            onChangeText={e => setCity(setCity)}
        />
    )
}