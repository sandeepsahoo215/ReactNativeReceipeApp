import { View , Text, StyleSheet, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Details({route}) {
    // console.log(route.params)
    const {item} = route.params
    return (

        <View style={styles.main}> 
            <View>
                <Text style={styles.head}>Recipe</Text>
                <Image style={styles.imgstyle}
                    resizeMode="cover"
                    source={{uri: item.photoUrl}}
                />

                <Text style={styles.title}>
                    {item.title}
                </Text>  
            </View>
            
           <View style={styles.mainig}>
                <View style={styles.time}>
                    <Text style={styles.txtclr}>{item.prepTime} hrs</Text>
                    <Text style={styles.txtclr}>{item.cookTime} mins</Text>
                    <Text style={styles.txtclr}>{item.servings}</Text>
                </View>
                <View style={styles.time}>
                    <Text>PrepTime</Text>
                    <Text>CookTime</Text>
                    <Text>Servings</Text>
                </View>
                
           </View>
           
           <View style = {styles.hgv}>
           <Text style={styles.ighead}>Ingredients</Text>
           
           </View>
           <ScrollView style = {styles.scrv}>
           <Text style={styles.inglist}>
            {item.ingredients}
           </Text>
           </ScrollView>
        </View>
           
        




    );
};

const styles = StyleSheet.create({
    main:{
      flex : 1,
      justifyContent : 'center'  ,
      paddingBottom : 50
    },
    title:{
        
        color:'black',
        fontSize:23,
        marginLeft:75,
        padding:10,
        
        
    },
    imgstyle:{
        width: 400,
        height:250,
        marginLeft:15,
        borderRadius:10,
    },
    card: {
        width:200,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginVertical:20,
        borderRadius:5,
    },
    head: {
        fontSize:40,
        marginLeft:150
    },
    inglist: {
        justifyContent: 'space-around',
        fontSize:18,
        marginLeft:10,
    },
    time: {

        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:40,
        color:'red'
    },
    ighead: {
        fontSize:25,
        alignSelf : 'flex-start',
        paddingLeft : 10
    },
    mainig: {
        margin:10,
        padding:10,
        borderWidth:1,
        borderRadius:6,
        borderColor:'gray'
    },
    txtclr: {
        color:'red'
    },
    scrv: {
        flex : 1, 
        backgroundColor : 'white', 
        paddingHorizontal : 1
    },
    hgv: {
        justifyContent : 'space-between'
    }

})