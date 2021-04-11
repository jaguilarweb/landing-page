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

let nodeListSections = {};
let arrayListSections = [];
let arraylistAnchor = [];
const buttonToTop = document.getElementById('main-button');
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
    let listNewLi = [];
    arrayListSections.forEach((section) => {
        // Create elements
        const newLi = document.createElement('li');
        const newAnchor = document.createElement('a');

        //Create ID to the anchors
        const dataSection = section.getAttribute('data-nav');
        const navSectionId = `nav-${section.getAttribute('id')}`;
        //Add anchors to list item
        newAnchor.setAttribute('id', navSectionId);
        newAnchor.textContent = dataSection;
        newLi.appendChild(newAnchor);
        // Add to arrays lists
        arraylistAnchor.push(newAnchor);
        listNewLi.push(newLi);
    });

    // Add new element into DOM
    navElement.append(...listNewLi);
});

const addAnchorActiveClass = (anchorId) => {
    arraylistAnchor.forEach( (anchorSelected) => {
        if (anchorSelected.id === anchorId){
          anchorSelected.parentElement.setAttribute('class', 'your-active-class');
        } else {
          anchorSelected.parentElement.setAttribute('class', '');
        }
    });
};

const addSectionActiveClass = (IdSection) => {
    arrayListSections.forEach( (section) => {
        if (section.id === IdSection){
          section.setAttribute('class', 'your-active-class');
          let anchorId = `nav-${IdSection}`;
          addAnchorActiveClass(anchorId);
        } else {
          section.setAttribute('class', '');
        }
    });
};

const navSection = (event) => {
    if (event.target.nodeName === 'A'){
        event.preventDefault();
        //From the event get element id clicked
        const anchorId = event.target.id;
        //Section id is a substring of the anchor id
        const sectionId = anchorId.substr(4, anchorId.length);
        const selectSection = document.getElementById(sectionId);
        addSectionActiveClass(sectionId);
        //Scroll to sections
        selectSection.scrollIntoView({block: "start"});
    }
};

function isInViewport (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const buttonShow = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) >= Math.ceil(scrollable * 0.5)){
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }
};

// Add class 'active' to section when near top of viewport
const checkScroll = () => {
    // Check if sections are in viewport
    arrayListSections.forEach( (section) => {
        if (isInViewport(section)){
            addSectionActiveClass(section.id);
        }
    });
    buttonShow();
};

// Events
navElement.addEventListener('click', navSection);

window.addEventListener('scroll', checkScroll);

buttonToTop.addEventListener('click', function(){
  window.scroll({top: 100, left: 100, behavior: 'smooth'});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
