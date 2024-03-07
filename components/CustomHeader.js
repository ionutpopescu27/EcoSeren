// CustomHeader.js
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={({ pressed }) => [
          styles.backButton,
          {
            opacity: isHovered || pressed ? 1 : 0.5,
          },
        ]}
      >
        <Text style={styles.backButtonText}>{'< Back'} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
    color:'#FFFFFF'
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default CustomHeader;
