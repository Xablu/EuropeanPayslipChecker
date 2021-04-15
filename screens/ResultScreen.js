import React from "react";
import { View, ScrollView, Linking } from "react-native";
import { calculatePayslip } from "../components/PayslipCalculator";
import styles from "../styles";
import * as Typography from "../components/Typography";
import countries from "../assets/countries";
import { ResultCard } from "../components/ResultCard";
import { Footer } from "../components/Footer";
import { CollapseView } from "../components/CollapseView";
import DiscordEmbed from "../components/DiscordEmbed";
import { PropTypes } from "prop-types";

const ResultScreen = ({ navigation, route }) => {
  ResultScreen.propTypes = {
    route: PropTypes.route,
    navigation: PropTypes.object.isRequired,
  };

  let employeeLocation = route.params.employeeLocation;
  let employeeNationality = route.params.employeeNationality;
  let companyLocation = route.params.companyLocation;
  let workLocation = route.params.workLocation;
  let period = route.params.period;

  let result = calculatePayslip(
    employeeLocation,
    employeeNationality,
    companyLocation,
    workLocation,
    period
  );
  //labels
  var nationalityLabel;
  var locationLabel;
  var companyLocationLabel;
  var workCountryLabel;
  var timePeriodLabel = "Time period";
  route.params.role == "Employee"
    ? ((nationalityLabel = "My nationality"),
      (locationLabel = "Place I live"),
      (companyLocationLabel = "Location of the company I work for"),
      (workCountryLabel = "Country I perform the work"))
    : ((nationalityLabel = "Employee nationality"),
      (locationLabel = "Place employee lives"),
      (companyLocationLabel = "Location of the company"),
      (workCountryLabel = "Country employee performs the work"));

  result.location != "We don't know"
    ? (result.location = countries.getName(result.location))
    : false;
  let collResultInfo = (
    <View style={[styles.detailTextContainer, styles.collapseContent]}>
      <Typography.ResultCardInformation content={result.information} />
      <Typography.ResultCardInformation content={result.period} />
      <Typography.ResultCardLink
        onPress={() =>
          Linking.openURL("http://www.google.com/search?q=" + result.location)
        }
        content={"Google" + result.location}
      />
    </View>
  );
  let userInfo = employeeNationality + workLocation;
  let collCommunityInfo = (
    <View style={[styles.detailTextContainer, styles.collapseContent]}>
      <DiscordEmbed userInfo={userInfo} />
    </View>
  );

  return (
    <View flex={1}>
      <ScrollView flexDirection="column" flex={1}>
        <View style={styles.container} flex={1}>
          <ResultCard location={result.location} />
          <View flex={4} style={styles.detailTextContainer}>
            <Typography.DetailLabel content={nationalityLabel} />
            <Typography.DetailText
              content={countries.getNationality(employeeNationality)}
            />
            <Typography.DetailLabel content={locationLabel} />
            <Typography.DetailText
              content={countries.getName(employeeLocation)}
            />
            <Typography.DetailLabel content={companyLocationLabel} />
            <Typography.DetailText
              content={countries.getName(companyLocation)}
            />
            <Typography.DetailLabel content={workCountryLabel} />
            <Typography.DetailText content={countries.getName(workLocation)} />
            <Typography.DetailLabel content={timePeriodLabel} />
            <Typography.DetailText
              content={period == " " ? "None selected" : period}
            />
          </View>
          <View>
            <CollapseView
              collContent={collResultInfo}
              title="Why this Payslip?"
            />
            <CollapseView
              collContent={collCommunityInfo}
              title="Check out our community!"
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ResultScreen;
