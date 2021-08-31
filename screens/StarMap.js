import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component{
    constructor(){
        super();
        this.state={
            longitude:'',
            latitude:''
        }
    }
    render(){
        const{longitude,latitude}= this.state;
        const path= 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true';
        return(
            <View style= {styles.container}>
                <SafeAreaView style= {styles.androidSafeArea}/>
                <View style={styles.buttons}>
                <Text style={styles.titleText}>Star Map</Text>
                <TextInput
            style={styles.inputStyle}
            placeholder="Enter your longitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                longitude: text
              })
            }}
          />
           <TextInput
            style={styles.inputStyle}
            placeholder="Enter your latitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                latitude: text
              })
            }}
          />
          </View>
          <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20, }}
        />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: "#1a0023" 
    },
    buttons:{ 
        flex: 0.3,
        marginTop: 20, 
        alignItems: 'center'
    },
    androidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
      },
      titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
      },
})