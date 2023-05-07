import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle, loginWithEmail } from '../features/auth/authSlice';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    dispatch(loginWithGoogle());
  };

  const handleEmailSignIn = async () => {
    dispatch(loginWithEmail({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleButton}>
        <Image source={require('../assets/g_logo.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={[styles.dividerContainer, {height: screenHeight * 0.05}]}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine}></View>
      </View>
      <View style={[styles.emailContainer, {height: screenHeight * 0.25}]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          fontSize={screenWidth < 400 ? 16 : 20}
          height={screenWidth < 400 ? 40 : 50}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          fontSize={screenWidth < 400 ? 16 : 20}
          height={screenWidth < 400 ? 40 : 50}
        />
        <TouchableOpacity onPress={handleEmailSignIn} style={styles.emailButton}>
          <Text style={[styles.emailText, {fontSize: screenWidth < 400 ? 16 : 20}]}>Sign in with Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: screenWidth < 400 ? 20 : 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // align content vertically to center
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 5, // add some spacing between the icon and text
  },
  googleText: {
    color: '#111',
    fontSize: screenWidth < 400 ? 16 : 20,
    fontWeight: 'bold',
  },
  

  dividerContainer: 
  {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    },
    dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
    },
    dividerText: {
    color: '#ddd',
    fontSize: screenWidth < 400 ? 16 : 20,
    marginHorizontal: 10,
    },
    emailContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    },
    input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    },
    emailButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    },
    emailText: {
    color: '#111',
    fontWeight: 'bold',
    },
    });
    
    export default LoginScreen;