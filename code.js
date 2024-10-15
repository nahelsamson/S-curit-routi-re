function AfficheDate(){	
	document.getElementById('date').innerHTML=Date();
}
function ModifTexteRouge(){
	element = document.getElementById('TexteModif');
	element.style.color='red'
}
function ModifTexteVert(){
	element = document.getElementById('TexteModif');
	element.style.color='green'
}
function ModifImage(Image){
	var img=document.getElementById(Image);
	if(img.src.match("feu_rouge.jpg")){
		img.src="feu_vert.jpg";	
	}
	else{
		img.src="feu_rouge.jpg";
	}
}
function AfficherMasquer(){
	var img=document.getElementById("Image");
	if(img.style.display==="none"){
		img.style.display="block";	
	}
	else{
		img.style.display="none";
	}
}
function setWhite(){
    document.getElementById("paragraphe").style.color="white";
  }
function setInitial(){
    document.getElementById("paragraphe").style.color="DodgerBlue";
  }
function changeColor(){
  const button=document.getElementById("myButton");
  var randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor=randomColor;
  if(button.style.color==="red") {
    button.style.color="black";
  } else {
    button.style.color="red";
  }
}
