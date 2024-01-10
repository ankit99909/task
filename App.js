
import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View, Text,StatusBar} from 'react-native';
const {height, width} = Dimensions.get('screen');
import Navigator from './screens/navigation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';





const App = props => {
  const [splasStatus, setSplasStatus] = React.useState(true);



  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        setSplasStatus(false);
      }, 3000);
    } else {
      setTimeout(() => {}, 3000);
    }
  }, []);

  const [userAuth, setUserAuth] = useState('');
  useEffect(async () => {
    const userToken = await AsyncStorage.getItem('token');
    setUserAuth(userToken);
    console.log('usertoken ======', userToken);
  }, []);

 
  if (splasStatus === true && Platform.OS === 'android') {
    return (
      <>
        <View style={styles.container}>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={{height: '100%', justifyContent: 'center'}}>
      <Navigator authFlow={userAuth}  />
      </View>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#eff1fe",
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
