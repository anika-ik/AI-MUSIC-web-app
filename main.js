song1="";
song2="";

function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");

}

function draw(){
    image(video, 100, 50, 600, 500);

}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

}