import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, Image, TextInput, Button } from 'react-native';

import {enableScreens} from 'react-native-screens';
enableScreens()

export default class App extends React.Component {

   render() {

     return (
      <View style={styles.parent}>
        <StatusBar barStyle='light-content' backgroundColor = 'black'/>
        <View style={styles.child1}>
            <Text style={styles.headingtext}> Raju's  Restaurant </Text>           
        </View>
      <View style={styles.child2}>
      <Image style={{height:325,width:445}}
            source= {require('./App/Source/five.jpg')}/>  
      <View style={[styles.child2,{alignItems:'center',flex:0}]}>
      <Text style={styles.bodytext}> Fine Dining! </Text>

      <Text style={[styles.bodytext,{fontWeight:'500' ,fontStyle:'italic',fontSize:22,justifyContent:'space-evenly',padding:0,alignItems:'center'}]}>     "On entering this charming hotel in Florence, you will immediately sense its special intimate atmosphere that makes you feel like being in your own florentine home.  Each detail has been passionately chosen and each room deserves a visit. </Text>
      <Text style={[styles.bodytext,{fontWeight:'500' ,fontStyle:'italic',fontSize:22,justifyContent:'space-evenly',padding:0,alignItems:'center'}]}>     This restaurant was inaugurated in 2004 and offers traditional cooking with a touch of modernity. Local quality products are mainly used in this kitchen (meats, salt preserved meats, octopus, vegetables, fish form the nearby Ría de Vigo…) to be combined with new tastes and textures. "</Text>
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
      borderRadius:7,
      padding:10,
      borderWidth:4,
      borderColor:'black'
    },

    child2:{
      flex:1,
      alignItems:'center',
      padding:13
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
      padding:15,
      alignItems: "center",
      fontWeight:'bold',
      justifyContent:'center',
      textTransform:'uppercase',
      
    },

    input:{
      borderColor:'grey',
      borderWidth:2,
      height:60,
      fontSize:15,
      color:'blue',
      borderRadius:8,
      paddingLeft:15,
      margin:10
    }
    
  })  