var isIE = navigator.userAgent.indexOf('Trident') > -1;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh2 = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh2}px`);
    // if(Math.abs(vh - vh2) > 1){
    //     console.log('here')
    //     document.documentElement.style.setProperty('--vh', `${vh2}px`);
    //
    // }
});
let words = {
    "productFavHint": 'В обране'
}

//header scripts start----------------------------------------------------------------------------
//for menu start----------------------------------------
function unlockBg() {
    clearMarginInsteadScrollBody();
    $("body").removeClass('locked');
    $(window).scrollTop($('body').attr('data-pos'));
}

function lockBg() {
    makeMarginInsteadScrollBody()
    // when popup opens
    $('body').attr('data-pos', $(window).scrollTop()); // get actual scrollpos
    $('body').addClass('locked'); // add class to body
    $('.layout').scrollTop($('body').attr('data-pos')); // let wrapper scroll to scrollpos

}

function showDarkMenuBg() {
    $('.side-menu__bg').addClass('active')

}

function hideDarkMenuBg() {
    $('.side-menu__bg').removeClass('active')

}

function showMainMenu() {
    $('.menu-main-container').addClass('active')

}

function makeMarginInsteadScrollBody() {
    $('.layout ').css('margin-right', (window.innerWidth - $('body').width()) + 'px');
}

function clearMarginInsteadScrollBody() {
    $('.layout').css('margin-right', 0 + 'px');
}

function hideMainMenu() {
    $('.menu-main-container').removeClass('active')

}

// menu category open/close
$('.unit-toggle-span').click(function (e) {
    $(this).toggleClass('active')
    $(this).parent().find('.submenu-list').toggleClass('active')
})

//main menu.close btn click
$('.menu-main-top .menu-mob').click(function (e) {
    hideMainMenu();
    hideDarkMenuBg();
    unlockBg();
    hideMobileSearchBlock()
})

//main menu.close menu when click in background
$('.side-menu__bg').click(function (e) {
    hideMainMenu();
    hideDarkMenuBg();
    unlockBg();
    hideMobileSearchBlock()

})

//main menu.hamburger click
$('.menu').click(function (e) {
    showMainMenu();
    showDarkMenuBg();
    lockBg();
})

//for menu end-----------------------------------------


//search start ----------------------------------------

//mobile search block. clear input
$('.search-mobile-form-input-clear').click(function (e) {
    e.preventDefault();
    clearMobileSearchInput()
})

//mobile search block. close btn click
$('.search-mobile-form-close .icon-close').click(function (e) {
    hideMobileSearchBlock()
})

//mobile search block. open btn click (in mobile menu)
$('.mobile-search').click(function (e) {
    e.preventDefault()
    showMobileSearchBlock()
})

//mobile search block.make search btn click.
$('.search-mobile-form-input-btn').click(function (e) {
    e.preventDefault();
    makeSearchRequest($('#search-mobile').val());
})

//pc. make search btn click
$('.search-btn').click(function (e) {
    e.preventDefault();
    makeSearchRequest($('#search-pc-str').val());

})

function showMobileSearchBlock() {
    $('.search-mobile-form').addClass('active')
}

function hideMobileSearchBlock() {
    $('.search-mobile-form').removeClass('active')
}

function clearMobileSearchInput() {
    $('#search-mobile').val("")
}

//search end ----------------------------------------

//header scripts end -----------------------------------------------------------------------------
if(document.querySelector('.products-slider')) {
    $('.products-slider').slick({
        slidesToShow: 5,
        arrows: true,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if(document.querySelector('.beneficial-offers-slider')) {
    $('.beneficial-offers-slider').slick({
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if(document.querySelector('.banner-slider-pc')) {
    $('.banner-slider-pc').slick({
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
    });
}
if(document.querySelector('.banner-slider-mobile')) {
    $('.banner-slider-mobile').slick({
        dots: true,
        arrows: true
    });
}

if (!isIE) {


    let tippy1 = document.querySelector('.text-templates .productFavHint');
    tippy('.set-favourite a:not(.active)', {
        content: tippy1.innerHTML,
        theme: 'light',

    });
    let tippy2 = document.querySelector('.text-templates .add-to-cartHint');
    tippy('.add-to-cart', {
        content: tippy2.innerHTML,
        theme: 'light',

    });
}
$('.search').hover(function (e) {
    $('.search').addClass('active')
})
$('.current-language').click(function (e) {
    e.preventDefault()
    if (!$('.language-list').hasClass('active')) {
        $('.language-list').addClass('active')
    } else {
        $('.language-list').removeClass('active')

    }
})
$(document).click(function (e) {
    //language block when click outside
    let language = $(".language");
    if (!language.is(e.target) && language.has(e.target).length === 0) {
        $('.language-list').removeClass('active')
    }

    //catalog page. sort block when click outside
    let selected__method = $(".selected__method");
    if (!selected__method.is(e.target) && selected__method.has(e.target).length === 0) {
        $('.method__list').removeClass('active')
    }
})
$(document).on('click', '.minus', function (e) {
    if (!isAvailableProductItem(e)) return;
    counteReduce(e);
    e.preventDefault()
});

function isAvailableProductItem(e) {
    if ($(e.target).parents('.item').hasClass('not-available')) {
        return false;
    }
    return true;
}

$(document).on('click', '.plus', function (e) {
    if (!isAvailableProductItem(e)) return;
    counterIncrease(e);
    e.preventDefault()
});

//counter in  product item. check if input only number
$('.counter input').keyup(function (e) {
    let text = e.target.value;
    let testText = text;
    let step = +e.target.dataset.step || 1;
    let correctNumber;
    if (testText * 1 + 0 != text) {
        correctNumber = testText.substring(0, testText.length - 1)
        if (isNaN(correctNumber)) {
            correctNumber = step;
        }
        e.target.value = correctNumber;

    }

});

//counter in  product item. checl input with correct step
$('.counter input').change(function (e) {
    let step = +e.target.dataset.step || 1;
    e.target.value = round(e.target.value, step)
})


function round(number, step) {
    let num = Math.ceil(number / step) * step;
    if (num == 0) {
        num = step
    }
    return num;
}

function checkCounterValue(e) {
    console.log(checkNumber(e));
    console.log(e.target.value)
}

function counterIncrease(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    input.value = +input.value + step;
}

function checkNumber(e) {
    if ((e.which >= 48 && e.which <= 57) // цифры
        ||
        (e.which >= 96 && e.which <= 105) // num lock
        ||
        e.which == 8 // backspace
        ||
        (e.which >= 37 && e.which <= 40) // стрелки
        ||
        e.which == 46) // delete
    {
        return true;
    } else {
        return false;
    }
}

function counteReduce(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    let value = +input.value;
    if (value > step) {
        input.value = value - step;
    }
}

document.querySelectorAll('.rating').forEach(el => {
    setStarInPercent(el, el.dataset.rate)
})

function setStarInPercent(element, percent) {
    let a = percent % 20;
    let b = Math.trunc(percent / 20)
    let i = 0;
    console.log(element)
    console.log(element.querySelectorAll('.rateStarPopup'))
    for (i; i < b; i++) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active')
    }
    if (a < 10 && a > 0) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active25')
    }
    if (a > 10) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active75')
    }
    if (a == 10) {
        element.querySelectorAll('.rateStarPopup')[i].classList.add('active50')
    }
}


//catalog page start
function priceSliderInit() {
    let minValue = +document.querySelector('.valueMin').dataset.valuemin;
    let maxValue = +document.querySelector('.valueMax').dataset.valuemax;
    console.log(minValue)
    console.log(maxValue)
    $("#slider-range").slider({
        range: true,
        min: minValue,
        max: maxValue,
        values: [minValue, maxValue],
        slide: function (event, ui) {
            $("#min").val(ui.values[0])
            $("#max").val(ui.values[1])
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
}
function showFilterBlock() {
    $('.catalog-filters').addClass('active')
    lockBg()
}
function hideFilterBlock() {
    $('.catalog-filters').removeClass('active')
    unlockBg();
}
if(document.querySelector('.catalog')) {
//sort popup
    $('.selected__method').click(function (e) {
        e.preventDefault()
        if (!$('.method__list').hasClass('active')) {
            $('.method__list').addClass('active')
        } else {
            $('.method__list').removeClass('active')

        }
    })
    //filters open
    $('.f-title').click(function (e) {
        e.preventDefault()
        console.log('here')
        if (!$(this).parent().find('.content').hasClass('active')) {
            $(this).parent().find('.content').addClass('active')
            $(this).addClass('active')
        } else {
            $(this).parent().find('.content').removeClass('active')
            $(this).removeClass('active')

        }
    })

//price slider

    priceSliderInit()

    //filters toggle btn. mobile
    $('.toggle__filter_mobile').click(function (e) {
        e.preventDefault()
        showFilterBlock();
    })
    //close filter. click close btn
    $('.catalog-filters .icon-close').click(function (e) {
        e.preventDefault()
        hideFilterBlock()
    })

}
//catalog page end

//product page start
console.log('here')
$(".product__media-main__img").slick({
    asNavFor: ".product__media-thumbs",
    arrows: false
});
$(".product__media-thumbs").slick({
    arrows: true,
    slidesToShow: 2,
    asNavFor: ".product__media-main__img",
    focusOnSelect: true,
});
$('.product__media-main__img').slickLightbox({
    src: 'href',
    itemSelector: 'a'
});

//product page end



function makeSearchRequest(dataStr) {
    console.log(dataStr)
}

//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
