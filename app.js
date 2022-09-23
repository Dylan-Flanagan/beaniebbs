/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanie } from './render-utils.js';
/* Get DOM Elements */
const beanieList = document.getElementById('beanie-list');
/* State */
let beanies = [];
let error = null;
/* Events */
window.addEventListener('load', async () => {
    findBeanies();
});

async function findBeanies(name) {
    const response = await getBeanies();
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

// (don't forget to call any display functions you want to run on page load!)
