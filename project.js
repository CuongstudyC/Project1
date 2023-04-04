function comein(){
    var show =document.getElementsByTagName("ul");
    show[6].style.display ="block";
    show[7].style.display ="none";
    show[8].style.display ="none";
    show[9].style.display ="none";
    show[10].style.display ="none";
    
}
function comeout(){
    var show =document.getElementsByTagName("ul");
    show[6].style.display ="none";
}
function comein1(){
    var show =document.getElementsByTagName("ul");
    show[7].style.display ="block";
    show[6].style.display ="none";
    show[8].style.display ="none";
    show[9].style.display ="none";
    show[10].style.display ="none";
}
function comeout1(){
    var show =document.getElementsByTagName("ul");
    show[7].style.display ="none";
}
function comein2(){
    var show =document.getElementsByTagName("ul");
    show[8].style.display ="block";
    show[6].style.display ="none";
    show[7].style.display ="none";
    show[9].style.display ="none";
    show[10].style.display ="none";
}
function comeout2(){
    var show =document.getElementsByTagName("ul");
    show[8].style.display ="none";
}
function comein3(){
    var show =document.getElementsByTagName("ul");
    show[9].style.display ="block";
    show[7].style.display ="none";
    show[8].style.display ="none";
    show[6].style.display ="none";
    show[10].style.display ="none";
}
function comeout3(){
    var show =document.getElementsByTagName("ul");
    show[9].style.display ="none";
}
function comein4(){
    var show =document.getElementsByTagName("ul");
    show[10].style.display ="block";
    show[7].style.display ="none";
    show[8].style.display ="none";
    show[9].style.display ="none";
    show[6].style.display ="none";
}
function comeout4(){
    var show =document.getElementsByTagName("ul");
    show[10].style.display ="none";
}

//-------------------------------------------------------------------------------------------------------------------------

//khai báo 1 lần
const cartcount1 = document.getElementById("Cart--count--for--all");
const totalcheck =document.getElementById("TotalCheck");
const yourcart =document.getElementById("Your--cart");
const lastcart =document.getElementById("Last--cart");
const cartnameproduct = document.getElementById("Cart--count--for--all");

//khai báo nhiều lần
//product 1:
const number1 = document.getElementsByClassName("number--product1");
const hiden1 =document.getElementsByClassName("product--diamond1");

//product 2:
const numberp2 = document.getElementsByClassName("number--product2");
const hiden2 =document.getElementsByClassName("product--diamond2");

//product 3:
const numberp3 = document.getElementsByClassName("number--product3");
const hiden3 =document.getElementsByClassName("product--diamond3");

//product 4:
const numberp4 = document.getElementsByClassName("number--product4");
const hiden4 =document.getElementsByClassName("product--diamond4");

//product 5:
const numberp5 = document.getElementsByClassName("number--product5");
const hiden5 =document.getElementsByClassName("product--diamond5");

//product 6:
const numberp6 = document.getElementsByClassName("number--product6");
const hiden6 =document.getElementsByClassName("product--diamond6");

//product 7:
const numberp7 = document.getElementsByClassName("number--product7");
const hiden7 =document.getElementsByClassName("product--diamond7");

//product 8:
const numberp8 = document.getElementsByClassName("number--product8");
const hiden8 =document.getElementsByClassName("product--diamond8");

//product 9:
const numberp9 = document.getElementsByClassName("number--product9");
const hiden9 =document.getElementsByClassName("product--diamond9");

//product 10:
const numberp10 = document.getElementsByClassName("number--product10");
const hiden10 =document.getElementsByClassName("product--diamond10");

//product 11:
const numberp11 = document.getElementsByClassName("number--product11");
const hiden11 =document.getElementsByClassName("product--diamond11");

//product 12:
const numberp12 = document.getElementsByClassName("number--product12");
const hiden12 =document.getElementsByClassName("product--diamond12");

//product 13:
const numberp13 = document.getElementsByClassName("number--product13");
const hiden13 =document.getElementsByClassName("product--diamond13");

//product 14:
const numberp14 = document.getElementsByClassName("number--product14");
const hiden14 =document.getElementsByClassName("product--diamond14");

//product 15:
const numberp15 = document.getElementsByClassName("number--product15");
const hiden15 =document.getElementsByClassName("product--diamond15");

//product 16:
const numberp16 = document.getElementsByClassName("number--product16");
const hiden16 =document.getElementsByClassName("product--diamond16");

//product 17:
const numberp17 = document.getElementsByClassName("number--product17");
const hiden17 =document.getElementsByClassName("product--diamond17");

//product 18:
const numberp18 = document.getElementsByClassName("number--product18");
const hiden18 =document.getElementsByClassName("product--diamond18");

//product 19:
const numberp19 = document.getElementsByClassName("number--product19");
const hiden19 =document.getElementsByClassName("product--diamond19");

//product 20:
const numberp20 = document.getElementsByClassName("number--product20");
const hiden20 =document.getElementsByClassName("product--diamond20");

//product 21:
const numberp21 = document.getElementsByClassName("number--product21");
const hiden21 =document.getElementsByClassName("product--diamond21");

//product 22:
const numberp22 = document.getElementsByClassName("number--product22");
const hiden22 =document.getElementsByClassName("product--diamond22");

//product 23:
const numberp23 = document.getElementsByClassName("number--product23");
const hiden23 =document.getElementsByClassName("product--diamond23");

//product 24:
const numberp24 = document.getElementsByClassName("number--product24");
const hiden24 =document.getElementsByClassName("product--diamond24");

// ---------------------------------------------------------------------------------------------------------------

   //chỉ khai báo 1 lần
   const Nocart =document.getElementsByClassName("No--cart");

//cho tất cả về ==0;
if (localStorage.countRemove <= 0 || isNaN(localStorage.count) == true){
    //default:
    localStorage.count=0;
    localStorage.TotalForAll=0;
    //product 1:
    localStorage.sum1=0;
    localStorage.soluong1=0;
    localStorage.soluongTotal1=0;
    //product 2:
    localStorage.sum2=0;
    localStorage.soluong2=0;
    localStorage.soluongTotal2=0;
    //product 3:
    localStorage.sum3=0;
    localStorage.soluong3=0;
    localStorage.soluongTotal3=0;
   //product 4:
   localStorage.sum4=0;
   localStorage.soluong4=0;
   localStorage.soluongTotal4=0;
  //product 5:
  localStorage.sum5=0;
  localStorage.soluong5=0;
  localStorage.soluongTotal5=0;
  //product 6:
  localStorage.sum6=0;
  localStorage.soluong6=0;
  localStorage.soluongTotal6=0;
  //product 7:
  localStorage.sum7=0;
  localStorage.soluong7=0;
  localStorage.soluongTotal7=0;
 //product 8:
 localStorage.sum8=0;
 localStorage.soluong8=0;
 localStorage.soluongTotal8=0;
  //product 9:
  localStorage.sum9=0;
  localStorage.soluong9=0;
  localStorage.soluongTotal9=0;
 //product 10:
 localStorage.sum10=0;
 localStorage.soluong10=0;
 localStorage.soluongTotal10=0;
  //product 11:
  localStorage.sum11=0;
  localStorage.soluong11=0;
  localStorage.soluongTotal11=0;
   //product 12:
   localStorage.sum12=0;
   localStorage.soluong12=0;
   localStorage.soluongTotal12=0;
    //product 13:
    localStorage.sum13=0;
    localStorage.soluong13=0;
    localStorage.soluongTotal13=0;
 //product 14:
 localStorage.sum14=0;
 localStorage.soluong14=0;
 localStorage.soluongTotal14=0;
 //product 15:
 localStorage.sum15=0;
 localStorage.soluong15=0;
 localStorage.soluongTotal15=0;
 //product 16:
 localStorage.sum16=0;
 localStorage.soluong16=0;
 localStorage.soluongTotal16=0;
 //product 17:
 localStorage.sum17=0;
 localStorage.soluong17=0;
 localStorage.soluongTotal17=0;
 //product 18:
 localStorage.sum18=0;
 localStorage.soluong18=0;
 localStorage.soluongTotal18=0;
 //product 19:
 localStorage.sum19=0;
 localStorage.soluong19=0;
 localStorage.soluongTotal19=0;
 //product 20:
 localStorage.sum20=0;
 localStorage.soluong20=0;
 localStorage.soluongTotal20=0;
 //product 21:
 localStorage.sum21=0;
 localStorage.soluong21=0;
 localStorage.soluongTotal21=0;
  //product 22:
  localStorage.sum22=0;
  localStorage.soluong22=0;
  localStorage.soluongTotal22=0;
   //product 23:
   localStorage.sum23=0;
   localStorage.soluong23=0;
   localStorage.soluongTotal23=0;
     //product 24:
     localStorage.sum24=0;
     localStorage.soluong24=0;
     localStorage.soluongTotal24=0;
}


//-------------------------------------------------------------------------------------------------------------------
if (localStorage.count >0){
    //khai báo 1 lần
    cartcount1.style.display="inline-block";
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    //khai báo nhiều lần:
    //product 1:
    var show1 =document.getElementsByClassName("product--diamond1");
    show1[0].style.display="block";
    if (localStorage.tontai1 ==0){
        show1[0].style.display="none";
    }
    //product 2:
    var show2 =document.getElementsByClassName("product--diamond2");
    show2[0].style.display="block";
    if (localStorage.tontai2 ==0){
        show2[0].style.display="none";
    }
    //product 3:
    var show3 =document.getElementsByClassName("product--diamond3");
    show3[0].style.display="block";
    if (localStorage.tontai3 ==0){
        show3[0].style.display="none";
    }
   //product 4:
   var show4 =document.getElementsByClassName("product--diamond4");
   show4[0].style.display="block";
   if (localStorage.tontai4 ==0){
       show4[0].style.display="none";
   }
   //product 5:
   var show5 =document.getElementsByClassName("product--diamond5");
   show5[0].style.display="block";
   if (localStorage.tontai5 ==0){
       show5[0].style.display="none";
   }
    //product 6:
    var show6 =document.getElementsByClassName("product--diamond6");
    show6[0].style.display="block";
    if (localStorage.tontai6 ==0){
        show6[0].style.display="none";
    }  
    //product 7:
    var show7 =document.getElementsByClassName("product--diamond7");
    show7[0].style.display="block";
    if (localStorage.tontai7 ==0){
        show7[0].style.display="none";
    } 
    //product 8:
    var show8 =document.getElementsByClassName("product--diamond8");
    show8[0].style.display="block";
    if (localStorage.tontai8 ==0){
        show8[0].style.display="none";
    } 
    //product 9:
    var show9 =document.getElementsByClassName("product--diamond9");
    show9[0].style.display="block";
    if (localStorage.tontai9 ==0){
        show9[0].style.display="none";
    } 
    //product 10:
    var show10 =document.getElementsByClassName("product--diamond10");
    show10[0].style.display="block";
    if (localStorage.tontai10 ==0){
        show10[0].style.display="none";
    } 
    //product 11:
    var show11 =document.getElementsByClassName("product--diamond11");
    show11[0].style.display="block";
    if (localStorage.tontai11 ==0){
        show11[0].style.display="none";
    } 
    //product 12:
    var show12 =document.getElementsByClassName("product--diamond12");
    show12[0].style.display="block";
    if (localStorage.tontai12 ==0){
        show12[0].style.display="none";
    }
    //product 13:
    var show13 =document.getElementsByClassName("product--diamond13");
    show13[0].style.display="block";
    if (localStorage.tontai13 ==0){
        show13[0].style.display="none";
    } 
    //product 14:
    var show14 =document.getElementsByClassName("product--diamond14");
    show14[0].style.display="block";
    if (localStorage.tontai14 ==0){
        show14[0].style.display="none";
    }
    //product 15:
    var show15 =document.getElementsByClassName("product--diamond15");
    show15[0].style.display="block";
    if (localStorage.tontai15 ==0){
        show15[0].style.display="none";
    }
    //product 16:
    var show16 =document.getElementsByClassName("product--diamond16");
    show16[0].style.display="block";
    if (localStorage.tontai16 ==0){
        show16[0].style.display="none";
    } 
    //product 17:
    var show17 =document.getElementsByClassName("product--diamond17");
    show17[0].style.display="block";
    if (localStorage.tontai17 ==0){
        show17[0].style.display="none";
    } 
    //product 18:
    var show18 =document.getElementsByClassName("product--diamond18");
    show18[0].style.display="block";
    if (localStorage.tontai18 ==0){
        show18[0].style.display="none";
    }
   //product 19:
   var show19 =document.getElementsByClassName("product--diamond19");
   show19[0].style.display="block";
   if (localStorage.tontai19 ==0){
       show19[0].style.display="none";
   }
    //product 20:
   var show20 =document.getElementsByClassName("product--diamond20");
   show20[0].style.display="block";
   if (localStorage.tontai20 ==0){
       show20[0].style.display="none";
   }
  //product 21:
   var show21 =document.getElementsByClassName("product--diamond21");
   show21[0].style.display="block";
   if (localStorage.tontai21 ==0){
       show21[0].style.display="none";
   }
  //product 22:
   var show22 =document.getElementsByClassName("product--diamond22");
   show22[0].style.display="block";
   if (localStorage.tontai22 ==0){
       show22[0].style.display="none";
   }
  //product 23:
  var show23 =document.getElementsByClassName("product--diamond23");
  show23[0].style.display="block";
  if (localStorage.tontai23 ==0){
      show23[0].style.display="none";
  } 
  //product 24:
  var show24 =document.getElementsByClassName("product--diamond24");
  show24[0].style.display="block";
  if (localStorage.tontai24 ==0){
      show24[0].style.display="none";
  }                                        

    //khai báo nhiều lần:
    //product 1:
    var total1 = document.getElementById("Total--product1");
    number1[0].value= parseInt(localStorage.soluong1);
    total1.innerHTML = "$ " +  localStorage.sum1;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;

    //product 2:
    var total2 = document.getElementById("Total--product2");
    numberp2[0].value= parseInt(localStorage.soluong2);
    total2.innerHTML = "$ " +  localStorage.sum2;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;

    //product 3:
    var total3 = document.getElementById("Total--product3");
    numberp3[0].value= parseInt(localStorage.soluong3);
    total3.innerHTML = "$ " +  localStorage.sum3;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;

   //product 4:
   var total4 = document.getElementById("Total--product4");
   numberp4[0].value= parseInt(localStorage.soluong4);
   total4.innerHTML = "$ " +  localStorage.sum4;
   totalcheck.innerHTML = "$" + localStorage.TotalForAll; 

   //product 5:
   var total5 = document.getElementById("Total--product5");
   numberp5[0].value= parseInt(localStorage.soluong5);
   total5.innerHTML = "$ " +  localStorage.sum5;
   totalcheck.innerHTML = "$" + localStorage.TotalForAll;
   
  //product 6:
  var total6 = document.getElementById("Total--product6");
  numberp6[0].value= parseInt(localStorage.soluong6);
  total6.innerHTML = "$ " +  localStorage.sum6;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

 //product 7:
 var total7 = document.getElementById("Total--product7");
 numberp7[0].value= parseInt(localStorage.soluong7);
 total7.innerHTML = "$ " +  localStorage.sum7;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll; 

 //product 8:
 var total8 = document.getElementById("Total--product8");
 numberp8[0].value= parseInt(localStorage.soluong8);
 total8.innerHTML = "$ " +  localStorage.sum8;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;
 
 //product 9:
 var total9 = document.getElementById("Total--product9");
 numberp9[0].value= parseInt(localStorage.soluong9);
 total9.innerHTML = "$ " +  localStorage.sum9;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll; 

 //product 10:
 var total10 = document.getElementById("Total--product10");
 numberp10[0].value= parseInt(localStorage.soluong10);
 total10.innerHTML = "$ " +  localStorage.sum10;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;

 //product 11:
 var total11 = document.getElementById("Total--product11");
 numberp11[0].value= parseInt(localStorage.soluong11);
 total11.innerHTML = "$ " +  localStorage.sum11;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 12:
  var total12 = document.getElementById("Total--product12");
  numberp12[0].value= parseInt(localStorage.soluong12);
  total12.innerHTML = "$ " +  localStorage.sum12;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

   //product 13:
   var total13 = document.getElementById("Total--product13");
   numberp13[0].value= parseInt(localStorage.soluong13);
   total13.innerHTML = "$ " +  localStorage.sum13;
   totalcheck.innerHTML = "$" + localStorage.TotalForAll;

 //product 14:
 var total14 = document.getElementById("Total--product14");
 numberp14[0].value= parseInt(localStorage.soluong14);
 total14.innerHTML = "$ " +  localStorage.sum14;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 15:
  var total15 = document.getElementById("Total--product15");
  numberp15[0].value= parseInt(localStorage.soluong15);
  total15.innerHTML = "$ " +  localStorage.sum15;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

    //product 16:
    var total16 = document.getElementById("Total--product16");
    numberp16[0].value= parseInt(localStorage.soluong16);
    total16.innerHTML = "$ " +  localStorage.sum16;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;

 //product 17:
 var total17 = document.getElementById("Total--product17");
 numberp17[0].value= parseInt(localStorage.soluong17);
 total17.innerHTML = "$ " +  localStorage.sum17;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;

 //product 18:
 var total18 = document.getElementById("Total--product18");
 numberp18[0].value= parseInt(localStorage.soluong18);
 total18.innerHTML = "$ " +  localStorage.sum18;
 totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 19:
  var total19 = document.getElementById("Total--product19");
  numberp19[0].value= parseInt(localStorage.soluong19);
  total19.innerHTML = "$ " +  localStorage.sum19;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

   //product 20:
   var total20 = document.getElementById("Total--product20");
   numberp20[0].value= parseInt(localStorage.soluong20);
   total20.innerHTML = "$ " +  localStorage.sum20;
   totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 21:
  var total21 = document.getElementById("Total--product21");
  numberp21[0].value= parseInt(localStorage.soluong21);
  total21.innerHTML = "$ " +  localStorage.sum21;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 22:
  var total22 = document.getElementById("Total--product22");
  numberp22[0].value= parseInt(localStorage.soluong22);
  total22.innerHTML = "$ " +  localStorage.sum22;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;

   //product 23:
   var total23 = document.getElementById("Total--product23");
   numberp23[0].value= parseInt(localStorage.soluong23);
   total23.innerHTML = "$ " +  localStorage.sum23;
   totalcheck.innerHTML = "$" + localStorage.TotalForAll;

  //product 24:
  var total24 = document.getElementById("Total--product24");
  numberp24[0].value= parseInt(localStorage.soluong24);
  total24.innerHTML = "$ " +  localStorage.sum24;
  totalcheck.innerHTML = "$" + localStorage.TotalForAll;
}
else{
    cartcount1.style.display="none";
    yourcart.style.display ="none";
}

    // hiển thị nhiều lần
    if (localStorage.soluong1 ==0){
        hiden1[0].style.display="none";
    }
   if (localStorage.soluong2 ==0){
        hiden2[0].style.display ="none";
    }
   if (localStorage.soluong3 ==0){
        hiden3[0].style.display ="none";
    }
    if (localStorage.soluong4 ==0){
        hiden4[0].style.display ="none";
    }
    if (localStorage.soluong5 ==0){
        hiden5[0].style.display ="none";
    }
    if (localStorage.soluong6 ==0){
        hiden6[0].style.display ="none";
    }
    if (localStorage.soluong7 ==0){
        hiden7[0].style.display ="none";
    }
    if (localStorage.soluong8 ==0){
        hiden8[0].style.display ="none";
    }
    if (localStorage.soluong9 ==0){
        hiden9[0].style.display ="none";
    }
    if (localStorage.soluong10 ==0){
        hiden10[0].style.display ="none";
    }
    if (localStorage.soluong11 ==0){
        hiden11[0].style.display ="none";
    }
    if (localStorage.soluong12 ==0){
        hiden12[0].style.display ="none";
    }
    if (localStorage.soluong13 ==0){
        hiden13[0].style.display ="none";
    }
    if (localStorage.soluong14 ==0){
        hiden14[0].style.display ="none";
    }
    if (localStorage.soluong15 ==0){
        hiden15[0].style.display ="none";
    }
    if (localStorage.soluong16 ==0){
        hiden16[0].style.display ="none";
    }
    if (localStorage.soluong17 ==0){
        hiden17[0].style.display ="none";
    }
    if (localStorage.soluong18 ==0){
        hiden18[0].style.display ="none";
    }
    if (localStorage.soluong19 ==0){
        hiden19[0].style.display ="none";
    }
    if (localStorage.soluong20 ==0){
        hiden20[0].style.display ="none";
    }
    if (localStorage.soluong21 ==0){
        hiden21[0].style.display ="none";
    }
    if (localStorage.soluong22 ==0){
        hiden22[0].style.display ="none";
    }
    if (localStorage.soluong23 ==0){
        hiden23[0].style.display ="none";
    }
    if (localStorage.soluong24 ==0){
        hiden24[0].style.display ="none";
    }
    //setup default if no cart:
    if (localStorage.count >0){
        Nocart[0].style.display="none"; 
    }
    else{
        Nocart[0].style.display="block"; 
    }

    // khai báo nhiều lần:
//--------------------------------------------------------------------product 1---------------------------------------------
function numberproduct1(){
    if (number1[0].value==""){
        number1[0].value=1;
    }
const totalproduct1 = document.getElementById("Total--product1");
localStorage.soluong1=number1[0].value;
localStorage.sum1= parseInt(localStorage.soluong1)*4657;
totalproduct1.innerHTML= "$" + localStorage.sum1;
localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                     parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                     parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                     parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                     parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                     parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                     parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                     parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                     parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                     parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                     parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                     parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                     parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                     parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                     parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
totalcheck.innerHTML = "$" + localStorage.TotalForAll;
cartcount1.innerHTML = localStorage.count;
if (localStorage.soluong1 <=0){
    hiden1[0].style.display ="none";
} 
if (localStorage.count <=0){
    yourcart.style.display ="none"; 
    lastcart.style.display ="none";
    Nocart[0].style.display="block";
    cartcount1.style.display="none"; 
}
}

 //-----------------------------------------------------------------------product 2--------------------------------------
function numberproduct2(){
    if (numberp2[0].value==""){
        numberp2[0].value=1;
    }
    const totalproduct2 = document.getElementById("Total--product2");
    localStorage.soluong2=numberp2[0].value;
    localStorage.sum2= parseInt(localStorage.soluong2)*4634;
    totalproduct2.innerHTML= "$" + localStorage.sum2;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong2 <=0){
        hiden2[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}

 //-------------------------------------------------------------product 3-----------------------------------------------
 function numberproduct3(){
    if (numberp3[0].value==""){
        numberp3[0].value=1;
    }
    const totalproduct3 = document.getElementById("Total--product3");
    localStorage.soluong3=numberp3[0].value;
    localStorage.sum3= parseInt(localStorage.soluong3)*4280;
    totalproduct3.innerHTML= "$" + localStorage.sum3;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong3 <=0){
        hiden3[0].style.display ="none";
    }
    if (localStorage.count <=0 ){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
//-------------------------------------------------------------product 4-----------------------------------------------
function numberproduct4(){
    if (numberp4[0].value==""){
        numberp4[0].value=1;
    }
    const totalproduct4 = document.getElementById("Total--product4");
    localStorage.soluong4=numberp4[0].value;
    localStorage.sum4= parseInt(localStorage.soluong4)*4138;
    totalproduct4.innerHTML= "$" + localStorage.sum4;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong4 <=0){
        hiden4[0].style.display ="none";
    }
    if (localStorage.count <=0 ){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ----------------------------------------------------------product 5-------------------------------------------------------
function numberproduct5(){
    if (numberp5[0].value==""){
        numberp5[0].value=1;
    }
    const totalproduct5 = document.getElementById("Total--product5");
    localStorage.soluong5=numberp5[0].value;
    localStorage.sum5= parseInt(localStorage.soluong5)*3463;
    totalproduct5.innerHTML= "$" + localStorage.sum5;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong5 <=0){
        hiden5[0].style.display ="none";
    }
    if (localStorage.count <=0 ){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ---------------------------------------------------------------product 6------------------------------------------------
function numberproduct6(){
    if (numberp6[0].value==""){
        numberp6[0].value=1;
    }
    const totalproduct6 = document.getElementById("Total--product6");
    localStorage.soluong6=numberp6[0].value;
    localStorage.sum6= parseInt(localStorage.soluong6)*3210;
    totalproduct6.innerHTML= "$" + localStorage.sum6;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong6 <=0){
        hiden6[0].style.display ="none";
    }
    if (localStorage.count <=0 ){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -------------------------------------------------------------product 7---------------------------------------------------
function numberproduct7(){
    if (numberp7[0].value==""){
        numberp7[0].value=1;
    }
    const totalproduct7 = document.getElementById("Total--product7");
    localStorage.soluong7=numberp7[0].value;
    localStorage.sum7= parseInt(localStorage.soluong7)*2951;
    totalproduct7.innerHTML= "$" + localStorage.sum7;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong7 <=0){
        hiden7[0].style.display ="none";
    }
    if (localStorage.count <=0 ){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ----------------------------------------------------------product 8----------------------------------------------------
function numberproduct8(){
    if (numberp8[0].value==""){
        numberp8[0].value=1;
    }
    const totalproduct8 = document.getElementById("Total--product8");
    localStorage.soluong8=numberp8[0].value;
    localStorage.sum8= parseInt(localStorage.soluong8)*2371;
    totalproduct8.innerHTML= "$" + localStorage.sum8;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong8 <=0){
        hiden8[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ------------------------------------------------------------product 9----------------------------------------------------
function numberproduct9(){
    if (numberp9[0].value==""){
        numberp9[0].value=1;
    }
    const totalproduct9 = document.getElementById("Total--product9");
    localStorage.soluong9=numberp9[0].value;
    localStorage.sum9= parseInt(localStorage.soluong9)*805;
    totalproduct9.innerHTML= "$" + localStorage.sum9;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong9 <=0){
        hiden9[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ---------------------------------------------------------product 10---------------------------------------------------
function numberproduct10(){
    if (numberp10[0].value==""){
        numberp10[0].value=1;
    }
    const totalproduct10 = document.getElementById("Total--product10");
    localStorage.soluong10=numberp10[0].value;
    localStorage.sum10= parseInt(localStorage.soluong10)*670;
    totalproduct10.innerHTML= "$" + localStorage.sum10;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong10 <=0){
        hiden10[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// --------------------------------------------------------product 11--------------------------------------------------
function numberproduct11(){
    if (numberp11[0].value==""){
        numberp11[0].value=1;
    }
    const totalproduct11 = document.getElementById("Total--product11");
    localStorage.soluong11=numberp11[0].value;
    localStorage.sum11= parseInt(localStorage.soluong11)*910;
    totalproduct11.innerHTML= "$" + localStorage.sum11;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong11 <=0){
        hiden11[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ---------------------------------------------------------product 12-----------------------------------------------------
function numberproduct12(){
    if (numberp12[0].value==""){
        numberp12[0].value=1;
    }
    const totalproduct12 = document.getElementById("Total--product12");
    localStorage.soluong12=numberp12[0].value;
    localStorage.sum12= parseInt(localStorage.soluong12)*417;
    totalproduct12.innerHTML= "$" + localStorage.sum12;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong12 <=0){
        hiden12[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ---------------------------------------------------product 13---------------------------------------------------------
function numberproduct13(){
    if (numberp13[0].value==""){
        numberp13[0].value=1;
    }
    const totalproduct13 = document.getElementById("Total--product13");
    localStorage.soluong13=numberp13[0].value;
    localStorage.sum13= parseInt(localStorage.soluong13)*1656;
    totalproduct13.innerHTML= "$" + localStorage.sum13;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong13 <=0){
        hiden13[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ----------------------------------------------------product 14-----------------------------------------------------
function numberproduct14(){
    if (numberp14[0].value==""){
        numberp14[0].value=1;
    }
    const totalproduct14 = document.getElementById("Total--product14");
    localStorage.soluong14=numberp14[0].value;
    localStorage.sum14= parseInt(localStorage.soluong14)*973;
    totalproduct14.innerHTML= "$" + localStorage.sum14;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong14 <=0){
        hiden14[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -------------------------------------------------------product 15-------------------------------------------------------
function numberproduct15(){
    if (numberp15[0].value==""){
        numberp15[0].value=1;
    }
    const totalproduct15 = document.getElementById("Total--product15");
    localStorage.soluong15=numberp15[0].value;
    localStorage.sum15= parseInt(localStorage.soluong15)*1036;
    totalproduct15.innerHTML= "$" + localStorage.sum15;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong15 <=0){
        hiden15[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -------------------------------------------------------product 16------------------------------------------------------
function numberproduct16(){
    if (numberp16[0].value==""){
        numberp16[0].value=1;
    }
    const totalproduct16 = document.getElementById("Total--product16");
    localStorage.soluong16=numberp16[0].value;
    localStorage.sum16= parseInt(localStorage.soluong16)*316;
    totalproduct16.innerHTML= "$" + localStorage.sum16;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong16 <=0){
        hiden16[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -----------------------------------------------------product 17------------------------------------------------------
function numberproduct17(){
    if (numberp17[0].value==""){
        numberp17[0].value=1;
    }
    const totalproduct17 = document.getElementById("Total--product17");
    localStorage.soluong17=numberp17[0].value;
    localStorage.sum17= parseInt(localStorage.soluong17)*3036;
    totalproduct17.innerHTML= "$" + localStorage.sum17;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong17 <=0){
        hiden17[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ------------------------------------------------------------product 18------------------------------------------------
function numberproduct18(){
    if (numberp18[0].value==""){
        numberp18[0].value=1;
    }
    const totalproduct18 = document.getElementById("Total--product18");
    localStorage.soluong18=numberp18[0].value;
    localStorage.sum18= parseInt(localStorage.soluong18)*3800;
    totalproduct18.innerHTML= "$" + localStorage.sum18;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong18 <=0){
        hiden18[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ------------------------------------------------------------product 19--------------------------------------------------
function numberproduct19(){
    if (numberp19[0].value==""){
        numberp19[0].value=1;
    }
    const totalproduct19 = document.getElementById("Total--product19");
    localStorage.soluong19=numberp19[0].value;
    localStorage.sum19= parseInt(localStorage.soluong19)*3663;
    totalproduct19.innerHTML= "$" + localStorage.sum19;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong19 <=0){
        hiden19[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -------------------------------------------------------------product 20-------------------------------------------------
function numberproduct20(){
    if (numberp20[0].value==""){
        numberp20[0].value=1;
    }
    const totalproduct20 = document.getElementById("Total--product20");
    localStorage.soluong20=numberp20[0].value;
    localStorage.sum20= parseInt(localStorage.soluong20)*28413;
    totalproduct20.innerHTML= "$" + localStorage.sum20;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong20 <=0){
        hiden20[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// -------------------------------------------------------------product 21---------------------------------------------
function numberproduct21(){
    if (numberp21[0].value==""){
        numberp21[0].value=1;
    }
    const totalproduct21 = document.getElementById("Total--product21");
    localStorage.soluong21=numberp21[0].value;
    localStorage.sum21= parseInt(localStorage.soluong21)*2640;
    totalproduct21.innerHTML= "$" + localStorage.sum21;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong21 <=0){
        hiden21[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ---------------------------------------------------------product 22------------------------------------------------
function numberproduct22(){
    if (numberp22[0].value==""){
        numberp22[0].value=1;
    }
    const totalproduct22 = document.getElementById("Total--product22");
    localStorage.soluong22=numberp22[0].value;
    localStorage.sum22= parseInt(localStorage.soluong22)*3723;
    totalproduct22.innerHTML= "$" + localStorage.sum22;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong22 <=0){
        hiden22[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// --------------------------------------------------------product 23---------------------------------------------------
function numberproduct23(){
    if (numberp23[0].value==""){
        numberp23[0].value=1;
    }
    const totalproduct23 = document.getElementById("Total--product23");
    localStorage.soluong23=numberp23[0].value;
    localStorage.sum23= parseInt(localStorage.soluong23)*4671;
    totalproduct23.innerHTML= "$" + localStorage.sum23;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong23 <=0){
        hiden23[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// ----------------------------------------------------product 24-------------------------------------------------------
function numberproduct24(){
    if (numberp24[0].value==""){
        numberp24[0].value=1;
    }
    const totalproduct24 = document.getElementById("Total--product24");
    localStorage.soluong24=numberp24[0].value;
    localStorage.sum24= parseInt(localStorage.soluong24)*24984;
    totalproduct24.innerHTML= "$" + localStorage.sum24;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                         parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                         parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                         parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                         parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                         parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                         parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                         parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                         parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                         parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                         parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                         parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                         parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                         parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                         parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    cartcount1.innerHTML = localStorage.count;
    if (localStorage.soluong24 <=0){
        hiden24[0].style.display ="none";
    }
    if (localStorage.count <=0){
        yourcart.style.display ="none"; 
        lastcart.style.display ="none";
        Nocart[0].style.display="block";
        cartcount1.style.display="none"; 
    }
}
// --------------------------------------------------------------------------------------------------------------------------
const Numb =0;
//------------------------------------------------------------Product 1 ------------------------------------------
function ClickAddCart1(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
    localStorage.tontai1=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var Show =document.getElementsByClassName("product--diamond1");
    Show[0].style.display="block";
    var An =document.getElementsByClassName("No--cart");
    An[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var num = document.getElementsByClassName("numberout--diamond-first");

    number1[0].value = num[0].value;

localStorage.soluong1 = parseInt(number1[0].value);
localStorage.soluongTotal1 = parseInt(localStorage.soluongTotal1) +  parseInt(number1[0].value);
localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                     parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                     parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                     parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                     parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                     parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                     parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                     parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong = parseInt(num[0].value)*4657;
    localStorage.sum1=tong;
    var total = document.getElementById("Total--product1");
    total.innerHTML = "$ " + localStorage.sum1;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                           parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                           parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                           parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                           parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                           parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                           parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                           parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;
}

function remove1(){
    localStorage.soluong1 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                     parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                     parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                     parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                     parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                     parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                     parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                     parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var show =document.getElementsByClassName("No--cart");
    hiden1[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum1 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
      cartnameproduct.innerHTML =localStorage.count;
      totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}
//------------------------------------------------------------Product 2-----------------------------------------
function ClickAddCart2(){

    localStorage.tontai2=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond2");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct2 = document.getElementsByClassName("numberout--diamond-second");

    numberp2[0].value = numproduct2[0].value;

    localStorage.soluong2 = parseInt(numberp2[0].value);
    localStorage.soluongTotal2 = parseInt(localStorage.soluongTotal2)+ parseInt(numberp2[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong1 = parseInt(numproduct2[0].value)*4634;
    localStorage.sum2= tong1;
    var total = document.getElementById("Total--product2");
    total.innerHTML = "$ " + localStorage.sum2;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove2(){
    localStorage.soluong2 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden2[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum2 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    cartnameproduct.innerHTML =localStorage.count;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

//------------------------------------------------------------Product 3 ------------------------------------------
function ClickAddCart3(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }

    localStorage.tontai3=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond3");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct3 = document.getElementsByClassName("numberout--diamond3");

    numberp3[0].value = numproduct3[0].value;

    localStorage.soluong3 = parseInt(numberp3[0].value);
    localStorage.soluongTotal3 = parseInt(localStorage.soluongTotal3)+ parseInt(numberp3[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong2 = parseInt(numproduct3[0].value)*4280;
    localStorage.sum3= tong2;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product3");
    total.innerHTML = "$ " + localStorage.sum3;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove3(){
    localStorage.soluong3 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden3[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum3 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
    cartnameproduct.innerHTML =localStorage.count;
    totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

//------------------------------------------------------------Product 4 ------------------------------------------
function ClickAddCart4(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai4=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond4");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct4 = document.getElementsByClassName("numberout--diamond4");

    numberp4[0].value = numproduct4[0].value;

    localStorage.soluong4 = parseInt(numberp4[0].value);
    localStorage.soluongTotal4 = parseInt(localStorage.soluongTotal4)+ parseInt(numberp4[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong4 = parseInt(numproduct4[0].value)*4138;
    localStorage.sum4= tong4;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product4");
    total.innerHTML = "$ " + localStorage.sum4;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove4(){
    localStorage.soluong4 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden4[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum4 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

//---------------------------------------------------------------Product 5 ------------------------------------------------------------
function ClickAddCart5(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai5=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond5");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct5 = document.getElementsByClassName("numberout--diamond5");

    numberp5[0].value = numproduct5[0].value;

    localStorage.soluong5 = parseInt(numberp5[0].value);
    localStorage.soluongTotal5 = parseInt(localStorage.soluongTotal5)+ parseInt(numberp5[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong5 = parseInt(numproduct5[0].value)*3463;
    localStorage.sum5= tong5;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product5");
    total.innerHTML = "$ " + localStorage.sum5;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove5(){
    localStorage.soluong5 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden5[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum5 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

//--------------------------------------------------------Product 6------------------------------------------------------
function ClickAddCart6(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai6=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond6");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct6 = document.getElementsByClassName("numberout--diamond6");

    numberp6[0].value = numproduct6[0].value;

    localStorage.soluong6 = parseInt(numberp6[0].value);
    localStorage.soluongTotal6 = parseInt(localStorage.soluongTotal6)+ parseInt(numberp6[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong6 = parseInt(numproduct6[0].value)*3210;
    localStorage.sum6= tong6;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product6");
    total.innerHTML = "$ " + localStorage.sum6;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove6(){
    localStorage.soluong6 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden6[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum6 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

//-----------------------------------------------------------------Product 7----------------------------------------------
function ClickAddCart7(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai7=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond7");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct7 = document.getElementsByClassName("numberout--diamond7");

    numberp7[0].value = numproduct7[0].value;

    localStorage.soluong7 = parseInt(numberp7[0].value);
    localStorage.soluongTotal7 = parseInt(localStorage.soluongTotal7)+ parseInt(numberp7[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong7 = parseInt(numproduct7[0].value)*2951;
    localStorage.sum7= tong7;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product7");
    total.innerHTML = "$ " + localStorage.sum7;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove7(){
    localStorage.soluong7 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden7[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum7 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// -----------------------------------------------------------------Product 8------------------------------------------------
function ClickAddCart8(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai8=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond8");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct8 = document.getElementsByClassName("numberout--diamond8");

    numberp8[0].value = numproduct8[0].value;

    localStorage.soluong8 = parseInt(numberp8[0].value);
    localStorage.soluongTotal8 = parseInt(localStorage.soluongTotal8)+ parseInt(numberp8[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong8 = parseInt(numproduct8[0].value)*2371;
    localStorage.sum8= tong8;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product8");
    total.innerHTML = "$ " + localStorage.sum8;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove8(){
    localStorage.soluong8 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden8[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum8 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// -----------------------------------------------------------------Product 9----------------------------------------------
function ClickAddCart9(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai9=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond9");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct9 = document.getElementsByClassName("numberout--diamond9");

    numberp9[0].value = numproduct9[0].value;

    localStorage.soluong9 = parseInt(numberp9[0].value);
    localStorage.soluongTotal9 = parseInt(localStorage.soluongTotal9)+ parseInt(numberp9[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong9 = parseInt(numproduct9[0].value)*805;
    localStorage.sum9= tong9;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product9");
    total.innerHTML = "$ " + localStorage.sum9;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove9(){
    localStorage.soluong9 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden9[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum9 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ----------------------------------------------------------------Product 10-----------------------------------------------
function ClickAddCart10(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai10=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond10");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct10 = document.getElementsByClassName("numberout--diamond10");

    numberp10[0].value = numproduct10[0].value;

    localStorage.soluong10 = parseInt(numberp10[0].value);
    localStorage.soluongTotal10 = parseInt(localStorage.soluongTotal10)+ parseInt(numberp10[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong10 = parseInt(numproduct10[0].value)*670;
    localStorage.sum10= tong10;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product10");
    total.innerHTML = "$ " + localStorage.sum10;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove10(){
    localStorage.soluong10 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden10[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum10 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ------------------------------------------------------------------Product 11------------------------------------------
function ClickAddCart11(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai11=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond11");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct11 = document.getElementsByClassName("numberout--diamond11");

    numberp11[0].value = numproduct11[0].value;

    localStorage.soluong11 = parseInt(numberp11[0].value);
    localStorage.soluongTotal11 = parseInt(localStorage.soluongTotal11)+ parseInt(numberp11[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong11 = parseInt(numproduct11[0].value)*910;
    localStorage.sum11= tong11;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product11");
    total.innerHTML = "$ " + localStorage.sum11;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove11(){
    localStorage.soluong11 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden11[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum11 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// -----------------------------------------------------------Product 12-----------------------------------------------
function ClickAddCart12(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai12=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond12");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct12 = document.getElementsByClassName("numberout--diamond12");

    numberp12[0].value = numproduct12[0].value;

    localStorage.soluong12 = parseInt(numberp12[0].value);
    localStorage.soluongTotal12 = parseInt(localStorage.soluongTotal12)+ parseInt(numberp12[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong12 = parseInt(numproduct12[0].value)*417;
    localStorage.sum12= tong12;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product12");
    total.innerHTML = "$ " + localStorage.sum12;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove12(){
    localStorage.soluong12 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden12[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum12 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ----------------------------------------------------------Product 13-------------------------------------------------
function ClickAddCart13(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai13=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond13");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct13 = document.getElementsByClassName("numberout--diamond13");

    numberp13[0].value = numproduct13[0].value;

    localStorage.soluong13 = parseInt(numberp13[0].value);
    localStorage.soluongTotal13 = parseInt(localStorage.soluongTotal13)+ parseInt(numberp13[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong13 = parseInt(numproduct13[0].value)*1656;
    localStorage.sum13= tong13;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product13");
    total.innerHTML = "$ " + localStorage.sum13;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove13(){
    localStorage.soluong13 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden13[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum13 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ---------------------------------------------------------Product 14----------------------------------------------------
function ClickAddCart14(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai14=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond14");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct14 = document.getElementsByClassName("numberout--diamond14");

    numberp14[0].value = numproduct14[0].value;

    localStorage.soluong14 = parseInt(numberp14[0].value);
    localStorage.soluongTotal14 = parseInt(localStorage.soluongTotal14)+ parseInt(numberp14[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong14 = parseInt(numproduct14[0].value)*973;
    localStorage.sum14= tong14;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product14");
    total.innerHTML = "$ " + localStorage.sum14;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove14(){
    localStorage.soluong14 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden14[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum14 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ---------------------------------------------------------Product 15---------------------------------------------------
function ClickAddCart15(){
    localStorage.tontai15=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond15");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct15 = document.getElementsByClassName("numberout--diamond15");

    numberp15[0].value = numproduct15[0].value;

    localStorage.soluong15 = parseInt(numberp15[0].value);
    localStorage.soluongTotal15 = parseInt(localStorage.soluongTotal15)+ parseInt(numberp15[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong15 = parseInt(numproduct15[0].value)*1036;
    localStorage.sum15= tong15;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product15");
    total.innerHTML = "$ " + localStorage.sum15;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove15(){
    localStorage.soluong15 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden15[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum15 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ---------------------------------------------------------Product 16-------------------------------------------------------
function ClickAddCart16(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai16=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond16");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct16 = document.getElementsByClassName("numberout--diamond16");

    numberp16[0].value = numproduct16[0].value;

    localStorage.soluong16 = parseInt(numberp16[0].value);
    localStorage.soluongTotal16 = parseInt(localStorage.soluongTotal16)+ parseInt(numberp16[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong16 = parseInt(numproduct16[0].value)*316;
    localStorage.sum16= tong16;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product16");
    total.innerHTML = "$ " + localStorage.sum16;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove16(){
    localStorage.soluong16 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden16[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum16 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ----------------------------------------------------------------Product 17---------------------------------------------
function ClickAddCart17(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai17=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond17");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct17 = document.getElementsByClassName("numberout--diamond17");

    numberp17[0].value = numproduct17[0].value;

    localStorage.soluong17 = parseInt(numberp17[0].value);
    localStorage.soluongTotal17 = parseInt(localStorage.soluongTotal17)+ parseInt(numberp17[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong17 = parseInt(numproduct17[0].value)*3036;
    localStorage.sum17= tong17;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product17");
    total.innerHTML = "$ " + localStorage.sum17;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove17(){
    localStorage.soluong17 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden17[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum17 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ------------------------------------------------------------Product 18----------------------------------------------
function ClickAddCart18(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai18=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond18");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct18 = document.getElementsByClassName("numberout--diamond18");

    numberp18[0].value = numproduct18[0].value;

    localStorage.soluong18 = parseInt(numberp18[0].value);
    localStorage.soluongTotal18 = parseInt(localStorage.soluongTotal18)+ parseInt(numberp18[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong18 = parseInt(numproduct18[0].value)*3800;
    localStorage.sum18= tong18;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product18");
    total.innerHTML = "$ " + localStorage.sum18;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove18(){
    localStorage.soluong18 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden18[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum18 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// -----------------------------------------------------------Product 19-----------------------------------------------
function ClickAddCart19(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai19=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond19");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct19 = document.getElementsByClassName("numberout--diamond19");

    numberp19[0].value = numproduct19[0].value;

    localStorage.soluong19 = parseInt(numberp19[0].value);
    localStorage.soluongTotal19 = parseInt(localStorage.soluongTotal19)+ parseInt(numberp19[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong19 = parseInt(numproduct19[0].value)*3663;
    localStorage.sum19= tong19;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product19");
    total.innerHTML = "$ " + localStorage.sum19;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove19(){
    localStorage.soluong19 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden19[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum19 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// -------------------------------------------------------Product 20------------------------------------------------------
function ClickAddCart20(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai20=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond20");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct20 = document.getElementsByClassName("numberout--diamond20");

    numberp20[0].value = numproduct20[0].value;

    localStorage.soluong20 = parseInt(numberp20[0].value);
    localStorage.soluongTotal20 = parseInt(localStorage.soluongTotal20)+ parseInt(numberp20[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong20 = parseInt(numproduct20[0].value)*28413;
    localStorage.sum20= tong20;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product20");
    total.innerHTML = "$ " + localStorage.sum20;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove20(){
    localStorage.soluong20 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden20[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum20 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ------------------------------------------------------------Product 21------------------------------------------------
function ClickAddCart21(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai21=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond21");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct21 = document.getElementsByClassName("numberout--diamond21");

    numberp21[0].value = numproduct21[0].value;

    localStorage.soluong21 = parseInt(numberp21[0].value);
    localStorage.soluongTotal21 = parseInt(localStorage.soluongTotal21)+ parseInt(numberp21[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong21 = parseInt(numproduct21[0].value)*2640;
    localStorage.sum21= tong21;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product21");
    total.innerHTML = "$ " + localStorage.sum21;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove21(){
    localStorage.soluong21 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden21[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum21 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ---------------------------------------------------------Product 22-----------------------------------------------------
function ClickAddCart22(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai22=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond22");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct22 = document.getElementsByClassName("numberout--diamond22");

    numberp22[0].value = numproduct22[0].value;

    localStorage.soluong22 = parseInt(numberp22[0].value);
    localStorage.soluongTotal22 = parseInt(localStorage.soluongTotal22)+ parseInt(numberp22[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong22 = parseInt(numproduct22[0].value)*3723;
    localStorage.sum22= tong22;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product22");
    total.innerHTML = "$ " + localStorage.sum22;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove22(){
    localStorage.soluong22 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden22[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum22 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ----------------------------------------------------------Product 23---------------------------------------------------
function ClickAddCart23(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai23=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond23");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct23 = document.getElementsByClassName("numberout--diamond23");

    numberp23[0].value = numproduct23[0].value;

    localStorage.soluong23 = parseInt(numberp23[0].value);
    localStorage.soluongTotal23 = parseInt(localStorage.soluongTotal23)+ parseInt(numberp23[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong23 = parseInt(numproduct23[0].value)*4671;
    localStorage.sum23= tong23;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product23");
    total.innerHTML = "$ " + localStorage.sum23;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove23(){
    localStorage.soluong23 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden23[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum23 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// --------------------------------------------------------Product 24--------------------------------------------------
function ClickAddCart24(){
    if (localStorage.sum2==0){
        hiden2[0].style.display="none";
    }
 
    localStorage.tontai24=1;
    yourcart.style.display ="block";
    lastcart.style.display ="block";
    var show =document.getElementsByClassName("product--diamond24");
    show[0].style.display="block";
    var An1 =document.getElementsByClassName("No--cart");
    An1[0].style.display="none"; 
    var addcart =document.getElementsByClassName("Add--product");
    addcart[0].style.display ="flex";
    var numproduct24 = document.getElementsByClassName("numberout--diamond24");

    numberp24[0].value = numproduct24[0].value;

    localStorage.soluong24 = parseInt(numberp24[0].value);
    localStorage.soluongTotal24 = parseInt(localStorage.soluongTotal24)+ parseInt(numberp24[0].value);
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);

    var tong24 = parseInt(numproduct24[0].value)*24948;
    localStorage.sum24= tong24;
    //khai báo nhiều lần
    var total = document.getElementById("Total--product24");
    total.innerHTML = "$ " + localStorage.sum24;

localStorage.TotalForAll = parseInt(Numb);
localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                            parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                            parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                            parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                            parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                            parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                            parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                            parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);

totalcheck.innerHTML = "$" + localStorage.TotalForAll;

localStorage.countRemove = parseInt(localStorage.countRemove) +1;

}
function remove24(){
    localStorage.soluong24 =0;
    localStorage.count = parseInt( localStorage.soluong1) + parseInt( localStorage.soluong2) +parseInt( localStorage.soluong3)+
                        parseInt( localStorage.soluong4) + parseInt( localStorage.soluong5) + parseInt( localStorage.soluong6)+ 
                        parseInt( localStorage.soluong7) + parseInt( localStorage.soluong8) + parseInt( localStorage.soluong9)+
                        parseInt( localStorage.soluong10) + parseInt( localStorage.soluong11) + parseInt( localStorage.soluong12)+
                        parseInt( localStorage.soluong13) + parseInt( localStorage.soluong14) + parseInt( localStorage.soluong15)+
                        parseInt( localStorage.soluong16) + parseInt( localStorage.soluong17) + parseInt( localStorage.soluong18)+
                        parseInt( localStorage.soluong19) + parseInt( localStorage.soluong20) + parseInt( localStorage.soluong21)+
                        parseInt( localStorage.soluong22) + parseInt( localStorage.soluong23) + parseInt( localStorage.soluong24);
    var show =document.getElementsByClassName("No--cart");
    hiden24[0].style.display="none";
    if(localStorage.count <= 0){
        show[0].style.display="block";
        cartcount1.style.display="none";
        yourcart.style.display ="none";
        lastcart.style.display ="none";
    }
    localStorage.sum24 =0;
    localStorage.TotalForAll = parseInt(localStorage.sum1) + parseInt(localStorage.sum2) + parseInt(localStorage.sum3)+
                                parseInt(localStorage.sum4) + parseInt(localStorage.sum5) + parseInt(localStorage.sum6)+
                                parseInt(localStorage.sum7) + parseInt(localStorage.sum8) + parseInt(localStorage.sum9)+
                                parseInt(localStorage.sum10) + parseInt(localStorage.sum11) + parseInt(localStorage.sum12)+
                                parseInt(localStorage.sum13) + parseInt(localStorage.sum14) + parseInt(localStorage.sum15)+
                                parseInt(localStorage.sum16) + parseInt(localStorage.sum17) + parseInt(localStorage.sum18)+
                                parseInt(localStorage.sum19) + parseInt(localStorage.sum20) + parseInt(localStorage.sum21)+
                                parseInt(localStorage.sum22) + parseInt(localStorage.sum23) + parseInt(localStorage.sum24);
                                cartnameproduct.innerHTML =localStorage.count;
                                totalcheck.innerHTML = "$" + localStorage.TotalForAll;
    localStorage.countRemove = parseInt(localStorage.countRemove) -1;
}

// ------------------------------------------------Product 25 comming soon--------------------------------------------

// ------------------------------------------------------------End----------------------------------------------------
function Descrip(){
    var rev = document.getElementsByClassName("context--description--first");
    rev[1].style.display ="none";
    rev[0].style.display="block";
    var Des = document.getElementsByClassName("des");
    var Rev =document.getElementsByClassName("rev");
    Des[0].style.backgroundColor ="black";
    Des[0].style.color ="white";
    Des[0].style.border ="black";

    Rev[0].style.backgroundColor ="white";
    Rev[0].style.color ="black";
}

function Revi(){
    var des =document.getElementsByClassName("context--description--first");
    des[0].style.display="none";
    des[1].style.display="block";
    var Des = document.getElementsByClassName("des");
    var Rev =document.getElementsByClassName("rev");
    Des[0].style.backgroundColor ="white";
    Des[0].style.color ="black";
    Des[0].style.borderColor ="black";
    Des[0].style.border ="solid";
    Des[0].style.borderBottom ="none";

    Rev[0].style.backgroundColor ="black";
    Rev[0].style.color ="white";
    Rev[0].style.borderColor ="black";
}

function page1(){
    var getclass =document.getElementsByClassName("page-item");
    getclass[0].className="page-item active";
    getclass[1].className="page-item";
    getclass[2].className="page-item";
    var hiden =document.getElementById("Will--Be--Hidden");
    var show =document.getElementById("Will--Be--Show");
    hiden.style.display="none";
    show.style.display="block";
}

function page2(){
    var getclass =document.getElementsByClassName("page-item");
    getclass[1].className="page-item active";
    getclass[0].className="page-item";
    getclass[2].className="page-item";
    var hiden =document.getElementById("Will--Be--Hidden");
    var show =document.getElementById("Will--Be--Show");
    hiden.style.display="none";
    show.style.display="block";
}

function page3(){
    var getclass =document.getElementsByClassName("page-item");
    getclass[2].className="page-item active";
    getclass[0].className="page-item";
    getclass[1].className="page-item";
    var hiden =document.getElementById("Will--Be--Hidden");
    var show =document.getElementById("Will--Be--Show");
    hiden.style.display="none";
    show.style.display="block";
}

function zzz(param){
    localStorage.valueStar = param.dataset.star;
    return false;
 }

function Cumment(){
    var com =document.getElementById("Comment");
    var name=document.getElementsByClassName("namecomment");
    var getcomment = document.getElementById("text");
    var iwanttoshow = document.getElementById("Hiden-Show");
    iwanttoshow.style.display="block";
    var getstar = document.getElementById("getStar");

    for (var i = 0 ;i <6 ; i ++){
        if (i < localStorage.valueStar){
            getstar.innerHTML +="&#9733";
        }
    }
    var check = document.getElementsByClassName("check--diamond--first");
    var hiden =document.getElementsByClassName("td-first");
    com.innerHTML += name[0].value + ": "+ "<br>";
    for (var i =0 ;i <getcomment.value.length; i++){
        com.innerHTML += getcomment.value[i];
        for (var j =48; j <getcomment.value.length ; j+=49){
        if ( i == j ){
            com.innerHTML += "<br>";
         getstar.innerHTML += "<br>";
        }
    }
}
    com.innerHTML += "<br>";
    getstar.innerHTML +="<br><br>";
    if (check[0].checked){
        for (var i=0;i<hiden.length;i++){
            hiden[i].style.display ="none";

        }
    }
    return false;
}

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        var com =document.getElementById("Comment");
        var name=document.getElementById("name*");
        var getcomment = document.getElementById("textcomment");
        var email = document.getElementById("email*");
        com.style.display="block";
        var check = document.getElementById("check--box");
        var savename =document.getElementById("SaveName");
    
        if (check.checked){
           name.style.display ="none";
           email.style.display= "none";
           document.getElementById("HidenName").style.display = "none";
           document.getElementById("HidenEmail").style.display = "none";
           savename.style.display ="none";
           check.style.display = "none";
        }
        localStorage.GetName = name.value;
        localStorage.GetEmail = email.value;
         // Ngăn chặn trình duyệt gửi form đến một trang khác
        event.preventDefault();
        // Tạo một phần tử comment mới
        var comment = document.createElement("p");
        var BinhLuan = getcomment.value;
        comment.textContent =  localStorage.GetName +"-"+ localStorage.GetEmail+": " + BinhLuan;
      
        // Thêm comment vào phần tử chứa các comment
        com.appendChild(comment);

        BinhLuan="";
        getcomment.value="";
      });

function playvideo(){
    var play = document.getElementById("playvideo");
    play.innerHTML = "  <iframe id='Play' src='https://www.youtube.com/embed/RAwrJZVm_H8' title='Phản ứng của tao trong 1 tiếng loop cực mượt' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen  ></iframe>";
}

function stopvideo(){
    var play = document.getElementById("playvideo");
    play.innerHTML ="";
}
function phatnhac(){
    var audio = document.getElementById("CreatMusic");
    if (sessionStorage.dem ==1){
        audio.innerHTML = "<audio src='/eProject_FrontEnd/image/Weekend-Has-Come-Remix-Remix.mp3' controls autoplay loop id='myaudio'></audio>";
    }
    var myaudio = document.getElementById("myaudio");
    if (parseInt(sessionStorage.dem) %2 !=0){
        myaudio.play();
    }
    else{
        myaudio.pause();
    }
    sessionStorage.dem = parseInt( sessionStorage.dem)  +1;
}

function CheckOut(){
        //default:
        localStorage.count=0;
        localStorage.TotalForAll=0;
        //product 1:
        localStorage.sum1=0;
        localStorage.soluong1=0;
        localStorage.soluongTotal1=0;
        //product 2:
        localStorage.sum2=0;
        localStorage.soluong2=0;
        localStorage.soluongTotal2=0;
        //product 3:
        localStorage.sum3=0;
        localStorage.soluong3=0;
        localStorage.soluongTotal3=0;
       //product 4:
       localStorage.sum4=0;
       localStorage.soluong4=0;
       localStorage.soluongTotal4=0;
      //product 5:
      localStorage.sum5=0;
      localStorage.soluong5=0;
      localStorage.soluongTotal5=0;
      //product 6:
      localStorage.sum6=0;
      localStorage.soluong6=0;
      localStorage.soluongTotal6=0;
      //product 7:
      localStorage.sum7=0;
      localStorage.soluong7=0;
      localStorage.soluongTotal7=0;
     //product 8:
     localStorage.sum8=0;
     localStorage.soluong8=0;
     localStorage.soluongTotal8=0;
      //product 9:
      localStorage.sum9=0;
      localStorage.soluong9=0;
      localStorage.soluongTotal9=0;
     //product 10:
     localStorage.sum10=0;
     localStorage.soluong10=0;
     localStorage.soluongTotal10=0;
      //product 11:
      localStorage.sum11=0;
      localStorage.soluong11=0;
      localStorage.soluongTotal11=0;
       //product 12:
       localStorage.sum12=0;
       localStorage.soluong12=0;
       localStorage.soluongTotal12=0;
        //product 13:
        localStorage.sum13=0;
        localStorage.soluong13=0;
        localStorage.soluongTotal13=0;
     //product 14:
     localStorage.sum14=0;
     localStorage.soluong14=0;
     localStorage.soluongTotal14=0;
     //product 15:
     localStorage.sum15=0;
     localStorage.soluong15=0;
     localStorage.soluongTotal15=0;
     //product 16:
     localStorage.sum16=0;
     localStorage.soluong16=0;
     localStorage.soluongTotal16=0;
     //product 17:
     localStorage.sum17=0;
     localStorage.soluong17=0;
     localStorage.soluongTotal17=0;
     //product 18:
     localStorage.sum18=0;
     localStorage.soluong18=0;
     localStorage.soluongTotal18=0;
     //product 19:
     localStorage.sum19=0;
     localStorage.soluong19=0;
     localStorage.soluongTotal19=0;
     //product 20:
     localStorage.sum20=0;
     localStorage.soluong20=0;
     localStorage.soluongTotal20=0;
     //product 21:
     localStorage.sum21=0;
     localStorage.soluong21=0;
     localStorage.soluongTotal21=0;
      //product 22:
      localStorage.sum22=0;
      localStorage.soluong22=0;
      localStorage.soluongTotal22=0;
       //product 23:
       localStorage.sum23=0;
       localStorage.soluong23=0;
       localStorage.soluongTotal23=0;
         //product 24:
         localStorage.sum24=0;
         localStorage.soluong24=0;
         localStorage.soluongTotal24=0;
  alert("Cash successful!\n Have a nice day");

}

function CheckItOut(){
    if (localStorage.countRemove == 0 || localStorage.count <=0 || isNaN(localStorage.TotalForAll)){
        alert("You must go to cart in shop!!!");
        return false;
    }
}
    //Tìm kiếm thông tin
    function SearchInput(){
        var searchInput = document.getElementById('search-input');
        var productlist = document.getElementsByClassName('product-list');
        var products = productlist[0].getElementsByClassName("product");
        var filter = searchInput.value.toLowerCase();
        for (var i = 0; i < products.length; i++) {
          var productName = products[i].textContent.toLowerCase();
          if (productName.indexOf(filter) !== -1) {
            products[i].style.display = 'block';
          } else {
            products[i].style.display = 'none';
          }
        }
      }

function submitcontactus(){
    alert("Thank you for your contact! \nHave a good day!!!");
}