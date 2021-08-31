import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen</Text>
                <ImageBackground
                    source= {require('../assets/stars.gif')} 
                    style= {styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>STELLAR APP</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("TonightSky")}}>
                        <Text style= {styles.routeText}>Tonight Sky</Text>
                        <Image source={require("../assets/space.gif")}
                        style={{width:80, height:80}}/>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
      },
      routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: 'white',
      },
       routeText: {
            fontSize: 35,
            fontWeight: "bold",
            color: "black",
            marginTop: 75,
            paddingLeft: 30
        },
})