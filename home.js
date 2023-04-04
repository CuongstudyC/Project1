
if ( localStorage.Tontai ){

}
else{
  localStorage.count=0;
  localStorage.TotalForAll=0;
  localStorage.countRemove = 0;
}

var total =document.getElementById("TotalCheck");
total.innerHTML = localStorage.TotalForAll;
