var slide=document.getElementById("slide");
var backbtn=document.getElementById("backbtn");
var nextbtn=document.getElementById("nextbtn");


var slideimages=new Array(
	"images/pic-1.jpg",
	"images/pic-2.jpg",
	"images/pic-3.jpg",
	"images/pic-4.jpg",

	);
	let i =0;
	nextbtn.onclick = function(){
		if(i<3){
		slide.src =slideimages[i+1];
			i++;
		}
	 }
	 backbtn.onclick = function(){
			if(i>0){
			slide.src =slideimages[i-1];
				i--;
			}
		 }

