# header
1) замінити ``` <span class='header-address '> ```
 на 
 ```
 <div class="schedule">
    <img src="./images/clock.svg" alt="">
    <div class="right-schedule">
        <span>пн-чт: 10:00-19:00</span>
        <span>пт: 10:00-18:00</span>
        <span>обід: 13:00-14:00</span>
        <span>сб, нд – вихідні</span>
    </div>
</div>

```
2)замінити ``` <div class="header-phones"> ```
 на 
 ```
 <div class="header-phone">
    <a href="tel:+380372559148" class="phone-d">
        <img src="./images/phone.svg" alt="phone">
        +38 (0372) 559148
    </a>
    <a href="mailto:dobrabiblioteka@gmail.com" class="email-d">
        <img src="./images/mail.svg" alt="mail">
        dobrabiblioteka@gmail.com
    </a>
</div>

```
3) в інпуті пошуку видалити value і вставити placeholder
4) перемикання мов
додати в кінець ```<div class="pull-right flex-space-b hidden-xs">```

```
<div class='header-language-change'>
    <a href="http://dobrabiblioteka.cv.ua/ua" title="Українська">
        <img src="/images/ua.gif" width="18" height="12" style="margin-right:3px;">
    </a>
    <a href="http://dobrabiblioteka.cv.ua/ru" title="Русский">
        <img src="/images/ru.gif" width="18" height="12" style="margin-right:3px;">
    </a>
    <a href="http://dobrabiblioteka.cv.ua/en" title="English">
        <img src="/images/en.gif" width="18" height="12" style="margin-right:3px;">
    </a>
    <a href="http://dobrabiblioteka.cv.ua/de" title="German">
        <img src="/images/de.gif" width="18" height="12" style="margin-right:3px;">
    </a>
</div>
```
# slider
додати в слайдері в  ```<a>``` перед ```<img>```
 ```
 <div class="slider-info">
    <p>Заголовок 1</p>
</div>
 ```
# posts
ГОЛОВНА СТОРІНКА
НОВИНИ/СТАТТІ

дата посту. додати на початок в ```<div class="content-top2"> ``` код
```
<div class="post-date">
    <p>22.01.2021</p>
</div>
```
пункт 1 замінити в хедері дані.
там зараз зроблено картиною(``` <img src="/images/contacts_ua.jpg" width="325" height="136">```). заміняєм картинку на
```
<div class="sche-d">
    <div class="sche-d-d">
        <div class="schedule">
            <img src="/images/clock.svg" alt="">
            <div class="right-schedule">
                <span>пн-чт: 10:00-19:00</span>
                <span>пт: 10:00-18:00</span>
                <span>обід: 13:00-14:00</span>
                <span>сб, нд – вихідні</span>
            </div>
        </div>

        <div class='header-language-change'>
            <a href="http://dobrabiblioteka.cv.ua/ua" title="Українська">
                <img src="/images/ua.gif" width="18" height="12" style="margin-right:3px;">
            </a>
            <a href="http://dobrabiblioteka.cv.ua/ru" title="Русский">
                <img src="/images/ru.gif" width="18" height="12" style="margin-right:3px;">
            </a>
            <a href="http://dobrabiblioteka.cv.ua/en" title="English">
                <img src="/images/en.gif" width="18" height="12" style="margin-right:3px;">
            </a>
            <a href="http://dobrabiblioteka.cv.ua/de" title="German">
                <img src="/images/de.gif" width="18" height="12" style="margin-right:3px;">
            </a>
        </div>
    </div>
    <div class="header-phone">
        <a href="tel:+380372559148" class="phone-d">
            <img src="/images/phone.svg" alt="phone">
            +38 (0372) 559148
        </a>
        <a href="mailto:dobrabiblioteka@gmail.com" class="email-d">
            <img src="/images/mail.svg" alt="mail">
            dobrabiblioteka@gmail.com
        </a>

    </div>

</div>
```
видаляєш блок з мовами (```<div style="width:100px; position:absolute;margin-left: 690px; margin-top: 50px;"> ```)

# footer
1) зліва є 
```
<td width="336" valign="top" style="padding-top:69px;">Бібліотека Чернівці <br>
© 2011 www.dobrabiblioteka.cv.ua</td>
```
сюди треба вставити цей код (на початок в <td> перед Бібліотека Чернівці)
 
```
 <ul class="footer-soc-2">
    <li class="pos">
        <a href="https://goo.gl/maps/tvRJ2vsufcjeiYV87" class="header-address flex-center-y">м. Чернівці<br>вул. Українська, 22</a>
    </li>
    <li class="fb">
        <a href="https://www.facebook.com/MunicipalLibraryDobryanskoho/" class=""></a>
    </li>
    <li class="yt">
        <a href="https://www.youtube.com/channel/UCudmTBA12ws4Lrx40kBbPQg/videos" class=""></a>
    </li>
</ul>
 <div class="to-top">
    <a href="#" class="arrow">

    </a>
</div>
```

 
