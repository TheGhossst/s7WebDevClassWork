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
    "#F8F9FA",
    "#F1F3F5",
    "#FFF5F5",
    "#F8F9FF",
    "#F0FFF4"
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

    let originalContent;

    function transformToMusicPlayer() {
        const flipCard = document.querySelector('.flip-card');
        const flipCardInner = document.querySelector('.flip-card-inner');
        
        if (!flipCard.classList.contains('music-player-mode')) {
            originalContent = flipCardInner.innerHTML;
            
            flipCard.classList.add('music-player-mode');
            flipCardInner.innerHTML = `
                <div class="music-player">
                    <div class="album-cover"></div>
                    <div class="song-info">
                        <div class="song-title">Song Title - Biscotti in the air</div>
                        <div class="artist-name">Artist - Juice WRLD</div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <div class="time-info">
                        <span class="current-time">2:27</span>
                        <span class="total-time">6:34</span>
                    </div>
                </div>
            `;
        } else {
            flipCard.classList.remove('music-player-mode');
            flipCardInner.innerHTML = originalContent;
        }
    }

    document.getElementById('musicBtn').addEventListener('click', function(event) {
        event.preventDefault();
        transformToMusicPlayer();
    });
});