function setup(){
    canvas=createCanvas(400, 400)
    canvas.position(560, 160)
    video=createCapture(VIDEO)
    video.size(520,450)

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResult)

}
noseX=0;
noseY=0
leftWristX=0
rightWristX=0
difference=0
function modelLoaded(){
    console.log("model Is loaded ")
}
function draw(){
    background("#00FFFF")
    fill("#FF7276")
    stroke("#FF7276")
    square(noseX, noseY, difference)
}
function gotResult(results){
    if(results.length>0){
        console.log(results)
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y
console.log(noseX + noseY)
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.y;
difference = floor(leftWristX - rightWristX)
console.log("wrists X"+ rightWristX + leftWristX)
document.getElementById("width_height").innerHTML = difference +" Px"
    }
}
