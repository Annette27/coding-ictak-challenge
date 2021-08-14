var circle= document.getElementById("circle")
var up = document.getElementById("up");
var down = document.getElementById("down");

var rotate = circle.style.transform;
var rotatesum;

up.onclick = function(){
    rotatesum = rotate + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotate = rotatesum;
}
down.onclick = function(){
    rotatesum = rotate + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotate = rotatesum;
}