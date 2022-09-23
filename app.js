/* Imports */
import { getAstroSigns, getBeanies } from './fetch-utils.js';
import { renderAstroSignOption, renderBeanie } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('beanie-list');
const astroSignSelect = document.getElementById('astro-sign-select');
/* State */
let beanies = [];
let error = null;
let astroSigns = [];
/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstroSigns();

    error = response.error;
    astroSigns = response.data;

    if (!error) {
        displayAstroSignOptions();
    }
});

async function findBeanies(name, astroSign) {
    const response = await getBeanies(name, astroSign);
    error = response.error;
    beanies = response.data;
    if (!error) {
        displayBeanies();
    }
}
/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}
function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    }
}

function displayAstroSignOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstroSignOption(astroSign);
        astroSignSelect.append(option);
    }
}
