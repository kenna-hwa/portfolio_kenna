
$(function(){
    $(".sub, .gnb_sub_box, .gnb_signin_join_wrap, .menu").css('display','none');
    //gnb

    $(".gnb_more, .sub, .gnb_sub_box, .gnb_signin_join_wrap, .menu").mouseenter(function () {
        $(".sub, .gnb_sub_box, .gnb_signin_join_wrap, .menu").stop().slideDown('1200');
    });

    $(".sub, .gnb_sub_box, .gnb_signin_join_wrap, .menu").mouseleave(function () {
        $(".sub, .gnb_sub_box, .gnb_signin_join_wrap, .menu").stop().slideUp("1300");
    });
    


});
