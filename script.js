// INFORMATION ABOUT SPEAKERS STORED AS OBJECTS - JASON
const featureSpeaker = [
  {
    profilePic: './images/speakers/santa.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
  {
    profilePic: './images/speakers/speaker2.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
  {
    profilePic: './images/speakers/speaker3.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
  {
    profilePic: './images/speakers/speaker4.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
  {
    profilePic: './images/speakers/spaker5.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
  {
    profilePic: './images/speakers/speaker6.png',
    guestName: 'Prescot Daniel',
    profileInfo: 'Senior Full Stack Developer at Kinfork Inc',
    shortBio: 'Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc',
  },
];
  // Grabing feature container to initiate other cards
document.addEventListener('DOMContentLoaded', () => {
  // Helper function to meetSpeaker to loop through and return new arrays:
  function meetSpeakers(speaker) {
    return `
      <div class="speaker">
        <img src="${speaker.profilePic}" alt="image of the first speaker">
        <div class="meet-speaker">
          <h1 class="intro white">${speaker.guestName}</h1>
          <span class="info"><em>${speaker.profileInfo}</em></span>
          <hr class="line">
          <p class="abt-speaker">${speaker.shortBio}</p>
        </div>
      </div>
     `;
  }

  document.querySelector('.featured-container').innerHTML = `
${featureSpeaker.map(meetSpeakers).join('')}`;
});

// Menu control Logic
const openMenuBtn = document.querySelector('.menu');
const exitBtn = document.querySelector('.exit');
const navBar = document.querySelector('.navbar');
const links = document.querySelectorAll('nav a');

openMenuBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
});

exitBtn.addEventListener('click', () => {
  navBar.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.style.display = 'none';
  });
});
