import Notiflix from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1';
const countryList = document.querySelector(".country-list");

function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}`;
  return fetch(url).
    then(response => response.json()).
    then((data) => {
      const allCountriesArray = data.reduce(
  (acc, country) => acc + `<li class="country">${country.flags.svg} ${country.name.official}</li>`,
  "");
      countryList.innerHTML = allCountriesArray;
      console.log(allCountriesArray);
      console.log(data);
      if (data.length > 10) {
        Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`);
        countryList.innerHTML = null;
      };
      if (data.length === 1) {
        const countryInfo = data.reduce(
          (acc, country) => acc + `<div class="capital"> Capital: ${country.capital}</div> <div class="population"> Population: ${country.population}</div> <div class="languages"> Languages: ${Object.values(country.languages)}</div>`,
          "");
        const countryInfoWithSpaces = countryInfo.replaceAll(",", ", ");
        countryList.insertAdjacentHTML('beforeend', countryInfoWithSpaces);
      };
    }).
    catch((error) => { Notiflix.Notify.failure(`Oops, there is no country with that name`); }); 
};

countryList.style.listStyle = 'none';

export default { fetchCountries };





// const a = document.querySelector(".country");
// const b = document.querySelector(".capital");
// const c = document.querySelector(".population");
// const d = document.querySelector(".languagues");









