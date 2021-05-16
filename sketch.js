//Create variables here
var dog
var happydog
var dogimg
var dogimg1
var database
var foodS
var foodstock
function preload()
{
	//load images here
  dogimg= loadImage("images/Dog.png")
  dogimg1= loadImage("images/happydog.png")

}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,250,45,45)
  dog.addImage(dogimg)
  dog.scale=0.3
  foodstock=database.ref("food");
  foodstock.on("value",readstock);
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogimg1)
}

  drawSprites();
  //add styles here
  fill("black")
  textSize(35)
text("press up arrow to feed the dog",20,400)

text("Food remaning:"+ foodS,20,100)
}

function readstock(data){
foodS=data.val()

}

function writeStock(x){
if(x<=0){
x=0
}else{
  x=x-1;
}
database.ref('/').update({
  food:x
})
}