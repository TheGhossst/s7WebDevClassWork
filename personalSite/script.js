document.querySelector('.nav-bar-item a[href="turn"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.flip-card').classList.toggle('flipped');
});

function confirmLeaving() {
    return confirm("You are leaving the page to view the resume. Do you want to proceed?");
  }