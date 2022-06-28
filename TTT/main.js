
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
let player=1;

function startGame(){
	boxes.forEach((e)=>{
		e.setAttribute("value",0);
		e.addEventListener("click",()=>{
		 // e.setAttribute('value',-1)
		  play(e); })
	});
	openentScore.innerText=0;
	yourScore.innerText=0;
	
};

const color = ["openentClick","userClick"];
const score = [openentScore,yourScore];
const winPossiblities = [["0",'1','2'],['0','4','8'],['0','3','6'],['1','4','7'],['2','5','8'],['3','4','5'],['6','7','8'],['2','4','6']];
let yClicked = Array();
let oClicked = Array();
let clicked = [];
function play(a){
  if((yClicked.includes(a.id) ===false) &&( oClicked.includes(a.id)===false)){
		if(player===0){
			a.setAttribute('value',-1);
			a.classList.add("openentClick");
			oClicked.push(a.id);
			clicked.push(a.id);

		//  console.log(a.classList)
		}
		else if(player===1){
			a.setAttribute('value',1);
			a.classList.add("userClick");
			yClicked.push(a.id);
			clicked.push(a.id);
  	}
  
  /*
 	 	let currentVal =  [[],[],[]];
  	for(let i = 0; i<3;i++){
    	[r1,r2,r3][i].forEach((e2)=> {
      	//console.log(e2,i)
      	currentVal[i].push(e2.getAttribute('value'));
    	})
 	 };
		//console.table(currentVal);
		*/
		//get mark analyze
		
		for(let i = 0; i<winPossiblities.length; i++){
			let tempPosible = winPossiblities[i];
			let user=[oClicked,yClicked][player];
			let tempCheck = [];
			for(let j = 0; j<tempPosible.length; j++){
				if(user.includes(tempPosible[j])){
					tempCheck.push(true);
				}
			}
			console.log(tempCheck);
			if(tempCheck.length===3){
					score[player].innerText=Number(score[player].innerText)+1;
			}
		}

		if(player===1){
			player=0;
		}else{player=1;};

	


	}
	else{console.log("clicked: ",a.id in yClicked,a.id in oClicked,"\n","y: ",yClicked,"\n","O: ",oClicked)};

}


