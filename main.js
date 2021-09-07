difference=0;
rightWristX=0 ;
leftWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,490);
canvas.position(560,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;  
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"diffrence="+difference);
    }
}

function modelLoaded(){
    console.log("poseNet is Intialized!");
    }

function draw(){
    background('#CF9FFF');
fill('#42f58d');
textSize(difference);
text('Munira',50,400);
document.getElementById("font_size").innerHTML="font size is " + difference+" px";
}