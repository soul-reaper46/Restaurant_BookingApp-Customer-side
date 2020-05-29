import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, Image, TextInput,  TouchableOpacity,Button } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown'
import firebase from './fb'

import {enableScreens} from 'react-native-screens';
enableScreens()
export default class participant extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      Gmail:'',
      Preference:''
    }
  }
  
  Register=(name, Gmail, Preference)=>{
    firebase.database().ref().push({name, Gmail, Preference}); 
    this.setState({
      name:'',
      Gmail:'',
      Preference:'',
      
    })
}

   render() {
    let Preference = [{
      value: 'Family',
    }, {
      value: 'Couples',
    }, {
      value: 'Friends',
    }, {
      value: 'Party Hall',
    }
  ];

    console.log(this.state.Event)

    const data ={name: this.state.name,
      Gmail: this.state.Gmail,
      Preference: this.state.Preference
      }

     return (
      <View style={styles.parent}>
        <StatusBar barStyle='light-content' backgroundColor = 'black'/>
        <View style={styles.child1}>
            <Text style={styles.headingtext}> Raju's  Restaurant </Text>           
        </View>
      <View style={styles.child2}>
      <Image style={{height:325,width:445}}
            source= {require('./App/Source/Restaurant.jpg')}/>  
      <View style={[styles.child2,{alignItems:'center',flex:0}]}>
      <Text style={styles.bodytext}> Reserve Your Table </Text>
      </View>
      <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='Name'
            autoCapitalize='none'
            onChangeText={name => this.setState ({name})}
            value={this.state.name}
         ></TextInput>

         <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='Gmail'
            autoCapitalize='none'
            onChangeText={Gmail => this.setState ({Gmail})}
            value={this.state.Gmail}
         ></TextInput>

          

          <Dropdown style={{margin:80,justifyContent:"center", alignItems:"stretch"}}
                label='Preference'
                data={Preference}  
                onChangeText={Preference => this.setState({Preference})}
                value={this.state.Preference}
                style={{color:"black"}}
          />

       <View style={[styles.child2,{padding:30,alignItems:'center'}]}>
        <Button
            
            title = 'Reserve Table'
            color = 'green'         
            onPress = {() => {this.Register(this.state.name,this.state.Gmail,this.state.Preference),this.props.navigation.navigate('submitted',{ data })}}>              
         </Button>
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
      alignItems:'stretch',
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