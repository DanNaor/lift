import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import { getCurrentProgram } from '../features/program/programSlice';
import PracticeCard from '../components/practiceCard';

const ChoosingScreen = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.program.ProgramsList);
  const isLoading = useSelector((state) => state.program.isLoading);
  const [displayedPractices, setDisplayedPractices] = useState(5);
  
  useEffect(() => {
    // Fetch the current program when the component mounts
    dispatch(getCurrentProgram());
  }, [dispatch]);

  const images = [
    { title: 'Legs A', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '90 minutes' },
    { title: 'Legs B', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '90 minutes' },
    { title: 'Upper', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80', promo: '75 minutes' },
  ];

  const { height } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.choosingContainer,]}>
        <Text style={[styles.headerText, { fontSize: height >= 750 ? 45 : 25 }]}>Choose a practice</Text>
        <Carousel images={images} />
      </View>
      <View style={[styles.historyContainer]}>
        <Text style={[styles.watch_history, { fontSize: height >= 750 ? 45 : 25 }]}>Last 5 practices</Text>
        {isLoading ? (
          <ActivityIndicator size="large" />) : (
          <View>
             {Array.isArray(programs) && programs.length > 0 ? (
              programs.slice(0, displayedPractices).map((program, index) => (
                <PracticeCard key={index} practice={program} />
              ))
            ) : (
              <Text style={[styles.watch_history,{ fontSize: height >= 750  ? 45: 25 }]}>everyone starts from somewhere...</Text>
            )}
            {programs!==null &&(programs.length > 5 && displayedPractices < programs.length) && (
              <Text
                style={styles.showMoreText}
                onPress={() => console.log("show more")}
              >
                Show More
              </Text>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choosingContainer: {
    height: "50%",
    alignItems: 'center',
    paddingTop: 30,
    borderColor: 'black',
  },
  historyContainer: {
    alignItems: 'center',
    height: "50%",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
  },
  watch_history: {
    fontWeight: 'bold',
  },
});

export default ChoosingScreen;
