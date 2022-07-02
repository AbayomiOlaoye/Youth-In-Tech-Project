// INFORMATION ABOUT SPEAKERS STORED AS OBJECTS - JASON
const featureSpeaker = [
  {
    profilePic: "./images/speakers/santa.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  },
  {
    profilePic: "./images/speakers/speaker2.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  },
  {
    profilePic: "./images/speakers/speaker3.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  },
  {
    profilePic: "./images/speakers/speaker4.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  },
  {
    profilePic: "./images/speakers/speaker5.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  },
  {
    profilePic: "./images/speakers/speaker6.png",
    guestName: "Prescot Daniel",
    profileInfo: "Senior Full Stack Developer at Kinfork Inc",
    shortBio: "Prescot is famed for his beastly proficiency in C#, Java Python, AS.Net, etc"
  }
]
      

const seeMore = document.getElementById('see-more');
const button = document.getElementById('more');

button.addEventListener('click', () => {
  if (seeMore.style.display === 'none') {
    seeMore.style.display === 'block';
    button.textContent = 'see less';
  } else {
    seeMore.style.display === 'none';
    button.textContent = 'see more';
  }
})