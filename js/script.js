$(document).ready(function () {
    $("#btn_structure").click(function () {
        $(".reviews__item").addClass("reviews__static");
        $("#btn_structure").addClass("reviews__hidden");
        $("#reviews-structure").addClass("reviews__visible");
        return false;
    });
    var modal = document.querySelector('.modal');
    $('#loginModal').click(function () {
        $(modal).show();
    });
    $('.modal__close, .modal__btn').click(function (e) {
        e.preventDefault();
        $(modal).fadeOut();
        $(this).attr('href', '.modal__form');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
    });
    $('#faq-one .faq__header').click(function () {
        $('#faq-one .faq__btn').toggleClass('faq__btn_close');
        $('#faq-one .faq__body').toggleClass('faq__body_display');
    });
    $('#faq-two .faq__header').click(function () {
        $('#faq-two .faq__btn').toggleClass('faq__btn_close');
        $('#faq-two .faq__body').toggleClass('faq__body_display');
    });
    $('#faq-three .faq__header').click(function () {
        $('#faq-three .faq__btn').toggleClass('faq__btn_close');
        $('#faq-three .faq__body').toggleClass('faq__body_display');
    });
    $('#faq-four .faq__header').click(function () {
        $('#faq-four .faq__btn').toggleClass('faq__btn_close');
        $('#faq-four .faq__body').toggleClass('faq__body_display');
    });
});
