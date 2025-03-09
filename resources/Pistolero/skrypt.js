var ammo = 6;
var points = 0;
var points_needed_val = 0;
var time_val = 0;

var time_val_remaining = 0;
var lifes = 3;
var difficulty_val = 0;

var ready = true;
var loaded = true;
var reloading = false;
var loading = false;

var give_points = true;
var civil = false;
var game_over = false;
var started = false;

var music = new Audio('sound/music.mp3');
music.volume = 0.06;

var shoot_s = new Audio('sound/shoot.mp3');
var reload_s = new Audio('sound/reload.mp3');
var death1_s = new Audio('sound/death1.mp3')
var death2_s = new Audio('sound/death2.mp3')

var grab = document.getElementsByClassName('bandito');

grab[0].addEventListener("click", function() { trup(0) });
grab[1].addEventListener("click", function() { trup(1) });
grab[2].addEventListener("click", function() { trup(2) });

grab[3].addEventListener("click", function() { trup(3) });
grab[4].addEventListener("click", function() { trup(4) });
grab[5].addEventListener("click", function() { trup(5) });

$('#button_easy').on("click", function(){difficulty('e');});
$('#button_medium').on("click", function(){difficulty('m');});
$('#button_hard').on("click", function(){difficulty('h');});

document.getElementById('points_display').innerHTML = "Points: "+points;
document.getElementById('clock').innerHTML = time_val_remaining;
$("#ammo_display").css("backgroundImage", "url('img/shelf1-6.png')");
document.getElementById("points_needed_display").innerHTML = "Point required: "+ 0;
$("#life").css("backgroundImage", "url('img/shelf2-3.png')");

document.addEventListener("click", function(){
	if (ammo >= 1 && loaded == true && loading == false && reloading == false && !game_over && started && time_val > 0){
		shoot_s.play();
		ammo--;
		give_points = true;
		switch(ammo){
			case 6:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-6.png'");
				break;
			}
			case 5:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-5.png'");
				break;
			}
			case 4:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-4.png'");
				break;
			}
			case 3:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-3.png'");
				break;
			}
			case 2:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-2.png'");
				break;
			}
			case 1:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-1.png'");
				break;
			}
			case 0:{
				$("#ammo_display").css("backgroundImage", "url('img/shelf1-0.png'");
			break;
			}	
		}
		
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-'+ammo+'.png'");
		loaded = false;
		loading = true;
		setTimeout(function(){
			if (reloading == false && !game_over){
			loading = false;
			loaded = true;
			}
		},1300);
	}
});

document.addEventListener('keydown', function(event) {
	if (!game_over && started){
		switch(event.keyCode){
			case 82:{
				if(reloading == false && !game_over){
					ammo = 0;
					$("#ammo_display").css("backgroundImage", "url('img/shelf1-0.png')");
					reload();
				}
			}
		}
	}
});

function difficulty(c){
	switch(c){
		case 'e':{
			difficulty_val = 1;
			started = true;
			points_needed_val = 1400;
			time_val_remaining = 120;
			document.getElementById("points_needed_display").innerHTML = "Point required: "+points_needed_val;
			start();
			break;
		}
		case 'm':{
			difficulty_val = 2;
			started = true;
			start();
			points_needed_val = 1700;
			time_val_remaining = 100;
			document.getElementById("points_needed_display").innerHTML = "Point required: "+points_needed_val;
			break;
		}
		case 'h':{
			difficulty_val = 3;
			started = true;
			start();
			points_needed_val = 2000;
			time_val_remaining = 80;
			document.getElementById("points_needed_display").innerHTML = "Point required: "+points_needed_val;
			break;
		}
	}
}

function start(){
	music.play();
	$('#menu').css("opacity", 0);
	$('#menu').css("z-Index", 0);
	$('.button').css("z-Index", 0);
	$('.button').off("click");
	$('.button').removeClass("button");
	$('#game').css("opacity", 1.5);
	$('#game').css("z-Index", 10);
	setTimeout(function(){attack()},2000);
	setTimeout(function(){time()},1000);
}

function time(){
	if(time_val < 125 && !game_over){
		setTimeout(function(){
			time_val++;
			time_val_remaining--;
			document.getElementById("clock").innerHTML = time_val_remaining;
			if (time_val_remaining <= 0) gameOver();;
			time();
		},1000);
	}
}

function reload(){
	loaded = false;
	reloading = true;
	var n = 0;
	var dot = '';
	
	$("#ammo_display").css("backgroundImage", "url('img/shelf1-0.png')");
	
	reload_s.play();
	setTimeout(function(){
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-1.png')");
	},600);
	setTimeout(function(){
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-2.png')");
	},800);
	setTimeout(function(){
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-3.png')");
	},1100);
	setTimeout(function(){
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-4.png')");
	},1400);
	setTimeout(function(){
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-5.png')");
	},1700);
	
	setTimeout(function(){
		ammo = 6;
		$("#ammo_display").css("backgroundImage", "url('img/shelf1-6.png')");
		loaded = true;
		reloading = false;
		loading = false;
	}, 2000);
}


function trup(n){
	if (loaded == true && !game_over && started && ammo > 0){
		
		var n3 = Math.floor(Math.random()*2)+1;
		
		switch(n3){
			case 1:{
				death1_s.play();
				break;
			}
			case 2:{
				death2_s.play();
				break;
			}
		}
		
		loaded = false;
		if (give_points == true && civil == false){
			points += 100;
			give_points = false;
			if (points >= points_needed_val) gameOver();
		}else if (civil == true && give_points == true){
			points -= 200;
			give_points = false;
			lifes--;
			
			if (lifes == 0) {
				shoot_s.play();
				gameOver();;
			}
		}
		
		switch(lifes){
				case 2:{
					$("#life").css("backgroundImage", "url('img/shelf2-2.png')");
					break;
				}
				case 1:{
					$("#life").css("backgroundImage", "url('img/shelf2-1.png')");
					break;
				}
				case 0:{
					$("#life").css("backgroundImage", "url('img/shelf2-0.png')");
					break;
				}
			}
		
		document.getElementById("points_display").innerHTML = "Points: "+points;
		setTimeout(function(){
			$(grab[n]).css("opacity",1);
			grab[n].addEventListener("click", function() { trup(n) });
		},1000*2.5/difficulty_val);
		$(grab[n]).css("opacity",0);
		$(grab[n]).css("scale",(0.5));
		grab[n].removeEventListener("click", function() { trup(n) });
		setTimeout(function(){
			$(grab[n]).css("scale",(1.6))}
		,1000*2.5/difficulty_val);
		loaded = true;
	}
}

function attack(){
	if(ready && !game_over && started){
		ready = false;
		var n = Math.floor(Math.random()*6);
		var n1 = Math.floor(Math.random()*2)+1;
		var n2 = Math.floor(Math.random()*6)+1;
		
		if (n2 == 6){
			civil = true;
			if (n == 0) $(grab[n]).css("backgroundImage", "url('img/civil3.png')");
			else if (n == 2) $(grab[n]).css("backgroundImage", "url('img/civil3.png')");
			else if (n == 5) $(grab[n]).css("backgroundImage", "url('img/civil6.png')");
			else $(grab[n]).css("backgroundImage", "url('img/civil.png')");
		}
		
		switch(n){
			case 0: {
				$(grab[n]).css("left","350px");
				setTimeout(function(){
					$(grab[n]).css("left","200px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito3.png')");
				},1000*2.5/difficulty_val)
				break;
			}
			case 1: {
				$(grab[n]).css("left","1310px");
				setTimeout(function(){
					$(grab[n]).css("left","1500px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito.png')");
				},1000*2.5/difficulty_val)
				break;
			}
			case 2: {
				$(grab[n]).css("left","1880px");
				setTimeout(function(){
					$(grab[n]).css("left","1700px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito3.png')");
				},1000*2.5/difficulty_val)
				break;
			}
			case 3: {
				$(grab[n]).css("top","235px");
				setTimeout(function(){
					$(grab[n]).css("top","400px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito.png')");
				},1000*2.5/difficulty_val)
				break;
			}
			case 4: {
				$(grab[n]).css("left","335px");
				setTimeout(function(){
					$(grab[n]).css("left","500px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito.png')");
				},1000*2.5/difficulty_val)
				break;
			}
			case 5: {
				$(grab[n]).css("top","260px");
				setTimeout(function(){
					$(grab[n]).css("top","120px");
					ready = true;
					setTimeout(function(){attack()},n1*1250-time_val*2*2.5/difficulty_val);
				},850*2.5/difficulty_val);
				setTimeout(function(){
					civil = false;
					$(grab[n]).css("backgroundImage", "url('img/bandito6.png')");
				},1000*2.5/difficulty_val)
				break;
			}
		}
	}
}

function gameOver(){
	music.pause();
	$('#ammo_display').css("opacity",0);
	$('#points_display').css("opacity",0);
	$('#points_needed_display').css("opacity",0);
	$('#life').css("opacity",0);
	if (lifes > 0 && time_val_remaining > 0){
		$("#G_O_screen").css("color", "green");
		document.getElementById("G_O_screen").innerHTML = "You Win";
	}
	$('#G_O_screen').css("opacity",1);
	$('#G_O_screen').css("z-Index",100);
	game_over = true;
}
