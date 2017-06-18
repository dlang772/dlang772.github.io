$(function() {    
    $("#section10").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#thank-you").offset().top - 50)}, 500);
        return false;
    });
     $("#thank-you").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#section10").offset().top - 50)}, 500);
        return false;
    });

});