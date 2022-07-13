
const cv = document.getElementById('game');
const ctx = cv.getContext("2d");


function drawGame(){
	clearScreen();
}

function clearScreen(){

	ctx.fillStyle="red";
	ctx.fillRect(0,0,cv.clientWidth,canvas.clientHeight);
}


