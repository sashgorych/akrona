//////////start menu script
let hamburger = document.querySelector('.nav-mobile');
let menu = document.querySelector('.menu');
const toggleMenu = () => {
    closeAllSubMenus();
    menu.classList.toggle('active');
    hamburger.classList.toggle('active')
};
//toggle menu
hamburger.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    toggleMenu();
    $('.phone-number').toggleClass('active')
    $('.logo').toggleClass('active')
    $('body').toggleClass('active')
    if(!document.querySelector('.sticky')){
        $('body').toggleClass('active-pos')

    }
});
//close all submenu
const closeAllSubMenu = () => {
    let activeSubMenu = menu.querySelector('.active');
    if (activeSubMenu) {
        activeSubMenu.classList.remove('active');
    }

};

//close mobile submenu in menu
function closeAllSubMenus() {
    closeAllSubMenu();
    closeAllSubMenu2();
}

//close all submenu lvl2
const closeAllSubMenu2 = () => {
    let activeSubMenuLvl2 = menu.querySelector('.active2');
    if (activeSubMenuLvl2) {
        activeSubMenuLvl2.classList.remove('active2');
    }
};
//toggle submenu

//prevent redirection in new menu(real estate)
// if($('.menu-mobile-on-desk').length) {
//     $('.menu-mobile-on-desk nav ul.menu li.hasDrop-l2 > a').click(function (e) {
// 	$(this).next().hide();
//     })
//     $('.menu-mobile-on-desk nav ul.menu li.hasDrop > a').click(function (e) {
// 	$(this).next().hide();
//         $(this).parent().removeClass('active')
//     })
// }
menu.addEventListener('click', (e) => {
    let target = e.target;
    //check submenu lvl 1
    if (target.classList.contains('hasDrop')) {

        if (target.classList.contains('active')) {
            //close if open
            target.classList.remove('active')
            closeAllSubMenu();
            closeAllSubMenu2();
        } else {
            closeAllSubMenu();
            closeAllSubMenu2();
            //close other submenu and open current
            target.classList.add('active')
        }
    } else {
        if (target.parentNode.classList.contains('hasDrop')) {
            //if click on link(tag a)
            if (target.parentNode.classList.contains('active')) {
                // if submenu open - close
                target.parentNode.classList.remove('active')
                closeAllSubMenu();
                closeAllSubMenu2();
            } else {
                // closeAllSubMenu();
                // closeAllSubMenu2();
                // target.parentNode.classList.add('active')
            }

        }
    }
    //check sub menu lvl 2

    if (target.classList.contains('hasDrop-l2')) {

        if (target.classList.contains('active2')) {
            target.classList.remove('active2')
            closeAllSubMenu2();
        } else {
            closeAllSubMenu2();
            target.classList.add('active2')
        }
    } else {
        if (target.parentNode.classList.contains('hasDrop-l2')) {
// if click on tag a
            if (target.parentNode.classList.contains('active2')) {
                target.parentNode.classList.remove('active2')
                closeAllSubMenu2();
            } else {
                closeAllSubMenu2();
                // target.parentNode.classList.add('active2')
            }


        }
    }
})
//close menu when click outside
document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('active');
    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
        $('.phone-number').removeClass('active')
        $('.logo').removeClass('active')
        $('body').removeClass('active')
        $('body').removeClass('active-pos')
    }
})
////////////end menu script


////////////start form validation
function alphanumeric(data) {
    let letters = /^[a-zA-Z ]+$/;
    if (letters.test(data)) {
        return true;
    }
    return false;
}

//input mask for phone
// $('.phone_us').mask('(000) 000-0000', {placeholder: "___.___.____"} );

//slick slider
if (document.querySelector(".single-item")) {
    $('.single-item').slick({
        dots: true,
        arrows: false
    });
}

if (document.querySelector(".slider-header")) {
    // if(document.querySelector('.other-img-mob')){
    //     $('.slider-header').slick({
    //         dots: false,
    //         arrows: false,
    //         speed: 500,
    //         infinite: false,
    //         autoplay: false,
    //         autoplaySpeed: 6000,
    //         fade: true,
    //         cssEase: 'linear',
    //         slidesToShow: 1,
    //         pauseOnHover: false,
    //         adaptiveHeight: true
    //     });
    //
    //     if(screen.width<576){
    //         $('.slider-header').slick('slickGoTo', 2);
    //
    //     }
    // }else {
    $('.slider-header').slick({
        dots: false,
        arrows: false,
        speed: 500,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        pauseOnHover: false,
        adaptiveHeight: true

    });
    // }
}

//map
/*
let listHtml = document.querySelector('#map-frame-list');
let map = document.querySelector('#map-frame');

if (listHtml) {
    listHtml.addEventListener('click', (e) => {
        let cityName = e.target.dataset.name;
        if (!cityName) {
            return
        }
        let src = getSrcByCity(cityName, listsrc)
        map.src = src;
        deleteActiveClass();
        setActiveCity(e.target);
    })
}

function getSrcByCity(city, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == city) {
            return arr[i].src;
        }
    }
}

function setActiveCity(element) {
    element.classList.add('active')
}

function deleteActiveClass() {
    listHtml.querySelector('.active').classList.remove('active');
}
*/

let customslider = document.querySelector('.slider-in');
if (customslider) {
    $('.slider-in').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight: true

    });
}

let blogpage = document.querySelector('.blog-page')
if (blogpage) {

}
let gallerylvl2 = document.querySelector('.gallery-lvl2')
if (gallerylvl2) {
    $('.gallery-row-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });
}

if ($('.slider-gallery').length) {
    $('.slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });

    $('.slider-gallery').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1035,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

if ($('.faq').length) {
    //faq
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {


            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = 0;
            }

        });
    });
}

if ($('.block-with-items-lines').length) {
//additional services hide more items on mobile. show only first four
//     if (screen.width < 768) {
//         $('.show-more-block .item:not(:nth-child(-n+4))').addClass('hidden')
//     }


//second page read more btn

    let btn_read_more = document.querySelector('#read-more-advantages');
    if (btn_read_more != null) {
        btn_read_more.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.content-read-more').classList.toggle('show');
            btn_read_more.classList.toggle('active');
            if (btn_read_more.innerHTML == 'show less') {
                btn_read_more.innerHTML = 'read more'
            } else {
                btn_read_more.innerHTML = 'show less'

            }
        })
    }
//second page show more btn
//     let btn_show_more = document.querySelector('#show_more');
//     if ( btn_show_more != null ) {
// 	    btn_show_more.addEventListener('click', function (e) {
// 	        e.preventDefault();
// 	        document.querySelector('.show-more-block').classList.toggle('active');
// 	        btn_show_more.classList.toggle('active');
// 	        if (btn_show_more.innerHTML == 'show less') {
// 	            btn_show_more.innerHTML = 'show more'
// 	        } else {
// 	            btn_show_more.innerHTML = 'show less'
//
// 	        }
// 	    })
//     }
    if ($('.show_more_btn_common').length) {
        $('.show_more_btn_common').click(function (e) {
            e.preventDefault();
            let target = $(event.target);
            target.parent().find('.show-more-block').toggleClass('active')
            target.toggleClass('active')
            console.log(target.text())
            if (target.text() == 'show less') {
                target.text('show more');
            } else {
                target.text('show less');

            }
        })
    }

    //second page review open/close
    $('.reviews-container-content-second-page .item').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $('.reviews-container-content-second-page .item.active').removeClass('active')
                $(this).addClass('active');
            }

        }
    )
}
let gallery_page = document.querySelector('.gallery-page');
if (gallery_page) {
    $('.gallery-row-content').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }
        });
    })

    $('.hide').hide();

    // $('.btn-view-a').click(function (e) {
    //     e.preventDefault();
    //     let btn = e.target;
    //     let parent = $(this).parent().parent();
    //     parent.toggleClass('active')
    //     $(this).parent().parent().find('.hide').toggle();
    //     if( btn.innerHTML == "show less"){
    //         btn.innerHTML = 'view all'
    //     }else{
    //         btn.innerHTML = 'show less'
    //
    //     }
    //
    // })
}
let gallery_page2 = document.querySelector('.gallery-page2');
if (gallery_page2) {
    $('.gallery-row-content').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }
        });
    })

    $('.hide').hide();

    $('.btn-view-a').click(function (e) {
        e.preventDefault();
        let btn = e.target;
        let parent = $(this).parent().parent();
        parent.toggleClass('active')
        $(this).parent().parent().find('.hide').toggle();
        if (btn.innerHTML == "show less") {
            btn.innerHTML = 'view all'
        } else {
            btn.innerHTML = 'show less'

        }

    })
}


for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}


window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});


let realEstateFilter = (function () {
    function loadData() {

    }

    function onSelected() {

    }

    return {
        init: loadData
    }
})


let blognavs = document.querySelector('.blog-navs');
if (false) {
    document.querySelector('.blog-navs').addEventListener('click', function (e) {
        let category;
        let button = e.target.parentElement;
        if (button.dataset.category) {
            category = button.dataset.category;
        }
        if (category) {
            hideAllBlogRecords();
            if (category == 'all') {
                showAllBlogRecords()
            } else {
                showCategoryRecords(category, button)
            }
        }
    })
}

function showCategoryRecords(category, button) {
    button.classList.add('active')
    category = "." + category;
    document.querySelectorAll(category).forEach(el => {
        el.classList.add('active')
    })
}

function hideAllBlogRecords() {
    document.querySelector('.blog-navs').querySelector('.active').classList.remove('active')
    document.querySelector('.blog-section-content').querySelectorAll('.item').forEach(el => {
        el.classList.remove('active')
    })
}

function showAllBlogRecords() {
    document.querySelector('.blog-navs').querySelector('li:nth-child(1)').classList.add('active')
    document.querySelector('.blog-section-content').querySelectorAll('.item').forEach(el => {
        el.classList.add('active')
    })
}
$(document).ready(function () {
    //set 100vh in mobile browser

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    if(screen.width < 482) {
        // document.querySelector('.screenheight .header .logo').style.top = 43 * vh + 'px';
    }
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vh1', `${vh}px`);
// We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    console.log('ee')
})


// var lastScrollTop = 0;
//
// $(window).scroll(function(event){
//     let isopened = document.querySelector('body').classList.contains("active")
//     if(!isopened) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop || st<200) {
//             setTimeout(function () {
//                 document.querySelector(".header").classList.remove("sticky");
//
//             }, 400)
//             document.querySelector(".header").classList.remove("active");
//
//         } else {
//             document.querySelector(".header").classList.add("sticky");
//             setTimeout(function () {
//                 document.querySelector(".header").classList.add("active");
//
//             }, 100)
//         }
//         lastScrollTop = st;
//     }
// });
//
//fix menu
var menuTimeOut;
var doc = document.documentElement;
var w = window;
var smallHeader = document.querySelector('.always-fixed-menu');
var fixedMenuAlways = document.querySelector(".real-estate-searched") || document.querySelector('.hide-header') || document.querySelector('.always-fixed-menu');
var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var header = document.getElementById('site-header');

var checkScroll = function () {

    if (w.scrollY > 900) {
        showScrollTopBtn();
    } else {
        hideScrollTopBtn();
    }
    curScroll = w.scrollY || doc.scrollTop;

    if(fixedMenuAlways){
        if (curScroll < 100 && !smallHeader){
            document.querySelector(".header").classList.add("big");
        }else{
            document.querySelector(".header").classList.remove("big");
        }
        return;
    }
    if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
    }
    else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
    }

    if (curScroll < 900) {
        hideFixedMenuQuick()
        return;
    }
    if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
};

var toggleHeader = function (direction, curScroll) {
    let isActiveMenu = document.querySelector('body').classList.contains("active")
    if (direction === 2 && curScroll > 52 && !isActiveMenu) {
        hideFixedMenu()
        prevDirection = direction;
    }
    else if (direction === 1) {
        if (!isActiveMenu && curScroll > 900) {
            //down
            showFixedMenu()
        }
        prevDirection = direction;
    }
};

window.addEventListener('scroll', checkScroll);

if(fixedMenuAlways){
    showFixedMenuQuick();
    document.querySelector(".header").classList.add("big");

}
function showFixedMenu() {
    clearTimeout(menuTimeOut);
    //up
    document.querySelector(".header").classList.add("sticky");
    menuTimeOut = setTimeout(function () {
        document.querySelector(".header").classList.add("active");

    }, 100)
}
function showFixedMenuQuick() {
    clearTimeout(menuTimeOut);
    //up
    document.querySelector(".header").classList.add("sticky");
    document.querySelector(".header").classList.add("active");
}

function hideFixedMenu() {
    clearTimeout(menuTimeOut);
    menuTimeOut = setTimeout(function () {
        document.querySelector(".header").classList.remove("sticky");

    }, 100)
    document.querySelector(".header").classList.remove("active");
}
function hideFixedMenuQuick() {
    document.querySelector(".header").classList.remove("sticky");
    document.querySelector(".header").classList.remove("active");

}
function showScrollTopBtn() {
    $('.scrollTopBtn').addClass('active')
}

function hideScrollTopBtn() {
    $('.scrollTopBtn').removeClass('active')
}
function scrollToTop() {
    $('html, body').animate({
        scrollTop: $(".header").offset().top
    }, 2000);
}
$('.scrollTopBtn').click(function (e) {
    scrollToTop();
    hideScrollTopBtn();
})

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}



//slider of projects
if ($('.slider-projects').length) {
    $('.slider-projects').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1335,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if ($('.reviews-container-content-second-page').length) {
    $('.slick-slider-reviews').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1335,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

//add overflow unset for header when menu have big menu
if ($('.header-top:not(.menu-mobile-on-desk) .li_big_menu').length) {
    $('body').addClass('non-ofh');
}


// modal window
function showFormModalWindow(title, content) {
    if ($('.overlay-popup').length) {
        $('.title-popup-res').text(title)
        // $('.content-popup-ros').append(content)
        $('.content-popup-ros p').text(content)
        $('.overlay-popup').addClass('active')
        $('body').addClass('ov-h')

    }
}
function showContactPopup() {
    if ($('.overlay-popup2').length) {
        $('.form-content-real-estate').addClass('new-frame')
        $('.overlay-popup2').addClass('active')
        $('body').addClass('ov-h2')

    }
}

function hideFormModalWindow() {
    if ($('.overlay-popup').length) {
        $('.overlay-popup').removeClass('active')
        $('body').removeClass('ov-h')

    }
}
function hideFormModalWindow2() {
    if ($('.overlay-popup2').length && $('.overlay-popup2').hasClass('active')) {
        $('.overlay-popup2').removeClass('active')
        $('body').removeClass('ov-h2')

    }
}

$('.close-popup-ros').click(function (e) {
    e.preventDefault();
    hideFormModalWindow();
})
$('.close-popup-form').click(function (e) {
    e.preventDefault();
    hideFormModalWindow2();
})

//real estate click btn header find a home
if ($('.real-estate').length) {

    $('.real-estate .header .header-bottom .button-shine:nth-child(1)').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $(".filters-real-estate").offset().top
        }, 1000);
    });
}

if( $('.bottom-slider-one-container').length){
    $('.bottom-slider-one-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });

    $('.bottom-slider-one-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
}
if(document.querySelector('.homes-slider-only-img')){
    $('.homes-content-block-slider').magnificPopup({
        delegate: 'div.item',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });

}

if (document.querySelector('.homes-content-block-slider')) {
    $('.homes-content-block-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1570,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

}
$(document).ready(function () {

//one home-item padding of title block
    if ($('.real-estate-one').length) {
        let heig = $('.item-info-block .top').outerHeight();
        $('.item-info-block .middle').css("padding", `${heig}px 35px`);
        let imgHeight = $('.main-img-one img').height();
        console.log(imgHeight)

        document.documentElement.style.setProperty('--top1', `${imgHeight}px`);

    }
})

document.addEventListener('touchforcechange', e => {
    const force = 0.2;
    if (e.changedTouches[0].force < force) {
        e.preventDefault();
        return false;
    }
});
if(document.querySelector('#sellahome-popup')) {
    document.querySelector('#sellahome-popup').addEventListener('click', function (e) {
        e.preventDefault();
        showContactPopup();
    })
}
if(document.querySelector('.item-info-block .button-bottom')) {
    document.querySelector('.item-info-block .button-bottom .button-shine').addEventListener('click', function (e) {
        e.preventDefault();
        showContactPopup();
    })
    document.querySelector('.item-info-block .button-bottom .img').addEventListener('click', function (e) {
        e.preventDefault();
        showContactPopup();
    })
}


//area we serve

hideAllCitiesDistrict(true);
hideAllCitiesMicroDistrict(true);
function hideAllCitiesDistrict(isQuick = false){
    if(isQuick){
        $('[data-city] li').slideUp();
        // $('.districts').slideUp()
    }else {
        $('[data-city] li').slideUp("slow");
        // $('.districts').slideUp('slow')
    }
    $('[data-value]').removeClass('active')

}
function showCitiesDistrict(name){
    // $('.districts').slideDown('slow')

    $(`[data-city="${name}"] li`).slideDown("slow")
    $(`[data-value="${name}"]`).addClass("active")
}
function hideAllCitiesMicroDistrict(isQuick = false){
    if(isQuick){
        $('[data-parentDistrict]').hide();
        $('[data-parentDistrict] li').slideUp();

    }else {

        $('[data-parentDistrict] li').slideUp('slow',function () {
        });
        $('[data-parentDistrict]').slideUp('slow');

    }
}
showCitiesDistrict('city215460');
if(document.querySelector('.areas-cities-top')) {
    document.querySelector('.areas-cities-top').addEventListener("click", function (e) {
        e.preventDefault();
        if(e.target.dataset.value) {
            if (e.target.classList.contains('active')) {
                return
            }
            hideAllCitiesDistrict();
            hideAllCitiesMicroDistrict();
            e.target.classList.add('active')

            setTimeout(function () {
                let dataValue = e.target.dataset.value;
                showCitiesDistrict(dataValue)
                // $('.districts').slideDown('slow')
                //$(`[data-city="${dataValue}"]`).slideDown("slow")
            }, 100)
        }

    })

    document.querySelector('.areas-content').addEventListener("click", function (e) {
        console.log(e.target)
        let districtName = e.target.parentNode.dataset.district || e.target.dataset.district;
        if (districtName) {
            e.preventDefault();
            if($(`[data-parentdistrict="${districtName}"]`).length > 0){
                hideAllCitiesDistrict(true);
                $(`[data-parentdistrict="${districtName}"]`).show('')

                $(`[data-parentdistrict="${districtName}"] li`).slideDown('slow',function () {

                })
            }

        }

    })
}


//show more for content on communities pages
if(document.querySelector('.communities-page .re-cnt')){

    let child = $('.communities-page .advantages.re-cnt .advantages-container').children(":not(:nth-child(1)):not(:nth-child(2))");
    console.log(child)
    document.querySelector('.communities-page .advantages.re-cnt .advantages-container').insertAdjacentHTML('beforeend',`<a href="" class="read-more-text read-more-text-show">Read More</a>`)
    document.querySelector('.communities-page .advantages.re-cnt .advantages-container').insertAdjacentHTML('beforeend',`<div class="re-cent-hidden-text"></div>`)

    let contentDiv = $('.communities-page .advantages.re-cnt .advantages-container .re-cent-hidden-text');
    contentDiv.append(child);
    document.querySelector('.communities-page .advantages.re-cnt .advantages-container .re-cent-hidden-text').insertAdjacentHTML('beforeend',`<a href="" class="read-more-text read-more-text-hide">Show Less</a>`)

    $('.re-cent-hidden-text').slideUp()
}
// show more for content on real estate search pages
if(document.querySelector('.real-estate-searched .re-cnt')){

    let child = $('.real-estate-searched  .advantages.re-cnt .advantages-container').children(":not(:nth-child(1)):not(:nth-child(2))");
    console.log(child)
    document.querySelector('.real-estate-searched .advantages.re-cnt .advantages-container').insertAdjacentHTML('beforeend',`<a href="" class="read-more-text read-more-text-show">Read More</a>`)
    document.querySelector('.real-estate-searched .advantages.re-cnt .advantages-container').insertAdjacentHTML('beforeend',`<div class="re-cent-hidden-text"></div>`)

    let contentDiv = $('.real-estate-searched .advantages.re-cnt .advantages-container .re-cent-hidden-text');
    contentDiv.append(child);
    document.querySelector('.real-estate-searched .advantages.re-cnt .advantages-container .re-cent-hidden-text').insertAdjacentHTML('beforeend',`<a href="" class="read-more-text read-more-text-hide">Show Less</a>`)

    $('.re-cent-hidden-text').slideUp()
}
// show more bnt listener for content on real estate search pages and communities page

$('.read-more-text-hide').click(function (e) {
    e.preventDefault();
    $(this).parent().slideUp("slow")
    $('.read-more-text-show').slideDown();
})
$('.read-more-text-show').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.re-cent-hidden-text').slideDown("slow")
    $(this).slideUp();
})

$('.read-more-text-hide').click(function (e) {
    e.preventDefault();
    $(this).parent().slideUp("slow")
    $('.read-more-text-show').slideDown();
})
$('.read-more-text-show').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.re-cent-hidden-text').slideDown("slow")
    $(this).slideUp();
})

//real estate main page about us block
if(document.querySelector('.real-estate .about-real-state')){
    let btnShowMore = document.querySelector('.about-real-state .load-more');
    let btnShowLess = document.querySelector('.about-real-state .load-more more-content-block-about-res-close');
    let container = document.querySelector('.more-content-block-about-res');
    document.querySelector('.about-real-state').addEventListener("click",function (e) {
        e.preventDefault()
        //show
        if(e.target.classList.contains('load-more')){
            container.classList.add('active')
            btnShowMore.classList.add('hide')
        }
        //hide
        if(e.target.classList.contains('more-content-block-about-res-close')){
            container.classList.remove('active')
            btnShowMore.classList.remove('hide')
        }
    })
}


// construction services move construction menu elements to top of menu ul. this case for *construction*
let moveMenuElements = document.querySelector('.move-menu-elements');
if(moveMenuElements) {
    let menuX = document.querySelector('.menu')
    let constructionLiElement = document.querySelector('.menu>li:nth-child(2)')
    let menuItem = constructionLiElement.querySelectorAll('.s-irregularLineMove .drop>li');
    menuItem = [...menuItem].reverse()
    let copyItem;
    menuX.insertAdjacentHTML('afterbegin', `<li class="btn-home"><a href="//titons.com">Home</a></li>`)
    menuItem.forEach(el => {
        copyItem = el.cloneNode(true);
        copyItem.classList.add('real-estate-li')
        menuX.insertAdjacentElement('afterbegin', copyItem)
    })
}

// real estate move menu elements to top of menu ul. this case for *real estate*
let moveMenuElementsRealEstate = document.querySelector('.move-menu-elements-real-estate');
if(moveMenuElementsRealEstate) {
    createRealEstateMenu();
}
function createRealEstateMenu() {
    let menuX = document.querySelector('.menu')
    let realEstateLiElement = document.querySelector('.menu>li:nth-child(4)')
    let menuItem = realEstateLiElement.querySelectorAll('.s-irregularLineMove .drop>li');
    menuItem = [...menuItem].reverse()
    let copyItem;
    menuX.insertAdjacentHTML('afterbegin', `<li class="btn-home"><a href="//titons.com">Home</a></li>`)
    menuItem.forEach(el => {
        copyItem = el.cloneNode(true);
        copyItem.classList.add('real-estate-li')
        menuX.insertAdjacentElement('afterbegin', copyItem)
    })
}

// add css classes by js
if(document.querySelector('.real-estate-searched .advantages.re-cnt')){
    document.querySelector('.real-estate-searched .advantages.re-cnt').classList.add('re-cent-small')
}


//real estate blog slider
if (document.querySelector('.blog_news_slider')) {
    initEstateSlider()
}
function initEstateSlider() {
    document.querySelector('.blog_news_slider .blog_news_slider_item').classList.add('active')
    document.querySelector('.realty_slider_dots li').classList.add('active')
    document.querySelector('.realty_slider_dots').addEventListener('click',function (e) {
        if(e.target.classList.contains('first')){showEstateSliderSlide(1,e.target)}
        if(e.target.classList.contains('second')){showEstateSliderSlide(2,e.target)}
        if(e.target.classList.contains('third')){showEstateSliderSlide(3,e.target)}
        console.log(e.target.classList);
    })
}
function showEstateSliderSlide(slideNumber,dots) {
    $('.blog_news_slider_item').removeClass('active')
    $('.realty_slider_dots li').removeClass('active')
    document.querySelector(`.blog_news_slider_item:nth-child(${slideNumber})`).classList.add('active')
    dots.classList.add('active')
}
// if (document.querySelector('.blog_news_slider')) {
//     $('.blog_news_slider').slick({
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         lazyLoad: 'ondemand',
//     })
// }
