import React from 'react';
import {View,Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
//import  Icon from 'react-native-vector-icons/FontAwesome';
export class Boxes extends React.Component{
render(){
  return(
      
    <View style={{
        height:'12%',
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        borderBottomWidth:0.9,
       borderColor:'#0003',
       
    }}
   

    
    >
    <View style={{
        height:'100%',
        width:'30%',
        //backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
    }}> 
  <Icons name={this.props.ic} size={30} color={'black'} />
  
    </View>
    <View style={{
        width:'70%',
        height:'100%',
        //backgroundColor:'yellow',

    }}>
    <Text style={[{
        marginTop:10,
        fontSize:18,
        fontWeight:'bold',
    },
    this.props.st
    ]}>
    
    {this.props.txt}</Text>
   <Text style={{
      
   }}>{this.props.text}</Text>
    </View>
    </View>
   
    )
}

}