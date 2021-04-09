import countries from "../assets/countries";

export const calculatePayslip = (
  employeeLocation,
  employeeNationality,
  companyLocation,
  workLocation,
  period
) => {
  let result = {};
  //working and living in country of nationality returns company location
  if (workLocation == companyLocation && workLocation == employeeNationality) {
    result.location = companyLocation;
    result.information = getInformation(
      companyLocation,
      workLocation,
      employeeNationality
    );
    result.period = period;
    return result;
  }

  //If all above fails, we don't know
  result.location = "We don't know";
  result.information = getInformation(
    companyLocation,
    workLocation,
    employeeNationality
  );
  result.period = period;
  return result;
};

const getInformation = (companyLocation, workLocation, employeeNationality) => {
  return (
    countries.getName(workLocation) +
    " " +
    countries.getName(companyLocation) +
    " " +
    countries.getName(employeeNationality) +
    " " +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
};
