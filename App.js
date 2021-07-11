import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity, Platform , 
        StatusBar, ImageBackground, Image } from 'react-native';
import DailyPic from './screens/DailyPic';
import Home from './screens/Home';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

export default function App() {
  return (
    <View>
     <SafeAreaView>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
   <Stack.Screen name="Home" component={Home}/>
   <Stack.Screen name="DailyPic" component={DailyPic}/>
   <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
   <Stack.Screen name="StarMap" component={StarMap}/>
    </Stack.Navigator>
  </NavigationContainer>
 
    <ImageBackground source ={require('../assets/assets/photo.png')}
    style={styles.backgroundImage}>
       <View style={styles.titleBar}>
                        <Text style={styles.titleText}>STELLAR STAGE</Text>
                        </View>
                        <TouchableOpacity style={styles.routeCard} onPress={()=>{
                            this.props.navigation.navigate("DailyPic");
                        }}>
                            <Text style={styles.routeText}>Daily Pics of the sky</Text>
                            <Text style={styles.knowMore}>{"know more ---"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require('../assets/assets/daily_pictures.png')}
                            style={styles.iconImage}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard} onPress={()=>{
                            this.props.navigation.navigate("SpaceCrafts");
                        }}>
                            <Text style={styles.routeText}>Space Crafts</Text>
                            <Text style={styles.knowMore}>{"know more ---"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require('../assets/assets/space_crafts.png')}
                            style={styles.iconImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={()=>{
                            this.props.navigation.navigate("StarMap");
                        }}>
                            <Text style={styles.routeText}>Star Maps</Text>
                            <Text style={styles.knowMore}>{"know more ---"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require('../assets/assets/star_map.png')}
                            style={styles.iconImage}></Image>
                        </TouchableOpacity>
      </ImageBackground>
      </SafeAreaView>
      </View>
  );
}

const Stack=createStackNavigator();
const styles = StyleSheet.create({
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
  routeCard: {
      flex: 0.25,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      borderRadius: 30,
      backgroundColor: 'white'
  },
  titleBar: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center"
  },
  titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
  },
  routeText: {
      fontSize: 35,
      fontWeight: "bold",
      color: "black",
      marginTop: 75,
      paddingLeft: 30
  },
  knowMore: {
      paddingLeft: 30,
      color: "red",
      fontSize: 15
  },
  bgDigit: {
      position: "absolute",
      color: "rgba(183, 183, 183, 0.5)",
      fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1
  },
  iconImage: {
      position: "absolute",
      height: 200,
      width: 200,
      resizeMode: "contain",
      right: 20,
      top: -80
  }
});