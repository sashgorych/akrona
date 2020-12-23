

### js
```<script type='text/javascript' src='./js/insta-parser.js'></script>```
### style
```<link rel="stylesheet" href="./css/insta-parser.css">```

---
### using
#### html
```<div class="instagram-posts"></div> ```
#### js
```
 const instagramParser = new InstaParser();
    instagramParser.getMediaByLink({
        link:'https://www.instagram.com/international.selling/',
        postsCount:12,
        container: '.instagram-posts',
    });
```    
addition properties:
 - use custom render function: 
 ```
 const instagramParser = new InstaParser();
    instagramParser.getMediaByLink({
        link:'https://www.instagram.com/international.selling/',
        postsCount:12,
         render: 'customFunction',
         renderFunction: functionName(media)
    });
 ```
 ```media = [{
caption: string  - post caption
comment: number - comment count
displayUrl: string
likes: number - like count
owner: {id: "", username: ""} 
thumbnailUrl: ""  - img src
thumbnail_resources:[{
                      config_height: number
                      config_width: number
                      src:""
}] 
url: string - post src
}]
```
Standart render
 ![Alt-текст](https://github.com/sashgorych/akrona/blob/master/insta.jpg "Орк")
 ```
 <a href="" target="_blank" rel="noopener noreferrer" class="instagram-photo">
 <img src="" alt="">
 <div class="post_icons">
    <ul>
        <li>
            <span class="inst-icon icon-like"></span>
            <span class="inst-count">4</span>
        </li>
        <li>
            <span class="inst-icon icon-comment"></span>
            <span class="inst-count">0</span>
        </li>
    </ul>
</div>
</a>
```
