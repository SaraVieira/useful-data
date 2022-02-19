import countries from "./json/countries.json";
import countriesOBJ from "./json/countriesByISO2code.json";

import phone from "./json/phone.json";
import currencyObj from "./json/currencyObj.json";
import capitals from "./json/capitals.json";
import languages from "./json/languages.json";
import usStatesObj from "./json/usStatesObj.json";
import usStatesArray from "./json/usStatesArray.json";
import tld from "./json/tld.json";
import currenciesFull from "./json/currencies-full.json";
import { CATEGORIES } from "./categories";
import mexicoStates from "./json/mexico-states.json";
import germanyStates from "./json/german-states.json";
import ghEmojis from "./json/githubEmojis.json";
import nobel from "./json/nobel-prize.json";
import rick from "./json/rick-morty.json";
import simpsons from "./json/simpsons.json";

export const data = [
  {
    name: "Countries array",
    description: "All countries with their ISO Codes",
    json: countries,
    category: CATEGORIES[0],
  },
  {
    name: "Countries object",
    description:
      "A JSON array that maps ISO2 country codes to ISO3 country codes",
    json: countriesOBJ,
    category: CATEGORIES[0],
  },
  {
    name: "Phone Codes",
    description:
      "A JSON array that maps ISO2 country codes to country phone codes",
    json: phone,
    category: CATEGORIES[4],
  },
  {
    name: "GitHub Emojis",
    description: "An object with emoji text and their links on GitHub",
    json: ghEmojis,
    category: CATEGORIES[4],
  },
  {
    name: "Nobel Prize Winner",
    description: "An array with all the nobel prize winners",
    json: nobel,
    category: CATEGORIES[4],
  },
  {
    name: "Currency Codes",
    description:
      "A JSON object that maps ISO2 country codes to country currency codes",
    json: currencyObj,
    category: CATEGORIES[2],
  },
  {
    name: "Country Capitals",
    description:
      "A JSON object that maps ISO2 country codes to country currency codes",
    json: capitals,
    category: CATEGORIES[0],
  },
  {
    name: "Languages",
    description: "A JSON object that maps ISO2 country codes to languages",
    json: languages,
    category: CATEGORIES[1],
  },
  {
    name: "American States",
    description: "A JSON object that maps ISO2 state codes to their name",
    json: usStatesObj,
    category: CATEGORIES[0],
  },
  {
    name: "American States",
    description:
      "A an array containing the ISO2 state code and the respective name",
    json: usStatesArray,
    category: CATEGORIES[0],
  },
  {
    name: "Country/Territory TLD",
    description:
      "A an array all TLD's associated with countries and territories",
    json: tld,
    category: CATEGORIES[3],
  },
  {
    name: "Currencies Full",
    description:
      "All the world's currencies, their origin territories and their Symbol",
    json: currenciesFull,
    category: CATEGORIES[2],
  },
  {
    name: "Mexican States",
    description: "An array containing all the states in mexico and their code",
    json: mexicoStates,
    category: CATEGORIES[0],
  },
  {
    name: "German States",
    description: "An array containing all the states in germany and their code",
    json: germanyStates,
    category: CATEGORIES[0],
  },
  {
    name: "Rick and Morty Characters",
    description: "List of all rick and morty characters",
    json: rick,
    category: CATEGORIES[5],
  },
  {
    name: "Simpsons Episodes",
    description: "List of all simpsons episodes, movies and shorts",
    json: simpsons,
    category: CATEGORIES[5],
  },
].map((d, i) => ({
  index: `${d.name}-${i}`,
  ...d,
}));
