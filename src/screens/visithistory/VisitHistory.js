import React from 'react';
import {View,Text,FlatList} from 'react-native';
import { ButtonA } from '../../components';


export class VisitHistory extends React.Component{
    state={
     data:[
         {date:'04-5-2019',Reason:'flu'},
         {date:'02-9-2020',Reason:'fever'},
         {date:'10-2-2018',Reason:'Joint Pain'},
         {date:'09-9-2020',Reason:'Acidity'}
         
     ]
    };
    
    renderDesign=(item)=>(
    <View style={{
        height:55,
        width:'100%',
    }}>
       
        <View style={{
            height:'100%',
            width:'100%',
             alignItems:'center',
        }}>
            <View style={{
                height:'100%',
                width:'90%',
                flexDirection:'row',
                borderWidth:1,
                borderRadius:10,
                borderColor:'#fff',
                backgroundColor:'#fff',
                 position:'absolute',
                 
            }}>
                <View style={{
                    height:'100%',
                    width:'50%',
                   // alignItems:'center',
                    justifyContent:'center',


                }}><Text style={{
                    paddingLeft:10,
                }}>{item.date}</Text></View>
                <View style={{
                    height:'100%',
                    width:'50%',
                    justifyContent:'center',
                }}><Text style={{
                    paddingLeft:100,
                }}>{item.Reason}</Text></View>
            </View>
        </View>
    </View>
    )
    render(){
        return(
  
            <View style={{
              height:'100%',
              width:'100%',
              //backgroundColor:'pink',
            }}>
                 <View style={{
                height:'10%',
                width:'100%',
                flexDirection:'row',
            }}>
                <Text style={{
                    paddingLeft:20,
                    marginTop:10
                }}>Appointment Date</Text>
                <View style={{
                    width:'41%',
                }}></View>
                <Text style={{
                    marginTop:10,
                }}>Reason</Text>
            </View>
           
        <FlatList
        data={this.state.data}
        renderItem={({item})=>this.renderDesign(item)}
        ItemSeparatorComponent={() => (
            <View
              style={{
                height: '1%',
            
              }}
            />
            )} 
        />
        <View style={{
            height:'10%',
            justifyContent:'center',

        }}>
        <ButtonA 
      
        pressed={()=>{
            this.props.navigation.navigate('BookNow')
        }}
        />
        </View>
</View>
           
        )
    }
}