import React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { DiscordMessage, DiscordUserName } from "./Typography";
import styles from "../styles";

const DiscordEmbed = (props) => {
  const channelSelector = (channelInfo) => {
    switch (channelInfo) {
      case "nlfr":
        return "829997950549360657";
      case "nlde":
        return "829997950549360655";
      case "frde":
        return "829999351970922580";
      case "frnl":
        return "829997950549360656";
      case "denl":
        return "829999239534084107";
      case "defr":
        return "829999501380943894";
      default:
        return "831113010697338911";
    }
  };
  const monthPicker = (date) => {
    let monthNumber = date.substring(0, 2);
    switch (monthNumber) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      messageContent: "Loading..",
      sender: "",
    },
  ]);
  const fetchData = () => {
    const channel = channelSelector(props.userInfo);
    fetch("https://discord.com/api/channels/" + channel + "/messages", {
      method: "GET",
      headers: {
        Authorization: " BOTAPIKEY",
      },
    })
      .then((response) => response.json())
      .then((json) => handleData(json))
      .catch((e) => setData({ messageContent: e, sender: "Fetch Error" }))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleData = (fetchedData) => {
    var messages = fetchedData.map((message) => {
      var cleanMsg = {
        messageContent: message.content,
        sender: message.author.username,
        date: message.timestamp.substring(5, 10),
        time: message.timestamp.substring(11, 16),
      };
      return cleanMsg;
    });
    setData(messages);
  };

  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View>
      <Text style={{ fontSize: 14, textAlign: "center", paddingBottom: 10 }}>
        Here is what{" "}
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          our community{" "}
        </Text>
        is talking about right now:
      </Text>
      {data.map((message, key) => {
        return message.messageContent !== "" ? (
          <View style={styles.discordMsg} key={key}>
            <View flexDirection="row">
              <DiscordUserName content={message.sender} />
              <View flexDirection="row"></View>
            </View>
            <DiscordMessage content={message.messageContent} />
            <View flexDirection="row" style={{ alignSelf: "flex-end" }}>
              <Text style={styles.timestamp}>
                {" "}
                {monthPicker(message.date) + " " + message.date.substring(3, 5)}
              </Text>
              <Text style={styles.timestamp}> @ {message.time}</Text>
            </View>
          </View>
        ) : (
          <View key={key}></View>
        );
      })}
    </View>
  );
};
export default DiscordEmbed;
