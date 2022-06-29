
let openentScore = document.getElementById('opScore');
let yourScore = document.getElementById('yourScore');
const boxes = document.querySelectorAll('.boxes');

//defaultly 0
let yClicked = Array();
let oClicked = Array();
let clicked = [];
let checked = [];

startGame();        //game start
let player=1;

function startGame(){
	boxes.forEach((e)=>{
	  e.setAttribute("value",0);
		//console.log(e.classList);
		let cls=e.classList;
		e.classList.remove(...cls);
	  //console.log(e.classList);
		e.classList.add('boxes');
		e.addEventListener("click",()=>{
		 // e.setAttribute('value',-1)
	
		  play(e); })
	});
	openentScore.innerText=0;
	yourScore.innerText=0;
	[yClicked,oClicked,clicked,checked].forEach(e=> {e.length=0});
};

//some defaults
const color = ["openentClick", "userClick"];
const score = [openentScore, yourScore];
let winPossiblities = [["0", '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['3', '4', '5'], ['6', '7', '8'], ['2', '4', '6']];
  
// after click
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
  	
		//get mark analyze	
		for(let i = 0; i<winPossiblities.length; i++){
			let tempPosible=winPossiblities[i];
			let user=[oClicked,yClicked][player];
			let tempCheck = [];
			for(let j = 0; j<tempPosible.length; j++){
				if(user.includes(tempPosible[j])){
					tempCheck.push(tempPosible[j]);
				}
			}
			
			let sumtc='';
			tempCheck.forEach(x=> {
			  sumtc+=x;
			});
			if(tempCheck.length===3 && checked.includes(sumtc)==false){
        //console.log(tempCheck);
        checked.push(sumtc);
        //console.log(checked);
				winPossiblities.splice(winPossiblities.indexOf(tempCheck),1);
				
					score[player].innerText=Number(score[player].innerText)+1;
			}
		}

		if(player===1){
			player=0;
		}else{player=1;};
		
	}
	else{//console.log("clicked: ",a.id in yClicked,a.id in oClicked,"\n","y: ",yClicked,"\n","O: ",oClicked)
	};
	
	if(clicked.length===9){
	  setTimeout(()=> {startGame()},2000)};

}


