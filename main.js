// https://fontawesome.com/v5/icons/500px?s=brands
var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "500px";
        }
        else{
            MenuItems.style.maxHeight = "0px";
        }

    }

