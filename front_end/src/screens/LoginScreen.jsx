import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Linking } from 'react-native';
import { Button } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { storeData, getItemFor } from '../helpers/storageHelper'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/auth/authSlice';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const dispatch = useDispatch();
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                dispatch(signIn(token))

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                
            });
    };
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/WelcomeIcon.png')}
            />
            <View style={styles.description_section}>
                <Button
                    title="login with google"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={loginWithGoogle}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    description_section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '10%',
        width: width,
    },
    description_text: {
        fontSize: 16,
        textAlign: 'center',
        width: '50%',
        color: '#7B6F72',
        lineHeight: 24,
    },
    underline: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height / 2,
    },
    quote: {
        fontSize: 16,
        textAlign: 'center',
        width: '50%',
        color: '#7B6F72',
        lineHeight: 24,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        width: '50%',
        height: '50%',
    },
    text: {
        fontSize: 18,
    },
});

export default LoginScreen;
