import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/Fontisto';
import IconB from 'react-native-vector-icons/FontAwesome5';
import IconC from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/AntDesign';
import {TabNavigator} from '../../navigation/TabNavigator';

import {Cart} from '../../screens/cart';
export class Dashboard extends React.Component {
  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          // backgroundColor:'#fff',
        }}>
        <NavHeader txt={'Dashboard'} />
        <View
          style={{
            height: '90%',
            width: '100%',
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TabNavigator');
            }}
            style={{
              height: '20%',
              width: '85%',
              marginTop: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                //backgroundColor:'red',
                //marginTop:15,
                borderWidth: 2,

                borderRadius: 5,
                borderColor: '#0004',
                alignItems: 'center',
                justifyContent: 'center',
                //zIndex:10,
                position: 'absolute',
                zIndex: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icons
                  style={{
                    position: 'absolute',
                  }}
                  name={'calendar-check'}
                  size={45}
                  color={'orange'}
                />
                <IconC
                  style={{
                    marginTop: 17,
                  }}
                  name={'user-md'}
                  size={20}
                  color={'red'}
                />
              </View>
              <Text>Get Doctor Appointment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CartA');
            }}
            style={{
              height: '20%',
              width: '85%',
              marginTop: 10,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                //backgroundColor:'yellow',
                borderWidth: 2,
                borderColor: '#0004',
                borderRadius: 5,
                //marginTop:10,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icons
                  style={{
                    position: 'absolute',
                  }}
                  name={'calendar-check-outline'}
                  size={45}
                  color={'orange'}
                />
                <IconE
                  style={{
                    marginTop: 20,
                  }}
                  name={'contacts'}
                  size={20}
                  color={'red'}
                />
              </View>

              <Text
                style={{
                  marginLeft: 20,
                }}>
                Go to Cart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '20%',
              width: '85%',
              marginTop: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate('WaitingRoom');
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                // backgroundColor:'yellow',
                borderWidth: 2,
                borderColor: '#0004',
                borderRadius: 5,
                // marginTop:10,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
              }}>
              <IconB name={'hospital-alt'} size={40} color={'orange'} />

              <Text>Waiting Room</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
