import React, { useState } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Icon } from "react-native-elements";
import * as Typography from "../components/Typography";
import styles from "../styles";
import Collapsible from "react-native-collapsible";
import { PropTypes } from "prop-types";

export const CollapseView = (props) => {
  CollapseView.propTypes = {
    collContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    title: PropTypes.string,
  };
  const [isCollapsed, setIsCollapsed] = useState(true);
  let collapseIcon;
  isCollapsed == true
    ? (collapseIcon = (
        <Icon
          type="material-community"
          name="chevron-down"
          color="grey"
          size={24}
        />
      ))
    : (collapseIcon = (
        <Icon
          type="material-community"
          name="chevron-up"
          color="grey"
          size={24}
        />
      ));
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsCollapsed(!isCollapsed);
        }}
        activeOpacity={1}
      >
        <View
          style={[styles.detailTextContainer, styles.collapsibleContainer]}
          flexDirection="row"
        >
          <View flex={6}>
            <Typography.DetailText content={props.title} flex={7} />
          </View>
          <View
            flex={1}
            style={{
              alignSelf: "flex-end",
            }}
          >
            {collapseIcon}
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>{props.collContent}</Collapsible>
    </View>
  );
};
