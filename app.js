function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var minute=dateTime.getMinutes();
    var seconds=dateTime.getSeconds();
    var session=document.getElementById("sessions");
    if(hrs>12){
        session.innerHTML="PM"
    }else{
        session.innerHTML="Am" 
    }

    if(hrs>12){
        hrs=hrs -12;
    }
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=minute;
    document.getElementById("seconds").innerHTML=seconds;


}

setInterval(displayTime,10);