
const cv = document.getElementById('game');
const ctx = cv.getContext('2d');
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const reload =document.getElementById("reload");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

//snake description
let tileCount=15;				//split each size of total
let tileSize=15;				// size of snake(creature)
let headX = Math.floor(Math.random()*tileCount);					// indexing x point
let headY = Math.floor(Math.random()*tileCount);					// indexing y point
const snakeParts = []  	// array for snake parts
let tailLength = 2;

//food description
let foodX = Math.floor(Math.random()*tileCount);
let foodY = Math.floor(Math.random()*tileCount);

// for x,y movement
let velocityX = 0;
let velocityY = 0;

let keyTouch = "right";

// top buttons:
reload.addEventListener("click",()=>(
console.log("hi")
))


//key actions
document.body.addEventListener("keydown",()=>(keyAction(event.keyCode)));
up.addEventListener("click",()=>(keyTouch="up",keyAction(38)));
down.addEventListener("click",()=>(keyTouch="down",keyAction(40)));
right.addEventListener("click",()=>(keyTouch="right",keyAction(39)));
left.addEventListener("click",()=>(keyTouch="left",keyAction(37)));



function keyAction(e){
	//up
	if(e == 38 ){
		if(velocityY==1){			//prevent from oposite side movement
			return;
		}
		velocityY=-1;
		velocityX=0;
	}
	//down 
	if(e == 40){
		if(velocityY==-1){return;}
		velocityY=1;
		velocityX=0;
	}
	//left
	if(e== 37 ){
		if(velocityX==1){return;}
		velocityX =-1;
		velocityY=0;
	
	}
	//right
	if(e==39){
		if(velocityX==-1){return;}
		velocityX=1;
		velocityY=0;
	}
}



class snakePart{      //update const snakepart
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}
snakeParts.push(new snakePart(headX,headY));

//initilize Game
function drawGame(){ 
	let speed =99;		// time out
	clearScreen();
	drawSnake();
	collitionCheck();
	drawFood();

	let result= gameOver();
	//console.log(result,"\n",headX,headY);
	if(result){
		return;
	}changePlace();

	setTimeout(drawGame,speed);		// refreshrate every second
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
	for(let i=0; i<snakeParts.length; i++){
		let part=snakeParts[i];
		if(foodX==part.x && part.y==foodY){
			foodX=Math.floor(Math.random()*tileCount);
			foodY=Math.floor(Math.random()*tileCount);
			tailLength++;
	}

}}


//game-over function
function gameOver(){
	let gameOver=false;
	if(velocityX===0 && velocityY===0){
		//console.log("1")
		return false;
	}
	if(headX===-1){
		console.log("2")
		gameOver=true;
	} if(headX===(cv.clientWidth/tileCount)+1){
		console.log("3")
		gameOver=true;
	}
	 if(headY===-1){
		console.log("4")
		gameOver=true;
	} if(headY===(cv.clientHeight/tileCount)+1){
		console.log("5")
		gameOver=true;
	}

	if(snakeParts.length>4){
		//console.log(snakeParts);
		for(let i=0;i<snakeParts.length-1;i++){
			let	part =snakeParts[i];

			if(part.x===headX && part.y===headY){
				gameOver=true;
				console.log("snake Part touched: ",part.x,part.y);
				break;
			}
		}}

	//display gameOver
	if(gameOver){
		ctx.fillStyle="black";
		ctx.font="3rem monospace";
		ctx.fillText("Game Over!",cv.clientWidth/10,cv.clientHeight/2);
	}

	return gameOver;
}




