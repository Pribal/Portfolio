function Screen_size(){
	W = window.innerWidth;
	H =  window.innerHeight;
}
Screen_size();

function Setgrid(){
	g = document.getElementById("container");
	g.style.height = H;
	g.style.width = W;
	g.style.top = 0 + "px";
	g.style.left = 0 + "px";
}

function Time() {
	now =  new Date();

	//Time
	minutes = now.getMinutes();
	hours = now.getHours();
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (hours < 10){
		hours = "0" + hours;
	}
	document.getElementById("time").innerHTML = hours + ":" + minutes;

	//Date
	year = now.getFullYear();
	month = now.getMonth() + 1;
	day = now.getDate();
	if (day < 10){
		day = "0"+day;
	}
	if (month < 10){
		month = "0"+month;
	}
	document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}

//Refresh Time
Time();
setInterval(Time, 1000);



//Close tab
function Onclick_exit(elem) {
	i_d = document.getElementById(elem.parentNode.id);
	i_d.style.display = "none";
}

//Center Popup
function Center_popup(){
	popup = document.getElementById("onload_popup");
	centre = W/3;
	popup.style.left = centre+"px";
}

Center_popup();

app = document.getElementsByClassName("application");
function darkmode(){
	for (var k = 0; k < app.length; k++) {
		app[k].style.backgroundColor = "#474747";
		text = app[k].querySelectorAll("p, h3, a, h4");
		for (var t = 0; t < text.length; t++){
			text[t].style.color = "#ffffff";
		}
	}
}

function lightmode(){
	for (var k = 0; k < app.length; k++) {
		app[k].style.backgroundColor = "#ffffff";
		text = app[k].querySelectorAll("p, h3, a, h4");
		for (var t = 0; t < text.length; t++){
			text[t].style.color = "#000000";
		}
	}
}

//Change Background
var bg_list = new Array("rose_bleu.jpg","darkmode.jpg");
i = 1;

function change_background(){
	if (i == 0){
		i = 1;
		darkmode();
	}else if (i == 1){
		i = 0;
		lightmode();
	}
	chemin = "";
	background = document.getElementsByClassName("bg")[0];
	chemin = "Ressources/Images/" + bg_list[i];
	return background.style.backgroundImage = "url("+chemin+")";
}

change_background();

function Open_window(opn){
	var opnC = opn.className;
	var op = document.getElementById(opnC);
	if (op.style.display == "block"){
		op.style.display = "none";
	}else{
		op.style.display = "block";
	}
	
}

taskbar = document.getElementById("taskbar");

function dragElement(elmnt) {
  var elmntapp = document.getElementById(elmnt.parentNode.id);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmntapp.style.top = (elmntapp.offsetTop - pos2) + "px";
    elmntapp.style.left = (elmntapp.offsetLeft - pos1) + "px";

	var pos = elmntapp.getBoundingClientRect();

	if (pos.top + pos.height > H - 40){
		elmntapp.style.top = H - 40 - pos.height + "px";
	}
	if (pos.top < 0){
		elmntapp.style.top = 0 + "px";
	}
	if (pos.left < 0){
		elmntapp.style.left = 0 + "px";
	}
	if (pos.left > W - pos.width){
		elmntapp.style.left = W - pos.width + "px";
	}
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
}