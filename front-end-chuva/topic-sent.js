
//expande ou colapsa os tópicos

function showOrHideDiv() {
    let x = document.getElementById("showOrHide");
    if (x.style.display === "none") {
       x.style.display = "block";
    } else {
       x.style.display = "none";
    }
 }

 //FIM expande ou colapsa os tópicos

 
 //expande ou colapsa o resumo 
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnTextBottom = document.getElementById("myBtnBottom");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<b>ver mais</b>"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " "
      btnTextBottom.innerHTML = "<b>ver menos</b>";
      moreText.style.display = "block";
    }
  }
//FIM expande ou colapsa o resumo


