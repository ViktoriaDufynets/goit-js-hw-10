import './css/styles.css';
import API from './fetchCountries';
import throttle from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");

input.addEventListener('input', throttle(onCountrySearch, DEBOUNCE_DELAY));

function onCountrySearch(event) {
    const countries = input.value.trim();
    if (countries) {
        API.fetchCountries(countries);
    } else {
        countryList.innerHTML = null;
    };
};


// const createCountry = (item) => {
//     `<li class="country">
//        <p> ${item.official} ${item.capital} ${item.population} ${item.languages} </p>
//      </li>`
// }; 
// createCountry();

// const generateCountryList = (array) => array.reduce((acc, item) => acc + createCountry(item), "");

// const insertCountryList = (array) => {
//     const result = generateCountryList(array);
//     countryList.insertAdjacentHTML('beforeend', result);
// };



