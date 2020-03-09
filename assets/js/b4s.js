
function bewerte () {
  var gut = 0.0;
  var nut = 0.0;
  var bewertungen = document.getElementsByClassName("bewertung");

  for (bew of bewertungen){
    if (bew.innerHTML == "0"){
      nut += 1.0;
    } else {
      gut += 1.0;
    }
  }

  var b4s = Math.abs(gut - nut) / (2.0 * (gut + nut));

  for (bew of bewertungen){
    if (bew.innerHTML == "0"){
      bew.innerHTML = b4s.toFixed(3);
    } else {
      bew.innerHTML = (1.0 - b4s).toFixed(3);
    }
  }
  return;
}

window.onload = bewerte;
