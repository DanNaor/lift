import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Carousel from '../components/Carousel';

const ChoosingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { title: 'Image 1', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: 'Promo 1' },
    {
      title: 'Image 2', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: 'Promo 2'
    },
    { title: 'Image 3', url: 'front_end/src/assets/abs_workout.png', promo: 'Promo 3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.choosingContainer}>
        <Text style={styles.headerText}>Choose a practice</Text>
        <Carousel images={images} />
      </View>
      <View style={styles.historyContainer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choosingContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    borderColor: 'black',
  },
  historyContainer: {
    flex: 2,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ChoosingScreen;