document.getElementById("alertname").onclick = function() {
    alert("Muhammad Abdullah")
    document.getElementById("Statement").innerHTML='alert("Muhammad Abdullah")';
}

document.getElementById("alertnumber").onclick=function() {
    alert("786")
    document.getElementById("Statement").innerHTML="alert('786')";
   
}
document.getElementById("Clear").onclick= function(){
    document.getElementById("Statement").innerHTML="";
}

document.getElementById("Clearout").onclick = function (){
    document.getElementById("output").innerHTML=""
}


document.getElementById("showvariablenames").onclick = function(){
    document.getElementById("Statement").innerHTML = "var fisrtName ='Muhammmad ' \n  var lastName='Abdullah' "
}
document.getElementById("showcamelcase").onclick = function(){
    document.getElementById("Statement").innerHTML="LearningJavaSacriptIsNotEasyForBeginners"
}

document.getElementById("sum2numbers").onclick = function(){
    document.getElementById("Statement").innerHTML= " Solve = 10 + 5 "
    document.getElementById("output").innerHTML= "15"
}

document.getElementById("Substract2numbers").onclick = function(){
    document.getElementById("Statement").innerHTML="Solve = 20 - 10 "
    document.getElementById("output").innerHTML="10"
}

document.getElementById("multiply2numbers").onclick = function(){
    document.getElementById("Statement").innerHTML="Solve = 20 * 10 "
    document.getElementById("output").innerHTML="200"
}

document.getElementById("divide2numbers").onclick = function(){
    document.getElementById("Statement").innerHTML="Solve = 200 / 20 "
    document.getElementById("output").innerHTML="10"
}

document.getElementById("calculatesomenumbers").onclick = function(){
    document.getElementById("Statement").innerHTML="3 * (2 + 4) + 5**2 "
    document.getElementById("output").innerHTML="43"
}


