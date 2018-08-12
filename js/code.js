/*global document*/

/*-------------Media Query
--------------------------------------------------------------*/
function myFunction(nav) {
    "use strict";
    if (nav.matches) { // If media query matches
        var myNavButton = document.getElementById("navbar-header");
        myNavButton.classList.remove('none');
        var myNav = document.getElementById("navbar");
        myNav.classList.add('none');
    }
}

var nav = window.matchMedia("(max-width:991px)")
myFunction(nav); // Call listener function at run time
nav.addListener(myFunction); // Attach listener function on state changes 

/*-----------------------------------------------------------------------------------*/

var i;
for (i = 0; i<=5 ; i++) {
function myFunction(info) {
    "use strict";
    if (info.matches) { // If media query matches
        var infop = document.getElementById("project2");
        infop.classList.remove('inline');
        var infop2 = document.getElementById("project2");
        infop2.classList.add('block');
    }
}

var info = window.matchMedia("(max-width:767px)")
myFunction(info); // Call listener function at run time
info.addListener(myFunction); // Attach listener function on state changes 
}

/*-----------------------------------------------------------------------------------*/









































































