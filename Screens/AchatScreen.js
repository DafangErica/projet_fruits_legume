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
                    <Image source={delet} style={{width:40, height:40, marginLeft:80, marginTop:20,borderRadius:10,backgroundColor:'grey'}}/>
                
            </View>
            <View style={styles.raisains}>
            <Image source={raisain} style={{ width:70,height:60, marginLeft:10, marginTop:15,borderRadius:15,backgroundColor:'#bbcfff'}}/>
                <Text style={{fontSize:20,marginLeft:30,marginTop:30}}>1x</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:15}}> Graphe</Text>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:10}}> $10</Text>
                </View>
                    <Image source={delet} style={{width:40, height:40, marginLeft:80, marginTop:20,borderRadius:10,backgroundColor:'grey'}}/>

            </View>
            <View style={styles.bananes}>
            <Image source={banane} style={{ width:70,height:60, marginLeft:10, marginTop:15,borderRadius:15,backgroundColor:'#ffe569'}}/>
                <Text style={{fontSize:20,marginLeft:30,marginTop:30}}>1x</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:15}}> Banane</Text>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:10}}> $10</Text>
                </View>
                    <Image source={delet} style={{width:40, height:40, marginLeft:80, marginTop:20,borderRadius:10,backgroundColor:'grey'}}/>

            </View>
            <View style={styles.ananas}>
            <Image source={ananas} style={{ width:70,height:60, marginLeft:10, marginTop:15,borderRadius:15,backgroundColor:'#ffe569'}}/>
                <Text style={{fontSize:20,marginLeft:30,marginTop:30}}>1x</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:15}}> ananas</Text>
                    <Text style={{fontSize:20,marginLeft:40,marginTop:10}}> $10</Text>
                </View>
                    <Image source={delet} style={{width:40, height:40, marginLeft:80, marginTop:20,borderRadius:10,backgroundColor:'#7f8487'}}/>

            </View>
            <View style={styles.prix}>
                <Text style={{fontSize:30,textAlign:'left', marginLeft:10,marginTop:30,fontWeight:'bold'}}> Total Price</Text>
                <Text style={{fontSize:30,textAlign:'right', marginRight:10,marginTop:30,fontWeight:'bold'}}> $40</Text>

            </View>
            <View style={styles.paie}>
            <Text style={{fontSize:30,textAlign:'left', marginLeft:60,justifyContent:'center',color:'#fff'}}> payement</Text>

            </View>


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
    
        },
        titre :{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            marginTop:40

    
        },
        oranges: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            marginTop:20,

    
        },
        raisains: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            marginTop:20

    
        },
        bananes: {
            width:'100%',
            height:'10%',
            flexDirection:'row',
            marginTop:20,
    
        },
        ananas: {
            width:'100%',
            height:'10%',
            flexDirection:'row',

    
        },
        prix:{
            width:'100%',
            height:'10%',
            flexDirection:'row',
            marginTop:50,
            justifyContent:'space-between'

    
        },

        paie:{
            width:'70%',
            height:'7%',
            flexDirection:'row',
            backgroundColor:'pink',
            marginTop:5,
            marginLeft:50,
            borderRadius:'20%'
    
        }
        



    })