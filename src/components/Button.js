import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export class Button extends React.Component{
    render(){
        return(
            <View style={{
                height:'100%',
                width:'100%',
               
            }}> 
            <View style={{
                height:'8%',
                width:'100%',
                alignItems:'center',
             

            }}>
          <TouchableOpacity 
          style={[{
              height:'100%',
              width:'90%',
              borderRadius:10,
              borderWidth:1,
              borderColor:'red',
              backgroundColor:'red',
              alignItems:'center',
              justifyContent:'center',

          },
        
        this.props.st]
        }
          >
          <Text style={{
              color:'#fff',
              fontSize:16,
          }}>Order Now</Text>
          </TouchableOpacity>
            </View>
           </View>
        )
    }
}