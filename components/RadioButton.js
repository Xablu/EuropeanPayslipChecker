import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "react";
import styles from "../styles";

const RadioButton = (props) => {
  return (
    <View>
      <View style={styles.radioBtnContainer}>
        {props.radioChoice.map((radioChoice, key) => {
          return (
            <View padding={5} key={radioChoice}>
              {props.checked == key ? (
                <TouchableOpacity style={styles.radioBtn}>
                  {/* selected */}
                  <View
                    style={{
                      height: 24,
                      width: 24,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: "#000",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: "#000",
                      }}
                    />
                  </View>
                  <Text style={styles.radioBtnLabel}>{radioChoice}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    props.setChecked(key);
                    props.setDisplayDropdown(true);
                  }}
                  style={styles.radioBtn}
                >
                  {/* unselected */}
                  <View
                    style={{
                      height: 24,
                      width: 24,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: "#000",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                  <Text style={styles.radioBtnLabel}>{radioChoice}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

// RadioButton.propTypes = {
//   checked: PropTypes.number.isRequired,
//   radioChoice: PropTypes.arrayOf(PropTypes.string).isRequired,
//   setChecked: PropTypes.function.isRequired,
// };
export default RadioButton;
