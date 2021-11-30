function Screen_size(){
	W = window.screen.width;
	H =  window.screen.height;
	console.log("Width:" + W + "px");
	console.log("Height:" + H + "px");
}

Screen_size();

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
	document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}

//Refresh Time
Time();
setInterval(Time, 1000);

popup = document.getElementById("onload_popup");

//Close Popup tab
function Onclick_exit() {
	popup.style.display = "none";
}

//Center Popup
function Center_popup(){
	centre = W/3;
	popup.style.left = centre+"px";
}

Center_popup();

//Change Background
var bg_list = new Array("foggy_montain.jpg","river.jpg");
i = 1;

function change_background(){
	if (i == 0){
		i = 1;
	}else if (i == 1){
		i = 0;
	}
	chemin = "";
	background = document.getElementsByClassName("bg")[0];
	chemin = "Ressources/Images/" + bg_list[i];
	console.log(chemin);
	return background.style.backgroundImage = "url("+chemin+")";
}

change_background();

presentation = document.getElementById("presentation")

function Open_window(){
	if (presentation.style.display == "block"){
		presentation.style.display = "none";
	}else{
		presentation.style.display = "block";
	}
	
}

// Make the window draggable:
dragElement(document.getElementById("onload_popup"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}