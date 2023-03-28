import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');
import { Button } from '@rneui/themed';
const WelcomeScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/WelcomeIcon.png')}
      />
      <View style={styles.description_section}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description_text}>dan’s personal app for logging exercises stats and implementing progressive overload</Text>
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
                marginRight: "25%",

              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
          <Text style={styles.quote}>
    “When you hit failure, your workout has just begun{'\n'}
    <Text style={styles.underline}>- Ronnie Coleman.</Text>
</Text>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  description_section: {
    marginLeft: "18.06%",
    marginRight: "18.06%",
    marginTop: "10.25%",
  },
  description_text: {
    fontSize: 16,
    textAlign: "center",
    width: "50%",
    marginRight: "25%",
    color: "#7B6F72",
    lineHeight: "176%"
  },
  underline: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
},
  lets_go_btn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height / 2,
  },
  quote: {
    fontSize: 16,
    textAlign: "center",
    width: "50%",
    marginRight: "25%",
    color: "#7B6F72",
    lineHeight: "176%"
  },
  title: {
    textAlign: "center",
     marginRight: "25%",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    width: "50%",
    height: "50%"
  },
  text: {
    fontSize: 18,
  },
});
export default WelcomeScreen