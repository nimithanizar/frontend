import * as React from "react";
import { Text, TextInput,StyleSheet, View, Image, Pressable, Alert } from "react-native";
import { useState } from 'react';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

//import { Avatar, Icon } from 'react-native-elements';


const Name1 = () => {
  const navigation :any = useNavigation();
  const [text, setText] = useState('');
  const [age, setAge] = useState('');

   
 const _storeData = async () => {

    try {
      await AsyncStorage.setItem(
        'name',
        text,
      );
      await AsyncStorage.setItem(
        'age',
        age,
      );


      if (text.trim().length === 0 && age.trim().length === 0  ) {
        Alert.alert('Enter a name and age ');
      }
    
      navigation.navigate("Home1",text)
    } catch (error) {
      // Error saving data
    }
  };




  const onChangeText = (newText:any) => {
    setText(newText);
  };

  
  const onChangeAge = (newText:any) => {
    setAge(newText);
  };

  return (
    <LinearGradient
      style={styles.name1}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >


      <Text 
           style={[styles.nowTellMe, styles.nowTellMeTypo]}
      >{`       Now tell me,
what is your name ?`}</Text>
      <Text style={[styles.howOldAre, styles.nowTellMeTypo]}>
        How old are you?
      </Text>


      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.button1Child, styles.childPosition]} />
        <TextInput
            style={{ height: 60,left :20}}
            onChangeText={e => setText(e)}
             value={text}
    />
      </View>
      <View style={[styles.button2, styles.buttonLayout]}>
        <View style={[styles.button2Child, styles.childPosition]} />
      
        <TextInput
               style={{ height: 60,left :20 }}
               onChangeText={e => setAge(e)}
                value={age}
    />
      </View>
      {/* <Image
        style={styles.name1Child}
        resizeMode="cover"
        source={require("../assets/group-770.png")}
      /> */}
      <Pressable
        style={styles.button}
        onPress={() => _storeData()}
      >
        <View style={styles.rectangleParent}>
          <LinearGradient
            style={[styles.groupChild, styles.childPosition]}
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
  nowTellMeTypo: {
    height: 64,
    width: 233,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  buttonLayout: {
    height: 57,
    width: 317,
    left: 50,
    position: "absolute",
  },
  childPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  getOtpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  nowTellMe: {
    top: 190,
    left: 104,
  },
  howOldAre: {
    top: 400,
    left: 115,
  },
  button1Child: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  enterYourName: {
    width: "65.62%",
    top: "24.56%",
    left: "17.35%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  button1: {
    top: 280,
  },
  button2Child: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button2: {
    top: 470,
  },
  name1Child: {
    top: 132,
    left: 129,
    width: 169,
    height: 158,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xl,
    shadowRadius: 3.36,
    elevation: 3.36,
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
  rectangleParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  button: {
    top: 720,
    left: 70,
    width: 250,
    height: 60,
    position: "absolute",
  },
  name1: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default Name1;
