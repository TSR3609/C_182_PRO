import React from "react"
import { StyleSheet, View,Text,SafeAreaView,StatusBar,Platform } from "react-native"
import { Camera } from "expo-camera"
import * as Permissions from "expo-permissions"
import * as FaceDetector from "expo-face-detector"
export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasCameraPermission:null,faces:[]}
    }
    render(){
        if(hasCameraPermission === null){
        return
            <View/>
        }
        if(hasCameraPermission === false){
            return(
            <View style = {{flex:1}}><Text>No access to Camera....!</Text></View>
            )
        }
    }
    
}