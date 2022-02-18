import countries from "./countries.json";
import countriesOBJ from "./countriesByISO2code.json";

import phone from "./phone.json";
import currencyObj from "./currencyObj.json";
import capitals from "./capitals.json";
import languages from "./languages.json";
import usStatesObj from "./usStatesObj.json";
import usStatesArray from "./usStatesArray.json";
import tld from "./tld.json";

export const data = [
  {
    name: "Countries array",
    description: "All countries with their ISO Codes",
    json: countries,
  },
  {
    name: "Countries object",
    description:
      "A JSON array that maps ISO2 country codes to ISO3 country codes",
    json: countriesOBJ,
  },
  {
    name: "Phone Codes",
    description:
      "A JSON array that maps ISO2 country codes to country phone codes",
    json: phone,
  },
  {
    name: "Currency Codes",
    description:
      "A JSON object that maps ISO2 country codes to country currency codes",
    json: currencyObj,
  },
  {
    name: "Country Capitals",
    description:
      "A JSON object that maps ISO2 country codes to country currency codes",
    json: capitals,
  },
  {
    name: "Languages",
    description: "A JSON object that maps ISO2 country codes to languages",
    json: languages,
  },
  {
    name: "American States",
    description: "A JSON object that maps ISO2 state codes to their name",
    json: usStatesObj,
  },
  {
    name: "American States",
    description:
      "A an array containing the ISO2 state code and the respective name",
    json: usStatesArray,
  },
  {
    name: "Country/Territory TLD",
    description:
      "A an array all TLD's associated with countries and territories",
    json: tld,
  },
];
