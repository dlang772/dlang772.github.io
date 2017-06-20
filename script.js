$(function() {    
    $("#more-button").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#thank-you-button").offset().top - 50)}, 500);
        return false;
    });
    $("#thank-you-button").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#section10").offset().top - 50)}, 500);
        return false;
    });

    // Function to make "About" scroll down if eventually I change the layout
    // ##############################
    //  $("#navbar-about").click(function() {
    //     $('html, body').animate({ 
    //     	scrollTop: ($("#thanks").offset().top - 50)}, 500);
    //     return false;
    // });
});






