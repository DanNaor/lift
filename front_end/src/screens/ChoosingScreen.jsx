import React ,{ Alert,useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getCurrentProgram } from '../features/program/programSlice'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/base';
import Carousel from '../components/Carousel';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";

function ChoosingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([
    {
      source: require("front_end/src/assets/abs_workout.png"),
    },
    {
      source: require("front_end/src/assets/abs_workout.png"),
    },
    {
      source: require("front_end/src/assets/abs_workout.png"),
    },
  ]);

  
  const dispatch = useDispatch()

  return (
    
    <SafeAreaView style={styles.container}>
    <View style={styles.choosingContainer}>
      <Text style={styles.headerText}>Choose a practice</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
    borderColor:'black'
  },
  historyContainer: {
    flex: 2,
    backgroundColor: "white",
  },
  headerText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
    });
    
export default ChoosingScreen