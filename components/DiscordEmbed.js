import React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList, Text } from "react-native";
import { set } from "react-native-reanimated";
import messages from "../assets/discord-test";

const DiscordEmbed = (channelInfo) => {
  const channelSelector = (channelInfo) => {
    return "167992154445053954";
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://discord.com/api/channels/167992154445053954/messages", {
    //   method: "GET",
    //   headers: {
    //     Authorization:
    //       "Bot ODI5NjY4NjY1MDY1NDcyMDUx.YG7fKA.Ub60f9PJCl9H7h9SjMybpve4jHM",
    //   },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json))
    // .catch((e) => console.log("ERROR" + e))
    // .finally(() => setLoading(false));
    messages.forEach((item) => console.log(item.content));
  });
  const MessageWidget = (
    <FlatList
      data={messages.content}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );

  return <View>{MessageWidget}</View>;
};
export default DiscordEmbed;
