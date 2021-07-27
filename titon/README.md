# Попап додавання в корзину
showCartPopup()
```
<div class="default_popup cart_popup">
    <div class="popup_close">
        <div class="icon-close"><span></span></div>
    </div>
    <div class="popup_content">
        <div class="title-line-block">
            <div class="title-line-block-text">
                <h3 class="title-line-block-text-text">Ваш кошик</h3>
            </div>
            <div class="title-line-block-line"></div>
            <p class="title-line-block-link">В кошику <span> 1 товар</span> на суму <span>182 грн.</span></p>
        </div>
        <div class="cart_items_title cart_item">
            <div class="cart_itm_p2">

                <div class="stocks">

                </div>
                <div class="cart_itm_img"></div>
                <div class="cart_itm_p1">
                    <div class="cart_itm_title"><span>Назва товару</span></div>
                    <div class="cart_itm_kinds">
                        <div class="weights">
                            <span>Вага</span>
                        </div>
                        <div class="colors">
                            <span>Колір</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart_itm_price_block">
                <div class="counter-title">
                    <span>Кількість</span>
                </div>
                <div class="price">
                    <span>Ціна</span>
                </div>
                <div class="delete-t">
                    <span>Очистити</span>
                </div>
            </div>
        </div>
        <div class="cart_items">
            <div class="cart_item pr__colors">
                <div class="cart_itm_p2">
                    <div class="stocks">
                        <span class="new-stock_text">new</span>
                        <span class="new-discount_text">Знижка</span>
                    </div>
                    <div class="cart_itm_img"><a href=""><img src="./images/temp/product-img.jpg" alt=""></a></div>
                    <div class="cart_itm_p1">
                        <div class="cart_itm_title"><p><a href="">ARZUM OKKA MINIO OK004-D(ОРХІДЕЯ)</a></p></div>
                        <div class="cart_itm_kinds ">
                            <div class="weights">
                                <p class="c-title">Вага</p>
                                <span class="empty">—</span>
                                <p class="weight-name">1 кг</p>

                            </div>
                            <div class="colors">
                                <p class="c-title">Колір</p>
                                <span class="empty">—</span>

                                <span class="color-name" title="Червоний" style="background: red"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_itm_price_block">
                    <div class="more_info_block">
                        <div class="info_icon">
                            <span>i</span>
                        </div>
                        <div class="opt_info_block_content">
                            <p>При замовленні від <span>10</span>шт. ціна: 90.5 грн.</p>
                        </div>
                    </div>
                    <div class="counter">
                        <button class="minus" tabindex="0">–</button>
                        <input type="text" id="" value="1" name="" data-step="1" inputmode="numeric" tabindex="0">
                        <button class="plus" tabindex="0">+</button>
                    </div>
                    <div class="price">
                        <div class="discount">
                            <div class="prev_price">
                                <span>1700 грн.</span>
                            </div>
                            <div class="discount_count"><span>20%</span></div>
                        </div>
                        <p>1600 грн</p>
                    </div>
                    <a href="" class="delete">
                        <span>Видалити</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="cart_popup_bottom">
            <a class="return_to_products">Продовжити покупки</a>
            <button type="submit" class="custom-button__white" id="">Оформити замовлення</button>
        </div>
    </div>
</div>

```

# реферальне посилання
вставити на початок в футер ```<section class="footer">```

```
<div class="referal-block">
    <div class="referal-copy-popup">
        <span>Посилання скопійовано</span>
    </div>
    <div class="referal-link">
        <textarea class="js-copytextarea hidden-object">https://turcoffee.ua/ua</textarea>
        <div class="ref-info">
            <div class="ref-icon">
                <span>i</span>
            </div>
            <div class="ref-text">
                <span>Отримати реферальне посилання на поточну сторінку</span>
            </div>
        </div>
        <img src="./images/icons/icon_referal.svg" alt="ref">
    </div>
</div>

```
# Модуль/Блок FAQ
```
<div class="container-block faq-container">
    <div class="title-line-block">
        <div class="title-line-block-text">
            <h3 class="title-line-block-text-text">Вопросы и ответы</h3>
        </div>
        <div class="title-line-block-line"></div>
    </div>
    <div class="faq">
        <div class="accordion">

            <div class="accordion-item">
                <div class="accordion-item-header"><span>Do You Accept Credit Cards or Financing Options?</span></div>
                <div class="accordion-item-body text_content" style="max-height: 0px;">
                    <div class="accordion-item-body-content"><span>Yes, we do.<br></span></div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-item-header"><span>Do You Accept Credit Cards or Financing Options?</span></div>
                <div class="accordion-item-body text_content" style="max-height: 0px;">
                    <div class="accordion-item-body-content"><span>Yes, we do.<br></span></div>
                </div>
            </div>

        </div>
        <div class="bottom-orange-line"></div>
    </div>
</div>

```
# На сторінках перегляду категорій, під стрічкою товарів потрібно додати блок з описом категорії.
```
<section class="category-info-block">
    <div class="container-block">
        <div class="title-line-block drop-info-btn">
            <div class="title-line-block-text">
                <h2 class="title-line-block-text-text">[Купити] [%назва категорії%] [в %місто%]</h2>
            </div>
            <div class="title-line-block-line"></div>
        </div>
        <div class="drop-info-text text_content hidden-object">
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
        </div>
    </div>
</section>

```
# Статті по темі
(майже те саме що і Інші статті)
```
<section>
    <div class="container-block">
    <div class="title-line-block small-title-line-block">
        <div class="title-line-block-text">
            <h2 class="title-line-block-text-text">
                Цікаві статті</h2>
        </div>
        <div class="title-line-block-line"></div>
        <a href="" class="title-line-block-link">Всі статті по темі</a>
    </div>
        <div class="blog_archive" style="margin-bottom: 40px">
            <div class="blog_archive_slider">
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>


```
# Блог - додаємо перемикач категорій:
блок перемикача можна взяти в каталозі і вставити так само як він вставлений в каталозі
# аудіо / відео 
как само як і на тітон

# request a call
```
<div class="side__bg"></div>
<div class="default_popup login_popup request-call-form">
  <div class="popup_close">
    <a class="close-popup-form" href="#">×</a>
  </div>
  <div class="popup_content">
    <div class="popup- form-content-real-estate new-frame">
      <div class="form-content form-content-contact-us">
        <p class="form-popup-title">
          <span class="">Would you like us to call you back?</span>
        </p>
        <form class="request-form-trigger" method="post" action="/send-contact">
          <div class="form-content-container">
            <div class="">
              <div class="">
                <div class="first-name input-container">
                  <p>Name<span class="clr-red">*</span></p>
                  <input type="text" required="" name="obj[data][name]" class="all-req-frm-inp req-frm-name-inp"
                         placeholder="Name">
                  <span class="error error-txt-in-form">Enter your First Name</span>
                </div>
                <div class="phone input-container">
                  <p>Phone<span class="clr-red">*</span></p>
                  <input type="text" required="" name="obj[data][phone]"
                         class="phone_us phone-mask all-req-frm-inp req-frm-phone-inp" placeholder="Phone"
                         maxlength="14">
                  <span class="error error-txt-in-form">Enter your phone</span>
                </div>
              </div>
            </div>
          </div>
          <button class="button-shine" type="submit" id="contact-form-submit" style="">Request a callback</button>
        </form>


      </div>


    </div>
  </div>
</div>
<div class="request-call-btn">
  <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="6.1016mm" height="6.0197mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 40.96 40.41" xmlns:xlink="http://www.w3.org/1999/xlink">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
  <g id="_5557867872">
   <path class="fil0" d="M38.94 34.76c-0.71,0.89 -2.57,2.48 -3.63,3.11 -0.14,0.09 -0.29,0.15 -0.43,0.2 -1.03,-0.45 -2.85,-1.4 -3.39,-2.08 -0.26,-0.33 -0.74,-0.38 -1.07,-0.12 -0.33,0.26 -0.38,0.75 -0.12,1.07 0.48,0.6 1.4,1.2 2.23,1.66 -0.67,0.15 -1.6,0.27 -2.79,0.27l0 0c-3.49,-0 -10.55,-1.18 -18.72,-9.08 -11.65,-11.27 -9.43,-21.36 -9.14,-22.47 0.03,-0.1 0.03,-0.2 0.02,-0.3 -0.06,-0.4 0.03,-0.8 0.27,-1.23 0.6,-1.08 2.13,-3 2.99,-3.74 0.39,-0.34 0.74,-0.52 1.01,-0.52 0.11,0 0.47,0 1.04,0.79l6.47 8.83c0.39,0.54 0.31,1.29 -0.19,1.67l-3.2 2.43c-0.01,0.01 -0.03,0.01 -0.06,0.02 -0.85,-0.65 -2,-1.63 -2.37,-2.19 -0.23,-0.35 -0.7,-0.45 -1.06,-0.22 -0.35,0.23 -0.45,0.7 -0.22,1.06 0.49,0.76 1.69,1.76 2.45,2.36 -0.61,2.49 1.32,5.81 6.19,10.67 3.88,3.88 6.71,4.69 8.4,4.69 0.74,0 1.3,-0.17 1.57,-0.32 0.2,-0.12 0.34,-0.32 0.38,-0.55 0.01,-0.1 0.02,-0.25 0.02,-0.42 0,-0.09 0,-0.25 0.01,-0.34l2.29 -3.25c0.35,-0.48 1.13,-0.61 1.66,-0.25l9.04 6.18c0.5,0.34 0.77,0.66 0.81,0.95 0.04,0.28 -0.12,0.65 -0.48,1.1zm1.99 -1.32c-0.11,-0.74 -0.59,-1.39 -1.46,-1.99l-9.04 -6.18c-0.47,-0.32 -1.01,-0.49 -1.57,-0.49 -0.87,0 -1.69,0.41 -2.19,1.11l-2.35 3.32c-0.18,0.26 -0.23,0.57 -0.24,0.88 -0.9,0.13 -3.5,0.05 -7.77,-4.21 -4.13,-4.12 -6.08,-7.15 -5.83,-9.02 0.05,-0.02 0.08,-0.07 0.12,-0.1 0.21,-0.06 0.41,-0.13 0.57,-0.26l3.24 -2.45c1.16,-0.87 1.38,-2.57 0.5,-3.78l-6.48 -8.83c-1.25,-1.7 -2.71,-1.87 -4.28,-0.52 -0.99,0.85 -2.65,2.91 -3.33,4.15 -0.38,0.66 -0.53,1.35 -0.46,2.04 -0.24,0.99 -0.76,3.92 0.11,7.99 1.18,5.54 4.37,10.86 9.49,15.82 8.55,8.28 16.07,9.51 19.78,9.51l0 0c2.19,0 3.71,-0.4 4.41,-0.7 0.65,0.03 1.3,-0.16 1.93,-0.53 1.22,-0.72 3.22,-2.44 4.04,-3.47 0.65,-0.8 0.91,-1.55 0.8,-2.28z"></path>
   <path class="fil0" d="M19.61 8.8c5.91,1.8 10.53,6.4 12.37,12.3 0.1,0.33 0.4,0.54 0.73,0.54 0.07,0 0.15,-0.01 0.23,-0.03 0.4,-0.13 0.63,-0.55 0.5,-0.96 -1.99,-6.38 -6.99,-11.36 -13.38,-13.31 -0.4,-0.13 -0.83,0.1 -0.95,0.51 -0.12,0.4 0.1,0.83 0.51,0.95z"></path>
   <path class="fil0" d="M20.66 3.14c8.86,2.09 15.63,9.23 17.25,18.19 0.07,0.37 0.39,0.63 0.75,0.63 0.04,0 0.09,-0 0.14,-0.01 0.41,-0.08 0.69,-0.47 0.61,-0.89 -1.73,-9.55 -8.95,-17.17 -18.4,-19.4 -0.41,-0.09 -0.82,0.16 -0.92,0.57 -0.1,0.41 0.16,0.82 0.57,0.92z"></path>
  </g>
 </g>
</svg>
</div>
```

titonrealty
```
<div class="sold_patentblock">
    <div style="" class="sold_btn active for_sale_btn">
        For Sale
    </div>
    <div class="sold_btn sold_alr">
        Sold
    </div>
</div>
```

Передається поле "sold" / якщо *for sale* то параметр "sold":"" - пустий / якщо *sold* то параметр зі значенням "sold" ("sold":"sold")

для комюніті треба додати клас custom_sold - відміняє запит при кліку на кнопки.
```
<div class="sold_patentblock custom_sold">
    <div style="" class="sold_btn active for_sale_btn">
        For Sale
    </div>
    <div class="sold_btn sold_alr">
        Sold
    </div>
</div>
```
