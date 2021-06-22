noseX=0;
noseY=0;

img= loadImage("https://lh3.googleusercontent.com/proxy/1RWdPoicndSW5dskZJx_th-BMrt6CFOzuZJCmuanptLtXfmQLt1ady3GJClsFCOxjEaL7CfRmhRdH2GIBwNCAPe__o3C1DTCjS822FTD7-IrWv0f4HGV");

function preload(){    

}
function draw(){
image(video,0,0,340,300);
image(img,noseX,noseY,175,100);

}

function setup(){
canvas= createCanvas(340,300);
canvas.center();
video= createCapture(VIDEO);
video.size(340,300);
video.hide();

model= ml5.poseNet(video, modelLoaded);
model.on("pose", gotPose);
}

function gotPose(results){
x= results.length;
console.log(x);
if(x > 0){
    console.log(results);
    console.log("nose x= " + results[0].pose.nose.x);
    console.log("nose y= " + results[0].pose.nose.y);
    noseX=results[0].pose.nose.x-90;
    noseY=results[0].pose.nose.y-30;
}
}



function modelLoaded(){
    console.log("Model successfully loaded");
}

function take_snapshot(){
save("Filtered_image");
}