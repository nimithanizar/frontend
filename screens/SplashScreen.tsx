import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


import { FontFamily, Color } from "./GlobalStyles";

const SplashScreen = () => {

  const navigation:any = useNavigation();
    useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome1');
    }, 3000); // Redirect after 3 seconds
  }, []);

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Text style={styles.taleteller}>TALETELLER</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  taleteller: {
    position: "absolute",
    top: 378,
    left:30,
    fontSize: 60,
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "left",
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen;
