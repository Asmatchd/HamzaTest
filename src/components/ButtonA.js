import React from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export class ButtonA extends React.Component{
    render(){
        return(
            <View 
            style={{
                height:100,
                alignItems:'center',
                width:'100%',
            }}>
<View style={{
    height:'50%',
    width:'75%',
    
    borderRadius:8,
    backgroundColor:'red',
    
    
}}>
    <TouchableOpacity
    onPress={this.props.pressed}
    style={{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

      
    }}>
   <Text style={{
       color:'#fff',
       fontWeight:'bold',
       fontSize:17,
   }}>Book Now</Text> 
   </TouchableOpacity>
</View>
</View>
        )
    }
}