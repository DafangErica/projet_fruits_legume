import { StyleSheet, Text, View, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
const sac=require('../assets/sacmain.png');

export default function App({navigation}) {
  
    return (
        <ScrollView style={styles.container}>
            <View style={styles.entete}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="border border-gray-50 rounded-xl">
            <View style={{width:30,height:30,backgroundColor:'#fff',borderRadius:8,justifyContent:'center',marginTop:40,marginLeft:10}}>
                <Text style={{fontSize:25,color:"#000",marginLeft:6,fontWeight:'bold'}}>&lt;</Text>              
            </View>

            </TouchableOpacity>
                
            </View>
            <Image source={sac} style={{width: 150, height:300,marginLeft:90}}/>
        </ScrollView>

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
    
    })
