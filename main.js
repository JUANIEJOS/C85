canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
mars_img_array=["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg"];
random_number=Math.floor(Math.random()* 4);
console.log(random_number);
background_image=mars_img_array[random_number];

rover_image="rover.png";
rover_width=100;
rover_height= 90;
rover_x=10;
rover_y=10;

function add()
{
    background_imageT=new Image();
    background_imageT.onload=uploadBackgroundImage;
    background_imageT.src= background_image;

    rover_imageT=new Image();
    rover_imageT.onload=uploadRoverImage;
    rover_imageT.src="rover.png";
}
function uploadBackgroundImage(){
    ctx.drawImage(background_imageT,0,0,canvas.width,canvas.height);
}
function uploadRoverImage(){
    ctx.drawImage(rover_imageT,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="39"){
        right();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="40"){
        down();
    }

}
function up(){
if(rover_y >=0){
    rover_y=rover_y-10;
    console.log(rover_y);
    uploadBackgroundImage();
    uploadRoverImage();
}
}
function down(){
    if(rover_y <=500){
        rover_y=rover_y+10;
        uploadBackgroundImage();
        uploadRoverImage();
    }
}
function left(){
if(rover_x >=0)
{
    rover_x=rover_x-10;
    uploadBackgroundImage();
    uploadRoverImage();
}
}
function right(){
    if(rover_x <=700){
        rover_x=rover_x+10;
        uploadBackgroundImage();
        uploadRoverImage();
            }
}