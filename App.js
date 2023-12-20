import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AchatScreen from './Screens/AchatScreen';
import getStart from './Screens/getStart.js';

const Stack = createStackNavigator();

export default function App() {
   return (
           <NavigationContainer>
               <Stack.Navigator>

                 <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
                  <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
                  <Stack.Screen name="Achat" component={AchatScreen} options={{headerShown:false}} />
                  <Stack.Screen name="getStart" component={getStart} options={{headerShown:false}} />



              </Stack.Navigator>
           </NavigationContainer>
   );
}
