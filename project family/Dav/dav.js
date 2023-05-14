function Countdown(){
    const dave = new Date("June 21, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap3 = dave - now ;


    document.querySelector(".disp").innerText = "Days to David's Birthday :";
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap3 / day);
    const textHour = Math.floor((gap3 % day) / hour);
    const textMinute = Math.floor((gap3 % hour) / minute);
    const textSecond = Math.floor((gap3 % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

}
setInterval(Countdown, 1000)