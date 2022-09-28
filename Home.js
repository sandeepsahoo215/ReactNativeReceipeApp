import { StyleSheet,View , Text, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import { ScrollView } from "react-native-gesture-handler";
import Data from "./data";


var face = require('./assets/icons/face.jpg');
export default function Home({navigation}) {
    return (

        <><View style={styleH.v1}>
            <Text style={styleH.head}>
                Hello, <Text style={styleH.innertext}>Alex</Text>
            </Text>
            <Text style={styleH.h2}>
                what do you like to cook ?
            </Text>
            <Image style={styleH.img} source={face}></Image>
        </View>
        <TextInput style={styleH.input}
        placeholder='search for receipe'
        ></TextInput>
        <Data navigation = {navigation}/>

       
        </>
    );
}

const styleH = StyleSheet.create({
    v1: {
        marginTop:60,
        marginLeft:30,
    },
    head:{
        fontSize:28,
        color:'black'
    },
    h2: {
        color:'grey'
    },
    img:{
       height:76,
       width:76,
       borderRadius:38,
       position:'absolute',
       marginLeft:250,
    },
    tr: {
        marginTop:30,
        marginLeft:30,
        fontSize:24,
        color:'black'
    },
    input: {
        marginTop:40,
        height: 40,
        margin: 12,
        width:400,
        borderWidth: 1,
        borderRadius:8,
        padding: 10,
    },
    innertext: {
        color:'red'
    }
    
})





