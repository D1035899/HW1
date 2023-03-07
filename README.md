# 作業1 負評救星-當機等候網頁

`
姓名: 張牧翔
學號: D1035899
`

- 目標網站: [https://www.worldcubeassociation.org/](https://www.worldcubeassociation.org/)
- 作業網站: [https://d1035899.github.io/HW1/](https://d1035899.github.io/HW1/)
- Code Repo: [https://github.com/D1035899/HW1](https://github.com/D1035899/HW1)

---

## 目錄

- [作業1 負評救星-當機等候網頁](#作業1-負評救星-當機等候網頁)
  - [目錄](#目錄)
  - [設計理念](#設計理念)
    - [目標網站介紹](#目標網站介紹)
    - [設計當機網頁的想法](#設計當機網頁的想法)
  - [Code 講解](#code-講解)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [心得](#心得)

---

## 設計理念

### 目標網站介紹

本次所使用的目標網站為[世界魔術方塊協會](https://www.worldcubeassociation.org/)的官方網站，該協會的理念是推廣魔術方塊，同時也會舉辦許多活動和比賽，並記錄參加者的成績。 其官網除了介紹魔術方塊以外，還包括紀錄各種類的方塊的世界紀錄，例如: 復原魔術方塊的最短時間等。

### 設計當機網頁的想法

- 需要讓使用者了解目前網頁無法處理用戶需求，也就是網頁當機
- 直覺的導引按鈕
- 搭配文字及圖片來點綴網頁
- 使用轉動的魔術方塊來讓網頁更加符合其風格

---

## Code 講解

> 其code的片段都透過註解來重點講解

### HTML

```html
<!DOCTYPE html>
<!-- 該網頁使用的語言 -->
<html lang="zh-TW">

<head>

  <!-- 此html所使用的字元集 -->
  <meta charset="utf-8">

  <!-- 視窗設定 -->
  <meta name="viewport" content="width=device-width">

  <!-- 引入樣式表 -->
  <link rel="stylesheet" href="style.css">

  <!-- 標題 -->
  <title>503 Service Unavailable</title>

</head>

<body>

<!-- 網頁頁首 <header> -->
<header>
  <h1>
    503 Service Unavailable
  </h1>
</header>

<br>
<br>
<h2>
  很抱歉，網頁目前無法處理您的需求，請稍後再試<br>
  您可以透過下列按鈕或連結來尋找相關資訊⬇️
</h2>
<div>
  <img id = 'rubik_cube' src="images/rubik's_cube.gif" alt="a rubik's cube spinning">
</div>
<div>
  <button type=button id='return_button'>
    <img src = 'images/WCA.svg' alt = "WCA logo">
    <span>返回首頁</span>
    <img src = 'images/WCA.svg' alt = "WCA logo">
  </button>
</div>
<div class = "pic">
  <a href = "https://www.facebook.com/WorldCubeAssociation">
    <img src = 'images/Facebook.png' alt = "WCA's Instagram page">
  </a>
</div>
<div class = "pic">
  <a href = "https://www.facebook.com/WorldCubeAssociation">
    <img src = 'images/Instagram.png' alt = "WCA's Facebook page">
  </a>
</div>
<div class = "pic">
  <a href="https://github.com/thewca/worldcubeassociation.org">
    <img id='github_icon' src="images/github-mark.png" alt = " WCA's web source code page">
  </a>

</div>

<!-- main.js讓按鈕被觸發有功能 -->
<script src="main.js"></script>

<!-- 網頁頁尾 <footer> -->

<footer  id = 'footer_bar'>
  <!-- 頁尾的每個 "footer_link" <a> 來放所需要的資訊並且點擊就可進入指定的網站 -->
  <div class = 'footer_menu'>
    <div class = "footer_link">
      <a href="https://www.worldcubeassociation.org/about">關於我們</a>
    </div>

    <div class = "footer_link">
      <a href="https://www.worldcubeassociation.org/faq">常見問題</a>
    </div>

    <div class = "footer_link">
      <a href="https://www.worldcubeassociation.org/contact">聯絡</a>
    </div>

    <div class = "footer_link">
      <a href="https://www.worldcubeassociation.org/privacy">隱私權</a>
    </div>

    <div class = "footer_link">
      <a href="https://www.worldcubeassociation.org/disclaimer" >免責聲明</a>
    </div>
  </div>
</footer>
</body>

```

### CSS

```css
/* 全域設定字體和文字置中 */
* {
  font-family: 微軟正黑體;
  text-align: center;
}

/* 設定網頁本身相關設定 */
html{
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

/* 調整標題大小 */
h1 {
  margin-top: 40px;
  font-size: 45px;
}

/* 設定網頁頁首的相關設定 */
header{
  background-color: #f8f8f8;
  position: relative;
  height: 60px;
}

/* 調整 rubik's cube.gif 的大小與位置 */
#rubik_cube {
  display: block;
  margin: 0 auto;
  width: 26%;
}

/* 設計按鈕的樣式 */
button{
  /* position: absolute; */
  /* display:block; */
  margin: 0 auto;
  width: 250px;
  height: 60px;
  border: 0;
  background-color: #999999;
  color: #fff;
  border-radius: 10px;
  font-size: 25px;
  cursor: pointer; /* 當游標碰到按鈕，將游標樣子從箭頭變成手套 */
}
/* 當游標移動到按鈕上所改變的樣式 */
button:hover {
  color: #c5c5c5;
  background-color: #9e9e9e;
  border: 5px #c5c5c5 solid;
}

/* 當游標點擊按鈕時所改變的樣式 */
button:active {
  background-color: #575757;
}
/* 調整頁尾的 <a> 的字體顏色以及相關設定 */
a {
  color: #000000;
  text-decoration: none; /* 讓該連結被點過也不會變色 */
}

/* 調整頁尾的 <a> 被游標碰到時的顏色 */
a:hover{
  color: #571aff;
}

/* 調整網頁頁尾的背景顏色以及位置大小 */
#footer_bar{
  border: 10px #f8f8f8 solid;
  background-color: #f8f8f8;
  position: relative;
  height: 25px;
  font-size: 20px;
}

/* 調整社群連結以及頁尾連結的排列方式: inline-block 可以使其變成水平並排*/
.footer_link ,.pic{
  display: inline-block;
  cursor: pointer;
}
```

### JavaScript

```jsx
// 透過宣告btn並賦予index.html的button的id: 'return_button'
let btn = document.getElementById('return_button')

// 當按鈕被點擊時，將網址導引至目標網站
btn.onclick = function () {
    location.href = 'https:\/\/www.worldcubeassociation.org';
}
```

---

## 心得

- 由於是第一次接觸HTML5，所以html、css、js的語法都還不熟悉 而且html和css之間的互動也還不太清楚，導致在寫這次作業的時候一直覺得卡卡的
- 有遇到一個蠻有趣的問題: `<script src="main.js"></script>`這段並不能隨便放。 因為我在寫button的功能時，我將上述的code放在`<head>`，導致在網頁在執行時，我的script早就先在`<head>`執行了，這樣會產生在`<body>`的button沒有任何作用，所以必須要將`<script>`放在button後面才會有作用
- 希望下次能夠更熟悉HTML5的語法與觀念，如此就能寫出更好的網頁
