var app = document.querySelector('.typewritter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('UI/UX Designer')
    .deleteAll()
    .typeString('Web Developer')
    .pauseFor(2000)
    .start();