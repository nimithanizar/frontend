import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState ,useEffect} from 'react';
import SwitchToggle from "react-native-switch-toggle";

const Settings = () => {
  const navigation :any = useNavigation();
  const [name, setName] = useState('');
  const [on, setOn] = useState(false);
  let isOn = false
 

  useEffect(()=>{
    retrieveData();
  },[]);

  useEffect(()=>{
    storeNightMode();
  },[on]);



  const storeNightMode = async () => {
    // setOn(!on);  
    // setTimeout(() => {
      console.log('on',on);
    // },5000);
    
    try {
      await AsyncStorage.setItem(
        'nightModeOn',
        `${on}`,
      );
    } catch (error) {
      // Error saving data
    }
  };
 


  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        console.log(value);
        setName(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };




  return (
    <LinearGradient
      style={styles.settings}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Text style={styles.katerina}>{name}</Text>
      <View style={styles.settingsChild} />
      <Text style={[styles.content, styles.contentTypo]}>CONTENT</Text>
      <TouchableOpacity
        style={styles.settingsInner}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.editProfile, styles.contentTypo]}>
            Edit profile
          </Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutParent}
        onPress={() => navigation.navigate("Otpscreen")}
      >
        <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nightModeParent}
        onPress={() => navigation.navigate("NightMode")}
      >
        <Text style={[styles.nightMode, styles.logoutTypo]}>Night mode</Text>
        {/* <Image
          style={[styles.iconToggleOnCircle, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/-icon-toggle-on-circle.png")}
        /> */}
        <SwitchToggle
           switchOn={on}
           onPress={() => setOn(!on) }
           circleColorOff='#6D6D6D'
            circleColorOn='#fff'
            backgroundColorOn='#6D6D6D'
            backgroundColorOff='#C4C4C4'
            containerStyle={{
              // marginTop: 16,
              width: 55,
              height: 35,
              borderRadius: 25,
              // padding: 5,
            }}
            circleStyle={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }}
      />
      </TouchableOpacity>
{/*       
      <Image
        style={styles.settingsItem}
        resizeMode="cover"
        source={require("../assets/group-778.png")}
      /> */}

<TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate("Prompt")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-778.png")}
        />
      </TouchableOpacity> 
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-749.png")}
      />
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  contentTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 54,
    width: 229,
    position: "absolute",
  },
  logoutTypo: {
    top: 0,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
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
  katerina: {
    top: 309,
    left: 142,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  settingsChild: {
    top: 466,
    left: 5,
    borderRadius: 6,
    backgroundColor: "#c3bebe",
    width: 386,
    height: 43,
    position: "absolute",
  },
  content: {
    top: 473,
    color: "#292d32",
    left: 45,
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.midnightblue_200,
  },
  editProfile: {
    top: 13,
    left: 40,
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon: {
    height: "53.7%",
    width: "7.82%",
    top: "24.07%",
    right: "5.28%",
    bottom: "22.22%",
    left: "86.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsInner: {
    top: 379,
    left: 101,
    height: 54,
    width: 229,
    position: "absolute",
  },
  logout: {
    left: 67,
  },
  vectorIcon1: {
    width: "24.19%",
    right: "75.81%",
  },
  logoutParent: {
    top: 671,
    width: 147,
    height: 32,
    left: 45,
    position: "absolute",
  },
  nightMode: {
    left: 77,
  },
  iconToggleOnCircle: {
    width: "20.18%",
    right: "79.82%",
  },
  nightModeParent: {
    top: 592,
    left: 35,
    width: 210,
    height: 35,
    position: "absolute",
  },
  settingsItem: {
    top: 52,
    left: 23,
    width: 78,
    height: 83,
    position: "absolute",
  },
  groupIcon: {
    top: 130,
    left: 128,
    width: 158,
    height: 158,
    position: "absolute",
  },
  settings: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Settings;
