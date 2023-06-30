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
  { id: 0,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
  },
  { id: 1,
    title: 'No Data',
    description: 'No Data',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
  },
{
  id: 3,
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 4,
  title: 'Website Portfolio',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 5,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 6,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 7,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 8,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 9,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 10,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Img Placeholder 1.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 11,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/Popup-Portfolio-Big.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
  id: 12,
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
  languages: ['HTML', 'CSS', 'JavaScript'],
  featuredImage: './logos/My-Recent-Works.png',
  liveLink: 'https://anyars-encarta.github.io/',
  sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
},
{
 id: 13,
 title: 'Website Portfolio',
 description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
 languages: ['HTML', 'CSS', 'JavaScript'],
 featuredImage: './logos/Popup-Portfolio-Big.png',
 liveLink: 'https://anyars-encarta.github.io/',
 sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io'
}];

// Add to contents to main page
// add the Cards HTML to main page
  const firstBody = document.querySelector('.extra');
  const firstSection = document.createElement('section');
  firstSection.className = 'project-cards';
  firstSection.innerHTML = `<article class="works-centered">
  <div class="main-works">
    <img src='${data[0].featuredImage}' alt="My Recent Works">
    <div class="main-works-1">
      <h2 class="multi-stories">${data[0].title}</h2>
      <p>${data[0].description}</p>
    </div>
  </div>

  <div class="main-works">
    <ul class="project-list">
      <li><a class="start-list" href="#">${data[0].languages[0]}</a></li>
      <li><a class="second-list" href="#">${data[0].languages[1]}</a></li>
      <li><a class="third-list" href="#">${data[0].languages[2]}</a></li>
      <li><button class="fourth-list see-proj-1" class="see-btn" data-id="0" id="see-project-1">See Project</button></li>
    </ul>
  </div>
</article>

<div class="print-container">
<article class="print-data data-0">
<h3 id="print-1">${data[1].title}</h3>
    <p>${data[1].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" id="print-html" href="#">${data[1].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[1].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[1].languages[2]}</a></li>
    </ul>
  <button class="see-btn" data-id="1" id="print-html">See Project</button>
</article>
  
<article class="print-data data-0-1">
    <h3 id="print-1">${data[2].title}</h3>
    <p>${data[2].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" id="print-html" href="#">${data[2].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[2].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[2].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="2">See Project</button>
</article>
  
<article class="print-data data-0-2">
    <h3>${data[3].title}</h3>
    <p>${data[3].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[3].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[3].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[3].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="3">See Project</button>
</article>

<article class="print-data data-1">
    <h3>${data[4].title}</h3>
    <p>${data[4].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[4].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[4].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[4].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="4">See Project</button>
</article>

<article class="print-data  data-2">
    <h3>${data[5].title}</h3>
    <p>${data[5].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[5].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[5].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[5].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="5">See Project</button>
</article>
  
<article class="print-data  data-3">
    <h3>${data[6].title}</h3>
    <p>${data[6].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[6].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[6].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[6].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="6">See Project</button>
</article>

<article class="print-data  data-4">
    <h3>${data[7].title}</h3>
    <p>${data[7].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[7].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[7].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[7].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="7">See Project</button>
</article>
  
<article class="print-data  data-6">
    <h3>${data[8].title}</h3>
    <p>${data[8].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[8].languages[1]}</a></li>
      <li><a class="second-list-x" href="#">${data[8].languages[2]}</a></li>
      <li><a class="third-list-x" href="#">${data[8].languages[3]}</a></li>
    </ul>
    <button class="see-btn" data-id="8">See Project</button>
</article>

<article class="print-data  data-5">
    <h3>${data[9].title}</h3>
    <p>${data[9].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[9].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[9].languages[2]}</a></li>
      <li><a class="third-list-x" href="#">${data[9].languages[3]}</a></li>
    </ul>
    <button class="see-btn" data-id="9">See Project</button>
</article>

<article class="print-data data-0-3">
    <h3>${data[10].title}</h3>
    <p>${data[10].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[10].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[10].languages[1]}</a></li>
      <li><a class="third-list-x" href="#">${data[10].languages[2]}</a></li>
    </ul>
    <button class="see-btn" data-id="10">See Project</button>
</article>
  
<article class="print-data data-0-4">
    <h3>${data[11].title}</h3>
    <p>${data[11].description}</p>
    <ul class="list-x">
      <li><a class="start-list-x" href="#">${data[11].languages[0]}</a></li>
      <li><a class="second-list-x" href="#">${data[11].languages[2]}</a></li>
      <li><a class="third-list-x" href="#">${data[11].languages[3]}</a></li>
    </ul>
    <button class="see-btn" data-id="11">See Project</button>
</article>`;

firstBody.append(firstSection);
// End first Card Here

const popupWin = document.body;
const cards = document.querySelector('.project-cards');
const modalWarpper = document.querySelector('#modal-wrapper');
const modalBox = document.querySelector('#modal-box');
const masterWarpper = document.querySelector('#modal-wrapper');

  cards.addEventListener('click', (e) => {
    if(e.target.classList.contains('see-btn')) {
      const dataId = e.target.dataset.id;
      console.log('clicked', dataId)
      addToModal(dataId);
      showModal();
    }
  });

  function addToModal (dataId) {
    const selectedData = data.filter(x => x.id === +dataId);
    
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