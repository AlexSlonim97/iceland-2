
let submit = $('.form-btn');
let phone = $('#phone');
let peopleSquare = $('.people-square');


// ----------------------------------выбор к-ва человек----------------------------------------------------------------

let parent = document.querySelector('div.people-squares');
let menuItem = parent.querySelectorAll('div.people-square');
let count = null;

parent.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('people-square')) {
        for(let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('active');
        }
        target.classList.add('active');
        count = target.innerHTML;
        console.log(count)
    }
});




// ----------------------------------валидация полей формы, отправка ajax----------------------------------------------------------------

submit.click(function () {
    let name = $('#name');
    let hasError = false;
    let inputRed = $('.input');
    inputRed.css('border-color', 'rgb(255, 255, 255)');

    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
    }
    if (count == null) {
        peopleSquare.next().show();
        peopleSquare.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {

        $.ajax({
            method: "POST",
            url: " https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val(), peopleSquare: count}
        })
            .done(function( msg ) {
                if ( msg.success === 1) {
                    $('#successful').css('display', 'block');
                    $('#form').trigger('reset');
                    for(let i = 0; i < menuItem.length; i++) {
                        menuItem[i].classList.remove('active')
                    }
                    count == null
                } else {
                    alert("Попробуйте еще раз");
                }
                console.log(msg);
            });
    }
});



// ----------------------------------закрытие popup----------------------------------------------------------------

$('#popup-btn').click(function() {
    $('#successful').slideUp();
});


$('.popup-close').click(function() {
    $('#successful').slideUp();
});





// ----------------------------------видеоплеер - youtube----------------------------------------------------------------

$('.player-play').click(function(event) {
    event.preventDefault();
    this.style.display = 'none';
    $('div.youtube').css('display', 'block');
    $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?;autoplay=1&;controls=0&;showinfo=0');
});



// ----------------------------------slick----------------------------------------------------------------

$('.program-tour').slick();
$('.reviews-slider').slick();


$('.single-item').slick({
    dots: true,
});



// ---------------------------------- WOW ----------------------------------------------------------------


new WOW({
    animateClass: 'animate__animated'
}).init();



// ----------------------------------magnificPopup галлерея----------------------------------------------------------------

$('.gall').magnificPopup({
    items: [
        {
            src: '../images/gallery/1.png',
            type: 'image',
        },
        {
            src: '../images/gallery/2.png',
            type: 'image'
        },
        {
            src: '../images/gallery/3.png',
            type: 'image'
        },
        {
            src: '../images/gallery/4.png',
            type: 'image'
        },
        {
            src: '../images/gallery/5.png',
            type: 'image'
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image'
});

$('.gall-2').magnificPopup({
    items: [
        {
            src: '../images/gallery/6.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/7.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/8.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/9.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/10.jpeg',
            type: 'image'
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image'
});

$('.gall-3').magnificPopup({
    items: [
        {
            src: '../images/gallery/11.png',
            type: 'image'
        },
        {
            src: '../images/gallery/12.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/13.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/14.jpeg',
            type: 'image'
        },
        {
            src: '../images/gallery/15.jpeg',
            type: 'image'
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image'
});



// ---------------------------------- бургер-меню ----------------------------------------------------------------

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})



// ---------------------------------- скроллы ----------------------------------------------------------------

$("#iceland").click(function() {
    $('html, body').animate({
        scrollTop: $("#iceland-2").offset().top
    }, 800);
});

$("#program-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#program").offset().top
    }, 800);
});

$("#reviews-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#reviews").offset().top
    }, 800);
});

$("#gallery-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 800);
});


$(".btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#btn").offset().top
    }, 800);
});


$(".main-play").click(function() {
    $('html, body').animate({
        scrollTop: $("#video").offset().top
    }, 800);
});


