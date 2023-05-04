import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { GoogleAuthProvider } from "firebase/auth";
import { loginWithGoogle } from '../features/auth/authSlice';
import Config from 'react-native-config';
import { Button } from '@rneui/base';

const { width, height } = Dimensions.get('window');



const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
      dispatch(loginWithGoogle());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Button
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
      />
      <Text style={styles.divider}>Or</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Email and Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 48,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  divider: {
    color: 'white',
    marginVertical: 24,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  googleButton: {
    width: width * 0.8,
    height: 48,
    marginBottom: 16,
  },
});

export default LoginScreen;