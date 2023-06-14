const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import Homepage from "./screens/Homepage";
import Category from "./screens/Category";
import Language1 from "./screens/Language1";
import Prompt1 from "./screens/Prompt1";
import Profile from "./screens/Profile";
import NightMode from "./screens/NightMode";
import Settings from "./screens/Settings";
import Home1 from "./screens/Home1";
import Name1 from "./screens/Name1";
import Gender1 from "./screens/Gender1";
import Otpverification from "./screens/Otpverification";
import Otpscreen from "./screens/Otpscreen";
import Welcome1 from "./screens/Welcome1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={Category}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language1"
              component={Language1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prompt"
              component={Prompt1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NightMode"
              component={NightMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Name1"
              component={Name1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gender1"
              component={Gender1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otpverification"
              component={Otpverification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otpscreen"
              component={Otpscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome1"
              component={Welcome1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;


