var local_data = data;


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
          var totalPriceWithoutCard = document.createElement('div');
       var forUnit = document.createElement('div');
          var forMeter = document.createElement('span');
          var forPack = document.createElement('span');
        var howSold = document.createElement('div');
          var warning = document.createElement('img');
          var forPackMeter = document.createElement('div');
        var numberBuy = document.createElement('div');
          var totalNumber = document.createElement('div');
            var number = document.createElement('span');
            var topArrow = document.createElement('img');
            var bottomArrow = document.createElement('img');
          var busket = document.createElement('div');
            var busketImg = document.createElement('img');
            var busketName = document.createElement('span');
    

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
          totalPriceWithoutCard.className = "total_price_without_card";
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
            bottomArrow.className = "bottom_arrow";
          busket.className = "busket";
            busketImg.className ="busket_img" ;
            busketName.className = "busket_name";



            


     
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
     totalPriceWithoutCard.innerHTML = local_data[i].priceRetail.toFixed(2);
     forMeter.innerHTML = "За м.кв.";
     forPack.innerHTML = "За упаковку";
     warning.src = "images/unit--i.png";
     if (local_data[i].unitFull == "упаковка") {
     	forPackMeter.innerHTML = "Продается упаковками: 1 упак. = " + (1/local_data[i].unitRatioAlt).toFixed(2) + " м. кв.";
     }else if (local_data[i].unitFull == "штука") {
     	forPackMeter.innerHTML = "Продается штуками";
     }else if (local_data[i].unitFull == "метр погонный" ) {
     	forPackMeter.innerHTML = "Продается метрами"
     };
     number.innerHTML = 1;
     busketName.innerHTML = "КОРЗИНА";



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
      totalPrice.appendChild(totalPriceWithoutCard);
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
    productRightPage.appendChild(busket);
      busket.appendChild(busketImg);
      busket.appendChild(busketName);

       /*put img at first productPage from local*/
     var imgLogoFirstChild = document.querySelector(".img_logo:first-child");
     imgLogoFirstChild.src = "images/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg";


     }

 
 };