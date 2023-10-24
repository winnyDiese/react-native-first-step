
import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function About (){
    return(
        <View style={style.view}>
            <Text style={style.title} >Apropos de moi</Text>
            <Text>Lorem ipsu uyb bubuybiubi bbujyvtjytv iuyvytv iytvuytv iytvuytv iytvuy </Text>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                <ActivityIndicator color="#FF0000" size="large" animating={true} />
                <ActivityIndicator color="#FF0000" size="large" animating={true} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        margin:20
    },
    title:{
        fontSize:22,
        marginBottom:20
    }
})