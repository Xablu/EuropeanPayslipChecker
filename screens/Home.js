import React from "react";
import { Button, Text, View, PropTypes } from "react-native";
import { Image } from "react-native";
import styles from "../styles";
export var HomePic = require("../assets/HomePic.png");
const Home = ({ navigation }) => {
  Home.propTypes = {
    navigation: PropTypes.navigation.isRequired,
  };
  return (
    <View flex={1}>
      <View flex={2}>
        <Image flex={2} source={HomePic} />
      </View>
      <View flex={6} backgroundColor="white" style={styles.container}>
        <Text>all the home stuff</Text>
        <Button
          title="Start"
          onPress={() => navigation.navigate("Information")}
        />
      </View>
      <View flex={1}></View>
      <View flex={2} />
    </View>
  );
};

export default Home;
