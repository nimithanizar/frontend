import * as React from "react";
import axios from 'axios';
import { StyleSheet, TextInput,TouchableOpacity, View, Text, Pressable, Alert } from "react-native";
import OtpInput from 'react-otp-input';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";
import { useState } from 'react';
import { useEffect } from 'react';


const Otpverification = (props: any) => {
  const navigation: any = useNavigation();
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  // const [message, setMessage] = useState('');


  // call the /verify/:to API
  function verifyPhoneNumber(number: any) {
    setOtp('');
    return axios.get(`${baseUrl}/otp/verify/+91${number}`)
      .then(response => {
        return response.data; // return the response data
      })
      .catch(error => {
        throw error; // re-throw the error to be handled later
      });
  }




  useEffect(() => {
    setNumber(props.route.params)
  }, []);

  console.log('Parameter value:', number);

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
    console.log('otp', otp)
  };

  const handleInputTextChange = (text: string, index: number) => {
    // Update the OTP state with the new value
    const newOtp = otp.split('');
    newOtp[index] = text;
    handleOtpChange(newOtp.join(''));
  };


  // function to verify otp

  const baseUrl = 'http://localhost:3000';

  const handleVerify = () => {
    if (otp.toString().length === 6) {
      navigation.navigate("Name1")
    }
    else {
      Alert.alert("enter valid OTP");
    }
    // axios.get(`${baseUrl}/check/${number}/${code}`)
    //   .then(response => {
    //     return(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };


  return (
    <LinearGradient
      style={styles.otpverification}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >


      {/* <TextInput
        style={[styles.otpverificationChild, styles.otpverificationLayout]}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={handleOtpChange}
        value={otp}
      />
      <TextInput
        style={[styles.otpverificationItem, styles.otpverificationLayout]}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={handleOtpChange}
        value={otp}
      />
      <TextInput
        style={[styles.otpverificationInner, styles.otpverificationLayout]}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={handleOtpChange}
        value={otp}
      />
      <TextInput 
        style={[styles.rectangleView, styles.otpverificationLayout]} 
        keyboardType="numeric"
        maxLength={6}
        onChangeText={handleOtpChange}
        value={otp}
        /> */}


      {/* 
<View style={styles.otpverificationLayout}>
      <OtpInput
        value={otp[0]}
        onChange={(value:any) => handleOtpInputChange(0, value)}
        inputStyle={styles.otpverificationChild}
        renderInput={(props) => <input {...props} />}
      />
      <OtpInput
        value={otp[1]}
        onChange={(value:any) => handleOtpInputChange(1, value)}
        inputStyle={styles.otpverificationItem}
        renderInput={(props) => <input {...props} />}
      />
      <OtpInput
        value={otp[2]}
        onChange={(value:any) => handleOtpInputChange(2, value)}
        inputStyle={styles.otpverificationInner}
        renderInput={(props) => <input {...props} />}
      />
      <OtpInput
        value={otp[3]}
        onChange={(value:any) => handleOtpInputChange(3, value)}
        inputStyle={styles.rectangleView} 
        renderInput={(props) => <input {...props} />}
      />
    </View> */}


      <TextInput
        style={[styles.otpverificationChild, styles.otpverificationLayout]}
        value={otp[0]}
        onChangeText={(text) => handleInputTextChange(text, 0)}
        keyboardType="numeric"
        maxLength={1}
        autoFocus={true}
      />
      <TextInput
        style={[styles.otpverificationItem, styles.otpverificationLayout]}
        value={otp[1]}
        onChangeText={(text) => handleInputTextChange(text, 1)}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        style={[styles.otpverificationInner, styles.otpverificationLayout]}
        value={otp[2]}
        onChangeText={(text) => handleInputTextChange(text, 2)}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        style={[styles.rectangleView, styles.otpverificationLayout]}
        value={otp[3]}
        onChangeText={(text) => handleInputTextChange(text, 3)}
        keyboardType="numeric"
        maxLength={1}
      />

      <TextInput
        style={[styles.otpField4, styles.otpverificationLayout]}
        value={otp[4]}
        onChangeText={(text) => handleInputTextChange(text, 4)}
        keyboardType="numeric"
        maxLength={1}
      />

      <TextInput
        style={[styles.otpField5, styles.otpverificationLayout]}
        value={otp[5]}
        onChangeText={(text) => handleInputTextChange(text, 5)}
        keyboardType="numeric"
        maxLength={1}
      />




      <Text style={[styles.otpVerification, styles.otpFlexBox]}>
        <Text style={styles.otp}>{`otp `}</Text>Verification
      </Text>
      <Text
        style={[styles.enterTheOtp, styles.theTypo]}
      >{`Enter the OTP sent to `}</Text>
      <Text style={[styles.dontReceiveTheContainer, styles.textFlexBox]}>
        <Text style={styles.theTypo}>{`Dont receive the OTP? 
`}</Text>
</Text>

        <Pressable  
        onPress={() =>{
          verifyPhoneNumber(number);
        }}
        >
          <Text style={[styles.resendOtp, styles.otpTypo,styles.dontReceiveTheContainer1, styles.textFlexBox]}>RESEND OTP</Text>
        </Pressable>
      


      <Pressable
        style={styles.button}
        onPress={() => {
          handleVerify();
        }}
      >
        <View style={styles.groupChildPosition}>
          <LinearGradient
            style={[styles.groupChild, styles.groupChildPosition]}
            locations={[0, 1]}
            colors={["#ff8a01", "rgba(255, 138, 1, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.getOtp, styles.otpTypo]}>Continue</Text>
        </View>
      </Pressable>
      <Text style={[styles.text, styles.otpTypo]}>{number}</Text>
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  otpverificationLayout: {
    height: 54,
    width: 50,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    top: 341,
    position: "absolute",
  },
  otpFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  theTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  otpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  otpverificationChild: {
    left: 10,
  },
  otpverificationItem: {
    left: 75,
  },
  otpverificationInner: {
    left: 140,
  },
  rectangleView: {
    left: 208,
  },
  otpField4: {
    left: 273,
  },

  otpField5: {
    left: 336,
  },

  vectorParent: {
    top: 700,
    left: 100,
  },

  groupChildLayout: {
    height: 54,
    width: 229,
    position: "absolute",
  },
  verifyTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  verify: {
    left: 69,
    top: 0,
  },
  otp: {
    textTransform: "uppercase",
  },
  otpVerification: {
    top: 137,
    left: 102,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.interSemibold,
  },
  enterTheOtp: {
    top: 260,
    left: 50,
    width: 245,
    height: 28,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  resendOtp: {
    fontSize: FontSize.size_5xl,
    
  },
  dontReceiveTheContainer: {
    top: 447,
    left: 60,
    width: 278,
    height: 53,
  },
  dontReceiveTheContainer1: {
    top: 470,
    left: 60,
    width: 278,
    height: 53,
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
  text: {
    top: 250,
    left: 192,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  otpverification: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default Otpverification;
