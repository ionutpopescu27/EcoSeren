import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Font } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeScreen from '../HomeScreen';
import EcoSerenScreen from '../EcoSerenScreen'
import AboutScreen from '../AboutScreen';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AuthContext = React.createContext();


export default function AppStack({ navigation }) {

  return (


        
              <Tab.Navigator
              activeColor="#ffffff" // Inverted active color
              inactiveColor="#ffffff" // Inverted inactive color
              barStyle={{  backgroundColor: '#363636'}}

              tabBarOptions={{
                animationEnabled: true, // Enable animations
                activeColor: '#999999',
                activeTintColor: '#828282', // Color of the active tab
                inactiveTintColor: '#ffffff', // Color of inactive tabs
                style: { backgroundColor: '#363636' }, // Background color of the tab bar
                shifting: true, // Enable shifting behavior
                tabBarTransitionPreset: 'fade', // Use fade animation
                tabBarTransitionSpec: {
                  open: { animation: 'timing', config: { duration: 2000 } },
                  close: { animation: 'timing', config: { duration: 2000 } },
                },
              }}
              screenOptions={{
                tabBarTransitionPreset: 'slide', // or 'scale' or 'slide'
                tabBarTransitionSpec: {
                  open: { animation: 'timing', config: { duration: 3000 } },
                  close: { animation: 'timing', config: { duration: 3000 } },
                },
              }}
              >
                  <Tab.Screen 
                  name="Home" 
                  component={HomeScreen}
                  options={{
                    tabBarIcon:({color}) => (
                      <MaterialCommunityIcons  name="home" size={30} color={color} />
                    ),
                  }}
                  />

                  <Tab.Screen 
                  name="Eco" 
                  component={EcoSerenScreen}
                  options={{
                    tabBarIcon:({color}) => (
                      <MaterialCommunityIcons  name="leaf-circle" size={30} color={color} />
                    )
                  }} 
                  />

                  <Tab.Screen 
                  name="About" 
                  component={AboutScreen}
                  options={{
                    tabBarIcon:({color}) => (
                      <MaterialCommunityIcons  name="information" size={30} color={color} />
                    )
                  }} 
                  />
              </Tab.Navigator>


  );
}
