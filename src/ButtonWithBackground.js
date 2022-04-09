import React, { Component } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View ,Button, TouchableOpacity } from 'react-native';

const buttonWithBackground = props => {
   const content = (
    <View style={[styles.button,{backgroundColor: props.color}]}>
     <Text style={styles.text}>{props.text}</Text>

     </View>

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
export default buttonWithBackground;
