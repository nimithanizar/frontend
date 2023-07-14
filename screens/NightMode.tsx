import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "./GlobalStyles";

const NightMode = () => {
  const navigation :any= useNavigation();

  return (
    <LinearGradient
      style={styles.nightMode}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-778.png")}
        />
      </TouchableOpacity>
      <View style={styles.image3Parent}>
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-32.png")}
        />
        <Image
          style={styles.audioHeadphone1Icon}
          resizeMode="cover"
          source={require("../assets/audioheadphone-1.png")}
        />
      </View>
      <Text style={styles.pinocchioA}>Pinocchio - A Boy Made of Wood</Text>
      <Image
        style={styles.playCircleFilled}
        resizeMode="cover"
        source={require("../assets/play-circle-filled1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 25,
    top: 50,
    width: 78,
    height: 83,
    position: "absolute",
  },
  image3Icon: {
    top: 0,
    left: -4,
    borderRadius: 35,
    width: 309,
    height: 272,
    position: "absolute",
  },
  groupChild: {
    top: 32,
    left: 101,
    width: 105,
    height: 105,
    position: "absolute",
  },
  audioHeadphone1Icon: {
    top: 52,
    left: 122,
    width: 64,
    height: 64,
    position: "absolute",
  },
  image3Parent: {
    top: 286,
    left: 65,
    width: 301,
    height: 264,
    position: "absolute",
  },
  pinocchioA: {
    top: 221,
    left: 23,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  playCircleFilled: {
    top: 618,
    left: 167,
    width: 96,
    height: 96,
    position: "absolute",
    overflow: "hidden",
  },
  nightMode: {
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default NightMode;

