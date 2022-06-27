
let openentScore = document.getElementById('opScore');
let yourScore = document.getElementById('yourScore');
const boxes = document.querySelectorAll('.boxes');
const r1 = document.querySelectorAll(".r1");
const r2 = document.querySelectorAll(".r2");
const r3 = document.querySelectorAll(".r3");

const default_val = {
	"r1":[0,0,0],
	"r2":[0,0,0],
	"r3":[0,0,0], 	}

startGame();
function startGame(){
	boxes.forEach((e)=>{
		e.setAttribute("value",0);
		e.addEventListener('click',(a)=>{play(a)});
	});
	openentScore.innerText=0;
	yourScore.innerText=0;
	
};


function play(a){
	console.log(a);
	let r1val= rowVal(r1);
//	let r2val= rowVal(r2);
//	let r3val= rowVal(r3);
	function rowVal(it){
		let arr = [];
		for(let i = 0; i<it.length; i++){
			arr.push(Number(it[i].getAttribute("value")));
			console.log(it[i],it)
		};
		return arr;
	};
	//	console.log(r1val,r2val,r3val)
	
}


