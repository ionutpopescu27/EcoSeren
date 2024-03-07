import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Pressable,TextInput } from 'react-native'
import {FIREBASE_AUTH} from '../firebase.js'

const RegisterScreen = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(' ');
  const auth = FIREBASE_AUTH;


  const handleRegister = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your emails!');
    } catch (error){
        console.log(error);
        alert('Registering in failed: ' + error)
    } finally {
      setLoading(false);
    }
    }




return(

    <KeyboardAvoidingView
          style={styles.container}
          behaviour="padding"
        >
            <View style={styles.titleContainer}> 
                <Text style={styles.titleText}>Create your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={text => setEmail(text) }
                  style={styles.inputText}
                />
                <TextInput
                  placeholder="Password"
                  value={password }
                  onChangeText={text => setPassword(text)}
                  style={styles.inputText}
                  secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => handleRegister()}
                style={[styles.button]}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
            </View>
    </KeyboardAvoidingView> 

);

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center', 
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems:'center',
        padding: 10,
    },
    inputContainer:{
        width: '80%',
    },
    inputText:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
        borderColor:'#d3d4d3',
        borderWidth: 1,
    },
    titleText:{
      fontFamily:'sans-serif-medium',
      fontSize: 20,
      textAlign: 'center'
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor:'#24dbc9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
      backgroundColor:'white',
      marginTop: 5,
      borderColor: '#24dbc9',
      borderwidth: 2,
    },
    buttonText:{
      color:'white',
      fontFamily:'sans-serif-medium',
      fontSize: 14,
    }
  })

export default RegisterScreen;

