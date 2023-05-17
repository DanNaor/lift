import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Carousel from '../components/Carousel';

const ChoosingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { title: 'Legs A', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '90 minutes' },
    {
      title: 'Legs B', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '90 minutes'
    },
    { title: 'Upper', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '75 minutes' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.choosingContainer}>
        <Text style={styles.headerText}>Choose a practice</Text>
        <Carousel images={images} />
      </View>
      <View style={styles.historyContainer}>
      <Text style={styles.watch_history}>practices history</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choosingContainer: {
    flex: 1.7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    borderColor: 'black',
  },
  historyContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  watch_history: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '90%',
  },
});
export default ChoosingScreen;