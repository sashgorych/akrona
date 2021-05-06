  - Результат пошуку. щоб показати треба додати клас active до search-results.
  - На пк вставити в div.search після table
  - На моб вставити вставити в div.search (всередині div.top-section) після form
   ```
   <div class="search-results">
        <ul>
            <li>
                <a href="#" class="image">
                    <img src="/thumbnail.php?page=catalog/w159h159&amp;file=catalog/IMAGES/pic00122108-01.jpg"
                         height="159" width="158">
                </a>
                <div class="item_text_info">
                    <span><a href="#">Гітара електро CORT KX507 Multi Scale (SDB)</a></span>
                    <span class="price">20650 грн </span>

                </div>
            </li>
             <li>
                <a href="#" class="image">
                    <img src="/thumbnail.php?page=catalog/w159h159&amp;file=catalog/IMAGES/pic00122108-01.jpg"
                         height="159" width="158">
                </a>
                <div class="item_text_info">
                    <span><a href="#">Гітара електро CORT KX507 Multi Scale (SDB)</a></span>
                    <span class="price">20650 грн </span>

                </div>
            </li>
        </ul>
    </div>
```

# Немає в наявності
- Для каталогу
вставити ```<span class="no-items">Немає в наявності</span>``` в ```<td>``` над ```<a class="name"> ``` (де знаходиться назва товару)
- Для сторінки товару:
Вставити ```<span class="no-items">Немає в наявності</span> ``` в ```div.w44w ``` над ```<span class='price'> ```
# Кнопка купити
Замінити 
```
<input type="image" id="imageField2" src="/images/buy-button_ua.gif">
```
на
```
<div class="button_buy_container">
  <div class="button_buy_btn">
    <input type="image" id="imageField2" src="">
    <span>Купити</span>
  </div>
</div>
```
