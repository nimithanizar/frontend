import * as React from "react";
import axios from 'axios';
import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import { useEffect } from "react";
import { useState } from 'react';
import Typewriter from 'react-native-typewriter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottleView from 'lottie-react-native';

import Sound from 'react-native-sound';




const Homepage = (props: any) => {
  const navigation: any = useNavigation();
  const [storyText, setStoryText] = useState("");
  const [text, setText] = useState("");
  const [on, setOn] = useState("false");
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState<{ order: number, paragraph: string, audioString: string, imageLink: string }[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [isEndOfStory, setisEndOfStory] = useState(false)
  const [audio, setaudio] = useState("")
  const [currentPlaying, setcurrentPlaying] = useState<{ order: number, paragraph: string, audioString: string, imageLink: string }>({
    order: -1,
    paragraph: "",
    audioString: "",
    imageLink: ""
  });








  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  useEffect(() => {
    retrieveNightMode();
    askQuestion();
  }, []);


  useEffect(() => {
    console.log('isEndOfStory', isEndOfStory);
  }, []);



  useEffect(() => {
    // console.log('length',result.length)
    if (result.length > 0) {
      setcurrentPlaying(result[0]);
      setisLoading(false);
    }


    console.log('object', result)
  }, [result]);



  useEffect(() => {
    console.log('currentplaying', currentPlaying);
    if (currentPlaying && currentPlaying.order !== -1) {
      playSound();
    }
  }, [currentPlaying]);







  const retrieveNightMode = async () => {
    try {
      const value: any = await AsyncStorage.getItem('nightModeOn');
      if (value !== null) {
        // We have data!!
        console.log('on in home', value);
        setOn(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };



  useEffect(() => {
    setText(props.route.params)
    // console.log("text", props.route.params);

  }, []);




  // const setPromt = () => {
  //   setIsVisible(true);
  //   const data = "named Jack who lived in a small village on the outskirts of a dense forest. From an early age, Jack loved exploring the wilderness, venturing deeper and deeper into the unknown. His parents were worried about his safety,but Jack was determined to discover all the secrets the forest held.One day, Jack came across a magnificent oak tree. Its trunk was broad and gnarled, and its canopy was vast, providing shade to everything under it. Jack was fascinated by the tree and knew he had to climb it.He grabbed hold of the rough bark and started climbing up the trunk. It was tough going, but Jack was determined to reach the top to see the view from above. Finally, he reached the tree's highest branches and looked around.Jack saw the most amazing view he had ever seen. The village was below him, and he could see the entire expanse of the forest.It was like a sea of green, stretching out as far as the eye could see.As he spent more time up in the tree, Jack started to notice some strange things. The leaves rustled more, and he could hear faint whispers coming from the branches around him. It was eerie, but it only fueled Jack's curiosity.One day, as Jack was climbing down from the oak tree, he spotted a small figure perched on a leafy branch. It was a fairy, with delicate wings and a wand. Jack was thrilled! He had heard stories about the fairies that lived in the forest, but he'd never actually seen one.The fairy introduced herself as Lily and said she had been watching Jack climb the oak tree every day. \"We have been waiting for someone like you,\" she said with a smile.Lily then revealed to Jack that the forest was in great danger. An evil sorcerer had been stealing the forest's magic, and was planning to use it to rule the world. Lily and the other fairies needed Jack's help to stop the sorcerer.Jack agreed to help, and together they set out on a dangerous mission to stop the evil sorcerer and save the magical forest. It was a difficult journey, but Jack's determination and bravery helped them overcome all the obstacles along the way.Finally, they reached the sorcerer's lair and confronted him. It was a fierce battle, but Jack and Lily emerged victorious, saving the forest and all its magical inhabitants.From that day on, Jack was known as a hero among the fairies and the forest creatures. He had proved that even a young boy with a brave heart and a curious mind could achieve great things. And Jack continued to explore and discover the wonders of the forest, always ready for his next adventure"


  //   setStoryText(data);
  //   const sentences = data.split('. ');
  //   let currentIndex = 0;

  //   while (currentIndex < sentences.length) {
  //     const paragraphSentences = sentences.slice(currentIndex, currentIndex + 5);
  //     const paragraph = paragraphSentences.join('. ');
  //     console.log('paragraphsentence',paragraphSentences);

  //      console.log("paragraph", paragraph);
  //     // Call the convertText function for each paragraph
  //     convertText(paragraph);
  //     callApi(paragraph)

  //     currentIndex += 5;
  //   }
  // }



  const askQuestion = async () => {
    console.log("text in ask", props.route.params);
    setisLoading(true);
    try {
      const response = await axios.post(
        'https://simple-chatgpt-api.p.rapidapi.com/ask',
        { question: props.route.params },
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '9dd1e98782mshb7d947ba5a19c49p1979b3jsn66de94797dea',
            'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com',
          },
        },
      );

      // const response = await axios.post(
      //   'https://chatgpt-api6.p.rapidapi.com/standard-gpt',
      //   { role: 'user',
      //   content: props.route.params },
      //   {
      //     headers: {
      //       'content-type': 'application/json',
      //       'X-RapidAPI-Key': 'e4b2f3c27fmshd5c7eccf025da4bp14c7adjsn5999d4e5c742',
      //       'X-RapidAPI-Host': 'chatgpt-api6.p.rapidapi.com',
      //     },
      //   },
      // )

      console.log(response.data);
      // console.log('respo', response.data);
      console.log('response data:', response.data);
      setStoryText(response.data.answer);
      const paragraphsArray = response.data.answer.split(/\n\s*\n/);
      // console.log("paragraph", paragraphsArray);




      let tempArray = [];

      //   // Call convertText function for each paragraph

      for (const [index, paragraph] of paragraphsArray.entries()) {
        try {

          let converted: any = await convertText(paragraph);
          // console.log('Paragraph processed:', paragraph);
          let image = await callApi(paragraph);

          let resultItem = {
            order: index,
            paragraph: paragraph,
            audioString: converted,
            imageLink: image,
          }
        
          tempArray.push(resultItem)

        } catch (error) {
          console.error('Error processing paragraph:', error);
        }

      }

      setResult(tempArray);



    } catch (error) {
      console.error('error', error);
    }

  };









  const convertText = async (paragraph: string) => {
    // console.log("sentence inside fn ", senteince)

    try {
      const response = await axios.post('https://taleteller.onrender.com/converter', {
        text: paragraph,
        type: 'text'
      })
      // SoundPlayer.playUrl('C:\Users\USER\GitHubdemo\express-api\output_2023-06-06T05_33_27.mp3')
      //  console.log(response.data)
      return response.data;


    } catch (error) {
      console.error('error', error);
    }
  }





  const callApi = async (paragraph: string) => {
    try {
      const response: any = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: "CZuSG0YI8z8s7xBnGpZSHnZxH8DFVgSCmQJUwzaSDzNW0BWoaVR6Ri0b0t0Y",
          prompt: "Draw a cartoon based on next sentences." + paragraph,
          negative_prompt: null,
          width: "512",
          height: "512",
          samples: "1",
          num_inference_steps: "20",
          safety_checker: "no",
          enhance_prompt: "yes",
          seed: null,
          guidance_scale: 7.5,
          multi_lingual: "no",
          panorama: "no",
          self_attention: "no",
          upscale: "no",
          embeddings_model: "embeddings_model_id",
          webhook: null,
          track_id: null
        }),
      });
      //  console.log('response',response);
      const data = await response.json();

      return data.output
      // Process the API response data here
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
    }
  };





  const playSound = () => {
    // console.log('here')
    // try {

    //  SoundPlayer.playUrl('http://localhost:3000/public/output_2023-06-08T06_35_19.mp3')
    // } catch (e) {
    //   console.log('Cannot play the sound file', e);
    // }

    const sound = new Sound(`https://taleteller.onrender.com/${currentPlaying.audioString}`, null, (error) => {
      console.log("audio ==", currentPlaying.audioString)
      if (error) {
        console.log('Error loading sound:', error);
      } else {
        sound.play((success) => {

          if (success) {
            console.log('Sound played successfully');
            sound.release();
            if (currentPlaying.order < result.length) {
              let order = ++currentPlaying.order;
              setcurrentPlaying(result[order]);
            }
            if (currentPlaying.order >= result.length) {
              setisEndOfStory(true)
            }


          } else {
            console.log('Sound playback failed');
          }
        });
      }
    });
  };













  return (

    <LinearGradient
      style={styles.homepage}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >




      {isLoading
        ?
        <LottleView
          style={{
            height: 250,
            width: 250,
            left: 35,
            top: 130,
          }}
          source={require("../assets/loading-animation.json")}
          autoPlay
          loop
        />
        :
        <>
          {result && currentPlaying && !isEndOfStory &&
            <>
              {on === "false" ? (
                <>



                  {currentPlaying.imageLink && currentPlaying.imageLink !== undefined && currentPlaying.imageLink !== "" ? (
                    <Image
                      style={[styles.homepageChild, styles.childPosition]}
                      resizeMode="cover"

                      source={{ uri: currentPlaying.imageLink[0] }}
                    />
                  ) : null}


                


                  <ScrollView style={{
                    top: 60,
                    left: 14,
                    width: 359,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}>



                    <Typewriter typing={1}
                      // onTypingEnd={handleTypingEnd}
                      style={[styles.longAgoIn, styles.playFlexBox]}>
                      {currentPlaying.paragraph}
                    </Typewriter>
                  </ScrollView>

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

                  {/* <TouchableOpacity onPress={() => askQuestion()} style={[styles.rectangleParent, styles.groupChildLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Image
                    style={styles.playCircleFilled}
                    resizeMode="cover"
                    source={require("../assets/play-circle-filled.png")} />
                  <Text style={[styles.play, styles.playFlexBox]}>PLAY</Text>
                </TouchableOpacity> */}


                  {/* <TouchableOpacity onPress={() =>playSound()} style={[styles.rectangleParent1, styles.groupChildLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <Image
                    style={styles.playCircleFilled}
                    resizeMode="cover"
                    source={require("../assets/play-circle-filled.png")} />
                  <Text style={[styles.play, styles.playFlexBox]}>audio</Text>
                </TouchableOpacity> */}
                </>
              ) : (

                <>
                  {/* {isVisible ? ( */}
                  <LottleView
                    style={{
                      height: 250,
                      width: 250,
                      left: 42,
                      top: 130,
                    }}
                    source={require("../assets/music-disc.json")}
                    autoPlay
                    loop
                  />
                  {/* ) : null} */}



                </>
              )}
            </>
          }
          <>
            {result && isEndOfStory && (

              <View style={{
                // top: 60,
                left: 14,
                width: 359,
                // borderWidth :2,
                // borderColor:'red',
                paddingRight: 15,
                paddingLeft: 15,
              }}>

                {/* <TouchableOpacity onPress={() => setcurrentPlaying(result[0])} style={[styles.rectangleParent1, styles.groupChildLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
            
                  <Text style={[styles.play, styles.playFlexBox]}>RePLAY</Text>
                </TouchableOpacity> */}


                <TouchableOpacity onPress={() => navigation.navigate("Prompt")} style={[styles.rectangleParent, styles.groupChildLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  {/* <Image
                    style={styles.playCircleFilled}
                    resizeMode="cover"
                    source={require("../assets/play-circle-filled.png")} /> */}
                  <Text style={[styles.play, styles.playFlexBox]}>HOME</Text>
                </TouchableOpacity>

              </View>

            )}
          </>
        </>
      }
    </LinearGradient>
  );
};






const styles = StyleSheet.create({
  childPosition: {
    top: -35,
    left: -40,
  },
  playFlexBox: {
    // textAlign: "left",
    color: Color.white,
    textAlign: "justify"
    // position: "absolute",
  },
  groupChildLayout: {
    height: 55,
    width: 153,
    position: "absolute",
  },
  homepageChild: {
    borderRadius: 129,
    width: 516,
    height: 485,
    left: 0,
    // position: "absolute",
  },
  pinocchioA: {
    top: 492,
    left: 28,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  longAgoIn: {
    // top: 555,
    // left: 1,
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    textAlign: 'justify',
    // width: 359,
    // height: 98,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: -20,
    width: 60,
    height: 70,
    left: 0,
    position: "absolute",

  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.midnightblue_200,
    left: 0,
    top: -75,
  },
  playCircleFilled: {
    top: -67,
    left: 100,
    width: 37,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  play: {
    top: -65,
    left: 18,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  rectangleParent: {
    top: 300,
    left: 100,
  },

  rectangleParent1: {
    top: 400,
    left: 100,
  },


  homepage: {
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;