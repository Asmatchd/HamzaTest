import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/dashboard';
import { Doctor } from '../screens/doctor';
import { TabNavigator } from './TabNavigator';
import { CartA } from '../screens/cart';
import { HomeTabNavigation } from './HomeTabNavigation';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { Boxes } from '../components/Boxes';
import { Settings } from '../screens/settings';
import { Button,ButtonA } from '../components';
import { VisitHistory } from '../screens/visithistory';
import { BookNow } from '../screens/booknow';
import { WaitingRoom } from '../screens/waitingroom';


const Stack=createStackNavigator();
export const ScreenNavigator =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
           
            <Stack.Screen 
              name="HomeTabNavigation"
              component={HomeTabNavigation}
              options={{headerShown:false}}
              /> 
          
            <Stack.Screen             
            name="CartA"
            component={CartA}
            options={{headerShown:false}}
          />  
                
                
           

                
          <Stack.Screen 
            name="Dashboard"
            component={Dashboard}
            options={{headerShown:false}}
          />  
           <Stack.Screen
           name="WaitingRoom"
           component={WaitingRoom}
           options={{headerShown:false}}
           />
                <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{headerShown:false}}
          />
            <Stack.Screen 
              name="VisitHistory"
              component={VisitHistory}
              options={{headerShown:false}}
              />
         <Stack.Screen             
            name="BookNow"
            component={BookNow}
            options={{headerShown:false}}
          />  
       
     
    
            <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown:false}}
          />
           <Stack.Screen 
            name="Settings"
            component={Settings}
            options={{headerShown:false}}
          />  
 
              
               
            </Stack.Navigator>
        </NavigationContainer>
    );
};