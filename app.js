// JS for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// JS for Form Validation
const name = document.getElementById('fullname');
const email = document.getElementById('email-address');
const form = document.getElementById('contact');
const errorElement = document.getElementById('small');

form.addEventListener('submit', (e) => {
  if (name.value === '' || name.value == null) {
    e.preventDefault();
    errorElement.innerText = 'Please enter your name';
  } else if (email.value === '' || email.value == null) {
    e.preventDefault();
    errorElement.innerText = 'Please enter email';
  } else if (email.value === email.value.toUpperCase()) {
    e.preventDefault();
    errorElement.innerText = 'Please use Lowercase';
  } else if (/[A-Z]/.test(email.value)) {
    e.preventDefault();
    document.getElementById('email-address').style.color = 'blue';
    errorElement.innerText = 'Please use Lowercase';
  } else {
    document.getElementById('email-address').style.color = 'grey';
    errorElement.innerText = '';
  }
});

// JS for Form Popup Window
const projects = [
  {   
    id: 1,
    name: 'Multi-Post Stories',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 2,
    name: 'Data Dashboard Healthcare',
    projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 3,
    name: 'Data Dashboard Healthcare',
    projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 4,
    name: 'Website Portfolio',
    projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 5,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 6,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 7,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 8,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 9,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 10,
    name: 'Profesional Art Printing Data',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {   
    id: 11,
    name: 'Data Dashboard Healthcare',
    projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    featuredImage: './logos/My-Recent-Works.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linkToLive: 'https://anyars-encarta.github.io/',
    linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  ];

// add the object code and properties to index page via loop
projects.forEach((project) => {
  const bodySection = document.querySelector('.print-container');
  const section = document.createElement('section');
  const projectID = project.id
  section.id = 'card-works';
  section.className = 'print-data data-0' + 'data-' + projectID + 'data-0-' + projectID;
  section.innerHTML = `<h3 id="print-1" id="name-3">${project.name}</h3>
  <p id="desc-3">${project.projectDescription}</p>
  <ul class="list-x">
    <li><a class="start-list-x" id="html-3" href="#">${project.technologies[0]}</a></li>
    <li><a class="second-list-x" id="css-3" href="#">${project.technologies[1]}</a></li>
    <li><a class="third-list-x" id="js-3" href="#">${project.technologies[2]}</a></li>
  </ul>
  <button class="action-btn"  type="button" id="btn-${projectID}" name="button">See Project</button>`;

  bodySection.append(section);
});

// Popup Window code start here
const body = document.querySelector('body');
projects.forEach((project) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.id = `card-${project.id}`;
  popupWindow.innerHTML = `
  <section class="card-popup">
  <div class="pop-header">
      <h2 class="title pop-title">${project.name}</h2>
      <i id="close-${project.id}" class="bi bi-x close-icon"></i>
  </div>
  <div class="card-buttons">
  <div class="card-btn btn-popup">
    <button class="sm-btn" type="button" name="button">${project.skills[0]}</button>
    <button class="sm-btn" type="button" name="button">${project.skills[1]}</button>
    <button class="sm-btn" type="button" name="button">${project.skills[2]}</button>
  </div>
      <div class="portfolio-popup-image">
        <img class="popup-image" src="${project.featuredImage}" alt="Snap image for background">
      </div>
      <div class="popup-left-block">
       
        <div class="card-btn-para">
        <p class="card-text">${project.projectDescription} <br>
        ${project.description}
        </p>
        
        <div class="action-btn-container">
          <button class="action-btn popupBtn" type="button" name="button">See Live <i class="bi bi-box-arrow-up-right"></i></button>
          <button class="action-btn popupBtn" type="button" name="button">See Source <i class="bi bi-github"></i></button>
        </div>
        </div>
        </div>
      </div>
    </section>
 `;
  body.appendChild(popupWindow);
});

const feature1 = document.getElementById('btn-1');
const feature2 = document.getElementById('btn-2');
const feature3 = document.getElementById('btn-3');
const feature4 = document.getElementById('btn-4');

const IconClose1 = document.getElementById('close-1');
const IconClose2 = document.getElementById('close-2');
const IconClose3 = document.getElementById('close-3');
const IconClose4 = document.getElementById('close-4');

const popup1 = document.getElementById('card-1');
const popup2 = document.getElementById('card-2');
const popup3 = document.getElementById('card-3');
const popup4 = document.getElementById('card-4');

feature1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

IconClose1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

feature2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

IconClose2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

feature3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

IconClose3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

feature4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

IconClose4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});