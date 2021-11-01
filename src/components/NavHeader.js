import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class NavHeader extends React.Component{
    render(){
        return(
            <View style={{
               height:'10%',
               width:'100%',
               // backgroundColor:'pink',
            }}>
             <View style={{
                 height:'100%',
                 width:'100%',
                 backgroundColor:'#fff',
                 flexDirection:'row',
                 position:'absolute',
                 borderColor:'silver',
                 borderWidth:0.9,
             }}>
                 <View style={{
                     height:'100%',
                     width:'20%',
                    // backgroundColor:'blue',
                     alignItems:'center',
                     justifyContent:'center',
                    
                 }}>
                     <TouchableOpacity 
                  onPress={this.props.leftPressed} >
            <Icon name={this.props.ic}  size={30} color={'pink'} 
   
            /> 
            </TouchableOpacity>
            </View>
             <View style={{
                 height:'100%',
                 width:'60%',
                // backgroundColor:'red',
                 alignItems:'center',
                 justifyContent:'center',
              
             }}><Text style={{
                 fontSize:17,
             }}>{this.props.txt}</Text></View>
             <View style={{
                 height:'100%',
                 width:'20%',
                // backgroundColor:'blue',
             }}>

             </View>
             </View> 
             
            </View>
        )
    }
}