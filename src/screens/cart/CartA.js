import React from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class ListItem extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <View
        style={{
          height: 40,
          width: '100%',
          //backgroundColor: 'pink',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            //backgroundColor: 'orange',
            flexDirection: 'row',
            //position:'absolute',
            //borderBottomWidth:0.9,
            // borderColor:'silver',
          }}>
          <View
            style={{
              height: '100%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Icons
              name={'minus-circle'}
              color={'pink'}
              size={20}
              onPress={this.props.onMinus}
            />
            <Text
              style={{
                color: '#000',
              }}>
              {item.count}
            </Text>
            <IconA
              name={'add-circle'}
              color={'pink'}
              size={20}
              onPress={this.props.onAdd}
            />
          </View>
          <View
            style={{
              height: '100%',
              width: '60%',
              //backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              //backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{item.Price * item.count}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export class CartA extends React.Component {
  state = {
    products: [
      {name: 'Chicken Tikka Piece', Price: '160.00', count: 0},
      {name: 'Chicken Shawarma', Price: '80.00', count: 0},
      {name: 'Beef kabab', Price: '100.00', count: 0},
      {name: 'Chicken Malai Boti', Price: '260.00', count: 0},
      {name: 'Chicken Burger', Price: '120.00', count: 0},
    ],
  };

  onMinus = (item, index) => {
    const Products = [...this.state.products];
    Products[index].count -= 1;
    this.setState({products: Products});
  };
  onAdd = (item, index) => {
    const Products = [...this.state.products];
    Products[index].count += 1;
    this.setState({products: Products});
  };
  render() {
    let totalPrice = 0;
    this.state.products.forEach(item => {
      totalPrice += item.count * item.Price;
    });

    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          //flexDirection:'row',
          //alignItems:'center',
        }}>
        <NavHeader
          ic={'chevron-back'}
          txt={'Your Cart'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            height: '34%',
            width: '100%',
            // backgroundColor:'pink',
            // position:'absolute',
            borderBottomWidth: 0.9,
            borderColor: 'silver',
          }}>
          <FlatList
            data={this.state.products}
            renderItem={({item, index}) => (
              <ListItem
                item={item}
                onMinus={() => this.onMinus(item, index)}
                onAdd={() => this.onAdd(item, index)}
              />
            )}
          />
        </View>

        <View
          style={{
            height: '12%',
            width: '100%',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
            }}>
            Subtotal : {totalPrice}
          </Text>

          <Text
            style={{
              color: '#000',
              marginTop: 5,
            }}>
            Delivery fee: 30
          </Text>
        </View>
        <View
          style={{
            height: '7%',
            width: '100%',
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              paddingLeft: 10,
              borderWidth: 0.9,
              borderColor: 'silver',
              position: 'absolute',
              zIndex: 4,

              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
              }}>
              Total{' '}
            </Text>
            <Text>(Inc.GST)</Text>
            <Text
              style={{
                color: '#000',
              }}>
              {' '}
              : {totalPrice + 30}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '8%',
            width: '100%',
            //backgroundColor:'pink',
            flexDirection: 'row',
            borderBottomWidth: 0.9,
            borderColor: '#0003',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              alignSelf: 'center',
              color: '#000',
            }}>
            Contact Details
          </Text>

          <TextInput
            style={{
              height: '100%',
              width: '60%',
              backgroundColor: '#fff',
            }}
            placeholder={'Enter Contact Details'}></TextInput>
          <Icon
            name={'chevron-forward'}
            size={31.5}
            color={'black'}
            style={{
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            height: '10%',
            width: '100%',
            //backgroundColor:'pink',
            flexDirection: 'row',
            borderBottomWidth: 0.9,
            borderColor: '#0003',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              alignSelf: 'center',
              color: '#000',
            }}>
            Delivery Details
          </Text>
          <TextInput
            style={{
              height: '100%',
              width: '60%',
            }}
            placeholder={'Enter Delivery Details'}></TextInput>

          <Icon
            name={'chevron-forward'}
            size={30}
            color={'#000'}
            style={{
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            height: '5%',
            width: '100%',
            flexDirection: 'row',
            paddingLeft: 10,
            borderBottomWidth: 0.9,
            borderColor: '#0003',
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              marginTop: 5,
            }}>
            Delivery Time
          </Text>
          <Text
            style={{
              marginLeft: 40,
              marginTop: 7,
            }}>
            20 min
          </Text>
        </View>

        <Button
          st={{
            marginTop: 25,
          }}
        />
      </View>
    );
  }
}
{
  /*  ItemSeparatorComponent={() => (
          <View
            style={{
              height: '1%',
            }}
          />
          )} */
}
