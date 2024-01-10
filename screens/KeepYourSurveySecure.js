import * as React from "react";
import { StyleSheet, Text, View ,TouchableOpacity, Image} from "react-native";
import { FontFamily, Color, FontSize, Border } from "./componets/GlobalStyles";

const KeepYourSurveySecure = (props) => {
  const [data,setdata] =React.useState(props?.route?.params?.item)
  console.log(props?.route?.params?.item)
  return (
    <View style={styles.keepYourSurveySecure}>
      <Image
        style={styles.keepYourSurveySecureChild}
        contentFit="cover"
        source={{ uri: data?.images[0].url }}
      />
      <View style={[styles.iconlocation, styles.backIconLayout]} />
      <View style={styles.iphoneXstatusBarsstatusBa}>
        <View style={styles.rectangle} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('IPhone13Mini1')} >
          <Image style={styles.capacity}   
            source={require("../assets/back.png")}/>
            </TouchableOpacity>
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>
          </Text>
        </View>
      </View>
      <View style={styles.rectangle1} />
      <View style={styles.frameParent}>
        <View style={styles.lazyBearParent}>
          <Text style={styles.lazyBear}>{data?.restaurant_name}</Text>
          <Text style={[styles.connaughtPlaceNew, styles.text1Typo]}>
          {data?.location?.location_address_2},{data?.location?.city_name}
          </Text>
        </View>
        <View
          style={[
            styles.iconlycurvedstarParent,
            styles.ourDelicateVanillaFlexBox,
          ]}
        >
           <Image
            style={styles.iconlycurvedstar}
            contentFit="cover"
            source={require("../assets/star.png")}
          /> 
          <Text style={[styles.text1, styles.text1Typo]}>4.5</Text>
        </View>
      </View>
      <Text
        style={[styles.ourDelicateVanilla, styles.ourDelicateVanillaFlexBox]}
      >
        Our delicate vanilla cake swirled with chocolate and filled with mocha
        chocolate chip cream and a layer of dark chocolate ganache
      </Text>
      <View
        style={[styles.offersTrendingParent, styles.offersTrendingParentLayout]}
      >
        <Text style={styles.offersTrending}>4 Offers Trending</Text>
        <Image
          style={[
            styles.teenyiconsdiscountOutline,
            styles.offersTrendingParentLayout,
          ]}
          contentFit="cover"
          source={require("../assets/teen.png")}
        />
      </View>
      <Image
        style={styles.keepYourSurveySecureItem}
        contentFit="cover"
        source={require("../assets/group-48095696.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  backIconLayout: {
    width: "6.4%",
    height: "2.96%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  ourDelicateVanillaFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  offersTrendingParentLayout: {
    height: 15,
    position: "absolute",
  },
  keepYourSurveySecureChild: {
    width: 559,
    height: 508,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholder: {
    top: 13,
    left: 16,
    letterSpacing: 1,
    lineHeight: 22,
    fontFamily: FontFamily.formTextNormal,
    color: Color.neutralGrey,
    display: "none",
    textAlign: "left",
    fontSize: FontSize.formTextNormal_size,
    position: "absolute",
  },
  stateprovinceregionForm: {
    height: "4.31%",
    width: "24.53%",
    top: "34.73%",
    right: "-40.53%",
    bottom: "60.96%",
    left: "116%",
    borderRadius: 5,
    borderColor: "#e9e9e9",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  iconlocation: {
    top: "5.05%",
    right: "89.33%",
    bottom: "92%",
    left: "4.27%",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGray_100,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
     top: 20,
    // right: 4,
    // borderRadius: 1,
    // backgroundColor: Color.colorGray_100,
    width: 30,
    height: 24,
     position:"relative",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  text: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -7.5,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.backgroundWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "50%",
    left: 0,
  },
  timeStyle: {
    top: 11,
    left: 8,
    height: 21,
  },
  iphoneXstatusBarsstatusBa: {
    marginTop: -407,
    marginLeft: -184.5,
    left: "50%",
    width: 375,
    height: 44,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle1: {
    height: "64.04%",
    width: "101.33%",
    top: "60.34%",
    right: "-0.8%",
    bottom: "-24.38%",
    left: "-0.53%",
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.backgroundWhite,
  },
  backIcon: {
    top: "6.53%",
    right: "87.73%",
    bottom: "90.52%",
    left: "5.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  lazyBear: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
    textAlign: "left",
  },
  connaughtPlaceNew: {
    fontSize: FontSize.size_base,
    color: "#505259",
  },
  lazyBearParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconlycurvedstar: {
    width: 21,
    height: 21,
  },
  text1: {
    color: "#595959",
    height: 14,
    marginLeft: 5,
    width: 17,
    fontSize: FontSize.formTextNormal_size,
  },
  iconlycurvedstarParent: {
    height: "51.22%",
    width: "13.78%",
    top: "24.39%",
    bottom: "24.39%",
    left: "86.22%",
    flexDirection: "row",
    right: "0%",
  },
  frameParent: {
    top: 508,
    width: 312,
    height: 41,
    left: 32,
    position: "absolute",
  },
  ourDelicateVanilla: {
    top: 622,
    lineHeight: 17,
    color: "#515151",
    display: "flex",
    width: 314,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 32,
    fontSize: FontSize.size_sm,
  },
  offersTrending: {
    top: 1,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: "#d39171",
    textAlign: "left",
    fontSize: FontSize.formTextNormal_size,
    position: "absolute",
  },
  teenyiconsdiscountOutline: {
    width: 15,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  offersTrendingParent: {
    top: 559,
    left: 34,
    width: 117,
  },
  keepYourSurveySecureItem: {
    top: 468,
    left: 148,
    width: 80,
    height: 12,
    position: "absolute",
  },
  keepYourSurveySecure: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundWhite,
  },
});

export default KeepYourSurveySecure;
