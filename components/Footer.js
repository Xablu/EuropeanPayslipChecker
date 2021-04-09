import React from "react";
import { ImageBackground } from "react-native";
import { Text, View, Image, PropTypes } from "react-native";
import styles from "../styles";
export var HomePic = require("../assets/HomePic.png");
import { ResultFooterText, ResultFooterTitle } from "../components/Typography";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 15,
        height: 170,
      }}
    >
      <ResultFooterTitle content="Are you hiring a new employee?" />
      <ResultFooterText content="Make your contracts in a simple, secure and smarter way with Xablu Contracts" />
      <View
        style={{
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#5ec8f2",
            width: 150,
            height: 50,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Start Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
