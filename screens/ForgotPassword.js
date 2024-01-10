
// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Color, FontFamily, Border, FontSize } from "./componets/GlobalStyles";
// import AsyncStorage from '@react-native-community/async-storage';

import Loader from './componets/Loader';

const ForgotPassword = ({navigation}) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!PhoneNumber) {
      alert('Please fill Email');
      return;
    }
    setLoading(true);
    let dataToSend = {phone: PhoneNumber, dial_code: "+91"};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://staging.fastor.in/v1/pwa/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson?.status_code === 200) {
         navigation.replace('OTPVerification');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your phone');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  // const A  = [1,2,3,4,5]

  // A.forEach(i =>console.log(i))

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.forgotPassword}>
            <Text style={[styles.welcomeBackGlad, styles.weWillSendPosition]}>
        Enter Your Mobile Number
      </Text>
      <Text style={[styles.weWillSend, styles.weWillSendTypo]}>
        We will send you the 4 digit verification conde
      </Text>
     
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(PhoneNumber) =>
                  setPhoneNumber(PhoneNumber)
                }
                placeholder="Enter your Phone" 
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
                maxLength={10}
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Send Code</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  weWillSend: {
     top: -40,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    width: 331,
    textAlign: "left",
    left: 34,
    position: "absolute",
  },
  welcomeBackGlad: {
    top: -80,
    fontSize: FontSize.size_7xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
    textAlign: "left",
  },
  weWillSendTypo: {
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  weWillSendPosition: {
    left: 34,
    position: "absolute",
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.backgroundWhite,
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: Color.colorSalmon,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    justifyContent:"center",
    height: 54,
    alignItems: 'center',
    borderRadius: Border.br_5xs,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 25,
    width:"85%"
  },
  buttonTextStyle: {
    // color: '#FFFFFF',
    // paddingVertical: 10,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.backgroundWhite,
    textAlign: "center",
    width: 83,
  },
  inputStyle: {
    backgroundColor: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.urbanistMedium,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: "#dadada",
    
    borderWidth: 1,
    flex: 1,
    color: '#8b9cb5',
    paddingLeft: 15,
    borderRadius: 30,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "140%",
    position: "absolute",
    width: "104%",
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});