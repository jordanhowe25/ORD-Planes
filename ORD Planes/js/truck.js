//Global vars
var truckSpeed = 10;

//Truck image handling
var truckImage = new Image();
truckImage.src = './images/truck 1.png';

//Truck object properties
var truck = {
  x: 600,
  y: 540,
  width: 112,
  height: 65,
}

//Truck functions
function drawTruck(){
  ctx.drawImage(truckImage, truck.x, truck.y, truck.width, truck.height);
}

function moveLeft(){
  if (truck.x > 0) {
    truck.x -= truckSpeed;
    truckSpeed += 2;
  }
}

//This still moves off the right side of canvas.  Will stop at 1400 (width of canvas) but screen isn't displaying it that wide.
function moveRight(){
  if (truck.x < canvasWidth) {
    truck.x += truckSpeed;
    truckSpeed += 2;
  }
}

function truckStop(){
  truckSpeed = 10;
}

/*



// controls movement
document.onkeydown = function (e) {
  console.log("working moving!!!!");
  if (e.which === 38){
    cat.y -= 20;
  }
  else if (e.which === 40)
  {
    cat.y += 20;
  }
  else if (e.which === 37){
    cat.x -= 20;
  }
  else if (e.which === 39){
    cat.x += 20;
  }
}
  
 // collision detection, set y property to any number greater than 1000 in order to make the object disappear

function cupcakeCollision() {
  cupCakesArray.forEach(function(cupcake) {
    let catLeft = cat.x;
    let catRight = cat.x + cat.width/2;
    let catTop = cat.y;
    let catBottom = cat.y + cat.height/2;
    let cupcakeLeft = cupcake.x;
    let cupcakeRight = cupcake.x + cupcake.width/2;
    let cupcakeTop = cupcake.y;
    let cupcakeBottom = cupcake.y + cupcake.height;
    if(catLeft <= cupcakeRight && cupcakeLeft <= catRight && catBottom <= cupcakeBottom  && cupcakeTop <= catBottom){
      cupcake.y = 1444;
      AddPoints(10);
    }
    })
}
*/