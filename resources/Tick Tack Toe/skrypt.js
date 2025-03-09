
var tryb = 2;

var tura = Math.floor(Math.random()*2)+1;

var gracz = 0;

var k = new Array(9);
k[0] = 0;
k[1] = 0;
k[2] = 0;
k[3] = 0;
k[4] = 0;
k[5] = 0;
k[6] = 0;
k[7] = 0;
k[8] = 0;

var kolko = '<img height = 190 width = 190 src= "img/kolko.png"/>'
var kolkos = '<img height = 70 width = 70 src= "img/kolko.png"/>'
var krzyzyk = '<img height = 190 width = 190 src = "img/krzyzyk.png"/>'
var krzyzyks = '<img height = 70 width = 70 src = "img/krzyzyk.png"/>'

function info(){
if (tura == 1){
		document.getElementById("turn_text").innerHTML = "Tura gracza:  ";
		document.getElementById("turn_znak").innerHTML = "  "+kolkos;
	} else {
		document.getElementById("turn_text").innerHTML = "Tura gracza:  ";
		document.getElementById("turn_znak").innerHTML = "  "+krzyzyks;
	}
}

function obrazek(n){
		if (tura == 1){
		k[n-1] = 1;
		document.getElementById("t"+n).innerHTML = kolko;
		document.getElementById("t"+n).setAttribute("onclick",";");
		document.getElementById("tile"+n).style.background = "#333333";
		document.getElementById("t"+n).style.cursor = "default";
		tura = 2;
		end();
	} else if (tura == 2) {
		k[n-1] = 2;
		document.getElementById("t"+n).innerHTML = krzyzyk;
		document.getElementById("t"+n).setAttribute("onclick",";");
		document.getElementById("tile"+n).style.background = "#333333";
		document.getElementById("t"+n).style.cursor = "default";
		tura = 1;
		end();
	}
	info();
}

function end(){
	if((k[0] == 1)&&(k[1] == 1)&&(k[2] == 1)){															//KÓŁKO//
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile1").style.background = "#253550";
		document.getElementById("tile2").style.background = "#253550";
		document.getElementById("tile3").style.background = "#253550";
		tura = 3;
	} else if ((k[0] == 1)&&(k[3] == 1)&&(k[6] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile1").style.background = "#253550";
		document.getElementById("tile4").style.background = "#253550";
		document.getElementById("tile7").style.background = "#253550";
		tura = 3;
	} else if ((k[3] == 1)&&(k[4] == 1)&&(k[5] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile4").style.background = "#253550";
		document.getElementById("tile5").style.background = "#253550";
		document.getElementById("tile6").style.background = "#253550";
		tura = 3;
	} else if ((k[6] == 1)&&(k[7] == 1)&&(k[8] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile7").style.background = "#253550";
		document.getElementById("tile8").style.background = "#253550";
		document.getElementById("tile9").style.background = "#253550";
		tura = 3;
	} else if ((k[1] == 1)&&(k[4] == 1)&&(k[7] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile2").style.background = "#253550";
		document.getElementById("tile5").style.background = "#253550";
		document.getElementById("tile8").style.background = "#253550";
		tura = 3;
	} else if ((k[2] == 1)&&(k[5] == 1)&&(k[8] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile3").style.background = "#253550";
		document.getElementById("tile6").style.background = "#253550";
		document.getElementById("tile9").style.background = "#253550";
		tura = 3;
	} else if ((k[0] == 1)&&(k[4] == 1)&&(k[8] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile1").style.background = "#253550";
		document.getElementById("tile5").style.background = "#253550";
		document.getElementById("tile9").style.background = "#253550";
		tura = 3;
	} else if ((k[2] == 1)&&(k[4] == 1)&&(k[6] == 1)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#4040ff">Kółko Wygrało! <br/><br/> Jeszcze raz? </span> <br/> <br/></br> <a href = "index.html"></a>';
		document.getElementById("tile3").style.background = "#253550";
		document.getElementById("tile5").style.background = "#253550";
		document.getElementById("tile7").style.background = "#253550";
		tura = 3;
	} else if((k[0] == 2)&&(k[1] == 2)&&(k[2] == 2)){															//KRZYZYK//
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile1").style.background = "#503535";
		document.getElementById("tile2").style.background = "#503535";
		document.getElementById("tile3").style.background = "#503535";
		tura = 3;
	} else if ((k[0] == 2)&&(k[3] == 2)&&(k[6] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile1").style.background = "#503535";
		document.getElementById("tile4").style.background = "#503535";
		document.getElementById("tile7").style.background = "#503535";
		tura = 3;
	} else if ((k[3] == 2)&&(k[4] == 2)&&(k[5] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile4").style.background = "#503535";
		document.getElementById("tile5").style.background = "#503535";
		document.getElementById("tile6").style.background = "#503535";
		tura = 3;
	} else if ((k[6] == 2)&&(k[7] == 2)&&(k[8] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile7").style.background = "#503535";
		document.getElementById("tile8").style.background = "#503535";
		document.getElementById("tile9").style.background = "#503535";
		tura = 3;
	} else if ((k[1] == 2)&&(k[4] == 2)&&(k[7] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile2").style.background = "#503535";
		document.getElementById("tile5").style.background = "#503535";
		document.getElementById("tile8").style.background = "#503535";
		tura = 3;
	} else if ((k[2] == 2)&&(k[5] == 2)&&(k[8] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile3").style.background = "#503535";
		document.getElementById("tile6").style.background = "#503535";
		document.getElementById("tile9").style.background = "#503535";
		tura = 3;
	} else if ((k[0] == 2)&&(k[4] == 2)&&(k[8] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style ="color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile1").style.background = "#503535";
		document.getElementById("tile5").style.background = "#503535";
		document.getElementById("tile9").style.background = "#503535";
		tura = 3;
	} else if ((k[2] == 2)&&(k[4] == 2)&&(k[6] == 2)){
		document.getElementById("turn").innerHTML = '<span onclick = "location.reload()" style = "color:#bb1010">Krzyżyk Wygrał! <br/><br/> Jeszcze raz? </span> <br/> <br/><a href = "index.html">Powróć do Menu</a>';
		document.getElementById("tile3").style.background = "#503535";
		document.getElementById("tile5").style.background = "#503535";
		document.getElementById("tile7").style.background = "#503535";
		tura = 3;
	}
}


window.onload = info;