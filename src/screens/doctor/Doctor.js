import React from 'react';
import {View, Text, Image} from 'react-native';
import {ButtonA, NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

export class Doctor extends React.Component {
  render() {
    return (
      <View
        style={{
          height:'100%',
          width:'100%',
          // backgroundColor:'pink',
        }}>
           <View style={{
               height:'50%',
               width:'100%',
           }}>
        <Text style={{
            fontSize:17,
           marginTop:10,
        }} >
          MBBS, Registrar Internal Medicine (FCPS Resident), IMM (Internal
          Medicine), Certified Diabetologist (PES), MD Cardiology- 1 (UHS)
          Garden Town Dr. Ali pmc verified PMC Verified Dr. Muhammad Ali
           is specialist General Physician. His area of expertise include
          Infectious Diseases, blood pressure, heart diseases, Hypertension,
          Diabetes, Covid-19 Critical Care & Management, Covid-19 home treatment
        </Text>
        </View>
        <View style={{
            height:'50%',
            width:'100%',
            justifyContent:'center',
           
        }}>
        <ButtonA 
       
       pressed={()=>{
           this.props.navigation.navigate('BookNow')
       }}
        />
        </View>
      </View>
    );
  }
}
