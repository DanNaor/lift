import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dots, setDots] = useState([...Array(images.length).keys()]);

  const handleDotPress = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveIndex(index)}
            style={styles.image}
          >
            <Image
              source={image}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dots}>
        {dots.map((dot, index) => (
          <View
            key={index}
            style={[styles.dot, dot === activeIndex && styles.activeDot]}
            onPress={() => handleDotPress(dot)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
  carousel: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  dots: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
});

export default Carousel;