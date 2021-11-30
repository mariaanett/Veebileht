// modaali/tekstiga kasti hankimine
var modal = document.getElementById("myModal");

// nupu hankimine, mis avab modaali/tekstiga kasti
var btn = document.getElementById("myBtn");

// <span> elemendi hankimine, mis sulgeb modaali/tekstiga kasti
var span = document.getElementsByClassName("close")[0];

// kui kasutaja klikib nupule, siis ava modaal/tekstiga kast
btn.onclick = function() {
  modal.style.display = "block";
}

// kui kasutaja klikib <span> elemendi (x) peale, siis sulge modaal/tekstiga kast
span.onclick = function() {
  modal.style.display = "none";
}

// kui kasutaja klikib ükskõik kuhu väljaspool modaali/tekstiga kasti, siis sulge see
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}