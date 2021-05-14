function preload(){
 
}
function setup(){
    canvas=createCanvas(700,600);
    canvas.position(400,200) ;
    video=createCapture(VIDEO);
    video.hide();
    textSize(20);
}
function draw(){
    image(video, 100,30,400,500);
    stroke(0,0,0,0);
    fill(255,255,255);
    rect(100, 30, 400, 20);
    rect(100,30,20,500);
    rect(100,500,420,80);
    rect(500,30,20,500);
    fill(0,0,0);
    text('My polaroid picture!',225,550);
}
function take_snapshot(){
    save('polaroidPicture.png');
}
