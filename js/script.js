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
$('.pillowSlide').click(function(){
    $('html, body').animate({
        scrollTop: $("#pillow").offset().top - $('.navbar').outerHeight() + "px"
    }, 1000);
});
$('.cushionSlide').click(function(){
    $('html, body').animate({
        scrollTop: $("#cushion").offset().top - $('.navbar').outerHeight() + "px"
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
$('.slip_spec_8').click(()=>{
    displayModal('.slip_spec_8');
});
$('.pillow_1').click(()=>{
    displayModal('.pillow_1');
});
$('.pillow_2').click(()=>{
    displayModal('.pillow_2');
});
$('.pillow_3').click(()=>{
    displayModal('.pillow_3');
});
$('.pillow_4').click(()=>{
    displayModal('.pillow_4');
});
$('.pillow_5').click(()=>{
    displayModal('.pillow_5');
});
$('.pillow_6').click(()=>{
    displayModal('.pillow_6');
});
$('.pillow_7').click(()=>{
    displayModal('.pillow_7');
});
$('.pillow_8').click(()=>{
    displayModal('.pillow_8');
});
$('.pillow_9').click(()=>{
    displayModal('.pillow_9');
});
$('.cushion_1').click(()=>{
    displayModal('.cushion_1');
});
$('.cushion_2').click(()=>{
    displayModal('.cushion_2');
});
$('.cushion_3').click(()=>{
    displayModal('.cushion_3');
});
$('.cushion_4').click(()=>{
    displayModal('.cushion_4');
});
$('.cushion_5').click(()=>{
    displayModal('.cushion_5');
});
$('.cushion_6').click(()=>{
    displayModal('.cushion_6');
});
$('.cushion_7').click(()=>{
    displayModal('.cushion_7');
});
$('.project_1').click(()=>{
    displayModal('.project_1');
});
$('.project_2').click(()=>{
    displayModal('.project_2');
    $('.modal-footer').append("<p>Clutch purse made from mom's wedding gown.</p>");
});
$('.project_3').click(()=>{
    displayModal('.project_3');
    $('.modal-footer').append("<p>Clutch purse made from mom's wedding gown.</p>");
});
$('.project_4').click(()=>{
    displayModal('.project_4');
});
$('.project_5').click(()=>{
    displayModal('.project_5');
    $('.modal-footer').append("<p>Wrapped rope coasters.</p>");
});
$('.project_6').click(()=>{
    displayModal('.project_6');
    $('.modal-footer').append("<p>Use leftover pillow fabric to make placemats!</p>");
});
$('.project_7').click(()=>{
    displayModal('.project_7');
    $('.modal-footer').append("<p>Memory quilt for a brother lost too soon.</p>");
});
$('.project_8').click(()=>{
    displayModal('.project_8');
    $('.modal-footer').append("<p>A granddaughter's first 18 years.</p>");
});
$('.project_9').click(()=>{
    displayModal('.project_9');
    $('.modal-footer').append("<p>Cute wall hanging.</p>");
});
$('.project_10').click(()=>{
    displayModal('.project_10');
});
$('.project_11').click(()=>{
    displayModal('.project_11');
    $('.modal-footer').append("<p>Silk shirt converted into pillow.</p>");
});
$('.project_12').click(()=>{
    displayModal('.project_12');
    $('.modal-footer').append("<p>Grandfather's shirt converted into pillow with favorite saying embroided on it.</p>");
});
$('.project_13').click(()=>{
    displayModal('.project_13');
    $('.modal-footer').append("<p>Otto</p>");
});
$('.project_14').click(()=>{
    displayModal('.project_14');
    $('.modal-footer').append("<p>Winston</p>");
});
$('.project_15').click(()=>{
    displayModal('.project_15');
    $('.modal-footer').append("<p>Max</p>");
});
$('.project_16').click(()=>{
    displayModal('.project_16');
    $('.modal-footer').append("<p>Dog/Cat collars.</p>");
});
$('.project_17').click(()=>{
    displayModal('.project_17');
    $('.modal-footer').append("<p>Christmas ornaments.</p>");
});
$('.embrdry_1').click(()=>{
    displayModal('.embrdry_1');
});
$('.embrdry_2').click(()=>{
    displayModal('.embrdry_2');
});
$('.embrdry_3').click(()=>{
    displayModal('.embrdry_3');
});
$('.embrdry_4').click(()=>{
    displayModal('.embrdry_4');
});
$('.embrdry_5').click(()=>{
    displayModal('.embrdry_5');
});
$('.embrdry_6').click(()=>{
    displayModal('.embrdry_6');
});
$('.embrdry_7').click(()=>{
    displayModal('.embrdry_7');
});
$('.embrdry_8').click(()=>{
    displayModal('.embrdry_8');
});
$('.embrdry_9').click(()=>{
    displayModal('.embrdry_9');
});
$('.embrdry_10').click(()=>{
    displayModal('.embrdry_10');
});
$('.embrdry_11').click(()=>{
    displayModal('.embrdry_11');
});


function displayModal(element) {
    $('.modal-body').empty();
    $('.modal-footer').empty();
    $('.modal-body').append(`<img src='${$(element).attr('src')}' style='width:100%;'>`);
    $('.modal-body').append('<button type="button" class="close modalX" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>');
}