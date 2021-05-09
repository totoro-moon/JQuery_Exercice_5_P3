$('input').focusin(function () {
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:    // flèche gauche
                $(".colorDiv").finish().animate({
                    left: "-=10"
                });
                break;
            case 38:    // flèche haut
                $(".colorDiv").finish().animate({
                    top: "-=10"
                });
                break;
            case 39:    // flèche droite
                $(".colorDiv").finish().animate({
                    left: "+=10"
                });
                break;
            case 40:    // flèche du bas
                $(".colorDiv").finish().animate({
                    top: "+=10"
                });
                break;
        }
    });
});

