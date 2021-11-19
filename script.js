
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
	var lenght_taskbar = document.getElementById("taskbar").offsetWidth;
	lenght_taskbar = lenght_taskbar/3;
	popup.style.left = lenght_taskbar+"px";
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
	background = document.getElementById("bg");
	chemin = "Ressources/Images/" + bg_list[i];
	console.log(chemin);
	return background.style.backgroundImage = "url("+chemin+")";
}

change_background();