import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from './ProfileScreen';
 import { createStackNavigator } from '@react-navigation/stack';
// import { withNavigation } from 'react-navigation';


import { useState } from 'react';
import { LineChart } from 'react-native-chart-kit';


// const signal = require('./assets/signal_26px.png');
// const wifi = require('./assets/wi-fi_lock_50px.png');
// const baterie = require('./assets/batteries_30px.png');
const menu=require('../assets/menu.png');
const personne=require('../assets/personne.png');
const panier= require('../assets/panier.png');
const home = require('../assets/home.png');
const profil = require('../assets/pp.png');
const like = require('../assets/like.png');
const loupe = require('../assets/loupe.png');
const raisain = require('../assets/FRUITS/raisain.png');
const banane = require('../assets/FRUITS/banane.png');
const ananas = require('../assets/FRUITS/ananas.png');
const boutique = require('../assets/boutique.png');
const boutique2 = require('../assets/boutique2.png');
const Orange = require('../assets/FRUITS/orange.png');
// const ble1 = require('./assets/bles/ble.png');
// const ble2 = require('./assets/bles/ble2.png');
// const graine = require('./assets/bles/graine.png');
// const mais = require('./assets/bles/mais.png');
// const aubergine = require('./assets/legume/aubergine.png');
// const carottes = require('./assets/legume/carottes.png');
// const celeri = require('./assets/legume/celeri.png');
// const chou = require('./assets/legume/chou.png');
// const choufleur = require('./assets/legume/choufleur.png');
// const poivron = require('./assets/legume/poivron.png');
// const igname = require('./assets/tubercule/igname.png');
// const manioc = require('./assets/tubercule/manioc.png');
// const patate = require('./assets/tubercule/patate.png');
// const pommedeterre = require('./assets/tubercule/pommedeterre.png');


export default function App({navigation}) {
  // const[value,setValue] =React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.corps}>
        <View style={styles.gauge}>
          <Image source={menu} style={styles.menu} />
          <View style={{ width: 300, height: 300, borderRadius: 60, marginTop: 40, marginLeft: 120 }}>
            <Image source={profil} style={{

              // margin: '5%',
              width: '15%',
              height: '15%',
              resizeMode: 'contain',
              alignContent: 'center',
              backgroundColor: '#fff',

              borderRadius: 60,
              borderWidth: 1,
              borderColor: '#fff',
            }} />

          </View>
        </View>
        <Text style={styles.premier}>Discover Seasonal</Text>
        <Text style={styles.deuxieme}>
          Fruits and Vegitables
        </Text>
        
          <ScrollView horizontal={true}  style={{ height: 50, marginLeft:5, marginTop: 80, flexDirection:'row', backgroundColor:'#EEF1FF'}}>
            <View style={{
              backgroundColor: '#FFCCD2',
              width: 100,
              height: 50,
              borderRadius: 50,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#FF5F7E', fontSize: 20, marginTop: 10 }}>Orange</Text>
            </View>
            <View style={{
              backgroundColor: '#EEF1FF',
              width: 100,
              height: 50,
              marginLeft: 12,
              borderRadius: 50,
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 20, marginTop: 10 }}>Grape</Text>
            </View>
            <View style={{
              backgroundColor: '#EEF1FF',
              width: 100,
              height: 50,
              marginLeft: 12,
              borderRadius: 50,
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 20 , marginTop:10}}>pineaple</Text>
            </View>
            <View style={{
              backgroundColor: '#EEF1FF',
              width: 100,
              height: 50,
              marginLeft: 12,
              borderRadius: 50,
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 20, marginTop:10 }}>raisain</Text>
            </View>
            <View style={{
              backgroundColor: '#EEF1FF',
              width: 100,
              height: 50,
              marginLeft: 12,
              borderRadius: 50,
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 20 , marginTop:10}}>banane</Text>
            </View>

          </ScrollView>
          {/* <TouchableOpacity  onPress={()=>navigation.navigate('Profile')} > */}
          <ScrollView horizontal={true} style={{marginTop:40 ,flexDirection:'row'}}>
          <View style={{
        backgroundColor: '#ffc47e',
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        padding: '5%',
        // justifyContent: 'space-around',
        //  alignItems: 'center',
      }}>
        <Image source={like} style={{

          // margin: '5%',
          width: '15%',
          height: '15%',
          resizeMode: 'contain',
          alignContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 60,
          borderWidth: 5,
          borderColor: '#fff',
        }} />
        <Image source={Orange} style={{ width: 60, height: 60,marginLeft:50, justifyContent: 'center',marginTop:-20 }} />
       <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
       <Text style={{
          marginTop: 40,
          //  fontFamily: 'arial',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#e36414'

        }}>orange</Text>
        <Text style={{
          marginTop: 3,
          // fontFamily: 'arial',
          fontSize: 10,
          fontWeight: 'bold',
          color: '#e36414',
          marginTop:45
        }}>$10</Text>
       </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile') }>

        <View style={{
          display: 'flex',
          width: 50,
          height: 40,
          borderRadius: 20,
          justifyContent:'center'
        }}>
          <View style={{
             backgroundColor: '#e36414',
             width: 90,
             height: 30,
             borderRadius: 50,
             alignItems: 'center',
          marginLeft:30
          }}>
            <Text style={{
            marginTop: 3,
            paddingTop: 3,
            //  fontFamily: 'arial',
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
          }}>Add</Text>
          </View>
        </View>


            </TouchableOpacity>

      </View>



      <View style={{
        backgroundColor: '#7577cd',
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        padding: '5%',
        marginLeft:10,
        // justifyContent: 'space-around',
        //  alignItems: 'center',
      }}>
        <Image source={like} style={{

          // margin: '5%',
          width: '15%',
          height: '15%',
          resizeMode: 'contain',
          alignContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 60,
          borderWidth: 5,
          borderColor: '#fff',
        }} />
        <Image source={raisain} style={{ width: 60, height: 60,marginLeft:50, justifyContent: 'center' ,marginTop:-20}} />
       <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
       <Text style={{
          marginTop: 40,
          //  fontFamily: 'arial',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#080957'

        }}>Grape</Text>
        <Text style={{
          marginTop: 3,
          // fontFamily: 'arial',
          fontSize: 10,
          fontWeight: 'bold',
          color: '#080957',
          marginTop:45
        }}>$10</Text>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate('Profile') }>

        <View style={{
          display: 'flex',
          width: 50,
          height: 40,
          borderRadius: 20,
          justifyContent:'center'
        }}>
            <View style={{
             backgroundColor: '#080957',
             width: 90,
             height: 30,
             borderRadius: 50,
             alignItems: 'center',
          marginLeft:30
          }}>
          <Text style={{
            marginTop: 3,
            paddingTop: 3,
            //  fontFamily: 'arial',
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
          }}>Add</Text>

          </View>
        </View>

            </TouchableOpacity>

      </View>
      <View style={{
        backgroundColor: '#fffb73',
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        padding: '5%',
        marginLeft:10,
        // justifyContent: 'space-around',
        //  alignItems: 'center',
      }}>
        <Image source={like} style={{

          // margin: '5%',
          width: '15%',
          height: '15%',
          resizeMode: 'contain',
          alignContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 60,
          borderWidth: 5,
          borderColor: '#fff',
        }} />
        <Image source={banane} style={{ width: 60, height: 60,marginLeft:50, justifyContent: 'center',marginTop:-20 }} />
       <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
       <Text style={{
          marginTop: 40,
          //  fontFamily: 'arial',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#f2be22'

        }}>banane</Text>
        <Text style={{
          marginTop: 3,
          // fontFamily: 'arial',
          fontSize: 10,
          fontWeight: 'bold',
          color:'#f2be22',
          marginTop:45
        }}>$15</Text>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate('Profile') }>
       <View style={{
          display: 'flex',
          width: 50,
          height: 40,
          borderRadius: 20,
          justifyContent:'center'
        }}>
          <View style={{
             backgroundColor: '#ffe382',
             width: 90,
             height: 30,
             borderRadius: 50,
             alignItems: 'center',
          marginLeft:30
          }}>
          <Text style={{
            marginTop: 3,
            paddingTop: 3,
            //  fontFamily: 'arial',
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
          }}>Add</Text>

          </View>
        </View>

       </TouchableOpacity>

        
        </View>
        <View style={{
        backgroundColor: '#fffb73',
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        padding: '5%',
        marginLeft:10,
        // justifyContent: 'space-around',
        //  alignItems: 'center',
      }}>
        <Image source={like} style={{

          // margin: '5%',
          width: '15%',
          height: '15%',
          resizeMode: 'contain',
          alignContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 60,
          borderWidth: 5,
          borderColor: '#fff',
        }} />
        <Image source={ananas} style={{ width: 60, height: 60,marginLeft:50, justifyContent: 'center' }} />
       <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between',marginTop:-20}}>
       <Text style={{
          marginTop: 40,
          //  fontFamily: 'arial',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#f2be22'

        }}>ananas</Text>
        <Text style={{
          marginTop: 3,
          // fontFamily: 'arial',
          fontSize: 10,
          fontWeight: 'bold',
          color:'#f2be22',
          marginTop:45
        }}>$15</Text>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate('Profile') }>
       <View style={{
          display: 'flex',
          width: 50,
          height: 40,
          borderRadius: 20
        }}>
          <View style={{
             backgroundColor: '#ffe382',
             width: 90,
             height: 30,
             borderRadius: 50,
             alignItems: 'center',
          marginLeft:30,
          // marginBottom:-20,
          }}>
          <Text style={{
            marginTop: 3,
            paddingTop: 3,
            //  fontFamily: 'arial',
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
          }}>Add</Text>

          </View>
        </View>

       </TouchableOpacity>

        
        </View>

        
                    
          </ScrollView>

        


          {/* </TouchableOpacity> */}



      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Achat') }>
      <Text style={{fontWeight:'bold', fontSize:20, marginTop:50,marginLeft:10}}>Nearby shop</Text>

      </TouchableOpacity>

      {/* <TouchableOpacity onPress={()=>{navigation.navigate('ShopDetail')} } ></TouchableOpacity> */}
      <ScrollView horizontal={true} style={{flexDirection:'row',marginTop:20}}>
      <View style={{height:110,width:350,borderColor:'#FFCCD2',borderRadius:20,borderWidth:3,marginLeft:8,flexDirection:'row'}}>
        <Image source={boutique} style={{resizeMode:"contain",backgroundColor:'#FFCCD2',marginLeft:5,marginTop:4,borderRadius:10}}/>
        <View style={{flexDirection:'column' , marginLeft:10}}>
        <Text style={{marginTop:25}}> Xenter Shop</Text>
        <Text style={{marginTop:5}}> 2356 Toltrican Street</Text>
        <Text style={{marginTop:5}}> 9AM-7PM</Text>
        </View>
        </View>    
        <View style={{height:110,width:350,borderColor:'#FFCCD2',borderRadius:20,borderWidth:3,marginLeft:8,flexDirection:'row'}}>
        <Image source={boutique2} style={{resizeMode:"contain",backgroundColor:'#FFCCD2',marginLeft:5,marginTop:2,borderRadius:10,height:100}}/>
        <View style={{flexDirection:'column' , marginLeft:10}}>
        <Text style={{marginTop:25}}> Xenter Shop</Text>
        <Text style={{marginTop:5}}> 2356 Toltrican Street</Text>
        <Text style={{marginTop:5}}> 9AM-7PM</Text>
        </View>
        </View>    

      </ScrollView>

      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
        <Image source={home} style={styles.icon}/>
        <Image source={loupe} style={styles.icon}/>
        <TouchableOpacity onPress={()=>navigation.navigate('Achat') }>
        <Image source={panier} style={styles.icon}/>
         
        </TouchableOpacity>

        <Image source={panier} style={styles.icon}/>
        <Image source={personne} style={styles.icon}/>

      </View >
      
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1FF',
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',


  },
  tete: {
    display: 'flex',
    flexDirection: 'row',
  },
  reseau: {
    width: 20,
    height: 10,
    marginLeft: 200,
    marginTop: 50,
  },
  wifi: {
    width: 20,
    height: 20,
    marginLeft: 12,
    marginTop: 43,
  },
  batterie: {
    width: 20,
    height: 20,
    marginLeft: 12,
    marginTop: 43,

  },
  corps: {
    display: 'flex',
    flexDirection: 'column'
  },
  gauge: {
    display: 'flex',
    flexDirection: 'row',
    gap: 150,
  },
  menu: {
    width: 30,
    height: 20,
    marginLeft: 10,
    marginTop: 40,
  },
  premier: {
    fontSize: 25,
    //fontWeight:'bold',
    marginTop: -250,
    marginLeft: 10,


  },
  deuxieme: {
    fontSize: 25,
    //fontWeight:'bold',
    marginTop: -0,
    marginLeft: 10,


  },
  icon:{
    width:25,
    height:25

  }


})

// const slides = [
//   {
//       type: 'View',

//       content:(




//       ),},
//       {
//         type: 'View',

//         content: (


//         ),},
//         {
//           type: 'View',

//           content: (


//           ),},

//           {
//             type: 'View',

//             content: (
//             ),},

//             {
//               type: 'View',

//               content: (


//               ),},










//     ];
const slid = [
  {
    type: 'View',
    content: (
      <View style={{
        backgroundColor: '#ffc47e',
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        padding: '5%',
        // justifyContent: 'space-around',
        //  alignItems: 'center',
      }}>
        <Image source={like} style={{

          // margin: '5%',
          width: '15%',
          height: '15%',
          resizeMode: 'contain',
          alignContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 60,
          borderWidth: 5,
          borderColor: '#fff',
        }} />
        <Image source={Orange} style={{ width: 60, height: 60, justifyContent: 'center' }} />
        <Text style={{
          marginTop: 40,
          //  fontFamily: 'arial',
          fontSize: 15,
          fontWeight: 'bold',
          color: '#e36414'

        }}>orange</Text>
        <Text style={{
          marginTop: 3,
          // fontFamily: 'arial',
          fontSize: 10,
          fontWeight: 'bold',
          color: '#e36414'
        }}>$10</Text>
        <View style={{
          marginTop: 30,
          display: 'flex',
          width: 50,
          height: 40,
          borderRadius: 20
        }}>
          <Text style={{
            marginTop: 3,
            paddingTop: 3,
            //  fontFamily: 'arial',
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
          }}>Add</Text>
        </View>
      </View>
    ),
  },
  // {
  //     type: 'View',
  //     content: (
  //         <View style={{
  //             backgroundColor: '#5472AE',
  //             width: 200,
  //             height: 200,
  //             display: 'flex',
  //             flexDirection: 'column',
  //             borderRadius: 20,
  //             padding: '5%',
  //             // justifyContent: 'space-around',
  //             //  alignItems: 'center',
  //         }}>
  //             <Image source={profil} style={{

  //                 // margin: '5%',
  //                 width: '15%',
  //                 height: '15%',
  //                 resizeMode: 'contain',
  //                 alignContent: 'center',
  //                 backgroundColor: '#fff',
  //                 borderRadius: 60,
  //                 borderWidth: 1,
  //                 borderColor: '#fff',
  //               }} />
  //               <Text style={{
  //                   marginTop: 40,
  //                   //fontFamily: 'arial',
  //                   fontSize: 15,
  //                   fontWeight: 'bold',
  //               }}>ERICA TALLE ♥</Text>
  //               <Text style={{
  //                   marginTop: 3,
  //                 //fontFamily: 'arial',
  //                   fontSize: 10,
  //                   fontWeight: 'bold',
  //               }}>to ayanokoji</Text>
  //               <View style={{
  //                   marginTop: 30,
  //                   display: 'flex',
  //                   flexDirection: 'row',
  //                   justifyContent: 'space-between',
  //               }}>
  //                   <Text style={{
  //                       marginTop: 3,
  //                       paddingTop: 3,
  //                       fontFamily: 'arial',
  //                       fontSize: 10,
  //                       fontWeight: 'bold',
  //                   }}>Template</Text>
  //                   <Image source={like} style={{
  //                       width: '15%',
  //                       height: 27,
  //                       resizeMode: 'contain',
  //                       alignContent: 'center',
  //                       backgroundColor: '#fff',
  //                       borderRadius: 60,
  //                       borderWidth: 5,
  //                       borderColor: '#fff',
  //                   }} />
  //               </View>
  //           </View>
  //       ),
  //   },
];



