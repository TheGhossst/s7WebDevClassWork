document.querySelector('.nav-bar-item a[href=".profile"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.flip-card').classList.toggle('flipped');
});