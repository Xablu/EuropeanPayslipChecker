import React, { useState } from "react";
import { Text, View, Button, ScrollView, Platform } from "react-native";
import styles from "../styles";
import RadioButton from "../components/RadioButton";
import countries from "../assets/countries";
import { CheckBox, Input } from "react-native-elements";
import { Dropdown } from "../components/Dropdown";
import { PropTypes } from "prop-types";

const InputScreen = ({ navigation }) => {
  InputScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  const [checked, setChecked] = useState();
  var radioChoice = ["Employee", "Employer"];
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedEmployeeCountry, setSelectedEmployeeCountry] = useState("");
  const [selectedCompanyLocation, setSelectedCompanyLocation] = useState("");
  const [selectedWorkLocation, setSelectedWorkLocation] = useState("");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("");
  const [timeAmount, setTimeAmount] = useState("");

  const [displayDropdowns, setDisplayDropdown] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const [pickerOpacity, setPickerOpacity] = useState();
  const [iOS, setIOS] = useState();
  const [label, setLabel] = useState("firstvalue");

  //Switch labels with radio button
  var nationalityLabel;
  var locationLabel;
  var companyLocationLabel;
  var workCountryLabel;
  var periodLabelCheckbox;
  var timePeriodLabel = "Time period";

  if (radioChoice[checked] === "Employee") {
    nationalityLabel = "My nationality";
    locationLabel = "Place I live";
    companyLocationLabel = "Location of the company I work for";
    workCountryLabel = "Country I perform the work";
    periodLabelCheckbox = "My job is for a specific amount of time";
  } else if (radioChoice[checked] === "Employer") {
    nationalityLabel = "Employee nationality";
    locationLabel = "Place employee lives";
    companyLocationLabel = "Location of the company";
    workCountryLabel = "Country employee performs the work";
    periodLabelCheckbox = "The job is for a specific amount of time";
  } else {
    nationalityLabel = "";
    locationLabel = "";
    companyLocationLabel = "";
    workCountryLabel = "";
    periodLabelCheckbox = "";
  }
  const checkIfIOS = () => {
    if (Platform.OS === "ios") {
      if (pickerOpacity == 0) {
        setIOS(true);
      } else {
        setIOS(false);
      }
    }
  };
  const handleSubmit = () => {
    if (
      selectedNationality == null ||
      selectedEmployeeCountry == null ||
      selectedCompanyLocation == null ||
      selectedWorkLocation == null ||
      radioChoice[checked] == null
    ) {
      alert("Please make a selection for every field!");
    } else {
      navigation.navigate("Results", {
        employeeNationality: selectedNationality,
        employeeLocation: selectedEmployeeCountry,
        companyLocation: selectedCompanyLocation,
        workLocation: selectedWorkLocation,
        role: radioChoice[checked],
        period: timeAmount + " " + selectedTimePeriod,
      });
    }
  };

  //Dropdown display handler
  let dropdowns;
  {
    displayDropdowns == true
      ? (dropdowns = (
          <View
            flex={7}
            justifyContent={"flex-start"}
            style={styles.dropDownsContainer}
          >
            <Dropdown
              ios={iOS}
              itemType={"nationality"}
              selectedValue={selectedNationality}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedNationality(itemValue)
              }
              items={countries.countries}
              placeholder={nationalityLabel}
            />
            <Dropdown
              ios={iOS}
              itemType="name"
              selectedValue={selectedEmployeeCountry}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedEmployeeCountry(itemValue)
              }
              items={countries.countries}
              placeholder={locationLabel}
            />
            <Dropdown
              ios={iOS}
              itemType="name"
              selectedValue={selectedCompanyLocation}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCompanyLocation(itemValue)
              }
              items={countries.countries}
              placeholder={companyLocationLabel}
            />
            <Dropdown
              ios={iOS}
              itemType="name"
              selectedValue={selectedWorkLocation}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedWorkLocation(itemValue)
              }
              items={countries.countries}
              placeholder={workCountryLabel}
            />
            <CheckBox
              title={periodLabelCheckbox}
              checked={checkboxChecked}
              onPress={() => {
                setCheckboxChecked(!checkboxChecked);
              }}
              containerStyle={styles.checkBoxContainer}
            />
          </View>
        ))
      : (dropdowns = <View />);
  }
  let periodInput;
  checkboxChecked == true
    ? (periodInput = (
        <View flexDirection="row" flex={1}>
          <Input
            placeholder="Amount"
            containerStyle={styles.textInputContainer}
            keyboardType="numeric"
            onChangeText={(value) => setTimeAmount(value)}
          />

          <View flex={3} style={{ paddingBottom: 20 }}>
            <Dropdown
              ios={iOS}
              style={{ paddingBottom: 20 }}
              selectedValue={selectedTimePeriod}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTimePeriod(itemValue)
              }
              placeholder={timePeriodLabel}
              items={countries.timePeriods}
              itemType="timePeriod"
            />
          </View>
        </View>
      ))
    : (periodInput = <View />);
  return (
    <View flexDirection="column" flex={1} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View flex={2} style={{ paddingBottom: 20 }}>
          <Text style={styles.radioTitle}>I am an</Text>
          <RadioButton
            checked={checked}
            setChecked={setChecked}
            radioChoice={radioChoice}
            setDisplayDropdown={setDisplayDropdown}
          />
        </View>
        <View>{dropdowns}</View>
        <View>{periodInput}</View>

        <Button
          title="Check!"
          onPress={handleSubmit}
          style={styles.startButton}
        ></Button>
      </ScrollView>
    </View>
  );
};

export default InputScreen;
