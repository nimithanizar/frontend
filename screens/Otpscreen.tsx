import * as React from "react";
import axios from 'axios';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, View, Text, Image, Alert, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { Color, FontFamily, Border, FontSize } from "./GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otpscreen = () => {
  const navigation: any = useNavigation();

  const [number, setNumber] = useState('');
  //const [response,setResponse] = useState({});
  const baseUrl = 'https://taleteller.onrender.com';
  //const to: string = '8086777542';


  // call the /verify/:to API
  function verifyPhoneNumber(number: any) {
    return axios.get(`${baseUrl}/otp/verify/+91${number}`)
      .then(response => {
        return response.data; // return the response data
      })
      .catch(error => {
        throw error; // re-throw the error to be handled later
      });
  }



  const storeNumber = async () => {
    if (number.trim().length === 0 || number.length !== 10) {
      Alert.alert('Enter Valid Phone Number');
    }
    else{
    console.log('number', number);
    try {
      await AsyncStorage.setItem(
        'phonenumber',
        number,
      );
      verifyPhoneNumber(number)
        .then(response => {

          navigation.navigate("Otpverification", number);
        })
        .catch(error => {
          if (error.response) {
            // handle non-network errors
            console.log(error.response.data);
          } else if (error.request) {
            // handle network errors
            console.log("Network Error:", error.message);
          } else {
            // handle other errors
            console.log("Error:", error.message);
          }
        });
    } catch (error) {
      // Error saving data
    }
  }
  };



  return (
    <ScrollView>
      <LinearGradient
        style={styles.otpscreen}
        locations={[0, 1]}
        colors={["#260768", "#941097"]}
        useAngle={true}
        angle={180}
      >
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <TouchableOpacity
            style={styles.button}
            onPress={() => storeNumber()}
          >

            <View style={styles.rectangleParent}>
              <LinearGradient
                style={styles.groupChild}
                locations={[0, 1]}
                colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
                useAngle={true}
                angle={180}
              />

              <Text style={[styles.getOtp, styles.otpFlexBox]}>Get OTP</Text>


            </View>
          </TouchableOpacity>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <Text style={[styles.otpVerification, styles.otpFlexBox]}>
            <Text style={styles.otp}>{`otp `}</Text>Verification
          </Text>
          <Text
            style={[styles.weWillSend, styles.weWillSendTypo]}
          >{`We will send you an One Time Password
           on this mobile number`}</Text>
          <Text style={[styles.enterMobileNumber, styles.weWillSendTypo]}>
            Enter Mobile Number
          </Text>
          <View style={[styles.otpscreenChild, styles.otpscreenShadowBox]} />

          <TextInput
            style={{ height: 45, left: 130, top: 620, width: 225, backgroundColor: 'white' }}
            onChangeText={e => setNumber(e)}
            value={number}
            inputMode="numeric"
          />

          <View style={[styles.otpscreenItem, styles.otpscreenShadowBox]} />
          {/* <Text style={[styles.text, styles.textTypo]}>8802768985</Text> */}

          <Text style={[styles.text1, styles.textTypo]}>{`+91 `}</Text>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  weWillSendTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  otpscreenShadowBox: {
    height: 59,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    top: 610,
    marginHorizontal: -20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3.3600001335144043,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 46,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_9xl,
    top: 620,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xl,
    shadowRadius: 3.36,
    elevation: 3.36,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3.3600001335144043,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    width: "100%",
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
  image1Icon: {
    top: 161,
    left: 99,
    borderRadius: 18,
    width: 233,
    height: 233,
    position: "absolute",
  },
  otp: {
    textTransform: "uppercase",
  },
  otpVerification: {
    top: 427,
    left: 96,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
  },
  weWillSend: {
    top: 488,
    left: 95,
    fontSize: 12,
    color: Color.white,
    fontFamily: FontFamily.interRegular,
  },
  enterMobileNumber: {
    top: 550,
    left: 95,
    fontSize: FontSize.size_5xl,
    color: Color.gainsboro_100,
  },
  otpscreenChild: {
    backgroundColor: Color.white,
    width: 338,
    top: 100,
  },
  otpscreenItem: {
    backgroundColor: "#e3e3e3",
    width: 91,
  },
  text: {
    left: 170,
  },
  text1: {
    left: 64,
  },
  otpscreen: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default Otpscreen;
