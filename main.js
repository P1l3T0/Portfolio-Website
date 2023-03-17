

{
    var titleLinks = document.getElementsByClassName("title-link");
    var titleContents = document.getElementsByClassName("title-content");

    function openTab(tabname) {
        for (titleLink of titleLinks)
            titleLink.classList.remove("active-link");

        for (titleContent of titleContents)
            titleContent.classList.remove("active-content");

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-content");
    }
}

{
    var sideMenu = document.getElementById("side-menu");

    function openMenu() {
        sideMenu.style.right = "0";
        sideMenu.style.transition = "500ms ease";
    }

    function closeMenu() {
        sideMenu.style.right = "-210px";
        sideMenu.style.transition = "500ms ease";
    }
}

{
    const chickenWebsite = document.getElementById('chicken-website');
    const paint = document.getElementById('paint');

    function changeImageSrc() {
        if (window.innerWidth < 620) {
            chickenWebsite.src = '../pictures/chicken-website-mobile.webp';
            paint.src = '../pictures/paint-mobile.webp';
        } else {
            chickenWebsite.src = '../pictures/chicken-website.webp';
            paint.src = '../pictures/paint.webp';

        }
    }

    window.addEventListener('resize', changeImageSrc);

}
