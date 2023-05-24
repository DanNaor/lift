import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';


const PracticeCard = ({ practice }) => {
  const { type, date } = practice;

  // Determine the image source based on the practice type
  let imageSource;
  switch (type) {
    case 'upper':
      imageSource = require('front_end/src/assets/upper.jpeg');
      break;
    case 'lowerA':
      imageSource = require('front_end/src/assets/lowerA.jpeg');
      break;
    case 'lowerB':
      imageSource = require('front_end/src/assets/lowerB.jpeg');
      break;
    default:
      imageSource = null;
  }
  const { width ,height} = useWindowDimensions();
  const cardWidth = width * 0.8;

  return (
    <View style={styles.container}>
    <View style={styles.infoContainer}>
      <View style={styles.imageContainer}>
        {imageSource && <Image source={imageSource} style={[styles.image,]} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.type,{ fontSize: height >= 750 ? 45 : 14 }]}>{type}</Text>
        <Text style={[styles.date,{ fontSize: height >= 750 ? 45 : 14 }]}>{date}</Text>
      </View>
    </View>
  </View>
  //   <View style={[styles.container, { width: cardWidth }]}>
      
  //   <Text style={[styles.practiceType, { fontSize: height >= 750 ? 45 : 14 }]}>
  //     {practice_type}
  //   </Text>
  //   <Text style={[styles.date, { fontSize: height >= 750 ? 45 : 14 }]}>
  //     {date}
  //   </Text>
  // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width:"1000%"
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: "10%",
  },
  image: {
    width: "80%",
    height: "15%",
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  type: {
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
  },
});

export default PracticeCard;
