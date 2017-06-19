$(function() {    
    $("#section10").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#thanks").offset().top - 50)}, 500);
        return false;
    });
     $("#thanks").click(function() {
        $('html, body').animate({ 
        	scrollTop: ($("#section10").offset().top - 50)}, 500);
        return false;
    });

});