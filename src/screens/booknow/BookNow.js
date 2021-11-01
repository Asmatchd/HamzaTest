import React from 'react';
import {View,Text,FlatList} from 'react-native';

import { NavHeader } from '../../components';
import  Icon  from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
export class BookNow extends React.Component{
state={
    data:[
        {color:'purple',time:'8:00AM-1:00 PM'},
        {color:'purple',time:'10:00AM-5:00PM'},
        {color:'purple',time:'10:00AM-5:00PM'},
        {color:'orange',time:'10:00AM-5:00PM'},
        {color:'orange',time:'10:00AM-12:00PM'},
        {color:'orange',time:'10:00AM-5:00PM'},
    ]
}
renderDesign=(item)=>(
    <View style={{
        height:80,
        width:'100%',
        alignItems:'center',
    }}
    >
    <View style={{
        height:'95%',
        width:'90%',
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:5,
        borderColor:'#0003',
        borderWidth:1,
        position:'absolute',
    }}>
    <View style={{
        height:'100%',
        width:'30%',
    // backgroundColor:'orange',
    flexDirection:'row',
    }}>
     <View style={{
         height:'100%',
         width:'5%',
         backgroundColor:item.color,
     }}>
        
     
     </View>
     <Icon
     style={{
         alignSelf:'center',
         marginLeft:20,
     }}
     name={'user'} size={30}  />
    </View>
   <View style={{
       height:'100%',
       width:'50%',
//backgroundColor:'blue',
alignItems:'center',
justifyContent:'center',
   }}>
  <Text>{item.time}</Text>
   </View>
   <View style={{
       height:'100%',
       width:'20%',
       //backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
   }}>
<Icons name={'chevron-forward'} size={30} />

   </View>
    </View>

    </View>
)

render(){
        return(
            <View style={{
                height:'100%',
                width:'100%',
                backgroundColor:'#fff',
            }}>
            <NavHeader
            ic={'chevron-back'}
            txt={'Book Appointment'}
            leftPressed={()=>{
                this.props.navigation.goBack();
            }}
            />
            <View style={{
                alignItems:'center'
            }}><Text style={{
                fontSize:17,
                marginTop:10,
            }}>Select time from available slots</Text></View>
           
           <View style={{
               height:'5%',
               
           }}>
               <Text style={{
                   fontSize:17,
                   marginLeft:20,
               }}>Dec 20</Text>
           </View>
            <FlatList
            data={this.state.data}
            renderItem={({item})=>this.renderDesign(item)}
           />
            
            </View>
           
        )
    }
}