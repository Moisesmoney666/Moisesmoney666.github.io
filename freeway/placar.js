


function mostraPlacar(){
  textSize(32);
  
  fill("GREEN");
  text(placarVaca, 190, 28);
  
  fill("BLUE");
  text(placarTouro, 420, 28);
  
  if(yVaca < 15){
    placarVaca += 1;
    yVaca = 368;
    ponto.play();
  }
  
  if(yTouro < 15){
    placarTouro += 1;
    yTouro = 368;
    ponto.play();
  }
}

