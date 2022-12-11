"use strict";

//自訂變數常數
var cartStr = "";
var addCartList = []; //初始化商品資料

var data = [{
  "id": 0,
  "name": "香蒜奶油麵包",
  "imgUrl": "./assets/images/bread-1.jpg",
  "category": "麵包",
  "description": "採用進口奶油、添加老麵、不加糖，搭配手工香蒜醬，口感酥脆外皮Q彈。",
  "price": 89,
  "unit": "/條"
}, {
  "id": 1,
  "name": "蜂蜜燕麥雜糧",
  "imgUrl": "./assets/images/bread-2.jpg",
  "category": "麵包",
  "description": "高品質蜂蜜丁、純燕麥再加上伯爵茶葉，低溫發酵12小時，烘焙出誘人的香氣。",
  "price": 165,
  "unit": "/條"
}, {
  "id": 2,
  "name": "輕牛角可頌",
  "imgUrl": "./assets/images/bread-3.jpg",
  "category": "麵包",
  "description": "經典法式早餐可頌，16層推疊出香酥鬆脆的金黃酥皮。",
  "price": 190,
  "unit": "/袋5入"
}, {
  "id": 3,
  "name": "招牌肉桂捲",
  "imgUrl": "./assets/images/bread-4.jpg",
  "category": "麵包",
  "description": "扎實的楓糖麵包體配上每一層裹滿的肉桂奶油醬，搭配微苦的核桃，肉桂控的你不能錯過。",
  "price": 85,
  "unit": "/個"
}, {
  "id": 4,
  "name": "法國鄉村麵包",
  "imgUrl": "./assets/images/bread-5.jpg",
  "category": "麵包",
  "description": "有別於一般鄉村麵包，採用風味老麵慢慢發酵，適合喜歡吃軟質麵包但不喜歡有奶蛋油糖等材料的人。",
  "price": 160,
  "unit": "/個"
}, {
  "id": 5,
  "name": "經典原味生吐司",
  "imgUrl": "./assets/images/bread-6.jpg",
  "category": "麵包",
  "description": "日本烏越麵粉X北海道鮮奶<br>小麥的烘焙氣息，伴隨著誘人奶油香氣均勻纏綿在吐司內裡。",
  "price": 145,
  "unit": "/條"
}, {
  "id": 6,
  "name": "法芙娜70%巧克力蛋糕",
  "imgUrl": "./assets/images/bread-7.jpg",
  "category": "甜點",
  "description": "嚴選法芙娜70%瓜納拉黑巧克力，融入法國伊斯尼82%奶油， 每一口都絲滑柔順綿密紮實。",
  "price": 520,
  "unit": "/個6吋"
}, {
  "id": 7,
  "name": "脆皮檸檬優格泡芙",
  "imgUrl": "./assets/images/bread-8.jpg",
  "category": "甜點",
  "description": "嚴選新鮮四季檸檬，搭配北海道十勝四葉鮮乳，酥脆波蘿外皮+冰淇淋般的飽滿內餡。",
  "price": 190,
  "unit": "/盒6入"
}, {
  "id": 8,
  "name": "香橙慕斯栗子蛋糕",
  "imgUrl": "./assets/images/bread-9.jpg",
  "category": "甜點",
  "description": "以栗子海綿蛋糕為基底，與台灣特色水果–金桔、金棗、柳橙三種水果而製成的香橙慕斯。",
  "price": 125,
  "unit": "/個"
}];
console.log(data); //渲染商品卡片

var cardArea = document.querySelector(".ticketCard-area");

function renderCard() {
  var content = "";
  data.forEach(function (item) {
    content += "<li class=\"ticketCard\">\n    <div class=\"ticketCard-img\">\n      <a href=\"#\">\n        <img src=\"".concat(item.imgUrl, "\" alt=\"\">\n      </a>\n      <div class=\"ticketCard-region\">").concat(item.category, "</div>\n    </div>\n    <div class=\"ticketCard-content\">\n      <div>\n        <h3>\n          <a href=\"#\" class=\"ticketCard-name\">").concat(item.name, "</a>\n        </h3>\n        <p class=\"ticketCard-description\">\n        ").concat(item.description, "\n        </p>\n      </div>\n      <div class=\"ticketCard-info\">\n        <p class=\"ticketCard-price me-2\">\n          NT$ <span id=\"ticketCard-price\">").concat(item.price, "</span>\n        </p>\n        <P>").concat(item.unit, "</P>\n      </div>\n      <div class=\"btn cart-btn p-3 text-center btn").concat(item.id, "\">\n        \u6211\u8981\u9810\u8CFC      \n      </div>\n    </div>\n  </li>");
    cardArea.innerHTML = content; // console.log(content);
  });
}

renderCard(); //按鈕：加入預購清單

var cart = document.querySelector(".cart-body-area"); // const btn0 = document.querySelector(".btn0");
// btn0.addEventListener('click', function(e) {
//   addCart(0);
// });

$(function () {
  var btn0 = jQuery('.btn0');
  btn0.click(function (e) {
    alert('已加入預購單!');
    addCart(0);
  });
});
$(function () {
  var btn1 = jQuery('.btn1');
  btn1.click(function (e) {
    alert('已加入預購單!');
    addCart(1);
  });
});
$(function () {
  var btn2 = jQuery('.btn2');
  btn2.click(function (e) {
    alert('已加入預購單!');
    addCart(2);
  });
});
$(function () {
  var btn3 = jQuery('.btn3');
  btn3.click(function (e) {
    alert('已加入預購單!');
    addCart(3);
  });
});
$(function () {
  var btn4 = jQuery('.btn4');
  btn4.click(function (e) {
    alert('已加入預購單!');
    addCart(4);
  });
});
$(function () {
  var btn5 = jQuery('.btn5');
  btn5.click(function (e) {
    alert('已加入預購單!');
    addCart(5);
  });
});
$(function () {
  var btn6 = jQuery('.btn6');
  btn6.click(function (e) {
    alert('已加入預購單!');
    addCart(6);
  });
});
$(function () {
  var btn7 = jQuery('.btn7');
  btn7.click(function (e) {
    alert('已加入預購單!');
    addCart(7);
  });
});
$(function () {
  var btn8 = jQuery('.btn8');
  btn8.click(function (e) {
    alert('已加入預購單!');
    addCart(8);
  });
});

function addCart(id) {
  addCartList.push({
    name: data[id].name,
    price: data[id].price
  });
  console.log(addCartList);
  var CartListStr = "";
  addCartList.forEach(function (item, index) {
    CartListStr += "<div class=\"row col-md-8 py-3 mx-auto cart-body\" >\n    <div class=\"col-5\">".concat(item.name, "</div>\n    <div class=\"col-3\">1</div>\n    <div class=\"col-3\">").concat(item.price, "</div>\n    <div class=\"col-1 clear btn\" data-num=\"").concat(index, "\">\n    X \n    </div>\n    </div>");
    console.log(CartListStr);
    cart.innerHTML = CartListStr;
  });
} //刪除單筆預購品項


function addClear() {
  cart.addEventListener('click', function (e) {
    console.log(e);

    if (e.target.getAttribute("class") !== "col-1 clear btn") {
      return;
    } else {
      var num = e.target.getAttribute("data-num");
      console.log(num);
      addCartList.splice(num, 1);
      console.log(addCartList);
      alert("刪除成功！");
      var CartListStr = "";
      console.log(CartListStr);

      if (num == 0) {
        console.log("沒資料了");
        cart.innerHTML = "<div class=\"row col-md-8 py-3 mx-auto cart-body\" >\n        <div class=\"col-5\">\u76EE\u524D\u672A\u9078\u8CFC</div>\n        <div class=\"col-3\"></div>\n        <div class=\"col-3\"></div>\n        <div class=\"col-1 clear btn\">\n        </div>\n        </div>";
      }

      addCartList.forEach(function (item, index) {
        CartListStr += "<div class=\"row col-md-8 py-3 mx-auto cart-body\" >\n        <div class=\"col-5\">".concat(item.name, "</div>\n        <div class=\"col-3\">1</div>\n        <div class=\"col-3\">").concat(item.price, "</div>\n        <div class=\"col-1 clear btn\" data-num=\"").concat(index, "\">\n        X \n        </div>\n        </div>");
        console.log(CartListStr);
        cart.innerHTML = CartListStr;
      });
    }
  });
}

addClear(); //訂單送出跳出視窗
// console.log(jQuery)

$(function () {
  var orderBtn = jQuery('.orderInfo-btn');
  orderBtn.click(function (e) {
    if ($("#customerName").val().length === 0) {
      alert('請檢查欄位確實填寫');
      e.preventDefault();
      return;
    } else if ($("#customerPhone").val().length === 0) {
      alert('請檢查欄位確實填寫');
      e.preventDefault();
      return;
    } else if ($("#customerEmail").val().length === 0) {
      alert('請檢查欄位確實填寫');
      e.preventDefault();
      return;
    }

    alert('訂單已送出!'); //清空表單

    $("#customerName").val("");
    $("#customerPhone").val("");
    $("#customerEmail").val(""); //清空購物車

    cart.innerHTML = "<div class=\"row col-md-8 py-3 mx-auto cart-body\" >\n    <div class=\"col-5\">\u76EE\u524D\u672A\u9078\u8CFC</div>\n    <div class=\"col-3\"></div>\n    <div class=\"col-3\"></div>\n    <div class=\"col-1 clear btn\">\n    </div>\n    </div>"; //避免畫面重整

    e.preventDefault();
  });
});
//# sourceMappingURL=all.js.map
