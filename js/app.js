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

const navElement = document.querySelector('#navbar__list');

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
    // Create elements
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    //Create and add ID to the anchors
    const dataSection = listSections[i].getAttribute('data-nav');
    const navSectionId = `nav-${listSections[i].getAttribute('id')}`
    newAnchor.setAttribute('id', navSectionId);
    newAnchor.textContent = dataSection;
    newLi.appendChild(newAnchor);
    // Change style
    newLi.style.cssText = 'color: white; background-color: grey; font-size: 3.5em; border:black solid 2px';
    // Add new element into DOM    
    navElement.appendChild(newLi);
  };
});




// Add class 'active' to section when near top of viewport

//con el scroll identificamos donde estamos y le agregamos la clase activa.
// function addActiveClass (elementSelected) {
  
// }


// Scroll to anchor ID using scrollTO event

// Event on the parent nav__list
navElement.addEventListener('click', function (event) {
    //Prevent default event
    event.preventDefault();
    //Get id name from the event (element clicked)
    const anchorId = event.target.id;
    //Section id name is a substring of the anchor id name
    const sectionId = anchorId.substr(4, anchorId.length);
    //Scroll to sections    
    const selectSection = document.getElementById(sectionId);

    selectSection.scrollIntoView({block: "start", behavior: "smooth"});

});




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


