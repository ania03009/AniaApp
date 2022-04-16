import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, TouchableOpacity } from 'react-native';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import ButtonWithBackground from'./src/ButtonWithBackground';
import LinearGradientButton from'./src/LinearGradientButton';


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,  
  };

  return (
      <View style={styles.container}>

        <StatusBar backgroundColor="pink" />

			<ScrollView style={styles.style_scrolla}>



				{/* <LinearGradientButton text='Login' /> */}

				<ButtonWithBackground text='Login' color='pink'/>
			
				<Text style={styles.style_ani} >Lubię różowy </Text>
				<Text style={styles.style_ani_2} >PINK</Text> 
				<Text style={styles.style_ani_3} >2022</Text>
				<Text style={styles.style_ani_4} >by Ania</Text>  
				<Text style={styles.style_ani} >Lubię różowy </Text>
				<Text style={styles.style_ani_2} >PINK</Text> 
				<Text style={styles.style_ani_3} >2022</Text>
				<Text style={styles.style_ani_4} >by Ania</Text>

			</ScrollView>
 
      </View>
  );

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
	padding: 16,
    width: 200,
    borderRadius: 20,
		alignItems: 'center'
  },
  style_scrolla:{
    flex:1,
    width: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  style_ani: {
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'pink',
    fontWeight: '100',
  },
  style_ani_2: {
    fontSize: 140,
    textAlign: 'center',
    color: 'pink',
    fontWeight: '100',
    textAlignVertical: 'center'
  },
  style_ani_3: {
    fontSize: 100,
    textAlign: 'center',
    color: 'pink',
    fontWeight: '100',
    textAlignVertical: 'center'
  },
  style_ani_4: {
    fontSize: 20,
    textAlign: 'center',
    color: 'pink',
    fontWeight: '300',
    textAlignVertical: 'center'
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
