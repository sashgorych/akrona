//common start
// products start
if (document.querySelector('.products-slider')) {
    $('.products-slider').slick({
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 5,
        dots: true,
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
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}
if (document.querySelector('.news_list')) {
    $('.news_list').slick({
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 5,
        dots: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true

                }
            }, {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true

                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}

function setProductsRating() {
    document.querySelectorAll('.rating').forEach(el => {
        setStarInPercent(el, el.dataset.rate)
    })
}

setProductsRating();

function setStarInPercent(element, percent) {
    let a = percent % 20;
    let b = Math.trunc(percent / 20)
    let i = 0;
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

// products end

// menu start
$('.header-middle .header-right-mobile .info-list-menu>ul>li>a').click(function (e) {
    e.preventDefault()
    $(this).parent().toggleClass('active')
})
$('.toggleMenuBtn').click(function (e) {
    e.preventDefault()
    if (screen.width < 576) {
       closeAllMenus()
        openMobileMenuCatalog()
        lockBg()
    } else {
        openMenuCatalog()
    }
})
function closeAllMenus() {
    hideSearch()
    closeMenu()
    closeMobileMenuCatalog()
    closeFilter()
    closeMobileMenuCatalog()
}
$('.catalog-li .close').click(function (e) {
    e.preventDefault()
    closeMobileMenuCatalog()
    unlockBg()
})
$('.lvl1').click(function (e) {
    e.preventDefault()
    if (screen.width < 576) {
        lockBg()
        openMobileSubCatalog(e)

    } else {
    }

})

function openMobileMenuCatalog() {
    document.querySelector('.main-menu').classList.add('active')
    document.querySelector('.mobile-nav').classList.add('active-menu')
}

function openMenuCatalog() {
    // document.querySelector('.main-menu').classList.add('active')
}

function closeMobileMenuCatalog() {
    document.querySelector('.main-menu').classList.remove('active')
    document.querySelector('.mobile-nav').classList.remove('active-menu')
    closeAllSubMenu()
    insertNavText("")
    removeBackBtn()
    unlockBg()
}

function openMobileSubCatalog(e) {
    insertNavText(e.target.innerHTML)
    addBackBtn()
    e.target.parentNode.querySelector('.submenu').classList.add('active-sub')
}

function removeBackBtn() {
    document.querySelector('.back').classList.remove('act')

}

function addBackBtn() {
    document.querySelector('.back').classList.add('act')
}

function closeAllSubMenu() {
    document.querySelectorAll('.active-sub').forEach(el => {
        el.classList.remove('active-sub')
        console.log(el)
    })
}

function insertNavText(text) {
    document.querySelector('.nav-name').innerHTML = text;
    console.log(document.querySelector('.nav-name'))

}

function closeMobileSubCatalog(e) {
    e.target.querySelector('.submenu').classList.remove('active-sub')

}

// menu end

//menu info start
$('.back').click(function (e) {
    closeAllSubMenu()
    insertNavText("")
    removeBackBtn()
})
$('.toggle-menu-info').click(function (e) {
    e.preventDefault()
   closeAllMenus()
    openMenu()
    lockBg()
})
$('.close-menu').click(function (e) {
    e.preventDefault()
    closeMenu()
    unlockBg()
})

function openMenu() {
    document.querySelector('.mobile-nav-menu').classList.add('active')
    document.querySelector('.menu').classList.add('active')
}

function closeMenu() {
    document.querySelector('.mobile-nav-menu').classList.remove('active')
    document.querySelector('.menu').classList.remove('active')
}

//menu info end
function unlockBg() {
    clearMarginInsteadScrollBody();
    $("body").removeClass('locked');
    $(window).scrollTop($('body').attr('data-pos'));
}

function makeMarginInsteadScrollBody() {
    $('.layout ').css('margin-right', (window.innerWidth - $('body').width()) + 'px');
}

function clearMarginInsteadScrollBody() {
    $('.layout').css('margin-right', 0 + 'px');
}

function insertLoading() {
    let isExist = document.querySelector('.side-menu__bg').querySelector('.load_bg');
    if (!isExist) {
        document.querySelector('.side-menu__bg').insertAdjacentHTML('beforeEnd', `<img src="/images/loading.gif" width="40px" height="40px" class="load_bg" alt="load">`)
    }
}

function showDarkMenuBg(showLoad = false) {
    if (showLoad) {
        insertLoading()
        $('.side-menu__bg').addClass('active-load')
    }
    $('.side-menu__bg').addClass('active')

}

function hideDarkMenuBg() {
    $('.side-menu__bg').removeClass('active')
    $('.side-menu__bg').removeClass('active-load')

}

function lockBg() {

    makeMarginInsteadScrollBody()
    // when popup opens
    $('body').attr('data-pos', $(window).scrollTop()); // get actual scrollpos
    $('body').addClass('locked'); // add class to body
    $('.layout').scrollTop($('body').attr('data-pos')); // let wrapper scroll to scrollpos

}

$('.side-menu__bg').click(function (e) {

    hideSearch()

})

//search
$('.search-icon').click(function (e) {
    e.preventDefault()
    closeAllMenus()

    showSearch()

    lockBg()
    showDarkMenuBg()
})

function showSearch() {
    document.querySelector('.header-center').classList.add('active')
}

function hideSearch() {
    hideDarkMenuBg();
    unlockBg();
    document.querySelector('.header-center').classList.remove('active')
}

function fixHeader() {
    document.querySelector('.header').classList.add('fixed')
    document.querySelector('.fixedHeader-margin').classList.add('active')
        document.querySelector('.header').classList.add('active')
}
function fixHeaderAnimate() {
    document.querySelector('.header').classList.add('fixed')
    document.querySelector('.fixedHeader-margin').classList.add('active')
    setTimeout(function (e) {
        document.querySelector('.header').classList.add('active')

    }, 200)
}

function unFixHeader() {
    document.querySelector('.header').classList.remove('fixed')
    document.querySelector('.header').classList.remove('active')
    document.querySelector('.fixedHeader-margin').classList.remove('active')
}

//common end

$(document).on('click', '.plus', function (e) {
    counterIncrease(e);
    e.preventDefault()
    focusInput(e)
});
$(document).on('click', '.minus', function (e) {
    counteReduce(e);
    e.preventDefault()
    focusInput(e)
});

function focusInput(e) {
    let input = e.target.parentNode.querySelector('input');
    input.classList.add('active')
}

function counterIncrease(e) {
    e.preventDefault()
    enableMinus(e.target.parentNode.querySelector('.minus'))
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    input.value = +input.value + step;
    if (+input.value + step > 100) {
        input.classList.add('small')
    }
}

function enableMinus(el) {
    el.disabled = false;
}

function disableMinus(el) {
    el.disabled = true;
}

function counteReduce(e) {
    e.preventDefault()
    let input = e.target.parentNode.querySelector('input');
    let step = +input.dataset.step || 1;
    let value = +input.value;
    if (value > step) {
        input.value = value - step;
    } else {
        disableMinus(e.target.parentNode.querySelector('.minus'))

    }
    if (+input.value + step < 100) {
        input.classList.remove('small');
    }
}


//catalog start
//catalog mobile filter start
$('.filter').click(function (e) {
    e.preventDefault()
    openFilter()
})
$('.mobile--catalog-nav-menu .close-menu').click(function (e) {
    e.preventDefault()
    closeFilter()
})
function openFilter() {
    fixHeader()
    document.querySelector('.catalog-props').classList.add('active')
    document.querySelector('.mobile--catalog-nav-menu').classList.add('active')
    lockBg();

}
function closeFilter() {
    unFixHeader()
    document.querySelector('.catalog-props').classList.remove('active')
    document.querySelector('.mobile--catalog-nav-menu').classList.remove('active')
    unlockBg();
    $('body').attr('data-pos', 0); // get actual scrollpos


}
//catalog mobile filter end
//catalog view start
$(document).ready(function() {
    $('select').select2({
        minimumResultsForSearch: -1

    });
});
function showAsTable(e){
    e.target.classList.add('active')
    e.target.parentNode.querySelector('.list').classList.remove('active')
    document.querySelector('.catalog-product-list').classList.remove('list')
}
function showAsList(e){
    e.target.parentNode.querySelector('.table').classList.remove('active')
    e.target.classList.add('active')

    document.querySelector('.catalog-product-list').classList.add('list')
}
$('.view .list').click(function (e) {
    e.preventDefault()
    showAsList(e)
})
$('.view .table').click(function (e) {
    e.preventDefault()
    showAsTable(e)
})
//catalog view end
//catalog navs start
$('.catalog-props-block .title-lvl').click(function (e) {
    $(e.target).parents('.catalog-props-block').toggleClass('active')
})
$('.catalog-navs .title').click(function (e) {
    if($(this).parent('.nav-item').hasClass('have-drop')){
        e.preventDefault()
        showNavDrop(e);
        console.log($(this))

    }
})
function showNavDrop(e) {
    $(e.target).parent('.have-drop').toggleClass('active')
}

//price slider start
let timeOutFilterRequest;

if(document.querySelector('.price-slider')){
    priceSliderInit()
}
function priceSliderInit() {
    if (document.querySelector('.valueMin')) {
        let minValue = +document.querySelector('.valueMin').dataset.valuemin;
        let maxValue = +document.querySelector('.valueMax').dataset.valuemax;
        $("#slider-range").slider({
            range: true,
            min: minValue,
            max: maxValue,
            values: [minValue, maxValue],
            slide: function (event, ui) {
                $("#min").val(ui.values[0])
                $("#max").val(ui.values[1])
                changePrice();
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }
}
function sendWithTimeOut() {
    clearTimeout(timeOutFilterRequest);
    timeOutFilterRequest = setTimeout(() => {
        filterRequest();
    }, 1500)
}
function filterRequest() {
    
}
function changePrice() {
    sendWithTimeOut();
}
//price slider end

//catalog navs end
//catalog end


//product page start


//product main img slider start
$(".media_main_img").slick({
    asNavFor: ".media_main_thumb_slider",
    arrows: false
});
$(".media_main_thumb_slider").slick({
    arrows: true,
    slidesToShow: 4,
    asNavFor: ".media_main_img",
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1180,
            settings: {
                slidesToShow: 3,
            }
        }
        , {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});
//product main img slider end


//product page end

