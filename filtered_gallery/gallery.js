$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        
        if(value === "All"){   // or "all" if you change HTML
            $('.itemBox').show(1000);
        } else {
            $('.itemBox').not('.'+value).hide(1000);
            $('.itemBox').filter('.'+value).show(1000);
        }
        
        // highlight active filter
        $(this).addClass('active').siblings().removeClass('active');
    });
});