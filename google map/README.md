zipDataJson файлик містить інфу з координатами регіонів для кожного зіпкоду (в даному випадку містить лише для штату невада)
Можна його підключити як просто окремий js файл, або передавати з беку ajax-om. 
 
```
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxfTnzz6HM2jdqIIiM3wkSzfU8mz1k_zU"></script>
<script type='text/javascript' src='/js/zipData.js'></script>
<script type='text/javascript' src='/js/google-map-marker.js'></script>

```

html
```
<div class="google_map_zip">
    <section class="areas_serve re-cnt st-text">
        <div class='left-map'>
            <div class="success_search_zip">
                <p><span class="zip"></span> may be outside our service area</p>
                <span>Please try another location</span>
            </div>
            <div class="info_block">

            </div>
            <div id='map_canvas'></div>
        </div>
        <div class="right-map">
            <div class="searchBlock">
                <div class="do_serve">
                    <p>Do we serve your area?</p>
                </div>
                <div class="do_serve_bottom">
                    <input type="text" value="" placeholder="Enter your zip code" id="searchByZip">
                    <button class="searchByZipBtn">search</button>
                </div>


            </div>
        </div>
    </section>
</div>

```

Дані які мають приходити з адмінки
```
 [
        {
            zip: '89135',
            descrTitle: "89135",
             imgUrl: "",
            descrContent: "<p>We are serve this zip</p>",
            link: ''
        },
        {
            zip: '89117',
            descrTitle: "89117",
            imgUrl: "",
            descrContent: "<p>We are serve this zip</p>"
            link: ''
        }
    ]
```
- zip - зіп код
- imgUrl: посилання на картинку(відображається в попапі),
- descrTitle - те що буде відображається як заголовок попапа для маркера
- descrContent - те що відображається в попапі(контент для попапа). тут бажано передавати html
- link - посилання на сторінку (возможностью перейти на отдельную полноформатную страницу) 

1)Зробити ендпоінт, щоб я міг отримати дані  з адмінки.

-
2)При зміні даних в адмінці - треба робити запрос до api для отримання координат границь зіпкодів - зберігати ці дані нам на сервер  - зробити ендпоінт для мене, щоб я з фронту міг витягнути ці дані. 
- Приклад запросу 
```
<?php

$request = new HttpRequest();
$request->setUrl('https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData([
	'zipcode' => '22066,20003,20019,20015,20854'
]);

$request->setHeaders([
	'x-rapidapi-key' => 'd5b458ed0amsh46ed8e0eb522572p14d288jsn32cbfb93a3ba',
	'x-rapidapi-host' => 'vanitysoft-boundaries-io-v1.p.rapidapi.com'
]);

try {
	$response = $request->send();

	echo $response->getBody();
} catch (HttpException $ex) {
	echo $ex;
}
```
