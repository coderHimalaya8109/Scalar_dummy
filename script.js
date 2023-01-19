function demof(){
 document.getElementById("hidePro").style.display = "block";
}
function demof2(){
 document.getElementById("hidePro").style.display =  "none"  ;
}
function btnf1(){
  let b1 = document.getElementById("slider_box1");
  let b2 = document.getElementById("slider_box2");
  let b3 = document.getElementById("slider_box3");
  let b4 = document.getElementById("slider_box4");

  if((b1.style.display === "block") || (b2.style.display === "block")){
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "block";
    b4.style.display = "block";
  }else{
    b1.style.display = "block";
    b2.style.display = "block";
    b3.style.display = "none";
    b4.style.display = "none";
  }
}
// function btnf2(){
//   if(b2.style.display === "block"){
//     b2.style.display = "none";
//     b4.style.display = "block";
//   }else{
//     b2.style.display = "block"
//   }
// }