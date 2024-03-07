import {React,useEffect} from 'react';
import { View, Text, Button, StyleSheet, Pressable, ImageBackground, Font } from 'react-native';

const HomeScreen = ({ navigation }) => {

  
  return (
    
    <ImageBackground
    source={require('../pictures/b3.jpg')}  
    style={styles.container}
    >
      <View style={styles.view}>
        <Text style={styles.title}>Welcome to EcoSeren</Text>
        <Text style={styles.line}>Get your air quality tested with our product!</Text>
      </View>

      <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>&copy; 2024 EcoSeren . All rights reserved. ™</Text>
      </View>

    </ImageBackground>   
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily:'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10,
    color:'#FFFFFF',
    textAlign: 'center',
  },
  line: {
    fontFamily:'sans-serif-medium',
    fontSize: 20,
    color:'#FFFFFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2B35AF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyrightContainer: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
    paddingBottom: 10,
  },
  copyrightText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});

export default HomeScreen;