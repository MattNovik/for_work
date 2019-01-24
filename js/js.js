var local_data = data;

    var numberClick = 1;

   window.onload = function () {

     for (var i = 0;i <local_data.length; i++) {


     var productPage = document.createElement('div');
     var productLeftPage = document.createElement('div');
        var productLogo = document.createElement('div');
          var imgLogo = document.createElement('img');
     var productMiddlePage = document.createElement('div');
       var middleTop = document.createElement('div');
          var middleTopLeft = document.createElement('div');
            var leftTextCode = document.createElement('span');
          var middleTopRight = document.createElement('div');  
            var rightTextInOut = document.createElement('span');
        var middleMiddleName = document.createElement('div');
        var middleBottomNeeded = document.createElement('div');
     var productRightPage = document.createElement('div');
      var price = document.createElement('div');
       var forClubCard = document.createElement('div');
       var totalPrice = document.createElement('div');
          var totalPriceWithCard = document.createElement('div');
          var roubleDark = document.createElement('img');
          var totalPriceWithoutCard = document.createElement('div');
          var roubleGray = document.createElement('img')
       var forUnit = document.createElement('div');
          var forMeter = document.createElement('span');
          var forPack = document.createElement('span');
        var howSold = document.createElement('div');
          var warning = document.createElement('img');
          var forPackMeter = document.createElement('div');
        var numberBuy = document.createElement('div');
          var totalNumber = document.createElement('div');
            var number = document.createElement('div');
            var topArrow = document.createElement('div');
            var bottomArrow = document.createElement('div');
          var basket = document.createElement('div');
            var basketImg = document.createElement('div');
            var basketName = document.createElement('div');
    

   productPage.className = "product_page";
     productLeftPage.className = "product_left_page";
        productLogo.className = "product_logo";
          imgLogo.className = "img_logo";
     productMiddlePage.className ="product_middle_page" ;
       middleTop.className ="middle_top" ;
          middleTopLeft.className ="middle_top_left" ;
            leftTextCode.className ="left_text_code" ;
          middleTopRight.className ="middle_top_right" ;  
            rightTextInOut.className = "right_text_in_out";
        middleMiddleName.className ="middle_middle_name";
        middleBottomNeeded.className = "middle_bottom_needed";
     productRightPage.className = "product_right_page";
       price.className = "price";
       forClubCard.className = "for_club_card";    
       totalPrice.className ="total_price" ;
          totalPriceWithCard.className ="total_price_with_card" ;
           roubleDark.className = "rouble_dark";
          totalPriceWithoutCard.className = "total_price_without_card";
           roubleGray.className = "rouble_gray";
       forUnit.className ="for_unit" ;
          forMeter.className ="for_meter" ;
          forPack.className = "for_pack";
        howSold.className = "how_sold";
          warning.className ="warning";
          forPackMeter.className ="for_pack_meter" ;
        numberBuy.className = "number_buy";
          totalNumber.className ="total_number" ;
            number.className = "number";
            topArrow.className = "top_arrow";
            topArrow.classList.add('spr_top_arrow');
            bottomArrow.className = "bottom_arrow";
            bottomArrow.classList.add('spr_bottom_arrow');
          basket.className = "basket";
            basketImg.className ="basket_img" ;
            basketImg.classList.add("spr_basket");
            basketName.className = "basket_name";



            


     
     imgLogo.src = "https:" + local_data[i].primaryImageUrl;
     imgLogo.style.width = "150px";
     imgLogo.style.height = "150px";
     leftTextCode.innerHTML = "Код: " + local_data[i].code.slice(5);
     if (local_data[i].isActive) {
     	rightTextInOut.innerHTML = "Наличие";
     }
     middleMiddleName.innerHTML = local_data[i].title;
     middleBottomNeeded.innerHTML = "<strong>Могут понадобиться: </strong>" + local_data[i].assocProducts;

     forClubCard.innerHTML = "<strong>По клубной карте</strong>";
     totalPriceWithCard.innerHTML = local_data[i].priceRetailAlt.toFixed(2);
     roubleDark.src = "images/rouble_b.svg";
     roubleDark.style.width = "23px";
     roubleDark.style.height = "23px";
     totalPriceWithoutCard.innerHTML = local_data[i].priceRetail.toFixed(2);
     roubleGray.src = "images/rouble_b.svg";
     roubleGray.style.width = "23px";
     roubleGray.style.height = "23px";
     forMeter.innerHTML = "За м.кв.";
     forPack.innerHTML = "За упаковку";
     warning.src = "images/unit--i.png";
     if (local_data[i].unitFull == "упаковка") {
     	forPackMeter.innerHTML = "Продается упаковками:<br/> 1 упак. = " + (1/local_data[i].unitRatioAlt).toFixed(2) + " м. кв.";
     }else if (local_data[i].unitFull == "штука") {
     	forPackMeter.innerHTML = "Продается штуками";
     }else if (local_data[i].unitFull == "метр погонный" ) {
     	forPackMeter.innerHTML = "Продается метрами"
     };
     number.innerHTML = numberClick;
     basketName.innerHTML = "В КОРЗИНУ";



     document.body.appendChild(productPage);

     productPage.appendChild(productLeftPage);
     productPage.appendChild(productMiddlePage);
     productPage.appendChild(productRightPage);

     	productLeftPage.appendChild(productLogo);
          productLogo.appendChild(imgLogo);
    productMiddlePage.appendChild(middleTop);
      middleTop.appendChild(middleTopLeft);
        middleTopLeft.appendChild(leftTextCode);
      middleTop.appendChild(middleTopRight);
        middleTopRight.appendChild(rightTextInOut);
    productMiddlePage.appendChild(middleMiddleName);
    productMiddlePage.appendChild(middleBottomNeeded);
    
    productRightPage.appendChild(price);
    price.appendChild(forClubCard);
    price.appendChild(totalPrice);
      totalPrice.appendChild(totalPriceWithCard);
        totalPriceWithCard.appendChild(roubleDark);
      totalPrice.appendChild(totalPriceWithoutCard);
         totalPriceWithoutCard.appendChild(roubleGray);
    price.appendChild(forUnit);
      forUnit.appendChild(forMeter);
      forUnit.appendChild(forPack);
    productRightPage.appendChild(howSold);
      howSold.appendChild(warning);
      howSold.appendChild(forPackMeter);
    productRightPage.appendChild(numberBuy);
      numberBuy.appendChild(totalNumber);
        totalNumber.appendChild(number);
        totalNumber.appendChild(topArrow);
        totalNumber.appendChild(bottomArrow);
    numberBuy.appendChild(basket);
      basket.appendChild(basketImg);
      basket.appendChild(basketName);

       /*put img at first productPage from local*/
     var imgLogoFirstChild = document.querySelector(".img_logo:first-child");
     imgLogoFirstChild.src = "images/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg";


     }
   var topArrowSelect = document.querySelectorAll('.top_arrow');
   var bottomArrowSelect = document.querySelectorAll('.bottom_arrow');
   var numberSelect = document.querySelectorAll('.number');

    for (var i = 0;i < topArrowSelect.length;i++) {
    	topArrowSelect[i].addEventListener("click",function() {
    		numberClick += 1;
    		document.querySelectorAll(".number").innerHTML = numberClick;
    	});
    	bottomArrowSelect[i].addEventListener("click",function() {
    		if (numberClick == 0) {
    			 return;
    		}
    		numberClick -= 1;
    		document.querySelector(".number:first-child").innerHTML = numberClick;
    	});

    }

     
 
 };
