import React from "react";
import { Button, Text, View } from "react-native";
import { PropTypes } from "prop-types";
import { Image } from "react-native";
import styles from "../styles";
import { HomeTitle, HomeText, HomeTextBottom } from "../components/Typography";
export var HomePic = require("../assets/HomePic.png");
const Home = ({ navigation }) => {
  Home.propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  return (
    <View flex={1}>
      <View flex={2}>
        <Image flex={2} source={HomePic} />
      </View>
      <View flex={6} backgroundColor="white" style={styles.container}>
        <HomeTitle content={"Welcome to CheckMyPayslip"} />
        <HomeText
          content={
            "Remote working has become a part of our work culture. In Europe, we canm easily move between countries and we can work for companies in other countries than the one we live in. As companies, we can also easily hire new employees who live abroad."
          }
        />
        <HomeTextBottom content={"What does this mean for the payslip?"} />
        <HomeText
          content={
            "This tool has been created for employers and employees to understand which country can provide the payslips, based on specific work-living situations."
          }
        />
      </View>
      <View flex={1} style={styles.container}>
        <Button
          title="Start"
          onPress={() => navigation.navigate("Information")}
          style={styles.startButton}
        />
      </View>

      <View flex={2} />
    </View>
  );
};

export default Home;
