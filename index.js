let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sc = document.getElementById("seconds");




setInterval(()=>{
    let day = new Date();
// console.log(day);
// Fri Sep 27 2024 20:08:58 GMT+0530 (India Standard Time)
let hh = day.getHours()*30;
let mm = day.getMinutes()*6;
let ss = day.getSeconds()*6;

hrs.style.transform = `rotate(${hh+(mm/12)}deg)`;
min.style.transform = `rotate(${mm}deg)`;
sc.style.transform =`rotate(${ss}deg)`;
})

let day = new Date();
let digi_hr = document.getElementById("digHour");
let digi_min = document.getElementById("digMin");
let digi_sc = document.getElementById("digSec");
let am_pm = document.getElementById("ampm");
 
let h = day.getHours();
let m = day.getMinutes();
let s = day.getSeconds();
let a_p = (h>=12 )?"PM":"AM"

if(h>12){
    h = h-12;
}


h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;

digi_hr.innerText = h;
digi_min.innerText = m;
digi_sc.innerText = s;
am_pm.innerText = a_p;

let weekday = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

weekday.innerHTML =day.getDate();
month.innerHTML = months[day.getMonth()];
year.innerHTML =day.getFullYear();
