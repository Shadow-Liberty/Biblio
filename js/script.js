$("#menu").click(function() {
    var showMenu = document.getElementById('showMenu');
    if (showMenu != null) {
        $('#showMenu').css('margin-left','0');
        $('#showMenu').attr("id", "hideMenu");
        $('#showSearch').css('margin-left','0');
        $('#showSearch').attr("id", "hideSearch");
    }
    else {
        $('#hideMenu').css('margin-left','-18rem');
        $('#hideMenu').attr("id", "showMenu");
        $('#closeMenu').attr("id", "menu");
        $('#hideSearch').css('margin-left','-18rem');
        $('#hideSearch').attr("id", "showSearch");
    }

});
