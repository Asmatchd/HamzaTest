import React from 'react';
import {View,Text,Image} from 'react-native';
import { NavHeader } from '../../components';
import { Boxes } from '../../components';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export class Settings extends React.Component{
    render(){
        return(
            <View style={{
                height:'100%',
                width:'100%',
                
            }}>

              <NavHeader 
              txt={'Settings'}
              />
              <View style={{
                height:'12%',
                width:'100%',
                backgroundColor:'#fff',
                flexDirection:'row',
              }}>
               <View style={{
                   height:'100%',
                   width:'30%',
                  // backgroundColor:'red',
                   alignItems:'center',
                   justifyContent:'center',
               }}>
                   <Image 
                   style={{
                       height:55,
                       width:55,
                       borderRadius:20,
                   }}
                   source={require('../../assets/icon.png')}
                   />
                   </View> 
                   <View style={{
                       height:'100%',
                       width:'70%',
                       //backgroundColor:'blue',

                   }}>
                       <Text style={{
                           marginTop:15,
                           fontSize:17,
                           fontWeight:'bold',
                       }}>Ali Ahmad</Text>
                       <Text style={{
                           marginTop:1,
                       }}>Medical Specialist</Text>
                   </View>
              </View>
             <View style={{
                 height:'100%',
                 width:'100%',
             }}>
            <View
              style={{
                  height:'100%',
                  width:'100%',
                  position:'absolute',
              }}>
          <View style={{
              height:'12%',
              width:'100%',
              backgroundColor:'#fff',
              flexDirection:'row',
              borderWidth:0.9,
              borderColor:'#0003'

          }}>
         <View style={{
             height:'100%',
             width:'30%',
             //backgroundColor:'red',
             alignItems:'center',
             justifyContent:'center',
         }}>
         
   <Icon name={'user-md'} size={30} color={'black'} />
   </View>
         <View style={{
             height:'100%',
             width:'70%',
             //backgroundColor:'black',
         }}>
<Text style={{
    marginTop:10,
    fontSize:18,
    fontWeight:'bold',
}}>Doctor</Text>
<Text>Select or update your Doctor</Text>
</View>
       

          </View>
                   <Boxes
                   ic={'lock'}
                   txt={'Reset Password'}
                   text={'Reset your Password'}
                   
                   />
                 <Boxes
                 ic={'handshake'}
                 txt={'Terms&Conditions'}
                 text={'Upon You are agreed'}
                 />
                   <Boxes  
                   ic={'logout'}
                   txt={'LogOut'}
                 st={{
                     marginTop:22,
                 }}
                   />
                   </View>
            </View>
            </View>
          
        )
    }

}