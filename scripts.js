var HomeButton = document.getElementById("HomeButton");

if (FilmsButton = document.getElementById("FilmsButton")) {
    var FilmsButton = document.getElementById("FilmsButton");
    var AboutButton = document.getElementById("AboutButton");
    var ContactButton = document.getElementById("ContactButton");
    var VAFButton = document.getElementById("AllFilms");

    HomeButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    FilmsButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById("FeaturedText").offsetTop - (document.getElementById("FeaturedText").offsetHeight / 2),
            behavior: 'smooth'
        });
    })

    AboutButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById("AboutText").offsetTop - (document.getElementById("AboutText").offsetHeight / 2),
            behavior: 'smooth'
        });
    })

    ContactButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.getElementById("ContactText").offsetTop - (document.getElementById("ContactText").offsetHeight / 2),
            behavior: 'smooth'
        });
    })

    VAFButton.addEventListener('click', function() {
        window.location.href = "films.html";
    })
} else {
    HomeButton.addEventListener('click', function() {
        window.location.href = "index.html";
    })
}