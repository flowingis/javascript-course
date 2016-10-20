// toggleClass
(function($){
    
    var InitToggleClass = function() {
        var activators = $("[data-role='classToggle']");
        
        activators.click(function(e){
            e.preventDefault();
            var selector = $(this).attr('data-selector');
            var cssClass = $(this).attr('data-class');
            var altText = $(this).attr('data-alternative');
            $(selector).toggleClass(cssClass);
            if (altText) {
                $(this).attr('data-alternative',$(this).text());
                $(this).text(altText);
            }
        });
        
    };
    
    
    //Init al documentReady
    $(document).ready(InitToggleClass);
} (jQuery));