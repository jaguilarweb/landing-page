/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Used in addElement()
const listSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < listSections.length; i++){
    // Create element
    const newLi = document.createElement('li');
    const dataSection = listSections[i].getAttribute('data-nav');
    newLi.textContent = dataSection;
    newLi.style.cssText = 'color: white; background-color: grey; font-size: 3.5em; border:black solid 2px';

    // Add new element into DOM
    const navElement = document.querySelector('#navbar__list');
    navElement.appendChild(newLi);
  };
});




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


