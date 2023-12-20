import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
const raisain = require('../assets/FRUITS/raisain.png');
const banane = require('../assets/FRUITS/banane.png');
const ananas = require('../assets/FRUITS/ananas.png');
const Orange = require('../assets/FRUITS/orange.png');
const panier= require('../assets/panier.png');
const delet=require('../assets/delete.png');



export default function App() {
    return(
        <View style={styles.container}>
            <View style={styles.entete}>
            <View style={{width:30,height:30,backgroundColor:'#fff',borderRadius:8,justifyContent:'center',marginTop:40,marginLeft:10}}>
                <Text style={{fontSize:25,color:"#000",marginLeft:6,fontWeight:'bold'}}>&lt;</Text>              
            </View>
            <Image source={panier} style={{width:40,height:40,marginTop:30,}}/>

            </View>
            <View style={styles.titre}>
                <Text style={{fontSize:40,marginLeft:10}}>My Order</Text>
            </View>
            <View style={styles.oranges}>
                <Image source={Orange} style={{ width:70,height:60, marginLeft:10, marginTop:15,borderRadius:15,backgroundColor:'#ffd1e3'}}/>
                <Text style={{fontSize:20,marginLeft:30,marginTop:30}}>1x</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:15}}> Orange</Text>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:10}}> $10</Text>
                </View>
                    <Image source={delet} style={{width:60, height:30, marginRight:30, marginTop:}}/>
                
            </View>
            <View style={styles.raisains}></View>
            <View style={styles.bananes}></View>
            <View style={styles.ananas}></View>
            <View style={styles.prix}></View>
            <View style={styles.paie}></View>


        </View>
    );};

    const styles=StyleSheet.create({
        container: {
            flex: 1,
            flexDirection:'column'
        },
        entete:{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            justifyContent:"space-between",
            backgroundColor:"green"
    
        },
        titre :{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'orange',
            marginTop:40

    
        },
        oranges: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'purple',
            marginTop:20,

    
        },
        raisains: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'yellow',
            marginTop:20

    
        },
        bananes: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'red',
            marginTop:20,
    
        },
        ananas: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'pink',
            marginTop:20

    
        },
        prix:{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'red',
            marginTop:50

    
        },

        paie:{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            backgroundColor:'yellow',
            marginTop:5
    
        }
        



    })