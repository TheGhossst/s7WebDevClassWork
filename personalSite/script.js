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
        flipCard.classList.add('flipped');
        aboutMeContainer.style.display = 'none';
        bucketListContainer.style.display = 'block';
    }
}

function confirmLeaving() {
    return confirm("You are leaving the page to view the resume. Do you want to proceed?");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-bar-list');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});