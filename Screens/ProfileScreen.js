import { StyleSheet, Text, View, Image, TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import React from 'react';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

// import  Icon from 'react-native-vector-icons/FontAwesome';
// import lorem from '../composant/lorem';
// import { LoremIpsumUI } from 'react-native-lorem-ipsum-ui';
// import loremIpsum from 'lorem-ipsum';
const partage= require('../assets/partage.png');
const Orange = require('../assets/FRUITS/orange.png');




export default function App() {
  
    return (
        <View style={styles.container}>
        <View style={styles.entete}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="border border-gray-50 rounded-xl">
        <View style={{width:30,height:30,backgroundColor:'pink',borderRadius:8,justifyContent:'center',marginTop:40,marginLeft:10}}>
                <Text style={{fontSize:25,color:"#000",marginLeft:6,fontWeight:'bold'}}>&lt;</Text>              
            </View>

            </TouchableOpacity>

        <Image source={partage} style={{width:40 ,height:40,marginTop:30,}}/>
        </View>
        <View style={styles.titre}>
            <Text style={{fontSize:25,color:"#000",marginLeft:100,fontWeight:'bold',marginTop:-40}}>Product Detail</Text>
            <Text style={{fontSize:30,color:"#000",marginLeft:20,fontWeight:'bold',marginTop:20}}>Juicy Orange</Text>    
            <Text style={{fontSize:17,color:"#000",marginLeft:20,marginTop:1,color:'pink'}}>sweet and juicy</Text>    
        </View>
        <View style={styles.Text}>
        <Text style={{fontSize:17,color:"#000",marginLeft:20,marginTop:1}}>          Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a bad galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic wisa typesetting.
</Text>    

        </View>
        <View style={styles.barre}>
        <View style={{width:60,height:60,borderRadius:15,justifyContent:'center',marginTop:10,marginLeft:10,alignItems:'center',borderColor:'pink',borderWidth:2}}><Text style={{marginTop:5,fontSize:40,color:'pink'}}> ♥ </Text></View>
        <View style={{width:250,height:60,backgroundColor:'pink',borderRadius:12,alignItems:'center',marginTop:10,marginLeft:10,}}><Text style={{marginTop:20,fontWeight:'bold',color:'#fff'}}> Find Nearest Store </Text></View>

        </View>
        <View style={styles.bas}>
            <Image source={Orange} style={{width:260,height:200, marginLeft:80, marginTop:-100}}/>
            <View style={styles.fact}>
                <Text style={{fontWeight:'bold',fontSize:20}}> Nutrition Facts</Text>
            </View>
            <View style={styles.stat1}>
            <Text style={{fontSize:20}}> Fiber 3g</Text>
            <Text style={{fontSize:20}}> 7%</Text>
                </View>
                            
            <View style={styles.bois1}>
            </View>
            <View style={styles.stat2}>
            <Text style={{fontSize:20}}> Good Sugar 12g</Text>
            <Text style={{fontSize:20}}> 5%</Text>

            </View>
            <View style={styles.bois1}></View>
        </View>
        {/* <View style={styles.entete}></View> */}


        </View>

    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEF1FF',
      // alignItems: 'center',
      // justifyContent: 'center',
      display: 'flex',
  
  
    },
    entete: {
        width:'100%',
        height:'10%',
        flexDirection:'row',
        justifyContent:"space-between"
    },
    Text:{
        width:'100%',
        height:'20%',

    },
    titre: {
        width:'100%',
        height:'10%',
    },
    barre :{
        width:'100%',
        height:'10%',
        flexDirection:'row',
        

    },
    bas:{
        width:'100%',
        height:400,
        backgroundColor:'#fff',
        marginTop:'25%',
        borderRadius:50,
        flexDirection:'column'


    },
    fact:{
        width:'100%',
        height:'10%',
        marginTop:10

    } ,
    stat1:{
        width:'100%',
        height:'10%',
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'


    },
    bois1:{
        marginLeft:20,
        width:'90%',
        height:'3%',
        backgroundColor:'pink',
        borderRadius:6,
        marginTop:-15
        
        
        

    },
    stat2:{
        marginTop:20,
        width:'100%',
        height:'10%',
        flexDirection:'row',
        justifyContent:'space-between'
    



    },
    bois2:{
        width:'100%',
        height:'10%',
        backgroundColor:'red',
        
        

    }



}
)  
