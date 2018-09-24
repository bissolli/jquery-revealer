# jquery-revealer
Simple lightweight jQuery plugin to reveal elements on scrolling

[DEMO](https://bissolli.github.io/jquery-revealer/)

## Getting Started

### 1. Install package using NPM or download it from the repository;
```bash
    npm install jquery-revealer --save
```

### 2. Require [jQuery](https://jquery.com/) and Revealer
```html
    <script src="jquery.min.js"></script>
    <script src="jquery.revealer.min.js"></script>
```
or
```javascript
    require('jquery');
    require('jquery-revealer');
```

### 3. Include [animate.css](http://daneden.github.io/animate.css/)
```html
<head>
    ...
    <link rel="stylesheet" href="animate.min.css">
    ...
</head>
```

### 4. Add data attributes
```html
    <div data-animate="fadeInUp" data-duration="1.0s" data-delay="0.1s" data-iteration="1">see animation</div>
```

### 5. Call Revealer
```javascript
    $('[data-animate]').revealer();
```

## JavaScript Options
```javascript
    $('[data-animate]').revealer({
        mobile: false // disable animation on mobiles
    });
```
