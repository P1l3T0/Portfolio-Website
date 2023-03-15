    var titleLinks = document.getElementsByClassName("title-link");
    var titleContents = document.getElementsByClassName("title-content");
        
    function openTab(tabname) {
        for (titleLink of titleLinks) 
            titleLink.classList.remove("active-link");

        for(titleContent of titleContents) 
            titleContent.classList.remove("active-content");
        
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-content");
    }    
