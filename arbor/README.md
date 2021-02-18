1) Ціна. стара/акційна
- Якщо товар не акційний то ціну записувати в old-price
- ```<span class="price_item">Ціна від: </span>``` виводиться не в усіх товарах. там є якась умова виводу, так що не загуби це
Зараз виводиться просто ```<div class="catalog-title">ціна .....</div> ```
Треба замінити на:

```
<div class="catalog-title">
    <span class="price_item">Ціна від: </span>
    <p class="old-price">530</p>
    <p class="new-price">510</p>
    <span>грн./кв.м</span>
</div>
```

2) Значок акція
- В ```<li>``` товару в самий початок додати такий код:

```
<div class="stock_product">
    <p>Акція</p>
    <span>-20%</span>
</div>
```

3) Таймер
В продукті є ``` <div class='img-block'>``` в ньому є ```<a>``` біля неї треба вставити код для таймера. щоб вийшло так 
```
<div class="img-block">
    <div class="stock_timer"></div>
    <a href=""><img></a>
</div>
```

Код таймера:
```
<div class="stock_timer">
    <p class="end_date" style="display: none;">Aug 10, 2021 00:00:00</p>
    <span class="timer_title">До конца акции:</span>
    <div class="ul">
        <div class="li"><span class="days">-0</span></div>
        <div class="dots li"><p>:</p></div>
        <div class="li"><span class="hours">0</span></div>
        <div class="dots li"><p>:</p></div>
        <div class="li"><span class="minutes">0</span></div>
        <div class="dots li"><p>:</p></div>
        <div class="li"><span class="seconds">0</span></div>
    </div>
</div>
```
В ```p.end_date ``` треба вставити дату кінця акції так щоб js міг зчитати цю дату
