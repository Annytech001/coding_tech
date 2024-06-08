const hour = document.getElementById('hour')
const minutes= document.getElementById('minutes')
const seconds= document.getElementById('seconds')
const ampm = document.getElementById('ampm')

function updateClock(){
    let h = new Date().getHours()
let mins = new Date().getMinutes()
let sec = new Date().getSeconds()
let ampml ='AM'

if (h > 12){
    h=h -12
    ampml = 'PM'
    //ampml.style.backGroundColor = 'brown';
}

h = h <10 ? '0' + h : h
mins = mins <10 ? '0' + mins : mins
sec = sec < 10 ? '0' + sec : sec

hour.innerText = h;
minutes.innerText = mins;
seconds.innerText = sec;
ampml.innerText = ampml;

setTimeout(() =>{
    updateClock()
}, 1000)
}

updateClock()