import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const Gender1 = () => {
  const navigation :any = useNavigation();

  return (
    <LinearGradient
      style={styles.gender1}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Text style={[styles.whatIsYour, styles.maleFlexBox]}>
        What is your gender?
      </Text>
      <Text style={[styles.male, styles.maleFlexBox]}>male</Text>
      <Text style={[styles.female, styles.maleFlexBox]}>female</Text>
      <Image
        style={styles.gender1Child}
        resizeMode="cover"
        source={require("../assets/group-750.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Name1")}
      >
        <View style={styles.groupChildPosition}>
          <LinearGradient
            style={[styles.groupChild, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.getOtp, styles.maleFlexBox]}>Continue</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  maleFlexBox: {
    textAlign: "left",
    color: Color.white,
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
  whatIsYour: {
    top: 100,
    left: 87,
    width: 265,
    height: 38,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  male: {
    top: 350,
    left: 192,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  female: {
    top: 600,
    left: 181,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  gender1Child: {
    top: 170,
    left: 136,
    width: 164,
    height: 416,
    position: "absolute",
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
  gender1: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default Gender1;
