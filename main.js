song1="";
song2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;
scoreLeftWrist= 0;
song1_status= "";
song2_status= "";
scorerightWrist= 0;
scoreleftWrist= 0;



function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");

}

function draw(){
    image(video, 100, 100, 600, 500);

    fill("#c030b");
    stroke("#c030b");

    song1_status= song1.isPlaying();
    song2_status= song2.isPlaying();

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1_status == false){
            song1.play();
            document.getElementById("song_name").innerHTML= "Harry Potter";
        }
    }

    if(scorerightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if(song2_status == false){
            song2.play();
            document.getElementById("song_name").innerHTML= "Peter pan";
        }
    }

}

function setup(){
    canvas= createCanvas(600, 550);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scorerightWrist= results[0].pose.keypoints[10].score;
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX + "leftWristY= " +leftWristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristX + "rightWristY = " + rightWristY);
    }
}
function play(){

}