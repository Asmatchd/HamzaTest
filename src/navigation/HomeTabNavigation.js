import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
//import { TextBase } from 'react-native';
import { Dashboard } from '../screens/dashboard';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cart } from '../screens/cart';
import { Doctor } from '../screens/doctor';
import Icons from 'react-native-vector-icons/Fontisto';
import { Settings } from '../screens/settings';

const Tab=createBottomTabNavigator();
export const HomeTabNavigation =()=>{

    return(
  <Tab.Navigator
 tabBarOptions={{
     activeTintColor:'#000',
     inactiveTintColor:'silver',
     showLabel:false,
tabStyle:{
    backgroundColor:'#fff',
}


 }}
 

  >
      <Tab.Screen 
      name="Dashboard"
      component={Dashboard}
     options={{
         headerShown:false,
         tabBarIcon:({color})=>(
        <Icon name={'home'} color={color}  size={30}/>
         )
     }}
      />
      <Tab.Screen 
     name="Doctor"
     component={Doctor}

     options={{
         headerShown:false,
         tabBarIcon:({color})=>(
<Icons name={'doctor'} color={color} size={30}/>
         )
     }}
     />
   
         
     <Tab.Screen 
     name="Settings"
     component={Settings}
     options={{
         headerShown:false,
         tabBarIcon:({color})=>(
<Icon name={'settings'} color={color} size={30}/>
         )
     }}
     />
  </Tab.Navigator>
    )
}