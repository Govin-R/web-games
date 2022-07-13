
const cv = document.getElementById('game');
const ctx = cv.getContext('2d');

//snake description
let tileCount=15;				//split each size of total
let tileSize=15;				// size of snake(creature)
let headX = 2;					// indexing x point
let headY = 1;					// indexing y point
const snakeParts = []  	// array for snake parts
let tailLength = 2;

//food description
let foodX = 3;
let foodY = 3;

// for x,y movement
let velocityX = 0;
let velocityY = 0;

//key actions
document.body.addEventListener("keydown",keyAction);

function keyAction(event){
	//up
	if(event.keyCode == 38){
		if(velocityY==1){			//prevent from oposite side movement
			return;
		}
		velocityY=-1;
		velocityX=0;
	}
	//down 
	if(event.keyCode == 40){
		if(velocityY==-1){return;}
		velocityY=1;
		velocityX=0;
	}
	//left
	if(event.keyCode== 37){
		if(velocityX==1){return;}
		velocityX =-1;
		velocityY=0;
	
	}
	//right
	if(event.keyCode==39){
		if(velocityX==-1){return;}
		velocityX=1;
		velocityY=0;
	}
}

class snakePart{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}
snakeParts.push(new snakePart(headX,headY));

function drawGame(){

	changePlace();
	let result=gameOver();
	console.log(result)
	if(result){
		return;
	}

	let speed = 9;
	clearScreen();
	drawSnake();
	collitionCheck();
	drawFood();
	
	setTimeout(drawGame,1000/speed);
}
drawGame();

function clearScreen(){

	ctx.fillStyle="white";
	ctx.fillRect(0,0,cv.clientWidth,cv.clientHeight);

}

function drawSnake(){
	ctx.fillStyle="black";
	//console.log(snakeParts);
	for(let i=0;i<snakeParts.length; i++){

		let part = snakeParts[i];
		ctx.fillRect(part.x*tileCount, part.y*tileCount,tileSize,tileSize);
	}	
	snakeParts.push(new snakePart(headX,headY));
	if(snakeParts.length>tailLength){
		snakeParts.shift();
	}	
}

function changePlace(){
	headX+=velocityX;
	headY+=velocityY;
}

function drawFood(){
	ctx.fillStyle="orange";
	ctx.fillRect(foodX*tileCount,foodY*tileCount,tileSize,tileSize);
}

function collitionCheck(){
	if(foodX==Math.floor(headX)&&Math.floor(headY)==foodY){
		foodX=Math.floor(Math.random()*tileCount);
		foodY=Math.floor(Math.random()*tileCount);
		tailLength++;
		}
}

function gameOver(){
	let gameOver=false;
	if(velocityX===0 && velocityY===0){
		return false;
	}
	if(headY<0){
		gameOver=true;
	}else if(headY==tileCount){
		gameOver=true;
	}
	else if(headX<0){
		gameOver=true;
	}else if(headY===tileCount){
		gameOver=true;
	}


	for(let i=0;i<snakeParts.length;i++){
		let	part =snakeParts[i];
		if(part.x===headX && part.y===headY){
			gameOver=true;
			break;
		}
	}

	if(gameOver){
		ctx.fillStyle="black";
		ctx.font="3rem monospace";
		ctx.fillText("Game Over!",cv.clientWidth,cv.clientHeight);
	}

	return gameOver;
}




