canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rw=100;
rh=90;
p=["p1.jpeg","p2.jpeg","p3.jpeg","p4.jpeg"];
rn=Math.floor(Math.random()*4);

bg_img=p[rn];
rover_img="rover.png";
rx=10;
ry=10;
function add()
{
    bg_img_tag=new Image();
    bg_img_tag.onload=uploadbg;
    bg_img_tag.src=bg_img;

    rover_img_tag=new Image();
    rover_img_tag.onload=uploadrover;
    rover_img_tag.src=rover_img;
    


}
function uploadbg()
{
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);

}
function uploadrover()
{
    ctx.drawImage(rover_img_tag,rx,ry,rw,rh);

}
window.addEventListener("keydown",my_keyDown)
function my_keyDown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if (keyPressed=="38")
{
    up();
    console.log("up");
}
if (keyPressed=="40")
{
    down();
    console.log("down");
}
if (keyPressed=="37")
{
    left();
    console.log("left");
}
if (keyPressed=="39")
{
 right();
 console.log("right");
}

}
function up(){
 if (ry>=0) {
    ry=ry-10;
    uploadbg();
    uploadrover();
    
 }

}
function down(){
    if (ry<=500) {
       ry=ry+10;
       uploadbg();
       uploadrover();
       
    }
   
   }
   function left(){
    if (rx>=0) {
       rx=rx-10;
       uploadbg();
       uploadrover();
       
    }
   
   }
   function right(){
    if (rx<=700) {
       rx=rx+10;
       uploadbg();
       uploadrover();
       
    }
   
   }
      