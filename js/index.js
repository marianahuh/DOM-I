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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street\n Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchorElement = document.querySelectorAll("a");
anchorElement[0].textContent = "Services";
anchorElement[1].textContent = "Product";
anchorElement[2].textContent = "Vision";
anchorElement[3].textContent = "Features";
anchorElement[4].textContent = "About";
anchorElement[5].textContent = "Contact";

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"]
let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta.h1.replace(new RegExp(" ", 'g'), '<br> ');

const btn = document.querySelector(".cta button");
btn.textContent = "Get Started";

const ctaElement = document.querySelector("#cta-img");
ctaElement.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const h4 = document.querySelectorAll(".text-content h4");
h4[0].textContent = siteContent["main-content"]["features-h4"]
h4[1].textContent = siteContent["main-content"]["about-h4"]
h4[2].textContent = siteContent["main-content"]["services-h4"]
h4[3].textContent = siteContent["main-content"]["product-h4"]
h4[4].textContent = siteContent["main-content"]["vision-h4"]

const featuresText = document.querySelector(".text-content p");
featuresText.textContent = siteContent["main-content"]["features-content"]

const aboutText = document.querySelectorAll(".text-content p")[1];
aboutText.textContent = siteContent["main-content"]["about-content"]

const servicesText = document.querySelectorAll(".text-content p")[2];
servicesText.textContent = siteContent["main-content"]["services-content"]

const productText = document.querySelectorAll(".text-content p")[3];
productText.textContent = siteContent["main-content"]["product-content"]

const visionText = document.querySelectorAll(".text-content p")[4];
visionText.textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"]

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"]
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

const copyRight = document.querySelector("footer");
copyRight.textContent = siteContent["footer"]["copyright"]



