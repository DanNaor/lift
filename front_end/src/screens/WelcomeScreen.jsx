import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Linking } from 'react-native';
import { Button } from '@rneui/themed';
import 'firebase/auth'

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const [loginFlag, setLoginFlag] = useState(false);
  const RONNIE_COLEMAN = () => {
    Linking.openURL('https://youtu.be/GMEMKMAb5w4');
  };
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Image
          style={styles.image}
          source={require('../assets/WelcomeIcon.png')}
        />
      </View>

      <View style={[styles.centered, styles.description_section]}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description_text}>
          dan’s personal app for logging exercises stats and implementing
          progressive overload
        </Text>

        <Button
          title="LETS GO!"
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
          onPress={() => navigation.navigate('Login Screen')}
        />
        <Text style={styles.quote}>
          “When you hit failure, your workout has just begun{'\n'}
          <Text style={styles.underline} onPress={RONNIE_COLEMAN}>- Ronnie Coleman.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description_section: {
    marginTop: 10,
    width: width,
    height: height / 2,
  },
  description_text: {
    fontSize: 16,
    textAlign: 'center',
    width: '50%',
    color: '#7B6F72',
  },
  underline: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  image: {
    marginbuttom:"-10%",
    width: width,
    height: height / 1.8,
  },
  quote: {
    fontSize: 16,
    textAlign: 'center',
    width: '50%',
    color: '#7B6F72',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    width: '50%',
  },
  text: {
    fontSize: 18,
  },
});

export default WelcomeScreen;
