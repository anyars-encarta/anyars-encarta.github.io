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
    
// JS for Creating Dynamic HTML
const popupDiv = document.createElement('div');
popupDiv.classList.add('modal');
popupDiv.id = 'modal';

document.body.appendChild(popupDiv);

const div = document.createElement('div');
div.id = 'overlay';
document.body.appendChild(div);

function addPopupDetails() {
  const projects = [
    {   
      id: 1,
      name: document.getElementById('name-1').value,
      projectDescription: document.getElementById('desc-1').value,
      featuredImage: document.getElementById('img-1').value,
      Technologies: {HTML: document.getElementById('html-1').value, 
                     CSS: document.getElementById('css-1').value, 
                     JavaScript: document.getElementById('js-1').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 2,
      name: document.getElementById('name-2').value,
      projectDescription: document.getElementById('desc-2').value,
      featuredImage: document.getElementById('img-2').value,
      Technologies: {HTML: document.getElementById('html-2').value, 
                     CSS: document.getElementById('css-2').value, 
                     JavaScript: document.getElementById('js-2').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 3,
      name: document.getElementById('name-3').value,
      projectDescription: document.getElementById('desc-3').value,
      featuredImage: document.getElementById('img-3').value,
      Technologies: {HTML: document.getElementById('html-3').value, 
                     CSS: document.getElementById('css-3').value, 
                     JavaScript: document.getElementById('js-3').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 4,
      name: document.getElementById('name-4').value,
      projectDescription: document.getElementById('desc-4').value,
      featuredImage: document.getElementById('img-4').value,
      Technologies: {HTML: document.getElementById('html-4').value, 
                     CSS: document.getElementById('css-4').value, 
                     JavaScript: document.getElementById('js-4').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 5,
      name: document.getElementById('name-5').value,
      projectDescription: document.getElementById('desc-5').value,
      featuredImage: document.getElementById('img-5').value,
      Technologies: {HTML: document.getElementById('html-5').value, 
                     CSS: document.getElementById('css-5').value, 
                     JavaScript: document.getElementById('js-5').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 6,
      name: document.getElementById('name-6').value,
      projectDescription: document.getElementById('desc-6').value,
      featuredImage: document.getElementById('img-6').value,
      Technologies: {HTML: document.getElementById('html-6').value, 
                     CSS: document.getElementById('css-6').value, 
                     JavaScript: document.getElementById('js-6').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 7,
      name: document.getElementById('name-7').value,
      projectDescription: document.getElementById('desc-7').value,
      featuredImage: document.getElementById('img-7').value,
      Technologies: {HTML: document.getElementById('html-7').value, 
                     CSS: document.getElementById('css-7').value, 
                     JavaScript: document.getElementById('js-7').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 8,
      name: document.getElementById('name-8').value,
      projectDescription: document.getElementById('desc-8').value,
      featuredImage: document.getElementById('img-8').value,
      Technologies: {HTML: document.getElementById('html-8').value, 
                     CSS: document.getElementById('css-8').value, 
                     JavaScript: document.getElementById('js-8').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 9,
      name: document.getElementById('name-9').value,
      projectDescription: document.getElementById('desc-9').value,
      featuredImage: document.getElementById('img-9').value,
      Technologies: {HTML: document.getElementById('html-9').value, 
                     CSS: document.getElementById('css-9').value, 
                     JavaScript: document.getElementById('js-9').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 10,
      name: document.getElementById('name-10').value,
      projectDescription: document.getElementById('desc-10').value,
      featuredImage: document.getElementById('img-10').value,
      Technologies: {HTML: document.getElementById('html-10').value, 
                     CSS: document.getElementById('css-10').value, 
                     JavaScript: document.getElementById('js-10').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 11,
      name: document.getElementById('name-11').value,
      projectDescription: document.getElementById('desc-11').value,
      featuredImage: document.getElementById('img-11').value,
      Technologies: {HTML: document.getElementById('html-11').value, 
                     CSS: document.getElementById('css-11').value, 
                     JavaScript: document.getElementById('js-11').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    {   
      id: 12,
      name: document.getElementById('name-12').value,
      projectDescription: document.getElementById('desc-12').value,
      featuredImage: document.getElementById('img-12').value,
      Technologies: {HTML: document.getElementById('html-12').value, 
                     CSS: document.getElementById('css-12').value, 
                     JavaScript: document.getElementById('js-12').value
                    },
      linkToLive: 'https://anyars-encarta.github.io/',
      linkToSource: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
    },
    ];
      
  projects.forEach((project, index) => {
    function addPopupDetails() {
      let popupTitle = document.getElementById('print-1').value
      let popupImage = 'logos/Popup-Portfolio-Big.png';
      let popupImageAltText = document.querySelector('[alt]');
      let projectDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> </br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
      
      let popupFormDetails = `<div class="modal-header">
      <div class="title">Keeping track of hundreds of components website</div>
      <button data-close-button class="close-button">&times;</button>
   </div>
   
   <div class="modal-body">
      <ul class="popup-list" id="detail-id">
          <li class="list-item" id="item-1"><a href="#">HTML</a></li>
          <li class="list-item" id="item-1"><a href="#">Bootstrap</a></li>
          <li class="list-item" id="item-1"><a href="#">Ruby on rails</a></li>
      </ul>
   
      <div class="middle-section">
        <img src="./logos/Popup-Portfolio-Big.png" alt="Snapshoot Portfolio">
        
        <div class="side-items">
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an 
              unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but 
              also the leap into electronic typesetting, remaining essent
          </p>
          <div class="popup-buttons">
              <a href ="#" class="button-1" id="btn-1">See more<img src="./logos/Icon-with-arrow.png" alt=""></a>
              <a href ="#" class="button-2" id="btn-2">See Source<img src="./logos/New-Github.png" alt=""></a>
          </div>
        </div>
      </div>
   </div>`
   
   popupDiv.insertAdjacentHTML('beforeend', popupFormDetails)
   }
  })

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