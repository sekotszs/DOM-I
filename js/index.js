const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NAVBAR
// let navbar = document.querySelector('nav');
// Array.from(navbar.children).forEach((link,i) => {
//   link.textContent = siteContent.nav[`nav-item-${i+1}`]
// }
// );
let navbar = document.querySelector('nav');
navbar.children[0].textContent = siteContent.nav['nav-item-1'];
navbar.children[1].textContent = siteContent.nav['nav-item-2'];
navbar.children[2].textContent = siteContent.nav['nav-item-3'];
navbar.children[3].textContent = siteContent.nav['nav-item-4'];
navbar.children[4].textContent = siteContent.nav['nav-item-5'];
navbar.children[5].textContent = siteContent.nav['nav-item-6'];

//CTA
let heading = document.querySelector('h1');
heading.textContent = siteContent.cta.h1;

let mainbutton = document.querySelector('button');
mainbutton.textContent = siteContent.cta.button;

let roundpic = document.getElementById('cta-img');
roundpic.setAttribute('src',siteContent['cta']['img-src']);

//MAINCONTH4
let feath4 = document.querySelector('div.top-content div.text-content:nth-child(1) h4');
feath4.textContent = siteContent['main-content']['features-h4'];

let abouth4 = document.querySelector('div.top-content div.text-content:nth-child(2) h4');
abouth4.textContent = siteContent['main-content']['about-h4'];

let serh4 = document.querySelector('div.bottom-content div.text-content:nth-child(1) h4');
serh4.textContent = siteContent['main-content']['services-h4'];

let proh4 = document.querySelector('div.bottom-content div.text-content:nth-child(2) h4');
proh4.textContent = siteContent['main-content']['product-h4'];

let vish4 = document.querySelector('div.bottom-content div.text-content:nth-child(3) h4');
vish4.textContent = siteContent['main-content']['vision-h4'];

//MAINTCONTENTP
let onep = document.querySelector('div.top-content div.text-content:nth-child(1) p');
onep.textContent = siteContent['main-content']['features-content'];

let twop = document.querySelector('div.top-content div.text-content:nth-child(2) p');
twop.textContent = siteContent['main-content']['about-content'];

let threep = document.querySelector('div.bottom-content div.text-content:nth-child(1) p');
threep.textContent = siteContent['main-content']['services-content'];

let fourp = document.querySelector('div.bottom-content div.text-content:nth-child(2) p');
fourp.textContent = siteContent['main-content']['product-content'];

let fivep = document.querySelector('div.bottom-content div.text-content:nth-child(3) p');
fivep.textContent = siteContent['main-content']['vision-content'];

//MIDDLEIMG
let middlepic = document.getElementById('middle-img');
middlepic.setAttribute('src', siteContent['main-content']['middle-img-src']);

//CONTACT
let conth4 = document.querySelector('section.contact h4');
conth4.textContent = siteContent['contact']['contact-h4'];

let contp = document.querySelectorAll('section.contact p');
contp[0].textContent = siteContent['contact']['address'];

let contp1 = document.querySelectorAll('section.contact p');
contp1[1].textContent = siteContent['contact']['phone'];

let contp2 = document.querySelectorAll('section.contact p');
contp2[2].textContent = siteContent['contact']['email'];

//FOOTER
let foot = document.querySelector('footer');
foot.textContent = siteContent ['footer']['copyright'];

//TASK 3
let newthing = document.createElement('a');
newthing.textContent ='Hello Friends'

let othernewthing = document.querySelector('nav');
othernewthing.appendChild(newthing);


let secondthing = document.createElement('a');
secondthing.textContent = 'Goodbye Friends'

let secondothernewthing = document.querySelector('nav');
secondothernewthing.prepend(secondthing);

//GREEN
 let colornav = document.querySelectorAll('nav a');
 colornav.forEach(element => element.style.color ='green');

 //STRETCH
 let colorp = document.querySelectorAll('p');
 colorp.forEach(element => element.style.color ='hotpink');