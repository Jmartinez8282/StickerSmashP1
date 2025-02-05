import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import {Image} from 'expo-image'
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const placeHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        {/* <Image source={placeHolderImage} style={styles.image}/> */}
      <ImageViewer imgSource={placeHolderImage}/>

      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary"/>
        <Button label="Use this photo"/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
    justifyContent:"center"

  },
    image: {
    width: 320,
    height:440,
    borderRadius: 18
  },
  imageContainer: {
    flex:1
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems:'center',
   
  }
})
