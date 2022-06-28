
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



function play(a){
  
  if(player===0){
    a.setAttribute('value',-1);
  }else if(player===1){
    a.setAttribute('value',1);
  }
  
  
  let currentVal =  [[],[],[]];
  for(let i = 0; i<3;i++){
    [r1,r2,r3][i].forEach((e2)=> {
      //console.log(e2,i)
      currentVal[i].push(e2.getAttribute('value'));
    })
  };
  console.table(currentVal)
	
	
	
}


