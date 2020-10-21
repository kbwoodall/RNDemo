import React from 'react';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

console.log("in TabBarIcon");

export default function TabBarIcon(props) {

  return (

    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}

    />

  );

}

//<Icon name="alarm" size={50} color="red" />

/*
 return (
    <Icon
      name='rowing'
      size={26}
      style={{ marginBottom: -3 }}

    />
  );


name={props.name}
color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
*/