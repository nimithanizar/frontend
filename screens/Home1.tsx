import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState ,useEffect} from 'react';
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";

const Home1 = (props: any) => {
  const [name, setName] = useState('');
  //setName(props.route.params)

  const navigation :any= useNavigation();
 


 useEffect(() => {
  setName(props.route.params)
 },[]);

  return (
    <LinearGradient
      style={styles.home1}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Text style={[styles.welcomeKaterina, styles.getOtpFlexBox]}>
        <Text style={styles.welcome}>{`Welcome `}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.welcome}>{name}</Text>
      
      </Text>
      <Image
        style={styles.home1Child}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.iconHeart}
        resizeMode="cover"
        source={require("../assets/-icon-heart.png")}
      />
      <Text style={[styles.letsHaveSome, styles.getOtpFlexBox]}>
        Let's have some fun and explore together!
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Prompt")}
      >
        <View style={styles.groupChildPosition}>
          <LinearGradient
            style={[styles.groupChild, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.getOtp, styles.getOtpFlexBox]}>Continue</Text>
        </View>
      </Pressable>
    </LinearGradient>
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
  welcome: {
    color: Color.white,
  },
  text: {
    color: "#280246",
  },
  welcomeKaterina: {
    top: 100,
    left: 67,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
  },
  home1Child: {
    top: 320,
    left: 30,
    width: 350,
    height: 350,
    position: "absolute",
  },
  iconHeart: {
    height: "5.29%",
    width: "12.78%",
    top: "26%",
    right: "43.71%",
    bottom: "68.84%",
    left: "43.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  letsHaveSome: {
    top: 150,
    left: 16,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
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
  home1: {
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Home1;
