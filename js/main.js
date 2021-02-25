$(function(){
    console.log('hello world');

    var speed = 500;
    var autoswitch = true;
    var autospeed = 5000;

    $('.slide').first().addClass('active');

    $('.slide').hide();

    $('.active').show();

    $('#next').on('click', nextslide);
    $('#prev').on('click', prevslide);

    if(autoswitch == true){
        setInterval(nextslide, autospeed);
    }
    function nextslide(){
        $('.active').removeClass('active').addClass('oldactive');

        if($('.oldactive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldactive').next().addClass('active');
        }
        $('.oldactive').removeClass('oldactive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };
    function prevslide(){
        $('.active').removeClass('active').addClass('oldactive');

        if($('.oldactive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldactive').prev().addClass('active');
        }
        $('.oldactive').removeClass('oldactive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };
});