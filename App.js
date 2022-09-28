import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Platform, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Details from './Details';


var myBackground = require('./assets/icons/landingpage3.jpg');

function App({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground  style={styles.Image} source={myBackground }>
      
        <Text onPress = {() => navigation.navigate('Home')}  style={styles.font} >
          RECI
        </Text>
        <Text style={styles.font2}>
          COOK IT YOURSELF
        </Text>
      
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
}

export default function myApp() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image:{
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  font: {
    color:'white',
    fontSize:55,
    fontFamily:'Apple Color Emoji'

  },
  font2: {
    color:'white',
  }
});
