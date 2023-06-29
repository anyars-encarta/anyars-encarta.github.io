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

// JS for preserve data in the browser
// Retrive data from user input
  function storeUserInput() { //stores items in the localStorage
  var name = document.getElementById('fullname').value;
  var email = document.getElementById('email-address').value;
  var message = document.getElementById('message').value;
  var key = document.getElementById('key').value;

  const userInput = {
      fname: name,
      mail: email,
      text: message
  };

  window.localStorage.setItem(key,JSON.stringify(userInput));  
  //converting object to string
}
});

// Popup Form

const data = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
  },
{
  id: 2,
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 3,
  title: 'Website Portfolio',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 4,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 5,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 6,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 7,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 8,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 9,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 10,
  title: 'Profesional Art <br>Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 11,
  title: 'Data Dashboard <br>Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
 id: 12,
 title: 'Website Portfolio',
 description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
 languages: ['HTML', 'CSS', 'JavaScript'],
 featuredImage: './logos/Popup-Portfolio-Big.png',
 liveLink: 'https://anyars-encarta.github.io/',
 sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
}];

const popupWin = document.body;
const cards = document.querySelector('.extra');
const modalWarpper = document.querySelector('#modal-wrapper');
const modalBox = document.querySelector('#modal-box');

  cards.addEventListener('click', (e) => {
    if(e.target.classList.contains('see-btn')) {
      const dataId = e.target.dataset.id;
      addToModal(dataId);
      showModal();
    }
  });

  function addToModal (dataId) {
    const selectedData = data.filter(x => x.id === +dataId);
    console.log(selectedData[0].sourceLink);

    const modalTemplate = `<div id="modal-box">
    <div id="modal-header">
      <h2>${selectedData[0].title}</h2>
      <button data-action="close" class="close-modal" id="close-modal">&times;</button>
    </div>
    <ul class="popup-lang">
      <li><a href="#">${selectedData[0].languages[0]}</a></li>
      <li><a href="#">${selectedData[0].languages[1]}</a></li>
      <li><a href="#">${selectedData[0].languages[2]}</a></li>
    </ul>
    <div class="popup-details">
      <img class="feature-image" src='${selectedData[0].featuredImage}' alt="Feature Portfolio Image">
      <div class="side-info">
        <p>${selectedData[0].description}</p>
        <div class="out-links">
          <a class="see-live" href=${selectedData[0].liveLink}>See Live<img src="./logos/See-Live.png" alt="live icon"></a>
          <a class="see-source" href=${selectedData[0].sourceLink}>See Source<img src="./logos/See-Source.png" alt="source icon"></a>
        </div>
        </div>
      </div>
      </div>`;

  modalWarpper.innerHTML = modalTemplate;
  };

 function showModal() {
   modalWarpper.classList.add('active');
   removeModal();
};

 function removeModal () {
   const closeButton = modalWarpper.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.lastElementChild;
     closeButton.addEventListener('click', () => {
      modalWarpper.classList.remove('active');
     });
   };