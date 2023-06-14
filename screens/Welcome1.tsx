import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "./GlobalStyles";

const Welcome1 = () => {
  const navigation: any = useNavigation();

  return (
  <>
    <LinearGradient
      style={styles.welcome1}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.welcome1Child}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.helloMyFriend, styles.getOtpFlexBox]}>
        Hello, my friend!
      </Text>
      <Text style={[styles.itsTimeToContainer, styles.getOtpFlexBox]}>
        <Text style={styles.itsTimeTo}>{`     it’s time to enjoy cool
fairy tales `}</Text>
        <Text style={styles.withYourChid}>with your child :)</Text>
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Otpscreen")}
      >
        <View style={styles.groupChildPosition}>
          <LinearGradient
            style={[styles.groupChild, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.getOtp, styles.getOtpFlexBox]}>Get Started</Text>
        </View>
      </Pressable>
    </LinearGradient>
  </>
  );
};

const styles = StyleSheet.create({
  getOtpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  welcome1Child: {
    top: 150,
    left: 53,
    width: 300,
    height: 300,
    position: "absolute",
  },
  helloMyFriend: {
    top: 500,
    left: 110,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "left",
  },
  itsTimeTo: {
    color: Color.whitesmoke,
  },
  withYourChid: {
    color: Color.gainsboro_100,
  },
  itsTimeToContainer: {
    top: 550,
    left: 125,
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
    width: 251,
    height: 56,
  },
  groupChild: {
    borderRadius: Border.br_2xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3.3600001335144043,
    },
    shadowRadius: 3.36,
    elevation: 3.36,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  getOtp: {
    top: "22%",
    left: "29%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    textAlign: "left",
  },
  button: {
    top: 720,
    left: 70,
    width: 250,
    height: 60,
    position: "absolute",
  },
  welcome1: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default Welcome1;
