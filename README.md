# jQuery Revealer
Simple lightweight jQuery plugin to reveal elements on scrolling - [DOCS](https://bissolli.github.io/jquery-revealer/)

[![npm](https://img.shields.io/npm/v/jquery-revealer.svg)](https://www.npmjs.com/package/jquery-revealer)
[![npm](https://img.shields.io/npm/dt/jquery-revealer.svg)](https://www.npmjs.com/package/jquery-revealer)
[![npm](https://img.shields.io/npm/l/jquery-revealer.svg)](https://github.com/bissolli/jquery-revealer/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/bissolli/jquery-revealer.svg)](https://github.com/bissolli/jquery-revealer/stargazers)
[![gzip size](http://img.badgesize.io/https://unpkg.com/jquery-revealer?compression=gzip)](https://github.com/bissolli/jquery-revealer)

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


## Methods
```javascript
$('[data-animate]').revealer('bind');
```
