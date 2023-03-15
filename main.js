function changeTabs() {
    var titleLinks = document.getElementsByClassName("title-link");
    var titleContents = document.getElementsByClassName("title-content");

    function openTab() {
        for (titleLink of titleLinks) {
            titleLink.classlist.remove("active-link");
        }

        for(titleContent of titleContents) {
            titleContent.classlist.remove("active-content");
        }
        
    }
}