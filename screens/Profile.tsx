import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "./GlobalStyles";
import { useState ,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation:any = useNavigation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');


 
useEffect(()=>{
  retrieveData();
},[]);



 const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      const  value2 : any = await AsyncStorage.getItem('age');
      const   value3 :any = await AsyncStorage.getItem('phonenumber')
      console.log('value', value);
      console.log('value2',value2);
      if (value !== null) {
        // We have data!!
        console.log(value);
        setName(value);
        console.log(value2);
        setAge(value2);
        console.log(value3);
        setNumber(value3);

      }
    } catch (error) {
      // Error retrieving data
    }
  };


  
  return (
    <LinearGradient
      style={styles.profile}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={[styles.line6Stroke, styles.strokeLayout]}
        resizeMode="cover"
        source={require("../assets/line-6-stroke.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>{number}</Text>
        <Image
          style={[styles.iconCall, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-call.png")}
        />
      </View>
      <Image
        style={[styles.line5Stroke, styles.strokeLayout]}
        resizeMode="cover"
        source={require("../assets/line-6-stroke.png")}
      />
      {/* <Image
        style={[styles.profileChild, styles.profileChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-784.png")}
      /> */}

     <Image
        style={[styles.iconCalendar, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/-icon-calendar.png")}
      />
      <Text style={[styles.text1, styles.text1Position]}>{age}</Text>


      <Image
        style={[styles.line4Stroke, styles.strokeLayout]}
        resizeMode="cover"
        source={require("../assets/line-6-stroke.png")}
      />
      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-55.png")}
        />
        <Text style={[styles.save, styles.saveTypo]}>save</Text>
      </Pressable>
      <Text style={[styles.katerina, styles.saveTypo]}>{name}
</Text>
      <View style={[styles.iconUserParent, styles.profileChildPosition]}>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-user.png")}
        />
        <Text style={[styles.katerina1, styles.textTypo]}>{name}
</Text>
      </View>
      <Image
        style={styles.profileItem}
        resizeMode="cover"
        source={require("../assets/group-780.png")}
      />
    </LinearGradient>
  );
};





const styles = StyleSheet.create({
  strokeLayout: {
    height: 1,
    width: 430,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileChildPosition: {
    left: "9.07%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 54,
    width: 229,
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  line6Stroke: {
    top: 630,
    left: 0,
  },
  text: {
    top: -20,
    left: 93,
  },
  iconCall: {
    height: "100%",
    width: "15.15%",
    right: "84.85%",
    bottom: "0%",
    left: "0%",
    top: "-60%",
    maxWidth: "100%",
    position: "absolute",
  },
  parent: {
    top: 600,
    left: 39,
    width: 239,
    height: 36,
    position: "absolute",
  },
  line5Stroke: {
    top: 550,
    left: 0,
  },
  iconCalendar: {
    height: "3.8%",
    width: "7.15%",
    top: "61%",
    right: "83.78%",
    bottom: "39.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "9.07%",
    position: "absolute",
  },
  text1: {
    top: 500,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
  },
  text1Position: {
    left: 150,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  profileChild: {
    height: "3.8%",
    width: "35.05%",
    top: "61%",
    right: "55.88%",
    bottom: "39.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  line4Stroke: {
    top: 475,
    left: 5,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  save: {
    left: 69,
    top: 0,
  },
  vectorParent: {
    top: 700,
    left: 90,
  },
  katerina: {
    top: 122,
    left: 140,
  },
  iconUser: {
    height: "91.61%",
    width: "15.61%",
    right: "84.39%",
    bottom: "8.39%",
    left: "0%",
    top: "40%",
    maxWidth: "100%",
    position: "absolute",
  },
  katerina1: {
    top: 10,
    left: 85,
  },
  iconUserParent: {
    height: "3.65%",
    width: "41.16%",
    top: "50%",
    right: "49.77%",
    bottom: "46.35%",
  },
  profileItem: {
    top: 211,
    left: 129,
    width: 158,
    height: 158,
    position: "absolute",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});
export default Profile;
