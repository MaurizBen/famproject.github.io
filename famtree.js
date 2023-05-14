function countdown(){

    
    const mom = new Date("March 4, 2024 00:00:00").getTime();
    const dad = new Date("December 19, 2023 00:00:00").getTime();
    const mike = new Date("April 25, 2024 00:00:00").getTime();
    const twins = new Date("June 3, 2023 00:00:00").getTime();
    const dave = new Date("June 21, 2023 00:00:00").getTime();
    const nonso = new Date("November 15, 2023 00:00:00").getTime();
    const cynthia = new Date("November 29, 2023 00:00:00").getTime();
    const now = new Date().getTime();


    const gap1 = mom - now ; 
    const gap2 = dad - now ;
    const gap3 = mike - now ;
    const gap4 = twins - now;
    const gap5 = dave - now;
    const gap6 = nonso - now;
    const gap7 = cynthia - now;


    


    if(gap4 > gap2 < gap1 < gap3 > gap5 > gap6 > gap7){
       
        document.querySelector(".disp").innerText = "Days to David's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap5 / day);
        const textHour = Math.floor((gap5 % day) / hour);
        const textMinute = Math.floor((gap5 % hour) / minute);
        const textSecond = Math.floor((gap5 % minute) / second);
    
        document.querySelector(".day").innerText = textDay ;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    }
    else if (gap4 < gap2 < gap1 < gap3 < gap5 < gap6 < gap7){

            if (gap4 == 0){
                document.getElementById("my").innerText = "Happy birthday Twins"
            }
        document.querySelector(".disp").innerText = "Days to Twins Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap4 / day);
        const textHour = Math.floor((gap4 % day) / hour);
        const textMinute = Math.floor((gap4 % hour) / minute);
        const textSecond = Math.floor((gap4 % minute) / second);
    
        document.querySelector(".day").innerText = textDay ;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    
    }
    
    else if(gap4 > gap2 < gap1 < gap3 < gap5 > gap6 > gap7){
        document.querySelector(".disp").innerText = "Days to Mauriz's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap6 / day);
        const textHour = Math.floor((gap6 % day) / hour);
        const textMinute = Math.floor((gap6 % hour) / minute);
        const textSecond = Math.floor((gap6 % minute) / second);
    
        document.querySelector(".day").innerText = textDay ;
        document.querySelector(".hour").innerText = textHour + ":";
        document.querySelector(".minute").innerText = textMinute + ":";
        document.querySelector(".second").innerText = textSecond;
    }
    else if(gap4 > gap2 < gap1 < gap3 < gap5 < gap6 > gap7){
        document.querySelector(".disp").innerText = "Days to Cynthia's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap7 / day);
        const textHour = Math.floor((gap7 % day) / hour);
        const textMinute = Math.floor((gap7 % hour) / minute);
        const textSecond = Math.floor((gap7 % minute) / second);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    }
    else if(gap4 > gap2 < gap1 < gap3 < gap5 < gap6 < gap7){
        document.querySelector(".disp").innerText = "Days to Dad's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap2 / day);
        const textHour = Math.floor((gap2 % day) / hour);
        const textMinute = Math.floor((gap2 % hour) / minute);
        const textSecond = Math.floor((gap2 % minute) / second);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    }
    else if(gap4 < gap2 > gap1 > gap3 < gap5 < gap6 < gap7){
        document.querySelector(".disp").innerText = "Days to Mom's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap1 / day);
        const textHour = Math.floor((gap1 % day) / hour);
        const textMinute = Math.floor((gap1 % hour) / minute);
        const textSecond = Math.floor((gap1 % minute) / second);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    }
    else if(gap4 < gap2 < gap1 > gap3 < gap5 < gap6 < gap7){
        document.querySelector(".disp").innerText = "Days to Mike's Birthday :"
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap3 / day);
        const textHour = Math.floor((gap3 % day) / hour);
        const textMinute = Math.floor((gap3 % hour) / minute);
        const textSecond = Math.floor((gap3 % minute) / second);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour + " " + ":";
        document.querySelector(".minute").innerText = textMinute + " " + ":";
        document.querySelector(".second").innerText = textSecond;
    }

};

setInterval(countdown, 1000);






function Dad(){
    window.location.assign("../project family/Dad/dad.html");
}
function Mom(){
    window.location.assign("../project family/Mom/mom.html");
}
function Pre(){
    window.location.assign("../project family/Precious/precious.html");
}
function Lil(){
    window.location.assign("../project family/Lilian/lilian.html");
}
function Mike(){
    window.location.assign("../project family/Mike/mike.html");
}
function Cyn(){
    window.location.assign("../project family/Cyn/cyn.html");
}
function Mau(){
    window.location.assign("../project family/Mau/mau.html");
}
function Dav(){
    window.location.assign("../project family/Dav/dav.html");
}


