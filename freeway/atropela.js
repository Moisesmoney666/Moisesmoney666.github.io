let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
for(let i=0; i<imgCarro.length;i++){
  
  atropelaVaca = collideRectRect(xVaca, yVaca,28, 28,xCarro[i],yCarro[i],50 , 30);
  
   if(atropelaVaca){
    //Vaca atropelada
     yVaca = 368;
     
      if(placarVaca > 0)
   placarVaca -= 1;
     //atropelou.play();
  }
  
  atropelaTouro = collideRectRect(xTouro, yTouro,28, 28,xCarro[i],yCarro[i],50, 30);
  
   if(atropelaTouro){
    //Touro atropelada
     yTouro = 368;
     
     if(placarTouro > 0)
   placarTouro -= 1;
    // atropelou.play();
     
     
     
    
    
 
  }
 
  


 }//for
}//atropelamento