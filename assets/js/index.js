$(document).ready(() => {
    console.log("ready");

    $(".View-Cart").click(() => {
        $(".cart-modal-container").css("display", "block");
    });

    $(".about-open").click(() => {
        console.log("clicked");
        $(".about-modal-container").css("display", "block");
    });

    $(".contact-open").click(() => {
        console.log("clicked");
        $(".contact-modal-container").css("display", "block");
    });

    $(".returns-open").click(() => {
        console.log("clicked");
        $(".returns-modal-container").css("display", "block");
    });

    $(".shipping-open").click(() => {
        console.log("clicked");
        $(".shipping-modal-container").css("display", "block");
    });

    $(".disclaimer-open").click(() => {
        console.log("clicked");
        $(".disclaimer-modal-container").css("display", "block");
    });


    $(".closer").click(()=> {
        $(".cart-modal-container").css("display", "none");
        $(".about-modal-container").css("display", "none");
        $(".contact-modal-container").css("display", "none");
        $(".returns-modal-container").css("display", "none");
        $(".shipping-modal-container").css("display", "none");
        $(".disclaimer-modal-container").css("display", "none"); 
    });
});