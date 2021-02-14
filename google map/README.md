```
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxfTnzz6HM2jdqIIiM3wkSzfU8mz1k_zU"></script>
```

html
```
<div class="google_map_zip">
<section class="areas_serve re-cnt st-text">
    <div class="info_block">

    </div>
    <div id='map_canvas'></div>
</section>
<div class="searchBlock">
    <input type="text" value="89109" id="searchByZip">
    <button class="searchByZipBtn">search</button>

</div>
</div>

<style>
        .areas_serve .info_block {
            width: 40%;
        }

        #map_canvas {
            width: 60%;
        }

        .areas_serve {
            min-height: 400px;
            width: 100%;
            display: flex;
        }
    </style>
```

Дані які мають приходити з адмінки
```
 [
        {
            zip: '89135',
            descrTitle: "89135",
            descrContent: "<p>We are serve this zip</p>",
            link: ''
        },
        {
            zip: '89117',
            descrTitle: "89117",
            descrContent: "<p>We are serve this zip</p>"
        }
    ]
```
