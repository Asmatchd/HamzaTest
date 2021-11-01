import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavHeader} from '../../components';
import Icons from 'react-native-vector-icons/FontAwesome';

export class WaitingRoom extends React.Component {
  state = {
    data: [
      {
        icon: 'shopping-bag',
        id: 'Order Details',
        name: 'Order 3',
        menu: '1x Family Meal \n 2x Biryani Lover',
        
        price:'2000',
      },
      {
        icon: 'hotel',
        id: 'Resturants',
        name: 'Mehmaan Siraye',
        contact: '92456789281',
        iconA: 'phone',
        address: 'Al RehmanTrade Trade Center Sargodha',
      },
      {
        icon: 'motorcycle',
        id: 'Rider',
        name: 'Mehmood',
        contact: '92164567890',
        iconA: 'phone',
      },
    ],
  };
  renderDesign = item => (
    <View
      style={{
        height: 140,
        width: '100%',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '100%',
          width: '90%',
          backgroundColor: '#fff',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <View
          style={{
            height: '100%',
            width: '22%',
            backgroundColor: '#fff',
            alignItems: 'center',
            // justifyContent:'center',
          }}>
          <Icon
            style={{
              marginTop: 27,
            }}
            name={item.icon}
            size={30}
            color={'black'}
          />
        </View>
        <View
          style={{
            height: '100%',
            width: '78%',
            //backgroundColor:'blue',
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text>{item.id}</Text>
          <Text
            style={{
              borderBottomWidth: 0.9,
              borderColor: '#0003',
              fontSize: 18,
              fontWeight: 'bold',
              color:'#000'
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              paddingTop: 2,
            }}>
            {item.menu}
          </Text>
          <View
            style={{
              height: '12%',
              width: '100%',
              flexDirection: 'row',
            }}>
            <Icons
              style={{
                marginTop: 3,
                marginRight: 5,
              }}
              name={item.iconA}
            />
            <Text>{item.contact}</Text>
          </View>
          <Text>{item.address}</Text>
        </View>
      </View>
    </View>
  );
  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          //backgroundColor:'pink',
        }}>
        <NavHeader ic={'chevron-back'} txt={'Order Details'}  
        leftPressed={()=>{
          this.props.navigation.goBack();
        }}
        />
        <View
          style={{
            height: '65%',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#0003',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.renderDesign(item)}
          />
        </View>
        <View style={{
          height:'30%',
          width:'100%',
          //backgroundColor:'pink',
        paddingTop:30,
         paddingLeft:40,
        }}>
          <Text>SubTotal    {'                                                              '}Rs:2000 </Text>
          <Text>Delivery Fee{'                                                            '}Rs:30</Text>
          <Text>Discount    {'                                                              '}Rs:</Text>
          <Text style={{
            marginTop:10,
            fontSize:18,
            fontWeight:'bold',
            color:'#000'
          }}>Total{'                                                     '}Rs:2030</Text>
        </View>
        
      </View>
    );
  }
}
