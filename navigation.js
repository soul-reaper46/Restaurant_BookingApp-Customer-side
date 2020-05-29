import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigation, createStackNavigator} from 'react-navigation-stack';
import App from './App';
import participant from './participant';
import submitted from './submitted';

const StackNav = createStackNavigator({
  RESERVATION: participant,
  submitted: submitted
})



const TabNav = createBottomTabNavigator({
  HOME: App,
  RESERVATION: StackNav
  
})



const MyNavigator = createAppContainer(TabNav);



export default class Navigation extends Component {
  render(){
    return(<MyNavigator/>)
  }
}
