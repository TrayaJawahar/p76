import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet , SafeAreaView , ImageBackground, Image,
         TouchableOpacity,
         Linking} from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(){
        super();
        this.state={
            apod:[]
        }
    }

getAPOD =()=>{
    axios 
    .get("https://api.nasa.gov/planetary/apod?api_key=LGper4KaUrErwKoLGD4j2aGs8IaNXDb7g7uzgzDG")
    .then (response =>{
        this.setState({ apod:response.data })
    })
   .catch (error=>{
       Alert.alert(error.message)
   })
}

    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style ={styles.driodSafeArea}/>
                    <ImageBackground 
                    source ={require('../assets/assets/daily_pictures.png')} 
                    style={styles.backgroundImage}>
                <Text style ={styles.routeText}>Astronomy picture of the day</Text>
                <Text style ={styles.titleText}>{this.state.apod.title}</Text>
                <TouchableOpacity style={styles.listContainer}
                onPress={() => Linking.openURL(this.state.apod.url)
                    .catch(err=> console.error("Couldn't load the page", err))}>
            <View style={styles.iconContainer}>
            <Image source={require("../assets/assets/play_video.png")}
            style={{width:50 , height :50}}></Image>
            </View>
                    </TouchableOpacity>
                    <Text style ={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}




const styles= StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    listContainer: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    explanationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
})