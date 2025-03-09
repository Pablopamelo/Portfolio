var xo = "tx3";
var yo = "ty3";
var old_xp = 0;
var old_yp = 0;

var xp = 0;
var yp = 0;

var xV = 0;
var yV = 0;

var xs = 3;
var ys = 3;

var time = 0;
var move_counter = 1;
var apples_counter = 0;
var food_meter = 11; 
var score = 0;
var bonus = 0;
var bonusn = 1;
var max_food = 0;
var lottery = 0;

var snek = '<img height = 131.2 width = 131.2 src = "img/snek.png"/>';
var apple = '<img height = 131.2 width = 131.2 src = "img/apple.png"/>';
var golden_apple = '<img height = 131.2 width = 131.2 src = "img/golden_apple.png"/>';
var grass = '<img height = 131.2 width = 131.2 src = "img/grass.png"/>';
var dead = '<img height = 131.2 width = 131.2 src = "img/dead.png"/>';
	
var board = "";
var lane = '<div style ="clear:both;"></div>' 
	
var apple_colected = false;
var bool_golden_apple = false;
	
function start(){
		do{
			xp = Math.floor(Math.random()*5)+1;
			yp = Math.floor(Math.random()*5)+1;
		}while (xp == xs && yp == ys)
	
	for (j = 1; j<=5; j++){
		for (i=1; i<=5; i++){
			var x = "tx" + i;
			var y = "ty" + j;
			if (i == 3  && j == 3){
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+snek+'</div>';
			}else if (i == xp && j == yp){
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+apple+'</div>';	
			}else{
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+grass+'</div>';
			} 
		}
		board = board + lane;
	}
	
	document.getElementById("score_box").innerHTML = food_meter ;
	
	document.getElementById("gra").innerHTML = board;
	
	hunger();
}

document.addEventListener('keydown', (e) => {
	move(e.which);
});

function move(n){
	move_counter += 1;
	switch(n){
		case 38: {
			yV = 1;
			xV = 0;
			break;
		}
		case 37:{
			yV = 0;
			xV = -1;
			break;
		}
		case 39:{
			yV = 0;
			xV = 1;
			break;
		}
		case 40:{
			yV = -1;
			xV = 0;
			break;
		}
		default:{
			yV = 0;
			xV = 0;
		}
	}
	
	board = "";
	
	xs += xV;
	ys -= yV;
	
	if (xs == 0){
		xs +=1;
		move_counter--;
	}		
	if (xs == 6){
		xs -=1;
		move_counter--;
	}		
	if (ys == 0){
		ys +=1;
		move_counter--;
	}		
	if (ys == 6){
		ys -=1;
		move_counter--;
	}		
	
	if (xs == xp && ys == yp){
		apple_colected = true;
		if (bool_golden_apple == true){
			apples_counter += 10;
			food_meter +=50;
			bool_golden_apple = false;
		} else {
			apples_counter += 1;
			food_meter +=5;
		}
		food_meter = Math.round(food_meter);
		lottery = Math.floor(Math.random()*50)+1;
		if (lottery != 1){
			bool_golden_apple = false;
		}else{
			bool_golden_apple = true;
		}
	}
	
	if ((xp == 0 && yp == 0) || apple_colected == true){
		do{
			xp = Math.floor(Math.random()*5)+1;
			yp = Math.floor(Math.random()*5)+1;
		}while (xp == xs && yp == ys)
			apple_colected = false;
		}
		document.getElementById("score_box").innerHTML = food_meter;
			
	for (j = 1; j<=5; j++){
		for (i=1; i<=5; i++){
			var x = "tx" + i;
			var y = "ty" + j;
			if (i == xs && j == ys ){
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+snek+'</div>';
			}else if (i == xp && j == yp){
				if (bool_golden_apple == true){
					board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+golden_apple+'</div>';	
				}else{
					board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+apple+'</div>';	
				}
				
			}else{
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+grass+'</div>';
			}		
		}
		board = board + lane;
	}
	
	document.getElementById("gra").innerHTML = board;
	
}

function hunger(){
	time +=1;
	if (food_meter > max_food){
		max_food = food_meter;
	}
	food_meter = food_meter - (1 + time/100 + move_counter/200)/1.25;
	food_meter = Math.round(food_meter);
	if (food_meter >= 100*bonusn){
		bonusn += 1;
	}
	if (food_meter<=0){
		board = "";
		for (j = 1; j<=5; j++){
		for (i=1; i<=5; i++){
			var x = "tx" + i;
			var y = "ty" + j;
			if (i == xs && j == ys ){
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+dead+'</div>';
			}else if (i == xp && j == yp){
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+apple+'</div>';	
			}else{
				board = board + '<div style ="float:left; height:131.2px; width = 131.2px;" id =  "'+x+'" class = "'+y+'">'+grass+'</div>';
			}		
		}
		board = board + lane;
	}
		document.getElementById("gra").innerHTML = board;
		document.getElementById("buttonu").setAttribute("onclick",";");
		document.getElementById("buttonl").setAttribute("onclick",";");
		document.getElementById("buttonr").setAttribute("onclick",";");
		document.getElementById("buttond").setAttribute("onclick",";");
		document.getElementById("buttonu").style.cursor = "default";
		document.getElementById("buttonl").style.cursor = "default";
		document.getElementById("buttonr").style.cursor = "default";
		document.getElementById("buttond").style.cursor = "default";
		document.getElementById("score_box").innerHTML = 0;
		setTimeout("end()",3000);
	}else{
		document.getElementById("score_box").innerHTML = food_meter;
		setTimeout("hunger()",1000);
	}
	
}

window.onload = start;

function end(){
	move_counter--;
	time--;
	max_food--;
	score = (apples_counter*10 + max_food*2 + time*5 + (bonusn-1)*300)
	document.getElementById("gra").innerHTML = '<div id = "ending_screen">Game Over<br/><br/><div id = "fs">Final Score: '+score+'</div><div id = "ac">Apples Colected: '+apples_counter+'</div><div id = "mm">Moves Made: '+move_counter+'</div><div id = "mf">Max Food: '+max_food+'</div> <div id = "tm">Time: '+time+''+'s</div> <br/> <div id = "restart" onclick = "location.reload()">Try Again</div></div>';
	document.getElementById("restart").style.cursor = "pointer";
}