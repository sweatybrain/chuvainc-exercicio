// trocar div Criar Tópico para div Formulário 
function show() {
  var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

  if (div1.style.display == "block") {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    div1.style.display = "block";
    div2.style.display = "none";
  }
}
// FIM trocar div Criar Tópico para div Formulário 

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


