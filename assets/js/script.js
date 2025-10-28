'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function() {
        navbar.classList.remove("active");
    });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    window.scrollY >= 50 ? header.classList.add("active") :
        header.classList.remove("active");
});

// Select all tab buttons and the content section
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelector('.tab-content');

// Create content for each tab (you can customize this text)
const tabData = {
    "Our Mission": `
  <p class="section-text">
    We promote holistic wellbeing through science-based practices, creating innovative products and services that 
    enhance vitality and quality of life. By building strong partnerships and fostering responsible growth, we 
    live our motto — Cultivating Health, Harvesting Life.
  </p>
  <ul class="tab-list">
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="leaf-outline"></ion-icon></div>
      <p class="tab-text">Holistic Health Promotion</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="flask-outline"></ion-icon></div>
      <p class="tab-text">Science-Based Innovation</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="people-outline"></ion-icon></div>
      <p class="tab-text">Community Empowerment</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="handshake-outline"></ion-icon></div>
      <p class="tab-text">Sustainable Partnerships</p>
    </li>
  </ul>
`,

    "Our Vision": `
  <p class="section-text">
    To be a pioneering health and wellness company that inspires holistic wellbeing, sustainable innovation, 
    and alliance-driven prosperity across communities and generations.
  </p>
  <ul class="tab-list">
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="earth-outline"></ion-icon></div>
      <p class="tab-text">Global Health Impact</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="sparkles-outline"></ion-icon></div>
      <p class="tab-text">Innovation & Excellence</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="leaf-outline"></ion-icon></div>
      <p class="tab-text">Sustainability for Future Generations</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="ribbon-outline"></ion-icon></div>
      <p class="tab-text">Integrity & Shared Prosperity</p>
    </li>
  </ul>
`,

    "Our Values": `
  <p class="section-text">
    We are guided by a commitment to holistic wellbeing, scientific integrity, environmental stewardship, 
    and community-centered growth. Through collaboration and innovation, we strive to cultivate health and 
    harvest life — creating a lasting positive impact on people and the planet.
  </p>

  <ul class="tab-list">
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="heart-outline"></ion-icon></div>
      <p class="tab-text">Holistic Wellbeing</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="flask-outline"></ion-icon></div>
      <p class="tab-text">Scientific Integrity</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="leaf-outline"></ion-icon></div>
      <p class="tab-text">Sustainability & Environmental Care</p>
    </li>
    <li class="tab-item">
      <div class="item-icon"><ion-icon name="people-outline"></ion-icon></div>
      <p class="tab-text">Community Empowerment & Collaboration</p>
    </li>
  </ul>
`


};

// Add click event listeners
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
        // Update tab content
        tabContent.innerHTML = tabData[button.textContent.trim()];
    });
});

// Testimonials

const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;

function updateSlide() {
    const mainWidth = main.offsetWidth;
    const translateValue = currentIndex * -mainWidth;
    slideRow.style.transform = `translateX(${translateValue}px)`;

    btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
    });
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
    });
});

window.addEventListener("resize", () => {
    updateSlide();
});


// products gallery
$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');

        if (value === "All") { // or "all" if you change HTML
            $('.itemBox').show(1000);
        } else {
            $('.itemBox').not('.' + value).hide(1000);
            $('.itemBox').filter('.' + value).show(1000);
        }

        // highlight active filter
        $(this).addClass('active').siblings().removeClass('active');
    });
});