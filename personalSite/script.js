document.querySelector('.nav-bar-item a[href="turn"]').addEventListener('click', function(event) {
    event.preventDefault();
    flipCard('about');
});

document.getElementById('bucketListBtn').addEventListener('click', function(event) {
    event.preventDefault();
    flipCard('bucketList');
});

function flipCard(content) {
    const flipCard = document.querySelector('.flip-card');
    const aboutMeContainer = document.querySelector('.about-me-container');
    const bucketListContainer = document.querySelector('.bucket-list-container');

    if (content === 'about') {
        if (aboutMeContainer.style.display === 'block') {
            flipCard.classList.remove('flipped');
            aboutMeContainer.style.display = 'none';
        } else {
            flipCard.classList.add('flipped');
            aboutMeContainer.style.display = 'block';
            bucketListContainer.style.display = 'none';
        }
    } else if (content === 'bucketList') {
        if (bucketListContainer.style.display === 'block') {
            flipCard.classList.remove('flipped');
            bucketListContainer.style.display = 'none';
        } else {
            flipCard.classList.add('flipped');
            bucketListContainer.style.display = 'block';
            aboutMeContainer.style.display = 'none';
        }
    }
}

function confirmLeaving() {
    return confirm("You are leaving the page to view the resume. Do you want to proceed?");
}

const colors = [
    "#FDBB2D",
    "#3A1C71",
    "#00d2ff",
    "#3a47d5",
]

document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-bar-list');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const profileImage = document.querySelector('.profile-image');
    const body = document.body;
    const originalBackgroundColor = getComputedStyle(body).backgroundColor;

    profileImage.addEventListener('mouseenter', () => {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; 
    });

    profileImage.addEventListener('mouseleave', () => {
        body.style.backgroundColor = originalBackgroundColor; 
    });
});