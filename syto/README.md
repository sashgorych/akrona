# Блок внизу сторінки
вставити перед ```<footer>```
```
<div class="make-order-form-block default-padding-block">
  <div class="center">
    <div class="product-category-container-title">
      <h3>Зроби пробне замовлення</h3>
    </div>
    <form action="" id="" class="default_form">
      <div class="form-row">
        <div class="label">Ваше ім’я</div>
        <input class="all-cback-inp" value="" id="cback-inp-err-name" style="" placeholder="*П.І.Б." name="obj[data][name]" type="text">
        <span class="all-cback-inp-span cback-inp-error-text" id="cback-inp-err-name-span">*обов`язкове поле</span>
      </div>

      <div class="form-row">
        <div class="label">Ваш телефон</div>
        <input type="tel" class="all-cback-inp phone_mask" value="" style="" id="cback-inp-err-phone" placeholder="*Телефон" name="obj[data][phone]" im-insert="true">
        <span class="all-cback-inp-span cback-inp-error-text" id="cback-inp-err-phone-span">*обов`язкове поле</span>
      </div>
      <div class="form-row">
        <div class="label">Ваша почта</div>
        <input name="obj[data][email]" placeholder="Ваша почта*" class="" type="email">
        <span class="all-cback-inp-span cback-inp-error-text" id="">*обов`язкове поле</span>
      </div>
  <div class="form-row">
        <div class="label">Ваше місто</div>
        <input name="obj[data][city]" placeholder="Ваша почта*" class="" type="text">
        <span class="all-cback-inp-span cback-inp-error-text" id="">*обов`язкове поле</span>
      </div>

      <div id="recapcha-block" style="">
      </div>
      <span class="form-err-text all-cback-inp-span " id="cback-inp-err-captcha-span" style="display:none; position: relative;margin-top: 3px;text-align: left;">Підтвердіть що Ви не робот</span>
      <div class="form-row">
      <button type="submit" class="custom_button">Надіслати</button>
        <center>
          <img src="/images/loading.gif" class="loadnig-indicator" style="display: none;width:25px;">
          <div class="btn-mini" id="cback-result" style="display:none;font-size: 15px;color: green;margin-top: 20px;">Дякуємо за звернення! Наш менеджер зв`яжеться з вами найближчим часом</div>
        </center>
      </div>


    </form>
  </div>
</div>

```
# Попап
вставити біля ```div.popap-section ``` або перед ```</body>```
```
<div class="popup-section make-try-order">
  <div class="bg bg2"></div>
  <div class="close_p"></div>

  <div class="content">
    <div class="">
      <div class="center">
          <p class="popup-title">Зробіть пробне замовлення</p>
        <form action="" id="" class="default_form">
          <div class="form-row">
            <div class="label">Ваше ім’я</div>
            <input class="all-cback-inp" value="" id="cback-inp-err-name" style="" placeholder="*П.І.Б." name="obj[data][name]" type="text">
            <span class="all-cback-inp-span cback-inp-error-text" id="cback-inp-err-name-span">*обов`язкове поле</span>
          </div>

          <div class="form-row">
            <div class="label">Ваш телефон</div>
            <input type="tel" class="all-cback-inp phone_mask" value="" style="" id="cback-inp-err-phone" placeholder="*Телефон" name="obj[data][phone]" im-insert="true">
            <span class="all-cback-inp-span cback-inp-error-text" id="cback-inp-err-phone-span">*обов`язкове поле</span>
          </div>
          <div class="form-row">
            <div class="label">Ваша почта</div>
            <input name="obj[data][email]" placeholder="Ваша почта*" class="" type="email">
            <span class="all-cback-inp-span cback-inp-error-text" id="">*обов`язкове поле</span>
          </div>
          <div class="form-row">
            <div class="label">Ваше місто</div>
            <input name="obj[data][city]" placeholder="Ваша почта*" class="" type="text">
            <span class="all-cback-inp-span cback-inp-error-text" id="">*обов`язкове поле</span>
          </div>

          <div id="recapcha-block" style="">
          </div>
          <span class="form-err-text all-cback-inp-span " id="cback-inp-err-captcha-span" style="display:none; position: relative;margin-top: 3px;text-align: left;">Підтвердіть що Ви не робот</span>
          <div class="form-row">
            <button type="submit" class="custom_button">Надіслати</button>
            <center>
              <img src="/images/loading.gif" class="loadnig-indicator" style="display: none;width:25px;">
              <div class="btn-mini" id="cback-result" style="display:none;font-size: 15px;color: green;margin-top: 20px;">Дякуємо за звернення! Наш менеджер зв`яжеться з вами найближчим часом</div>
            </center>
          </div>


        </form>
      </div>
    </div>

  </div>
</div>
```
# Кнопка в хедері
Вставити в ```div.logo-img-header```
```
<a class="custom_button open_try_form">Зробити тестове замовлення</a>

```
