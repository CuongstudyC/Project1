const showproduct =document.getElementsByClassName("product");
for (var i=8;i<showproduct.length;i++){
  showproduct[i].style.display = "none";
}

//Sort increased:
function sortByPriceIncrease(products) {
    products.sort(function(a, b) {
        var priceA = a.getAttribute("data-price"); 
        var priceB = b.getAttribute("data-price");
        return priceA -priceB;
    })
  }
  
  var sortPriceBtn = document.getElementById("sort-price-increase");
  
  sortPriceBtn.addEventListener("click", function() {

    for(var i=0; i<showproduct.length; i++){
        showproduct[i].style.display ="block";
    }
    // ----------------------------------------

    var productContainer = document.querySelector(".product-list");
    var products = Array.from(productContainer.children);
    sortByPriceIncrease(products);
    products.forEach(function(product) {
      productContainer.appendChild(product);
    })
    // -------------------------------------------
    if (sessionStorage.countpage ==3){
        for(var j=0; j<16; j++){
            showproduct[j].style.display ="none";
        }
        }
        else if (sessionStorage.countpage ==2){
            var i =0;
            while(i<showproduct.length){
                if (i>7 && i<16){
                    showproduct[i].style.display ="block";
                }
                else{
                    showproduct[i].style.display ="none";
                }
                i++;
            }
        }
        else {
            for(var j=8; j<showproduct.length; j++){
                showproduct[j].style.display ="none";
            }
        }
  })

  //Sort dereased:
  function sortByPriceDerease(products) {
    products.sort(function(a, b) {
        var priceA = a.getAttribute("data-price"); 
        var priceB = b.getAttribute("data-price");
        return priceB - priceA;
    })
  }
  
  var sortPriceBtn = document.getElementById("sort-price-derease");
  
  sortPriceBtn.addEventListener("click", function() {

    for(var i=0; i<showproduct.length; i++){
        showproduct[i].style.display ="block";
    }
    // -----------------------------------------
    var productContainer = document.querySelector(".product-list");
    var products = Array.from(productContainer.children);
    sortByPriceDerease(products);
    products.forEach(function(product) {
      productContainer.appendChild(product);
    })
    // -----------------------------------------
    if (sessionStorage.countpage ==3){
        for(var j=0; j<16; j++){
            showproduct[j].style.display ="none";
        }
        }
        else if (sessionStorage.countpage ==2){
            var i =0;
            while(i<showproduct.length){
                if (i>7 && i<16){
                    showproduct[i].style.display ="block";
                }
                else{
                    showproduct[i].style.display ="none";
                }
                i++;
            }
        }
        else {
            for(var j=8; j<showproduct.length; j++){
                showproduct[j].style.display ="none";
            }
        }
  })
// sessionStorage.countpage =0;

  function page1totalshop(){
    var products = document.getElementsByClassName("product");
    for (var i=0; i<8;i++){
        products[i].style.display ="block";
    }
    for (var i=8; i<products.length;i++){
        products[i].style.display ="none";
    }
    var active = document.getElementsByClassName("page-item");
    for (var j=0;j<3;j++){
        if (j==0){
        active[j].className ="page-item active";
        }
        else{
            active[j].className ="page-item";
        }
    }
    sessionStorage.countpage =1;
    return false;
  }

  function page2totalshop(){
    var products = document.getElementsByClassName("product");
    var active = document.getElementsByClassName("page-item");
    for (var j=0;j<3;j++){
        if (j==1){
        active[j].className ="page-item active";
        }
        else{
            active[j].className ="page-item";
        }
    }
    var i =0;
    while(i<products.length){
        if (i>7 && i<16){
            products[i].style.display ="block";
        }
        else{
            products[i].style.display ="none";
        }
        i++;
    }
    sessionStorage.countpage =2;
    return false;
  }

  function page3totalshop(){
    var active = document.getElementsByClassName("page-item");
    for (var j=0;j<3;j++){
        if (j==2){
        active[j].className ="page-item active";
        }
        else{
            active[j].className ="page-item";
        }
    }
    var products = document.getElementsByClassName("product");
        var i =0;
    while(i<products.length){
        if (i>15){
            products[i].style.display ="block";
        }
        else{
            products[i].style.display ="none";
        }
        i++;
    }
    sessionStorage.countpage=3;
    return false;
  }