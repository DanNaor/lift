import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle, loginWithEmail } from '../features/auth/authSlice';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

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
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleEmailSignIn} style={styles.emailButton}>
          <Text style={styles.emailText}>Sign in with Email</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailContainer: {
    marginTop: 30,
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  emailButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 25,
  },
  emailText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
