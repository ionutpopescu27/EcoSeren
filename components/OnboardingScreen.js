import React, {useRef} from 'react'
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native'

const OnboardingScreen = ({navigation}) =>{

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };
  
    const handlePressOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome! Please log into your account or create one.</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable 
                style={styles.loginButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}    
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}> Login</Text>
                </Pressable>
            
                <Pressable 
                style={styles.registerButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}> Register</Text>
                </Pressable>
            </View>
        </View>
    );

}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems:'center',
        width: '88.2%'
    },
    titleText:{
        fontFamily:'sans-serif-medium',
        fontSize: 20,
        textAlign: 'center',
        width: '100%'
    },
    buttonsContainer:{
        justifyContent: 'center',
        alignItems:'center',
        width:'60%',
    },
    loginButton: {
        backgroundColor: '#24dbc9',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 10,
        width:'100%',
    },
    registerButton: {
        backgroundColor: '#A6A6A6',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
        marginBottom: 10,
        borderRadius: 10,
        width:'100%',
    },
    buttonText: {
        fontFamily:'sans-serif-medium',
        fontSize: 14,
        marginBottom: 5,
        marginTop:5,
        color:'#FFFFFF'
    },

})