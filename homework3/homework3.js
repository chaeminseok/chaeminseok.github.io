const clock= document.querySelector("h2");

function christmasClock(){
    const christmas = new Date("2023-12-25");
    const today= new Date();
    const day=christmas - today;
    const DAY=Math.floor(day/(1000*60*60*24));
    const HOUR=Math.floor((day/(1000*60*60))%24);
    const MINUTE=Math.floor((day/(1000*60))%24);
    const SECOND=Math.floor(day/(1000)%24);
    clock.innerText =`${DAY}일 ${HOUR}시간 ${MINUTE}분 ${SECOND}초 남았습니다.`
}
setInterval(christmasClock,1000);