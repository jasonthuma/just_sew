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
<<<<<<< HEAD
=======
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
$('#slip1').click(()=>{
    $('.modal-body').empty();
    $('.modal-body').append(`<img src='${$('#slip1').attr('src')}' style='width:100%;'>`);
});
>>>>>>> main
