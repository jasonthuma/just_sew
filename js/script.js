//Clickable Regions
$('.changeSlip').click(()=>{
    window.location.href = 'slipcvr.html';
});
$('.changePillow').click(()=>{
    window.location.href = 'pillows.html';
});
$('.changeEmbroidery').click(()=>{
    window.location.href = 'embrdry.html';
});
$('.changeProject').click(()=>{
    window.location.href = 'projects.html';
});
$('.changeFabric').click(()=>{
    window.location.href = 'sales.html';
});
$('#logo').click(()=>{
    window.location.href = 'index.html';
});
//Animations to slide to location on page
$(".armSlide").click(function() {
    $('html, body').animate({
        scrollTop: $("#arm").offset().top - $('.navbar').outerHeight() + "px"
    }, 1000);
});
$('.chaiseSlide').click(function(){
    $('html, body').animate({
        scrollTop: $("#chaise").offset().top - $('.navbar').outerHeight() + "px"
    }, 1000);
});
$('.loveSlide').click(function(){
    $('html, body').animate({
        scrollTop: $("#love").offset().top - $('.navbar').outerHeight() + "px"
    }, 1000);
});
$('.otherSlide').click(function(){
    $('html, body').animate({
        scrollTop: $("#other").offset().top - $('.navbar').outerHeight() + "px"
    }, 1000);
});
//modal pop-up for images
$('.slip_chair_1').click(()=>{
    displayModal('.slip_chair_1');
});
$('.slip_chair_2').click(()=>{
    displayModal('.slip_chair_2');
});
$('.slip_chair_3').click(()=>{
    displayModal('.slip_chair_3');
});
$('.slip_chair_4').click(()=>{
    displayModal('.slip_chair_4');
});
$('.slip_chair_5').click(()=>{
    displayModal('.slip_chair_5');
});
$('.slip_chair_6').click(()=>{
    displayModal('.slip_chair_6');
});
$('.slip_chair_7').click(()=>{
    displayModal('.slip_chair_7');
});
$('.slip_chair_8').click(()=>{
    displayModal('.slip_chair_8');
});
$('.slip_chair_9').click(()=>{
    displayModal('.slip_chair_9');
});
$('.slip_chair_10').click(()=>{
    displayModal('.slip_chair_10');
});
$('.slip_chair_11').click(()=>{
    displayModal('.slip_chair_11');
});
$('.slip_chair_12').click(()=>{
    displayModal('.slip_chair_12');
});
$('.slip_chaise_1').click(()=>{
    displayModal('.slip_chaise_1');
});
$('.slip_chaise_2').click(()=>{
    displayModal('.slip_chaise_2');
});
$('.slip_chaise_3').click(()=>{
    displayModal('.slip_chaise_3');
});
$('.slip_love_1').click(()=>{
    displayModal('.slip_love_1');
});
$('.slip_love_2').click(()=>{
    displayModal('.slip_love_2');
});
$('.slip_love_3').click(()=>{
    displayModal('.slip_love_3');
});
$('.slip_love_4').click(()=>{
    displayModal('.slip_love_4');
});
$('.slip_spec_1').click(()=>{
    displayModal('.slip_spec_1');
});
$('.slip_spec_2').click(()=>{
    displayModal('.slip_spec_2');
});
$('.slip_spec_3').click(()=>{
    displayModal('.slip_spec_3');
});
$('.slip_spec_4').click(()=>{
    displayModal('.slip_spec_4');
});
$('.slip_spec_5').click(()=>{
    displayModal('.slip_spec_5');
});
$('.slip_spec_6').click(()=>{
    displayModal('.slip_spec_6');
});
$('.slip_spec_7').click(()=>{
    displayModal('.slip_spec_7');
});

function displayModal(element) {
    $('.modal-body').empty();
    $('.modal-body').append(`<img src='${$(element).attr('src')}' style='width:100%;'>`);
    $('.modal-body').append('<button type="button" class="close modalX" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>');
}