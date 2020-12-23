### js
```<script type='text/javascript' src='./js/insta-parser.js'></script>```
### style
```<link rel="stylesheet" href="./css/insta-parser.css">```

---
### using
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
         process: 'customFunction',
         processFunction: functionName
    });
 ```
    
#### html
```<div class="instagram-posts"></div> ```
