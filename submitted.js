import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, Image, TextInput, Button } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown'
import firebase from './fb'


export default class submitted extends React.Component { 

  

    render() {
      const item = this.props.navigation.getParam('data')
      return (
      <View style={styles.parent}>
        <StatusBar barStyle='light-content' backgroundColor = 'black'/>
        <View style={styles.child1}>
            <Text style={styles.headingtext}> Raju's  Restaurant </Text>           
        </View>
      <View style={styles.child2}>
      <Image style={{height:325,width:445}}
            source= {require('./App/Source/end.jpg')}/>  
      <View style={[styles.child2,{alignItems:'center',flex:0}]}>
      <Text style={styles.bodytext}>Thank you {item.name} for reserving a table ,Please Enjoy your time at our Restaurant 😊  </Text>
      <Text style={{fontSize:18,justifyContent:'center',alignItems:'center',padding:30}}> Note: upon arrival, please ask the FrontDesk citing the Reservation  </Text>
      </View>
      <View style={[styles.child2,{flex:0}]}>
        <Text style={styles.bodytext}>" Dining Done Right 🥂 "</Text>
      </View>
      </View> 

    </View>
      );
    }
  }

  const styles = StyleSheet.create({

    parent:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
      padding:10,
      margin:5,
      alignItems:'center'
    },

    child1:{
      flex:-1,
      alignItems:'center',
      margin:2,
      borderRadius:4,
      padding:10,
      borderWidth:4,
      borderColor:'black'
    },

    child2:{
      flex:1,
      alignItems:'center',
      padding:10
    },

    headingtext:{
      fontSize: 40,
      color : 'black',
      fontWeight:"bold",
      textTransform:'uppercase'
    },
  
    bodytext: {
      fontSize:25,
      color: 'black',
      padding:30,
      alignItems: "center",
      fontWeight:'400',
      justifyContent:'center',
      textTransform:'uppercase',
      
    }
    
  })