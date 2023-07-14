import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const Language1 = () => {
  const navigation :any = useNavigation();

  return (
    <LinearGradient
      style={styles.language1}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Text style={styles.selectYourLanguages}>Select Your Languages</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.malayalam, styles.malayalamTypo]}>Malayalam</Text>
        <View style={[styles.tick, styles.tickLayout]}>
          <Image
            style={[styles.tickChild, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={[styles.doneIcon, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/done.png")}
          />
        </View>
      </View>
      <View style={styles.malayalamParent}>
        <Text style={[styles.malayalam1, styles.malayalamTypo]}>Malayalam</Text>
        <View style={[styles.tick1, styles.tick1Position]}>
          <Image
            style={[styles.tickChild, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={[styles.doneIcon, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/done.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text style={[styles.english, styles.tick1Position]}>English</Text>
        <View style={[styles.tick2, styles.tickLayout]}>
          <Image
            style={[styles.tickChild, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/ellipse-231.png")}
          />
          <Image
            style={[styles.doneIcon, styles.doneIconPosition1]}
            resizeMode="cover"
            source={require("../assets/done.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text style={[styles.hindi, styles.hindiPosition]}>Hindi</Text>
        <View style={[styles.ellipseParent, styles.tickLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.tickLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-231.png")}
          />
          <Image
            style={[styles.doneIcon3, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/done1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.rectangleView, styles.groupShadowBox]} />
        <Text style={[styles.tamil, styles.hindiTypo]}>Tamil</Text>
        <View style={[styles.ellipseGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-24.png")}
          />
          <Image
            style={[styles.doneIcon4, styles.doneIconPosition]}
            resizeMode="cover"
            source={require("../assets/done2.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.hindiPosition]}
        onPress={() => navigation.navigate("Category")}
      >
        <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.rectanglePosition]}
            locations={[0, 1]}
            colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.getOtp, styles.nextTypo]}>Next</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 170,
    width: 170,
    top: 275,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  malayalamTypo: {
    color: Color.whitesmoke,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  tickLayout: {
    height: 37,
    width: 37,
  },
  doneIconPosition1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  tick1Position: {
    left: 43,
    position: "absolute",
  },
  groupViewPosition: {
    top: 490,
    height: 170,
    width: 170,
    position: "absolute",
  },
  hindiPosition: {
    left: 55,
    position: "absolute",
  },
  groupLayout: {
    height: 34,
    width: 34,
    position: "absolute",
  },
  hindiTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 85,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  doneIconPosition: {
    left: 3,
    top: 3,
  },
  rectanglePosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  nextTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 27,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  selectYourLanguages: {
    top: 166,
    left: 87,
    fontFamily: FontFamily.interRegular,
    width: 271,
    height: 39,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChild: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 170,
    width: 170,
    position: "absolute",
  },
  malayalam: {
    left: 23,
    top: 85,
    color: Color.whitesmoke,
  },
  tickChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  doneIcon: {
    height: "89.19%",
    width: "89.19%",
    top: "10.81%",
    left: "10.81%",
  },
  tick: {
    left: 66,
    top: 34,
    width: 37,
    position: "absolute",
  },
  rectangleParent: {
    left: 25,
  },
  malayalam1: {
    top: 51,
    left: 0,
  },
  tick1: {
    height: 37,
    width: 37,
    top: 0,
  },
  malayalamParent: {
    top: 309,
    left: 48,
    width: 123,
    height: 80,
    position: "absolute",
  },
  groupItem: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 170,
    width: 170,
    position: "absolute",
  },
  english: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 85,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  tick2: {
    left: 63,
    top: 34,
    width: 37,
    position: "absolute",
  },
  rectangleGroup: {
    left: 237,
  },
  groupInner: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 170,
    width: 170,
    position: "absolute",
  },
  hindi: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 85,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  doneIcon3: {
    left: 3,
    top: 3,
  },
  ellipseParent: {
    top: 33,
    left: 68,
    position: "absolute",
  },
  rectangleContainer: {
    left: 25,
  },
  rectangleView: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.midnightblue_100,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 170,
    width: 170,
    position: "absolute",
  },
  tamil: {
    left: 54,
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  doneIcon4: {
    width: 31,
    height: 31,
    position: "absolute",
  },
  ellipseGroup: {
    top: 36,
    left: 68,
  },
  groupView: {
    left: 237,
  },
  rectangleLineargradient: {
    borderRadius: Border.br_2xl,
    shadowRadius: 3.36,
    elevation: 3.36,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  rectangleParent1: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  button: {
    top: 720,
    left: 70,
    width: 250,
    height: 60,
    position: "absolute",
  },
  next: {
    top: 825,
    left: 184,
  },
  language1: {
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Language1;
