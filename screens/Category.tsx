import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "./GlobalStyles";

const Category = () => {
  const navigation :any = useNavigation();

  return (
    <LinearGradient
      style={styles.category}
      locations={[0, 1]}
      colors={["#260768", "#941097"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.categoryChild} />
      <Text style={[styles.categories, styles.fantacyTypo]}>Categories</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Prompt")}
      >
        <Image
          style={[styles.groupChild, styles.fantacyPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-44.png")}
        />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.fantacyWrapper, styles.wrapperPosition]}>
          <Text style={[styles.fantacy, styles.fantacyPosition]}>Fantacy</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupPosition]}
        onPress={() => navigation.navigate("Prompt")}
      >
        <Image
          style={[styles.groupChild, styles.fantacyPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-46.png")}
        />
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <View style={[styles.fairyTalesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.fantacy, styles.fantacyPosition]}>
            Fairy Tales
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Prompt")}
      >
        <Image
          style={[styles.groupChild, styles.fantacyPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-45.png")}
        />
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <View style={[styles.mysteryWrapper, styles.wrapperPosition]}>
          <Text style={[styles.fantacy, styles.fantacyPosition]}>Mystery</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPosition]}
        onPress={() => navigation.navigate("Prompt")}
      >
        <Image
          style={[styles.groupChild, styles.fantacyPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-47.png")}
        />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.moralStoriesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.fantacy, styles.fantacyPosition]}>
            Moral Stories
          </Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fantacyTypo: {
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  rectangleLayout: {
    height: 255,
    top: 227,
    width: 194,
    position: "absolute",
  },
  fantacyPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 185,
    top: 211,
    backgroundColor: Color.midnightblue_200,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  wrapperPosition: {
    height: 29,
    top: 219,
    position: "absolute",
  },
  groupPosition: {
    top: 507,
    height: 255,
    position: "absolute",
  },
  categoryChild: {
    top: 107,
    left: 37,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 363,
    height: 61,
    backgroundColor: Color.midnightblue_200,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  categories: {
    top: 123,
    left: 151,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  groupChild: {
    left: -5,
    borderRadius: 18,
    width: 203,
    height: 203,
  },
  groupItem: {
    left: 6,
  },
  fantacy: {
    left: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_5xl,
  },
  fantacyWrapper: {
    left: 50,
    width: 93,
  },
  rectangleParent: {
    left: 13,
  },
  rectangleView: {
    left: 10,
  },
  fairyTalesWrapper: {
    left: 38,
    width: 126,
  },
  rectangleGroup: {
    left: 15,
    width: 195,
  },
  groupChild1: {
    left: 7,
  },
  mysteryWrapper: {
    left: 51,
    width: 96,
  },
  rectangleContainer: {
    left: 223,
  },
  moralStoriesWrapper: {
    left: 24,
    width: 154,
  },
  groupPressable: {
    left: 226,
    width: 194,
    top: 507,
  },
  category: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Category;
