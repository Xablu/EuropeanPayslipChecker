import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //containers
  container: {
    padding: 20,
    backgroundColor: "rgb(240, 240, 240)",
    flexDirection: "column",
  },
  scroll: {
    backgroundColor: "rgb(240, 240, 240)",
    paddingBottom: 80,
  },
  dropDownsContainer: {
    backgroundColor: "rgb(240, 240, 240)",
  },
  textInputContainer: {
    flex: 1,
  },
  headContainer: {
    minHeight: 100,
    maxHeight: 200,
    backgroundColor: "#2924B1",
  },
  resultCard: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 1,
    height: "100%",
    backgroundColor: "#163CD4",
  },
  resultBackgroundImage: {
    borderRadius: 10,
    opacity: 0.2,
  },
  resultBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  resultCardText: {
    padding: 10,
  },
  checkBoxContainer: {
    backgroundColor: "rgb(240, 240, 240)",
    padding: 20,
  },
  detailTextContainer: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    padding: 10,
    elevation: 3,
  },
  collapsibleContainer: {
    padding: 10,
    marginTop: 10,
    maxHeight: 50,
    flexDirection: "row",
  },
  collapseIcon: {},
  collapseContent: { backgroundColor: "#fff" },
  //Text
  title: {
    paddingVertical: 16,
    color: "#000",
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
  },
  homeText: {
    fontSize: 16,
  },
  homeTextBottom: {
    paddingTop: 20,
    fontSize: 16,
  },
  subTitle: {
    fontSize: 19,
    paddingVertical: 16,
  },
  dropdownText: {
    fontSize: 18,
  },
  detailText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailLabel: { fontSize: 16, paddingVertical: 5 },
  resultCardLabel: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultCardLocation: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultFooterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  resultCardInformation: {
    fontSize: 14,
  },
  resultCardLink: {
    color: "blue",
  },
  discordMessage: {},
  discordUserName: {
    fontWeight: "bold",
  },

  //Buttons & Labels
  startButton: {
    paddingTop: 32,
    borderRadius: 10,
    padding: 30,
  },
  radioTitle: {
    fontSize: 18,
    paddingVertical: 5,
    paddingBottom: 10,
  },
  radioBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtnContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  radioBtnLabel: {
    padding: 5,
    fontSize: 18,
    paddingLeft: 15,
  },
  dropdown: {
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  backIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 30,
    paddingTop: 40,
  },
  backIcon: {
    width: 64,
    height: 64,
  },
  imageHead: { backgroundColor: "darkblue", opacity: 0.5 },
});

export default styles;
