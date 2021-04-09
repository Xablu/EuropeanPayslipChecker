import React from "react";
import { View, Text } from "react-native";

import { Picker } from "@react-native-community/picker";
import styles from "../styles";
import { PropTypes } from "prop-types";

export const Dropdown = (props) => {
  Dropdown.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func,
    items: PropTypes.array,
    itemType: PropTypes.string,
    ios: PropTypes.bool,
  };
  let topLabel;
  props.selectedValue == props.placeholder ||
  props.selectedValue == "" ||
  props.selectedValue == null
    ? (topLabel = <View />)
    : (topLabel = <Text>{props.placeholder}</Text>);
  let dropdownItem;
  const iOS = props.ios;
  const opacity = iOS ? 0 : 1;
  return (
    <View>
      {topLabel}
      <Picker
        mode="dropdown"
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        style={(styles.dropdown, { opacity: opacity })}
      >
        <Picker.Item
          color="grey"
          label={props.placeholder}
          value={props.placeholder}
        />
        {props.items.map((item, index) => {
          {
            props.itemType == "nationality"
              ? (dropdownItem = (
                  <Picker.Item
                    label={item.nationality}
                    value={item.value}
                    key={index}
                  />
                ))
              : props.itemType == "name"
              ? (dropdownItem = (
                  <Picker.Item
                    label={item.name}
                    value={item.value}
                    key={index}
                  />
                ))
              : props.itemType == "timePeriod"
              ? (dropdownItem = (
                  <Picker.Item label={item} value={item} key={index} />
                ))
              : (dropdownItem = "");
          }
          return dropdownItem;
        })}
      </Picker>
    </View>
  );
};
