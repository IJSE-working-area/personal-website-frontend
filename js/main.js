import {DateTimeFormatter, LocalDateTime} from '../node_modules/@js-joda/core/dist/js-joda.esm.js';


const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const btnClose = document.getElementById('btnClose');
const btnOpen = document.getElementById('btnOpen');
const sidemenu = document.getElementById('sidemenu');



p1.addEventListener('click', function () {
    opentab('skills');
});

p2.addEventListener('click', function () {
    opentab('experience');
});

p3.addEventListener('click', function () {
    opentab('education');
});
btnClose.addEventListener('click', function () {
    closemenu();
});

btnOpen.addEventListener('click', function () {
    openmenu();
});


function opentab(tabname) {
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link');
    }
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-150px';
}
















