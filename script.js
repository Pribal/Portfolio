
function Time() {
	now =  new Date();

	//Time
	minutes = now.getMinutes();
	hours = now.getHours();
	document.getElementById("time").innerHTML = hours + ":" + minutes;

	//Date
	year = now.getFullYear();
	month = now.getMonth() + 1;
	day = now.getDate();
	document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}

//Refresh Time
Time();
setInterval(Time, 10000);

popup = document.getElementById("onload_popup")

function Onclick_exit() {
	popup.style.display = "none"}
