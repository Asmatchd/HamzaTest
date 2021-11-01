import React from 'react';
import {View,Text,Image,Button} from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Doctor } from "../screens/doctor";
import { Dashboard } from "../screens/dashboard";
import { NavHeader } from "../components";
 import Icon from 'react-native-vector-icons/Ionicons'
 import { NavigationContainer} from '@react-navigation/native';
import { screensEnabled } from 'react-native-screens';
import { VisitHistory } from '../screens/visithistory';

 
const Tab=createMaterialTopTabNavigator();

//export const TabNavigator =()=>{
   export class TabNavigator extends React.Component{
       render(){
    return(
       
        <View style={{
            height:'100%',
            width:'100%',
            //backgroundColor:'yellow',
        }}>
        <NavHeader 
        ic={'chevron-back'}
        txt={'Doctor'}
        leftPressed={()=>{
            this.props.navigation.goBack();
        }}
       
        />
 
       
   <View style={{
         height:'30%',
         width:'100%',
         //backgroundColor:'yellow',
         alignItems:'center',
         justifyContent:'center',
     }}>
        
    <Image style={{
        height:70,
        width:70,
        borderRadius:40,
      
    }}
    source={require('../assets/d.jpg')}
        />
    <Text style={{
        fontSize:18,
    }}>Dr Ali </Text>
    <Text style={{
        fontSize:17,
    }}>Sargodha</Text>
    <Text style={{
        fontSize:16,
    }}>MBBS</Text>
     </View>
     
     <Tab.Navigator>
     
         <Tab.Screen
         name="Doctor"
         component={Doctor}
         />
         <Tab.Screen
         name="Visit History"
         component={VisitHistory}
         />
     </Tab.Navigator>
    
        </View>
    )
}
   }