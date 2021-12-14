song1="";
song2="";


function preload(){
song1=loadSound("song.mp3");
song2=loadSound("peter.mp3");
}

function setup(){
canvas=createCanvas(500,600);
canvas.center();

video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,500,600);
}

function play_song(){
    song.play();
}
function stop_song(){
    song.stop();
}