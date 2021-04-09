import React from "react";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import styles from "../styles";
export var HomePic = require("../assets/HomePic.png");
import { ResultCardLocation, ResultCardLabel } from "../components/Typography";
import { Icon } from "react-native-elements";
import { PropTypes } from "prop-types";

export const ResultCard = (props) => {
  ResultCard.propTypes = {
    location: PropTypes.string,
  };
  return (
    <View flex={2} style={styles.resultCard}>
      <ImageBackground
        style={styles.resultBackground}
        imageStyle={styles.resultBackgroundImage}
        source={HomePic}
        flex={1}
      >
        <View style={styles.resultCardText}>
          <Icon
            name="check-circle"
            color="white"
            size={64}
            style={{ padding: 10 }}
          />
          <ResultCardLabel content="You will need a payslip for" />
          <ResultCardLocation content={props.location} />
        </View>
      </ImageBackground>
    </View>
  );
};
