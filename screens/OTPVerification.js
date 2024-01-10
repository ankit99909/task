import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity , Image } from "react-native";
import { FontFamily, FontSize, Color, Border,logBox } from "./componets/GlobalStyles";
// import OtpInputs from 'react-native-otp-inputs';
// import OtpInputs from 'react-native-otp-inputs';
import { OtpInput } from "react-native-otp-entry";
import Loader from './componets/Loader';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTPVerification = (props) => {
  const [otp ,setopt] =React.useState();
  const [PhoneNumber, setPhoneNumber] = React.useState('');
  const [loading, setLoading] = React.useState(false);
const navigation = useNavigation(); // Get the navigation object
  const handleBackPress = () => {
    navigation.replace('ForgotPassword');
  };

  const handleSubmitPress = () => {
   
    // if (!PhoneNumber) {
    //   alert('Please fill Email');
    //   return;
    // }
    setLoading(true);
    let dataToSend = {phone: "8287233038", dial_code: "+91",otp:otp};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://staging.fastor.in/v1/pwa/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then( async (responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson?.data);

        // If server response message same as Data Matched
        if (responseJson?.status_code === 200) {
          await AsyncStorage.setItem('token', responseJson?.data?.token);
          navigation.replace('IPhone13Mini1');
      
       
        } else {
          // setErrortext(responseJson.msg);
          console.log('Please check your phone');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.otpVerification}>
      
         <Loader loading={loading} />
      <Text style={[styles.welcomeBackGlad, styles.welcomeBackGladPosition]}>
        OTP Verification
      </Text>
      <Text style={[styles.enterTheVerification, styles.didntReceivedCodeTypo]}>
        Enter the verification code we just sent on your Mobile Number.
      </Text>

      <View style={styles.backWrapper}>
        <View style={styles.back}>
          <TouchableOpacity style={styles.backChild}  onPress={()=>handleBackPress()}/>
          <Image
            style={[styles.backArrowIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back-arrow.png")}
          />
        </View>
      </View>
      <View style={styles.blankParent}>
      <OtpInput
                numberOfDigits={6}
                focusColor="#ff725e"
                focusStickBlinkingDuration={500}
                onTextChange={(code) => setopt(code)}
                onFilled={(code) => setopt(code)}
                theme={{
                  containerStyle: styles.inputStyles,
                  pinCodeContainerStyle: styles.inputsContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                }}
              />
      </View>
      <View style={styles.loginButton}>
      <TouchableOpacity style={styles.loginButtonChild}  onPress={()=> handleSubmitPress()}>
        <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      </TouchableOpacity>
      </View>
      <Text style={[styles.didntReceivedCodeContainer, styles.verifyTypo]}>
        <Text
          style={[styles.didntReceivedCode, styles.didntReceivedCodeTypo]}
        >{`Didn’t received code? `}</Text>
        <Text style={[styles.resend, styles.resendTypo]}>Resend</Text>
      </Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBackGladPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  didntReceivedCodeTypo: {
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verifyTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  resendTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  blankLayout: {
    width: 49,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 60,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    top: 0,
    // position: "absolute",
  },
  welcomeBackGlad: {
    top: "28%",
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    color: Color.dark,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  enterTheVerification: {
    top: "32%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.gray1,
    width: 331,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  statusBarIcon: {
    right: 0,
    height: 44,
    left: 0,
    top: 0,
    maxWidth: "100%",
  },
  backChild: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    height: 41,
    width: 41,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  backArrowIcon: {
    height: "46.34%",
    width: "46.34%",
    top: "26.83%",
    right: "29.27%",
    bottom: "26.83%",
    left: "24.39%",
    maxHeight: "100%",
  },
  back: {
    top: 16,
    left: 16,
    height: 41,
    width: 41,
    position: "absolute",
  },
  backWrapper: {
    top: 55,
    width: 72,
    height: 72,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  loginButtonChild: {
    justifyContent:"center",
    alignItems:"center",
    height: 60,
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorSalmon,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  verify: {
    top: 18,
    left: 124,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.backgroundWhite,
    width: 83,
  },
  loginButton: {
    height: "6.9%",
    width: "88%",
    top: "48.16%",
    right: "5.87%",
    bottom: "36.95%",
    left: "6.13%",
    // position: "absolute",
  },
  didntReceivedCode: {
    color: Color.dark,
  },
  resend: {
    color: "#5574c6",
  },
  didntReceivedCodeContainer: {
    top: 531,
    left: 88,
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  blank: {
    left: 0,
  },
  // blank1: {
  //   left: 57,
  // },
  blank2: {
    left: 114,
  },
  blank3: {
    left: 171,
  },
  blank4: {
    left: 228,
  },
  blank5: {
    left: 285,
  },
  blankParent: {
    // top: 356,
    // left: 23,
    // width: 334,
    // height: 60,
    // position: "absolute",
    height: "6.9%",
    width: "88%",
    top: "46.16%",
    right: "5.87%",
    bottom: "36.95%",
    left: "6.13%",
   
  },
  otpVerification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },

  inputStyles: {
    // backgroundColor: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.urbanistMedium,
    // backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: "#dadada",

    // borderWidth: 1,
    flex: 1,
    color: '#8b9cb5',
    paddingLeft: 10,
    borderRadius: 30,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "-60%",
    height: "120%",
    position: "absolute",
    width: "100%",
  },
  inputsContainer: {
    width: "14%",
  },
  pinCodeText: {
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_7xl,
    color: Color.dark
  }
});

export default OTPVerification;
