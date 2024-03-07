import React, {useState, useEffect} from 'react';
import { View, Text,StyleSheet,ImageBackground, Font } from 'react-native';

const AboutScreen = () => {

  
return(

<ImageBackground
    source={require('../pictures/b3.jpg')}  
    style={styles.container}
    >

      <View style={styles.view}>
        <Text style={styles.titleText}>About EcoSeren</Text>
        <Text style={styles.lineText}>
              Welcome to our app! This is a brief introduction to what EcoSeren is about.
        </Text>
        <Text style={styles.lineText}>
              Breathe easy, live better – embrace high air quality for a healthier and happier life!
        </Text>

      <View style={styles.contact}>  
        <Text style={styles.titleText}>Contact Us:</Text>
        <Text style={styles.contactText}>Email: ionutpopescu2718@gmail.com</Text>
        <Text style={styles.contactText}>Phone: (+40) 734 090 028</Text>
      </View>  
      </View>

      <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>&copy; 2024 EcoSeren . All rights reserved. ™</Text>
      </View>

  </ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contact:{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 70,
    },
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    titleText: {
      fontFamily:'sans-serif-medium',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#FFFFFF'
    },
    lineText: {
      fontFamily:'sans-serif-medium',
      fontSize: 20,
      marginBottom: 10,
      color:'#FFFFFF',
      textAlign: 'center',
    },
    contactText: {
      fontFamily:'sans-serif-medium',
      fontSize: 18,
      marginBottom: 10,
      color:'#FFFFFF'
    },
    copyrightContainer: {
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

export default AboutScreen;
