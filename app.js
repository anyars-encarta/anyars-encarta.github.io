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

    
    
    
    
    

// JS for Creating Dynamic HTML
const popupDiv = document.createElement('div');
popupDiv.classList.add('modal');
popupDiv.id = 'modal';

document.body.appendChild(popupDiv);

const div = document.createElement('div');
div.id = 'overlay';
document.body.appendChild(div);

function addPopupDetails() {

  
  
  
  
  
  <button data-close-button class="close-button">&times;</button>
</div>

<div class="modal-body">
   <ul class="popup-list" id="detail-id">

     
     
     
     
     
     
     
     
     
       </div>
     </div>
   </div>
</div>`;

  popupDiv.insertAdjacentHTML('beforeend', popupFormDetails);
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

  
  
  
  
