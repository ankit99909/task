
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {LogBox} from "react-native"
import ForgotPassword from "../screens/ForgotPassword";
import KeepYourSurveySecure from "../screens/KeepYourSurveySecure";
import IPhone13Mini1 from "../screens/IPhone13Mini1";
import OTPVerification from "../screens/OTPVerification";
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

 function Navigator({ props, authFlow }) {
    const Stack = createNativeStackNavigator();
    console.log('===== Routes AuthFlow ======', authFlow);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
      {!authFlow ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false }}
            />
                <Stack.Screen
              name="KeepYourSurveySecure"
              component={KeepYourSurveySecure}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini1"
              component={IPhone13Mini1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) :  <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen
      name="IPhone13Mini1"
      component={IPhone13Mini1}
      options={{ headerShown: false }}
    />
        <Stack.Screen
      name="KeepYourSurveySecure"
      component={KeepYourSurveySecure}
      options={{ headerShown: false }}
    />
   
       <Stack.Screen
      name="OTPVerification"
      component={OTPVerification}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
   
     
  
 
   
   
  </Stack.Navigator>}
      </NavigationContainer>
    </>
  );
};
export default Navigator;
