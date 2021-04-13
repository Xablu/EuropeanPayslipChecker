import React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList, Text } from "react-native";
import { set } from "react-native-reanimated";
import messages from "../assets/discord-test";
import { DiscordMessage, DiscordUserName } from "./Typography";

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
        Authorization:
          " Bot ODI5OTk4NTY5MTgzMjQ4NDE2.YHASZw.WItG016-Z5On15O4-adJI7djTFo",
      },
    })
      .then((response) => response.json())
      .then((json) => handleData(json))
      .catch((e) => console.log("ERROR" + e))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleData = (data) => {
    console.log(data);
    var messages = data.map((message) => {
      if (message.content !== "") {
        var cleanMsg = {
          messageContent: message.content,
          sender: message.author.username,
        };
        console.log("clean" + cleanMsg.sender);
        return cleanMsg;
      }
    });
    setData(messages);
  };

  return isLoading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View>
      <Text>Here is what our community is talking about right now:</Text>
      {data.map((message, key) => {
        console.log("MSG" + message);
        return (
          <View key={key}>
            <View flexDirection="row">
              <DiscordUserName content={message.messageContent} />
              <View style={{ alignSelf: "flex-end", alignItems: "flex-end" }}>
                <Text>00:00</Text>
              </View>
            </View>
            <DiscordMessage />
          </View>
        );
      })}
    </View>
  );
};
export default DiscordEmbed;
