import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoogleSignInButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>G</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DB4437',
    borderRadius: 4,
    padding: 8,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#DB4437',
    padding: 8,
    borderRadius: 2,
    marginRight: 8,
  },
  icon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3C4043',
    textAlign: 'center',
  },
});

export default GoogleSignInButton;