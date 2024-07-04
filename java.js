const green=document.getElementById("green");
const red=document.getElementById("red");
const blue=document.getElementById("blue");
const display=document.getElementById("display");

let timer=0;
let starttime=0;
let ellapsed=0;
let running=false;

function start(){
    if(!running){
        starttime=Date.now()-ellapsed;
        timer=setInterval(update,10);
        running=true;
    }
    
}
function update(){
    let currenttime=Date.now();
    ellapsed=currenttime-starttime;

    let hrs=Math.floor(ellapsed/(1000*60*60));
    let mins=Math.floor(ellapsed/(1000*60)% 60);
    let sec=Math.floor(ellapsed/ 1000%60);
    let mills=Math.floor((ellapsed%1000)/10);


    hrs=String(hrs).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    mills=String(mills).padStart(2,"0");
    display.textContent=`${hrs}:${mins}:${sec}:${mills}`;
    

}

function stop(){
   
    if(running){
        clearInterval(timer);
        ellapsed=Date.now()-starttime;
        running=false;

    }
}

function reset(){
    clearInterval(timer);
    starttime=0;
    ellapsed=0;
    running=false;
display.textContent=`00:00:00:00`;
}
