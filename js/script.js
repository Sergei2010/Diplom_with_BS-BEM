$(function () {

    $('.examples__slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.arrows'),
        prevArrow: '<button id="prev" type="button" class="btn arrows"><img id="prev-img"' +
            ' src="./img/arrow-left.png" alt="arrow-left"></button>',
        nextArrow: '<button id="next" type="button" class="btn arrows"><img id="next-img"' +
            ' src="./img/arrow-right.png" alt="arrow-right"></button>',
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    /* change arrows next and prev with mouseover and mouseout */
    $('#next').on('mouseover', function () {
        $('#next-img').attr('src', './img/arrow-right-active.png');
    })
    .on('mouseout', function () {
        $('#next-img').attr('src', './img/arrow-right.png');
    });

    $('#prev').on('mouseover', function () {
        $('#prev-img').attr('src', './img/arrow-left-active.png');
    })
    .on('mouseout', function () {
        $('#prev-img').attr('src', './img/arrow-left.png');
    });

    /* меняем цвет картинок svg */
    $('img.price__img').each(function(){
        let $img = $(this);
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            let $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

   /* гамбургер */
    $('.menu-bar__div-empty').css('display', 'block');

    $('.menu-bar__button').on('click', function () {
        $('.menu-bar__list').slideToggle(700);
    });

    $('.menu-bar__list').hide().on('mouseleave', function () {
        $(this).hide();
        $('.menu-bar__div-empty').toggle();
    });


});

