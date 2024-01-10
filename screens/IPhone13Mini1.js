import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Paragraph, Dimensions, FlatList, TouchableOpacity,Image } from "react-native";
import { FontFamily, FontSize, Color, Border, logBox } from "./componets/GlobalStyles";
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import react from "react";

const IPhone13Mini1 = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [Data, setData] = react.useState()

  React.useEffect(() => {
    handleSubmitPress()
  }, [props])

  const handleSubmitPress = async () => {
    const userToken = await AsyncStorage.getItem('token');
    setLoading(true);
    fetch(`https://staging.fastor.in/v1/m/restaurant?city_id=3`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        setData(responseJson)
        // If server response message same as Data Matched
        if (responseJson?.status_code === 200) {
          //  await AsyncStorage.setItem('token', responseJson?.data?.token);
        } else {
          // setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  const images = [
    'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  // const getRandomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  const cardColors = ['#f8ced5', '#e9ffff', '#dfd1c9', '#ffeaa7', '#a29bfe', '#fd79a8', '#00b894'];
  return (
    <View style={styles.IPhone13Mini1}>
      <View style={[styles.iphone13Mini1Child]}>
        <View style={[styles.karanEpliainBox, { width: "48%", backgroundColor: "#fafafa", borderRadius: 10 }]}>
          <Text style={styles.karanText}>
            Karan
          </Text>
          <Text style={styles.evningText}>
            Let,s explore this evening
          </Text>
        </View>
        <View style={[styles.karanEpliainBox, { flexDirection: "row" }]}>
          <Image
            style={[styles.Bitmap_Copy_49]}
            contentFit="cover"
            source={require("../assets/teen.png")}
          />
          <Text style={styles.offers}>
            Offers
          </Text>
          <Image
            style={[styles.Bitmap_Copy_49]}
            contentFit="cover"
            source={require("../assets/wallet.png")}
          />
          <Text style={styles.wallet}>
            wallet
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={styles.yourtestTest}>Your teste</Text>
        <Text style={styles.see_allTest}>see all </Text>
        <Image style={styles.erow_Test}    source={require("../assets/right-arrow-icon-27.png")}/>
        <ScrollView style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
         {Data && Array.isArray(Data) && Data.map((item, index) => {
            const Color = cardColors[index % cardColors.length];
            console.log("ooo", Color)
            return (
              <View style={[styles.card,]}>
               <Image source={{ uri: item?.images[0].url }} style={[styles.imagecard,{height:100,width:134,borderBottomEndRadius:0,borderBottomStartRadius:0}]} />
                <View style={{ height: 60, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: Color,width:"95%" }}>
                  <Text variant="titleLarge" style={styles.cartTitle}>{item?.restaurant_name}</Text>
                  <Text variant="bodyMedium" style={styles.cartcontent}>{item?.location?.location_address_2},{item?.location?.city_name}</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>

      <Swiper
        loop={true} autoplay={true}
        autoplayTimeout={6}
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        paginationStyle={{ bottom: 6 }}
        activeDotStyle={styles.activeDotStyle}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
      <View style={{ flex: 1 }}>
        <Text style={styles.yourtestTest}>Popular Ones</Text>
        <FlatList
          data={Data}
          renderItem={({ item, index }) => {

            return (
              <TouchableOpacity onPress={() =>props.navigation.navigate('KeepYourSurveySecure',{item:item})}>
                <View style={styles.CardMainContainer}>
                  <View style={[styles.childcard, { width: "34%", }]}>
                    <Image source={{ uri: item?.images[0].url }} style={styles.imagecard} />
                  </View>
                  <View style={styles.childcard}>
                    <Text style={styles.bakertext}>{item?.restaurant_name}</Text>
                    <Text style={styles.discriptiontext}>Cakes & Bakes</Text>
                    <Text style={styles.discriptiontext}>{item?.location?.location_address_2},{item?.location?.city_name}</Text>
                    <View>
                    <Image style={styles.offersstyling}    source={require("../assets/teen.png")}/>
                    <Text style={styles.Offerstrendingtext}> 4 Offers trending</Text>
                    <Image style={styles.Ratingstyling}    source={require("../assets/star.png")}/>
                    <Text style={styles.Ratingtext}>{item?.rating?.restaurant_avg_rating}</Text>
                    <Text style={styles.Dollersighttext}>$</Text>
                    <Text style={styles.pricegtext}>{item?.avg_cost_for_two}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  IPhone13Mini1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
  iphone13Mini1Child: {
    flexDirection: "row",
    top: 70,
    left: 18,
    borderRadius: 14,
    width: "90%",
    height: "24%",
    // position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  karanEpliainBox: {
    height: "50%",
    width: "42%",
    margin: 15
  },
  karanText: {
    left: 10,
    fontFamily: FontFamily.urbanistSemiBold,
    fontSize: 30,
    color: "#8b9ca8"
  },
  evningText: {
    left: 10,
    fontFamily: FontFamily.urbanistSemiBold,
    color: "#3b4b56",
    fontSize: 18,
  },
  Bitmap_Copy_49: {
    top: 2,
    width: 60,
    height: 60,
    margin: 4
  },
  offers: {
    fontSize: 17,
    top: 74,
    fontFamily: FontFamily.urbanistSemiBold,
    left: 14,
    position: "absolute",
    color: "#8e9eaa"
  },
  wallet: {
    top: 74,
    fontFamily: FontFamily.urbanistSemiBold,
    left: 80,
    position: "absolute",
    color: "#8e9eaa",
    fontSize: 17,
  },
  box2: {
    top: 20,
    // backgroundColor:"red",
    height: "30%",
    width: "100%"
  },
  scrollView: {
    marginHorizontal: 20,

  },
  image: {
    height: 100,
    width: 300
  },
  card: {
    width: "8%",
    margin: 8,
    height: "80%",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {width: 0.2, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    resizeMode: 'cover',
    margin:10,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // Add other styles for the title as needed
  },
  content: {
    fontSize: 16,
    // Add other styles for the content as needed
  },
  imagecard: {
    width: "10%",
    height: "20%",
  },
  cartTitle: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    left:4,
    color: "#43535d",
    fontSize: 14
  },
  cartcontent: {
    fontFamily: FontFamily.urbanistMedium,
    left:4,
    color: '#a9adad'
  },
  yourtestTest: {
    fontFamily: FontFamily.urbanistBold,
    fontSize: 20,
    left: "5%",
    color: "#374752"

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "90%",
    height: 140, 
    borderRadius: 20,
  },
  dot: {
    backgroundColor: "#8b9ca8",
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 12,
  },
  activeDotStyle: {
    backgroundColor: '#374752',
    width: 9,
    height: 9,
    borderRadius: 5,
    // margin: 3,
    marginHorizontal: 12,
  },
  CardMainContainer: {
    flexDirection: "row",
    // backgroundColor:"red",
    width: "90%",
    height: 140,
    margin: 10,
    borderRadius: 4,
  },
  childcard: {
    height: "90%",
    // backgroundColor:"blue",
    width: "56%",
    margin: 10,
    top:2,
  },
  imagecard: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  bakertext: {
    fontFamily: FontFamily.urbanistBold,
    fontSize: 20,
    color: "#374752"
  },
  discriptiontext: {
    fontFamily: FontFamily.urbanistMedium,
    color: "#a2a1a1",
    fontSize: 16
  },
  Offerstrendingtext: {
    color: "#e8c4b2",
    fontFamily: FontFamily.urbanistBold,
    fontSize: 18,
    right: -20,
  },
  Ratingtext: {
    top:5,
    left:20,
    fontFamily: FontFamily.urbanistBold,
    color: "#3a4954"
  },
  see_allTest:{
    position:"absolute",
    left:300,
    fontFamily:FontFamily.urbanistSemiBold,
    fontSize:FontSize.size_base,
    color:Color.dark
  },
  erow_Test:{
    position:"absolute",
    top:3 ,
    left:350,
    width:15,
    height:15,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"#eaeaea",
    fontFamily:FontFamily.urbanistSemiBold,
    fontSize:FontSize.size_base,
    color:Color.dark,
    alignSelf: 'flex-end',
  },
  offersstyling: {
    position: "absolute",
    top: "16%",
    left: "2%",
    width: "8%", 
    height: "34%", 
  },
  Ratingstyling: {
    position: "absolute",
    top: "70%", 
    left: "2%",
    width: "8%", 
    height: "34%",
  },
  Dollersighttext: {
    position: "absolute",
    top: "65%", 
    left: "50%", 
    width: "8%", 
    height: "55%",
  },
  pricegtext: {
    position: "absolute",
    top: "65%", 
    left: "60%", 
    // width: "8%",
    // height: "16%",
  },
});

export default IPhone13Mini1;
