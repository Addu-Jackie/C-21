//library can have only function defination.
//function with arguments = so that the function can run run with any 2 objects in the game.
//obj1 will become movingRect.
//obj2 will become fixedRect.
//link the library with sketch.js by including it to index.html.
function bounceOff(obj1,obj2){
   if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
  }
  if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
  }
}