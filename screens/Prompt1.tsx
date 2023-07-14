import * as React from "react";
import { StyleSheet, TextInput,TouchableOpacity ,View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { useEffect } from 'react';

import { Color, FontSize, Border, FontFamily } from "./GlobalStyles";


const Prompt1 = () => {
  const navigation: any = useNavigation();
  const [text, setText] = useState('');

  const handleRefreshButtonPress = () => {
    // Reset the input field value
    setText('');
  };
  
  // useEffect(() => {
  //   const addPrefix = () => {
  //     if (!text.startsWith("Once upon a time ")) {
  //       setText(`Once upon a time, ${text}`);
  //     }
  //   };
  
  //   addPrefix();
  // }, [text]);
  
  // useEffect(() => {
  //   setText(`Once upon a time, ${text}`);
  // }, []);
  console.log(text);
  


  return (
    <LinearGradient
      style={styles.prompt}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        
        <TextInput
            style={{ height: 60,top : -70,left :20,borderColor:'white',borderWidth:10}}
            onChangeText={setText}
            value={text}
    />
        <TouchableOpacity
          style={styles.emailSend}
          onPress={() => navigation.navigate("Homepage",text)}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/email-send.png")}
          />
        </TouchableOpacity>

       


      </View>
      <Text style={[styles.typeKeywordsRelative, styles.newStoryTypo]}>
        Type keywords relative to your story
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />

        <TouchableOpacity onPress={handleRefreshButtonPress}>
        {/* Add your refresh icon here */
     
        <Image
          style={styles.addIcon}
          resizeMode="cover"
          source={require("../assets/add.png")}
        />
  }
          </TouchableOpacity>

        <Text style={[styles.newStory, styles.newStoryTypo]}>New story</Text>
        <TouchableOpacity
          style={styles.iconSetting2}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-setting-2.png")}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  groupChildLayout: {
    height: 70,
    width: 300,
    left :0,
    position: "absolute",
  },
  groupPosition: {
    left: -4,
    top: 0,
    right :0,
    marginHorizontal :10,
  },
  newStoryTypo: {
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupLayout: {
    height: 71,
    width: 430,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.white,
    height: 77,
    width: 380,
   // position: "absolute",
  },
  emailSend: {
    left: 330,
    width: 34,
    height: 34,
    top: 21,
    position: "absolute",
  },
  rectangleParent: {
    top: 450,
    left: 7,
  },
  typeKeywordsRelative: {
    top: 401,
    left: 5,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  groupItem: {
    backgroundColor: Color.midnightblue_200,
    left: 0,
    top: 0,
  },
  addIcon: {
    left: 330,
    width: 42,
    height: 42,
    top: 21,
    position: "absolute",
    overflow: "hidden",
  },
  newStory: {
    left: 149,
    fontFamily: FontFamily.interRegular,
    top: 21,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    left : -10,
  },
  iconSetting2: {
    left: "8.37%",
    top: "29.58%",
    right: "83.91%",
    bottom: "26.33%",
    width: "7.72%",
    height: "44.09%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 45,
    left: -1,
  },
  prompt: {
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Prompt1;
