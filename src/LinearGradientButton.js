import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View ,Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientButton = props => {
   const content = (

    <LinearGradient colors={['#ef32d9','#89fffd']} style={styles.body}>
     <Text style={styles.text}>{props.text}</Text>	
</LinearGradient>

   )
	 return<TouchableOpacity onPress={props.onPresss}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button:{
    padding: 16,
    width: 200,
    borderRadius: 20,
		alignItems: 'center'
  },
	text: {
  color: 'white',
	fontSize: 30

	}



});
export default LinearGradientButton;
