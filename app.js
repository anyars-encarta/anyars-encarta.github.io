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
    document.getElementById('email-address').style.color = 'blue';
    errorElement.innerText = 'Please use Lowercase';
  } else {
    document.getElementById('email-address').style.color = 'grey';
    errorElement.innerText = '';
  }

  // JS for preserve data in the browsererve Data
  const userInput = {
    storeName: name.value,
    storeEmail: email.value,
    storeMessage: message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));

  // window.onload = function () {
  //   const data = JSON.parse(localStorage.getItem('userInput'));
  //   if (data) {
  //     name.value =atus data.storeName;
  //     email.value = data.storeEmail;
  //     message.value = data.storeMessage;
  //   }
  // };
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
