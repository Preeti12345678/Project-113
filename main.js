function preload(){
 
}
function setup(){
    canvas=createCanvas(700,600);
    canvas.position(400,200) ;
    video=createCapture(VIDEO);
    video.position(600,300);
    video.hide();
}
function draw(){
    image(video, 0,0,500,400);
    fill(128,128,128);
    stroke(0,0,0,0);
    circle(110,50,70);
    circle(40,120,70);
    fill(142,69,133);
    circle(80,100,70);
    
}
function take_snapshot(){
    save('snapshot.png');
}
