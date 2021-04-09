import React from "react";
import { Text, PropTypes } from "react-native";
import styles from "../styles";

export const DetailLabel = (props) => {
  return <Text style={styles.detailLabel}>{props.content}</Text>;
};
export const DetailText = (props) => {
  return <Text style={styles.detailText}>{props.content}</Text>;
};
export const ResultCardLabel = (props) => {
  return <Text style={styles.resultCardLabel}>{props.content}</Text>;
};
export const ResultCardLocation = (props) => {
  return <Text style={styles.resultCardLocation}>{props.content}</Text>;
};
export const ResultFooterTitle = (props) => {
  return <Text style={styles.resultFooterTitle}>{props.content}</Text>;
};
export const ResultFooterText = (props) => {
  return <Text style={styles.resultFooterText}>{props.content}</Text>;
};
export const ResultCardInformation = (props) => {
  return <Text style={styles.resultCardInformation}>{props.content}</Text>;
};
export const ResultCardLink = (props) => {
  return <Text style={styles.resultCardInformation}>{props.content}</Text>;
};
