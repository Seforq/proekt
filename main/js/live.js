$(function() {
    $(".selectlink-control").click(function(){
        let $menu_popup = $(this).next();
        $menu_popup.slideToggle(300, function(){
            $('.selectlink ul').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.selectlink').length){
            $('body').removeClass('body_pointer');
            $('.selectlink ul').slideUp(300);
        }
    });
});