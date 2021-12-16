function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }
  
  // Add active class to the current button (highlight it)
  var header = document.getElementById("primaryNav");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  
  function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#selectbrowser');
    s.style.display = "block";
    s.textContent = sel.value;
  
  }
  
  document.getElementById('options').onclick = function() {
    var hondaMotor = [ "Honda Metropolitan (49cc)—1 person", "Honda Dio (110cc)—2 person", "Honda PCX150 (149cc)—2 person"];
    var ATV =  ["Honda Pioneer 1000"];
    var  Jeep = ["4-door Jeep Wrangler—manual with A/C—5 people max", "2-door Jeep Wrangler—open air—manual—4 people max"];

    var list = ["Choose Type"]

    var select = document.getElementById('bikes')

    if (document.getElementById('options').value == "honda-motor") {

      list = list.concat(hondaMotor)
 
    }

    if (document.getElementById('options').value == "ATV-Side-by-Side") {

      list = list.concat(ATV)
    }

    if (document.getElementById('options').value == "jeep-rentals") {

      list = list.concat(Jeep)
    }

    select.innerHTML = "";

    for (const val of list)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }




  }