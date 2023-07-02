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
const message = document.getElementById('write-message');
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
    email.style.color = 'blue';
    errorElement.innerText = 'Please use Lowercase';
  } else {
    email.style.color = 'grey';
    errorElement.innerText = '';
  }

  // JS for preserve data in the browsererve Data
  const userInput = {
    storeName: name.value,
    storeEmail: email.value,
    storeMessage: message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
});

// Popup Form
const data = [
  {
    id: 0,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/My-Recent-Works.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 2,
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 2.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 3,
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 3.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 8,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 9,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 10,
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 1.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 11,
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 2.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  },
  {
    id: 12,
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas nemo sequi eius beatae magni recusandae, obcaecati numquam nihil ipsam voluptatum nam vero...',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Img Placeholder 3.png',
    liveLink: 'https://anyars-encarta.github.io/',
    sourceLink: 'https://github.com/anyars-encarta/anyars-encarta.github.io',
  }];

function sliceText(text) {
  const maxLength = 200;
  if (text.length < maxLength) {
    return text;
  }
  return text.slice(0, text.length - maxLength);
}
const cards = document.querySelector('.extra');
const modalWarpper = document.querySelector('#modal-wrapper');

function addCardsToUI() {
  const extraContainer = document.querySelector('.extra');

  const fullWidthCardDisplay = `<article class="works-centered container">
    <div class="main-works">
      <img src='${data[0].featuredImage}' alt="My Recent Works">
      <div class="main-works-1">
        <h2 class="multi-stories">${data[0].title}</h2>
        <p>${sliceText(data[0].description)}...</p>
      </div>
    </div>
<div class="main-works">
      <ul class="project-list">
        <li><a class="start-list" href="#">${data[0].languages[0]}</a></li>
        <li><a class="second-list" href="#">${data[0].languages[1]}</a></li>
        <li><a class="third-list" href="#">${data[0].languages[2]}</a></li>
        <li><button class="see-btn fourth-list see-proj-1 load-modal" data-id="1" id="see-project-1">See Project</button></li>
      </ul>
    </div>
  </article>`;

  extraContainer.innerHTML = `
<div class="works-centered">${fullWidthCardDisplay}</div>
<div class="print-container container">
${data.map((item) => (`<article style=" background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .9)), url('${item.featuredImage}') center/cover no-repeat;" class="card">
<div class="card-details">
  <h4 class="card-title">${item.title}</h4>
  <p class="card-description">${sliceText(item.description)}...</p>
<div class="card-tags">
    <span>${item.languages[0]}</span>
    <span>${item.languages[1]}</span>
    <span>${item.languages[2]}</span>
  </div>
</div>
<button class="card-btn see-btn" data-id="${item.id}">See Project</button>
</article>`)).join(' ')}
</div>`;
}
document.addEventListener('DOMContentLoaded', addCardsToUI);

function addToModal(dataId) {
  const selectedData = data.filter((x) => x.id === +dataId);

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
          <a class="see-live" href=${selectedData[0].liveLink}>See Live<img src="./logos/See-live.png" alt="live icon"></a>
          <a class="see-source" href=${selectedData[0].sourceLink}>See Source<img src="./logos/See-source.png" alt="source icon"></a>
        </div>
        </div>
      </div>
      </div>`;

  modalWarpper.innerHTML = modalTemplate;
}
function removeModal() {
  const parent = modalWarpper.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
  const closeButton = parent.firstElementChild.firstElementChild.lastElementChild;
  closeButton.addEventListener('click', () => {
    modalWarpper.classList.remove('active');
  });
}
function showModal() {
  modalWarpper.classList.add('active');
  removeModal();
}
cards.addEventListener('click', (e) => {
  if (e.target.classList.contains('see-btn')) {
    const dataId = e.target.dataset.id;
    addToModal(dataId);
    showModal();
  }
});
