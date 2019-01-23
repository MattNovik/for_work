var local_data = data;
   window.onload = function () {

     var productPage = document.createElement('div');
     var productLeftPage = document.createElement('div');
        var productLogo = document.createElement('div');
        var imgLogo = document.createElement('img');
     var productMiddlePage = document.createElement('div');
       var middleTop = document.createElement('div');
          var middleTopLeft = document.createElement('div');
            var leftText = document.createElement('span');
            var leftTextCode = document.createElement('span');
          var middleTopRight = document.createElement('div');  
            var rightTextInOut = document.createElement('span');
        var middleMiddleName = document.createElement('div');
        var middleBottomNeeded = document.createElement('div');
     var productRightPage = document.createElement('div');
     var cre = document.body;

     
     productLeftPage.innerHTML = local_data[0].title;
     productMiddlePage.innerHTML = local_data[0].unit;
     productRightPage.innerHTML = local_data[0].priceRetail;

     cre.appendChild(productPage);
     productPage.appendChild(productLeftPage);
     productPage.appendChild(productMiddlePage);
     productPage.appendChild(productRightPage);


     alert("finish");
 };