import React, {useState, useEffect} from 'react';
import { View, Text,StyleSheet,ImageBackground, Pressable, Animated, Font } from 'react-native';

const EcoSerenScreen = ({navigation}) => {

  const [sensorTemp,setSensorTemp] = useState(null);
  const [sensorHum, setSensonHum] = useState(null);
  const [message, setMessage] = useState(null);
  const [getDataPressed, setGetDataPressed] = useState(false);
  const [aqi, setAqi] = useState(0);
  

    const fetchData =  async () => {

      const regex = /(\d+\.\d+)\/(\d+\.\d+)/

          fetch('http://127.0.0.1:5000/data')
          .then(response => response.json())
          .then(data => {
                          data = JSON.stringify(data);
                          const m = data.match(regex);
                          const [, firstNumber, secondNumber] = m;
                          const firstNumberInt = parseInt(firstNumber, 10);
                          const secondNumberInt = parseInt(secondNumber, 10);
                          setSensorTemp(firstNumber);
                          setSensonHum(secondNumber);  
                        }) 
          .catch(error => console.error(error));
    }


  const handlePressable = () => {
    fetchData();
    setGetDataPressed(true);
    
    let score = 0;

    if (sensorTemp < 10) {
      score += 5;
    } else if (sensorTemp >= 10 && sensorTemp < 20) {
      score += 5;
    } else if (sensorTemp >= 20 && sensorTemp < 30) {
      score += 2;
    } else if( sensorTemp >= 30) {
      score+=5;
    }
  
    if (sensorHum > 80) {
      score += 10;
    } else if (sensorHum >= 60 && sensorHum <= 80) {
      score += 5;
    } else if (sensorHum >= 30 && sensorHum < 60) {
      score += 2;
    } 
  
    console.log("score after temp: " + score);

    if(score < 10){
      setMessage("Very High Air Quality, AQI: ");
    } else if(score >= 11 && score <= 20){
      setMessage("High Air Quality, AQI: ");
    } else if(score >= 21 && score <= 30){
      setMessage("Moderate Air Quality, AQI: ");
    } else if(score >= 31){
      setMessage("Low Air Quality, AQI: ");
    }
    setAqi(score);

    console.log("final score: " + score);
  }


  return (

    <ImageBackground
    source={require('../pictures/b3.jpg')}  
    style={styles.container}
    >
    <View style={styles.view}>
      <Text style={styles.titleText}> Check your current room conditions! </Text>

      <Pressable style={styles.button2} onPress={handlePressable}>
        <Text style={styles.buttonText}>Get Live Data</Text>
      </Pressable>
      
      <Text style={styles.lineText}>Room temperature: {sensorTemp}°C </Text>
      <Text style={styles.lineText}>Air humidity: {sensorHum}%</Text>
      
      <View style={styles.messageView}>
        {( aqi !== 0) && (
          <Text style={styles.lineText}>{message}{aqi}</Text>
        )}
      </View>
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
    padding: 20,
  },
  buttonsView: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  messageView: {
     fontFamily:'sans-serif-medium',
     flexDirection:'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     fontSize: 24,
   },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontFamily:'sans-serif-medium',
    fontSize: 25,
    marginTop: 10,
    color:'#FFFFFF'
  },
  lineText: {
    fontFamily:'sans-serif-medium',
    fontSize: 18,
    marginBottom: 10,
    color:'#FFFFFF'
  },
  titleText: {
    fontFamily:'sans-serif-medium',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FFFFFF',
    textAlign: 'center',
  },
  buttonText: {
    fontFamily:'sans-serif-medium',
    fontSize: 18,
    marginBottom: 10,
    color:'#FFFFFF'
  },
  messageText: {
    fontFamily:'sans-serif-medium',
    fontSize: 18,
    marginBottom: 10,
    color:'#FFFFFF'
  },
  button1: {
    backgroundColor: '#828282',
    padding: 10,
    marginRight: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
    width:150,
  },
  button2: {
    backgroundColor: '#828282',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    width:150,
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

export default EcoSerenScreen;