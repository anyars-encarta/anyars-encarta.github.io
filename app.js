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

let popupDiv = document.createElement('div');
popupDiv.classList.add('modal');
popupDiv.id = 'modal';

document.body.appendChild(popupDiv);

// document.getElementById('print-html').addEventListener('click', addPopupDetails);
document.querySelector('.btn-1').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-2').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-3').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-4').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-5').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-6').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-7').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-8').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-9').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-10').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-11').addEventListener('click', addPopupDetails);
// document.querySelector('.btn-12').addEventListener('click', addPopupDetails);

let div = document.createElement('div');
div.id = 'overlay'
document.body.appendChild(div);

function addPopupDetails() {
  const projects = [
    {   
      id: 1,
      name: 'Multi-Post Stories',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 2,
      name: 'Data Dashboard Healthcare',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 3,
      name: 'Data Dashboard Healthcare',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 4,
      name: 'Website Portfolio',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 5,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 6,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 7,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 8,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 9,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 10,
      name: 'Profesional Art Printing Data',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 11,
      name: 'Data Dashboard Healthcare',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 12,
      name: 'Website Portfolio',
      projectDescription: 'A daily selection of privately <br>personalized reads; no accounts or <br>sign-ups required. Has been the <br>industry"s standard.',
      featuredImage: './logos/My-Recent-Works.png',
      technologies: {HTML: 'HTML', 
                     CSS: 'CSS', 
                     JavaScript: 'Javascript',
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    ];
  
    // projects.forEach((project, index) => {
      let div = document.createElement('div');
      div.id = 'overlay';
      document.body.appendChild(div);
      
      let popupFormDetails = `<div class="modal-header">
      <div class="title">${project.name}</div>
      <button data-close-button class="close-button">&times;</button>
   </div>
   
   <div class="modal-body">
      <ul class="popup-list" id="detail-id">
          <li class="list-item" id="item-1"><a href="#">${project.technologies.HTML}</a></li>
          <li class="list-item" id="item-1"><a href="#">${project.technologies.CSS}</a></li>
          <li class="list-item" id="item-1"><a href="#">${project.technologies.JavaScript}</a></li>
      </ul>
   
      <div class="middle-section">
        <img src=${project.featuredImage} alt="Snapshoot Portfolio">
        
        <div class="side-items">
          <p>${project.projectDescription}</p>
          <div class="popup-buttons">
              <a href ="https://anyars-encarta.github.io/" class="button-1" id="btn-1">See more<img src="./logos/Icon-with-arrow.png" alt=""></a>
              <a href ="https://github.com/anyars-encarta/anyars-encarta.github.io" class="button-2" id="btn-2">See Source<img src="./logos/New-Github.png" alt=""></a>
          </div>
        </div>
      </div>
  </div>`;
    
  popupDiv.insertAdjacentHTML('beforeend', popupFormDetails);
  // });
}

    // JS for Popup Window
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });

  const div = document.querySelector('modal');
  document.body.removeChild(div);
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });

  const div = document.querySelector('modal');
  document.body.removeChild(div);
});