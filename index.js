function myclock(){
var d=new Date();
var hours=d.getHours();
var minutes=d.getMinutes();
var seconds=d.getSeconds();

if(hours>=12){
    document.getElementById("am-or-pm").innerHTML="PM";
}
else
{
    document.getElementById("am-or-pm").innerHTML="AM";
}
document.getElementById("hour").innerHTML= hours;
document.getElementById("minute").innerHTML= minutes;
document.getElementById("second").innerHTML=seconds;




}

setInterval(myclock,1000)