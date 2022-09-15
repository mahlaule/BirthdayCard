import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Image } from 'react-native';
import react from 'react';
import React from 'react';




export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.boldText}>wishing you a happy birthday </Text>
        <Image source={require('./assets/birt.jpg')} style={{height:700}} />

      </View>
<View style={styles.footer}>
  <Text style ={styles.boldText}>enjoy the rest of the day</Text>
  <Text style={styles.footer}>May your entire life be as colorful as the card</Text>
  <Text style={styles.footer}>I hope this is the begining of your greatest </Text>
</View>









      <StatusBar style="auto" />
    </View>

  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000CD',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45%",
    height: "10%",
    marginLeft: "300px",
    backgroundColor:'#708090',
    lineHeight:'2em',
    paddingTop:14,
    borderRadius:'7%',
    border:'2px solid gray'
  },

  header: {
    backgroundColor: '#00BFFF',
    padding: 20,
    width: "100%",
    textAlign: "center"

  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 35,
    textTransform: 'capitalize',
    color:'white',
    marginTop:'5px',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  fontFamily:'roboto',
  textShadowColor:"red"

    
  },
  footer:{
    fontSize:"20px",
    color:'white',
    textAlign:'center',
    fontStyle:'Roman',
    fontFamily:'Arial, Helvetica, sans-serif',
    borderStyle:"dashed"
    
  }




});





