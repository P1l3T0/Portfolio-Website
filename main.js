hamburgerMenu();
aboutContent();
resize();

function hamburgerMenu() {
    var sideMenu = document.getElementById("side-menu");
    var blurEffect = document.getElementById("blur-overlay");

    document.getElementById("open-menu").addEventListener("click", function () {
        sideMenu.style.right = "0";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'auto';
        setTimeout(() => {
            blurEffect.style.display = 'block';
        }, 1);
    });

    document.getElementById("close-menu").addEventListener("click", function () {
        sideMenu.style.right = "-210px";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'none';
        setTimeout(() => {
            blurEffect.style.display = 'none';
        }, 1);
    });
}

function aboutContent() {
    var titleLinks = document.getElementsByClassName("title-link");
    var titleContents = document.getElementsByClassName("title-content");

    document.getElementById("title-link1").addEventListener("click", function () {
        remvoeInactiveContent();

        document.getElementById("title-link1").classList.add("active-link");
        document.getElementById("education").classList.add("active-content");
    });

    document.getElementById("title-link2").addEventListener("click", function () {
        remvoeInactiveContent();

        document.getElementById("title-link2").classList.add("active-link");
        document.getElementById("skills").classList.add("active-content");
    });

    document.getElementById("title-link3").addEventListener("click", function () {
        remvoeInactiveContent();

        document.getElementById("title-link3").classList.add("active-link");
        document.getElementById("experience").classList.add("active-content");
    });

    function remvoeInactiveContent() {
        for (titleLink of titleLinks)
            titleLink.classList.remove("active-link");

        for (titleContent of titleContents)
            titleContent.classList.remove("active-content");
    }
}

function resize() {
    const chickenWebsite = document.getElementById('chicken-website');
    const paint = document.getElementById('paint');

    if (window.innerWidth < 1000) {
        chickenWebsite.src = './pictures/chicken-website-mobile.webp';
        paint.src = './pictures/paint-mobile.webp';
    } else {
        chickenWebsite.src = './pictures/chicken-website.webp';
        paint.src = './pictures/paint.webp';
    }

    window.addEventListener('resize', resize);
}

// PUSH FOOTER TO BOTTOM
var innerScreenHeight = window.innerHeight;
document.querySelector("#footer").style.top = innerScreenHeight + "px";