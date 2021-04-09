// nationalities. To add countries to the options, simply add its country and nationality

const countries = [
  { name: "The Netherlands", nationality: "Dutch", value: "nl" },
  { name: "France", nationality: "French", value: "fr" },
  { name: "Italy", nationality: "Italian", value: "it" },
];
const timePeriods = ["Weeks", "Months", "Years"];

const getNationality = (value) => {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].value === value) {
      return countries[i].nationality;
    }
  }
};
const getName = (value) => {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].value === value) {
      return countries[i].name;
    }
  }
};
export default { countries, timePeriods, getName, getNationality };
