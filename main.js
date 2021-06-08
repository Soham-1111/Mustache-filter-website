

function preload(){


}

function draw(){
image(video,0,0,340,300);


}

function setup(){
canvas= createCanvas(340,300);
canvas.center();
video= createCapture(VIDEO);
video.size(340,300);
video.hide();

}

function modelLoaded(){
    console.log("Model successfully loaded");
}

function take_snapshot(){
save("Filtered_image");
}













