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
