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
let nodeListSections = {};
let arrayListSections = [];
let arraylistAnchor = [];

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

  nodeListSections = document.getElementsByTagName('section');
  arrayListSections = [...nodeListSections];

  for (let i = 0; i < nodeListSections.length; i++){
    // Create elements
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    //Create and add ID to the anchors
    const dataSection = nodeListSections[i].getAttribute('data-nav');
    const navSectionId = `nav-${nodeListSections[i].getAttribute('id')}`
    newAnchor.setAttribute('id', navSectionId);
    newAnchor.textContent = dataSection;
    arraylistAnchor.push(newAnchor);
    newLi.appendChild(newAnchor);
    // Change style
    newLi.style.cssText = 'color: white; background-color: grey; font-size: 2.5em; border:black solid 2px';
    // Add new element into DOM    
    navElement.appendChild(newLi);
  };

});


// Add class 'active' to section when near top of viewport

const addAnchorActiveClass = (anchorId) => {
  arraylistAnchor.forEach((anchorSelected)=>{
    if(anchorSelected.id === anchorId){
      anchorSelected.parentElement.style.cssText = 'color: white; background-color: red; font-size: 2.5em; border:black solid 2px';
    }else{
      anchorSelected.parentElement.style.cssText = 'color: white; background-color: grey; font-size: 2.5em; border:black solid 2px';
    }
  });
}


const addSectionActiveClass = (selectSection) => {

  arrayListSections.forEach((section) => {    

    if(section.id === selectSection.id){
      section.setAttribute('class', 'your-active-class');
      let anchorId = `nav-${selectSection.id}`
      addAnchorActiveClass(anchorId);
    }else{
      section.setAttribute('class', '');
    }

  });
}


const navSection = (event) => {
  if(event.target.nodeName === 'A'){
    event.preventDefault();
    //Get id name from the event (element clicked)
    const anchorId = event.target.id;
    //Section id name is a substring of the anchor id name
    const sectionId = anchorId.substr(4, anchorId.length);

    const selectSection = document.getElementById(sectionId);
    addSectionActiveClass(selectSection);
    //Scroll to sections
    selectSection.scrollIntoView({block: "start", behavior: "smooth"});
  }
}  

// Scroll to anchor ID using scrollTO event
// Event on the parent nav__list
navElement.addEventListener('click', navSection);






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


