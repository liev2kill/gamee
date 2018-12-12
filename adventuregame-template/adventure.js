var title = document.getElementById('title');
var description = document.getElementById('description');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var inventory = document.getElementById('inventoryItem');
var music = new Audio('music.mp3');
var music1 = new Audio('music1.mp3')
img = false;

btn2.style.display = "none";
btn1.innerHTML = "Start";
btn3.style.display = "none";
inventory.style.display = "none";
title.innerHTML = "The Witcher";
description.innerHTML = "Experience the epic story of professional monster slayer, witcher Geralt of Rivia. ";

button1.onclick= function(){
	document.body.style.backgroundImage = "url('witcher1.jpg')";
	btn2.style.display = "inline";
	btn1.innerHTML = "Go left"
	btn2.innerHTML = "The abandoned house"
	btn3.innerHTML = "Go right "
	btn3.style.display = "inline";
	title.innerHTML = "You stand upon a hill you have to choose where to go";
	description.innerHTML = "You sit upon a view... In the distance you see an abandoned house, <br>You can also hear someone screaming for help on your left, Or you can continue your journey to corvo bianco (your home)"

	btn1.onclick= function(){
		levela1();

	}
	btn2.onclick = function(){
		levela2();
	}
	btn3.onclick = function(){
		levela3();
	}

}
function levela1(){  //dark route
	document.body.style.backgroundImage = "url('witcher5.jpg')";
		btn2.style.display = "inline";
		btn3.style.display = "inline";
		btn1.innerHTML = "Go to the ruins";
		btn3.innerHTML = "Go through the mountain pass";
		btn2.innerHTML = "Go with a boat";
		title.innerHTML = "You decided to go Left and keep walking the long journey to your house";
		description.innerHTML = "You see a snowy mountain pass and harbor. "
		btn1.onclick = function(){
			dead1();

		}

		btn2.onclick = function(){
			dark2();

		}

		btn3.onclick = function(){
			dark3();
}
}
	
function dark2(){	
	document.body.style.backgroundImage = "url('witcher12.jpg')";
	btn2.style.display = "inline";
	btn3.style.display = "none";
	title.innerHTML = "You see a storm coming up"
	description.innerHTML = "You either wait to for it to pass or go through the storm"
	btn1.innerHTML = "Wait for the storm to pass";
	btn2.innerHTML = "Go through the storm";
	description.style.color = "red"
	btn1.onclick = function(){
		toussaint01();

	}

	btn2.onclick = function(){
		dead2();

	}

}
function toussaint01(){
	document.body.style.backgroundImage = "url('witcher15.png')";
	btn3.style.display = "none";
	btn2.style.display = "none";
	title.innerHTML =  "You just set shore upon toussaint";
	description.style.display = "none";
	btn1.innerHTML = "Continue";
	btn1.onclick = function(){
		victory1();
		btn1.style.display = "none"
	}
}
function dark3(){	
	document.body.style.backgroundImage = "url('witcher13.jpg')";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	btn1.innerHTML = "castle";
	btn2.innerHTML = "mountains";
	btn3.innerHTML = "town";
	title.innerHTML =  "You see a mountain city you can choose where to go";
	description.innerHTML = "You can choose to go through the mountains to the castle or the town"
	btn1.onclick = function(){
		dead4();

	}

	btn2.onclick = function(){
		dead4();

	}

	btn3.onclick = function(){
		dead4();
	}
}

function levela2(){ //House route
	document.body.style.backgroundImage = "url('forest3.jpg')";
	btn2.style.display = "inline";
	btn1.innerHTML = "investigate the house";
	btn2.innerHTML = "You keep moving";
	btn3.style.display = "none";
	title.innerHTML = "You decided to go to the abandoned house";
	title.style.color = "darkblue"
	description.style.color = "red"
	description.innerHTML = "You hear a noise inside the house you can ignore it and move on or you can go and investigate or you can go back"
		btn1.onclick= function(){ 
			insideHouse();
		}

		btn2.onclick= function(){ 
			housefield();
		}

}
function insideHouse(){
	document.body.style.backgroundImage = "url('witcher2.jpg')";
			btn2.style.display = "inline";
			btn1.innerHTML = "You draw your sword";
			btn2.innerHTML = "You leave your sword";
			btn3.style.display = "none";
			title.innerHTML = "You enter the abandoned house There is an Eery mood"
			description.innerHTML = "You can draw your sword or leave it and investigate"
			button1.onclick= function(){
				fighting();
			}
			button2.onclick= function(){
				dead1();

			}
}
function housefield(){
	document.body.style.backgroundImage = "url('witcher6.jpg')";
	btn2.style.display = "none";
	btn1.innerHTML = "Go to the camp";
	btn3.innerHTML = "Continue walking";
	btn3.style.display = "inline";
	title.innerHTML = "You see an abandoned camp you can investigate or continue walking to your home (corvo bianco)	" 	
	title.style.color = "black"	
	description.style.display = 'none'
	 	btn1.onclick= function(){
	 		dead1();

		}
		btn2.onclick= function(){
			victory1();

		}

}
function fighting(){
	document.body.style.backgroundImage = "url('fighting.png')";
	title.innerHTML = "Bandits ambush you but you fight them off"
	description.style.display = "none";
	btn1.style.display = "inline";
	btn2.style.display = "none";
	btn3.style.display = "none";
	music1.pause();
	btn1.innerHTML = "You continue walking";
	btn1.onclick= function(){
	 		housefield();

		}//house route
}	
function levela3(){ //toussaint route	
	document.body.style.backgroundImage = "url('witcher9.jpg')";
	btn2.style.display = "inline";
	btn1.innerHTML = "Follow the road";
	btn2.innerHTML = "Go through the forest";
	btn3.innerHTML = "Get a horse";
	btn3.style.display = "inline";
	title.innerHTML = "You are now in the land of toussaint you are close to your house"
	description.innerHTML = "You can keep following the road or go through the forest for a shortcut or try and get a horse"
	btn1.onclick= function(){
		toussaint1();

	}
	btn2.onclick= function(){
		toussaint2();
		

	}
	button3.onclick= function(){
		toussaint3();
		

	}

}
function toussaint1(){
	document.body.style.backgroundImage = "url('witcher7.jpg')";
	btn2.style.display = "inline";
	btn3.style.display = "none";
	btn1.innerHTML = "Go up the hill";
	btn2.innerHTML = "Walk around";
	title.innerHTML = "You see the hill where your house is on"
	description.innerHTML = "Will you go straight to your house or go around a safer route"
	btn1.onclick= function(){
		dead1();

	}
	btn2.onclick= function(){
		victory1();
		

	}

}
function toussaint2(){
	document.body.style.backgroundImage = "url('witcher8.png')";
	btn3.style.display = "none";
	btn1.innerHTML = "Go back";
	btn2.innerHTML = "Go further";
	description.style.display = "inline";
	title.innerHTML = "Once you arive at the forest it's almost dark"
	description.innerHTML = "You have a bad feeling about it You can continue or go back"
	btn1.onclick= function(){
		levela3();

	}
	btn2.onclick= function(){
		dead1();
		

	}
}
function toussaint3(){
	document.body.style.backgroundImage = "url('witcher10.jpg')";
	btn2.style.display = "inline";
	btn3.style.display = "none";
	btn1.innerHTML = "Follow the road";
	btn2.innerHTML = "Through the wildlands"
	title.innerHTML = "You have reached your stable"
	description.style.display = "inline";
	description.innerHTML = "You can pick up your horse or go without him at a risk ofcourse.. There are two ways you can go the road or the wildlands";
	var img = document.createElement('img');
    img.src = 'horse.png';
    img.id = 'horse';
    document.getElementById('game-container').appendChild(img);
    btn1.onclick = function(){
        if (img == true) {
        	btn2.style.display = "none";
			btn3.style.display = "none";
			description.style.display = "none";
            journey();     
        }else{
        	img.style.display = "none";
            dead3();
        }
    }
    btn2.onclick = function(){
    	btn2.style.display = "none";
		btn3.style.display = "none";
		description.style.display = "none";
        if (img == true) {
            journey();      
        }else{
        	img.style.display = "none";
            dead3();
        }
    }
    img.onclick = function(){
        img.style.display = "none";
        img = true;
    }
}
function journey(){
	document.body.style.backgroundImage = "url('witcher14.jpg')";
	title.innerHTML = "You ride the road on your horse towards your home";
	btn1.innerHTML = "You continue your journey"
	btn1.onclick = function(){
		
		victory1();
	}
}
function victory1(){
	document.body.style.backgroundImage = "url('victory.jpg')";
	title.innerHTML = "After a long way you find your way home";
	description.style.display = "inline";
	description.innerHTML = "Congratulations!";
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";

}
function dead1(){
	document.body.style.backgroundImage = "url('death.jpg')"; 
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	description.style.display = "none";
	title.style.display = "inline";
	title.innerHTML = "You were ambushed by bandits and died"
	title.style.color = "red"
}
function dead2(){
	document.body.style.backgroundImage = "url('death.jpg')"; 
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	description.style.display = "none";
	title.style.display = "inline";
	title.innerHTML = "The storm destroyed your ship and you drowned"
	title.style.color = "red"
}
function dead3(){
	document.body.style.backgroundImage = "url('death.jpg')"; 
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	description.style.display = "none";
	title.style.display = "inline";
	title.innerHTML = "Bandits ambushed you, you couldn't outrun them because you didn't have a horse"
	title.style.color = "red"
	description.style.color = "red"
}
function dead4(){
	document.body.style.backgroundImage = "url('death.jpg')"; 
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	description.style.display = "none";
	title.style.display = "inline";
	title.innerHTML = "You got caught and executed there are no good people in the mountains"
	title.style.color = "red"
	description.style.color = "red"
}




