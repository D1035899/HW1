// 透過宣告btn並賦予index.html的button的id: 'return_button'
let btn = document.getElementById('return_button')

// 當按鈕被點擊時，將網址導引至目標網站
btn.onclick = function () {
    location.href = 'https:\/\/www.worldcubeassociation.org';
}

