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
    title: 'Awesome Books',
    description: 'Awesome Books is an app designed to store collection of books kept by the user. It has the functionality to add or remove a book with the Author\'s name....',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/AwesomeBooks.png',
    liveLink: 'https://anyars-encarta.github.io/AwesomeBooks-with-ES6/',
    sourceLink: 'https://github.com/anyars-encarta/AwesomeBooks-with-ES6.git',
  },
  {
    id: 1,
    title: 'To Do List',
    description: 'To Do List is an interactive app designed to keeptrack of your to do list. It has a calender feature to select a date. It also has a feature to edit or delete a task. All tasks added are saved to the local storage of the browser. The purpose of this project is to enable users keep track of their daily routines.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/Personal-To-Do.png',
    liveLink: 'https://anyars-encarta.github.io/Personal-to-Do-App/',
    sourceLink: 'https://github.com/anyars-encarta/Personal-to-Do-App.git',
  },
  {
    id: 2,
    title: 'Quality Improvement Summit',
    description: 'An interactive, educative, informative and project oriented Quality Improvement Summit aimed at educating top management officials, CEOs, Managing Directors and Human Resource Managers on Quality Improvement skills. The purpose of this project and practical oriented summit is to foster in participants a sense of making quality a top priority in their organizations\' corporate policies, visions and missions.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/QI Summit.png',
    liveLink: 'https://anyars-encarta.github.io/First-Capstone/',
    sourceLink: 'https://github.com/anyars-encarta/First-Capstone.git',
  },
  {
    id: 3,
    title: 'To Do List',
    description: 'To Do List is an interactive app designed to keeptrack of your to do list. It has a calender feature to select a date. It also has a feature to edit or delete a task. All tasks added are saved to the local storage of the browser. The purpose of this project is to enable users keep track of their daily routines.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/To-Do-List.png',
    liveLink: 'https://anyars-encarta.github.io/To-do-list/dist/',
    sourceLink: 'https://github.com/anyars-encarta/To-do-list.git',
  },
  {
    id: 4,
    title: 'e-Budget App',
    description: 'e-Budget is a Rails mobile web application project about managing your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    languages: ['Ruby', 'Ruby on Rails', 'JavaScript'],
    featuredImage: './logos/e-Budget.png',
    liveLink: 'https://encarta-e-budget.onrender.com/',
    sourceLink: 'https://github.com/anyars-encarta/Rails-Capstone-Budget.git',
  },
  {
    id: 5,
    title: 'Math Magician',
    description: 'Math Magicianis is an app designed to handle and perform mathematical calculations. It also has a friendly quote generator which refreshes and displays quotes after every 15 seconds using an external API. You have the option from the menu to choose between the About page, the Calculator page or the Quotes page. The app has been designed with a very appealing UI.',
    languages: ['React', 'Redux', 'JavaScript'],
    featuredImage: './logos/math-magician.png',
    liveLink: 'https://anyars-encarta.github.io/math-magician/',
    sourceLink: 'https://github.com/anyars-encarta/math-magician',
  },
  {
    id: 6,
    title: 'Space Travelers\' Hub',
    description: 'Space Travelers\' Hub is a web application for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions.',
    languages: ['React', 'Redux', 'JavaScript'],
    featuredImage: './logos/space-traveller.png',
    liveLink: 'https://anyars-encarta.github.io/react-group-project/',
    sourceLink: 'https://github.com/anyars-encarta/react-group-project.git',
  },
  {
    id: 7,
    title: 'Hotflix Series Review Portal',
    description: 'Hotflix Series Review Portal is an app developed where users could pick their favourite movies, like and add comments to them. This app makes use of two APIs; The movies are fetched from api.tvmaze.com and the added likes and comments are saved to https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps involvement API. On app launch, the movies and their respective likes and comments are fetched from both API respectively.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/series-review.png',
    liveLink: 'https://anyars-encarta.github.io/Series-Review-Portal/dist/',
    sourceLink: 'https://github.com/anyars-encarta/Series-Review-Portal.git',
  },
  {
    id: 8,
    title: 'Leaderboard',
    description: 'Leaderboard is an app built to keep track of Games and their scores. Users have the option to add their own games and their respective scores. Saved games are saved to https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/. On app launch, the system fetches the saved data from the external API. Added scores are also preserved in local storage of the users computer.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/leaderboard.png',
    liveLink: 'https://anyars-encarta.github.io/Leaderboard-List-App/dist/',
    sourceLink: 'https://github.com/anyars-encarta/Leaderboard-List-App.git',
  },
  {
    id: 9,
    title: 'Rick and Morty',
    description: 'This is a fun app developed where users could pick their favourite Rick and Morty characters, like and add comments to them. This app makes use of two APIs; The characters are fetched from https://rickandmortyapi.com/api and the added likes and comments are saved to https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps involvement API. On app launch, the characters and their respective likes and comments are fetched from both API respectively.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    featuredImage: './logos/rick-and-morty.png',
    liveLink: 'https://anyars-encarta.github.io/Rick-and-Morty/dist/',
    sourceLink: 'https://github.com/anyars-encarta/Rick-and-Morty.git',
  },
  {
    id: 10,
    title: 'Book Store',
    description: 'The Book Store app was designed to manage variety of book collections. The user can add books as well as view variety of books available. The user can also view their reading progress of each book. Though that functionality has not been implemented yet, the visual display has been developed to enhance the user interface and for users to understand how the app works. The books added are stored at https://us-central1-bookstore-api-e63c8.cloudfunctions.net api. On the launch of the app, the books are fetched from the API.',
    languages: ['React', 'Redux', 'JavaScript'],
    featuredImage: './logos/book-store.png',
    liveLink: 'https://anyars-encarta.github.io/book-store/',
    sourceLink: 'https://github.com/anyars-encarta/book-store.git',
  },
];

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
        <li><button class="see-btn fourth-list see-proj-1 load-modal" data-id="0" id="see-project-1">See Project</button></li>
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
// Add data to the moda
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
          <a class="see-live" href=${selectedData[0].liveLink} target="_blank">See Live<img src="./logos/See-live.png" alt="live icon"></a>
          <a class="see-source" href=${selectedData[0].sourceLink} target="_blank">See Source<img src="./logos/See-source.png" alt="source icon"></a>
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
