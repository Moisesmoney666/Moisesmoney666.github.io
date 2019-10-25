function setup() {
  createCanvas(600, 400);
   //trilha.setVolume(0.2);
   //trilha.loop();
  
  
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(placarVaca < 5 && placarTouro < 5){
      jogar();
      console.log("Vaca: " +  placarVaca + " Touro: " + placarTouro);
    }else
      verificaVencedor();
  }else{    
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    touroVencedor(); // Tela Final
}


function vacaVencedora(){
  vitoria.play();
  background("Crimson");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chartreuse");
  textSize(48);
  text("Vaca Venceu", 300, 190);
  image(imgVaca, 200, 200, 200, 200);  
}

function touroVencedor(){
  background("DarkOrchid");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("DarkOrange");
  textSize(48);
  text("Touro Venceu", 300, 190);
  image(imgTouro, 200, 200, 200, 200);  
}

function telaInicial(){
  background("Chartreuse");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("red");
  textSize(48);
  text("Jogo da Av 1° de Maio", 300, 190);
  textSize(24);
  text("Desenvolvido por Moises", 300, 230);  
}

function jogar(){
  background(imgEstrada);
  mostraCarros();
  mostraVaca();
  movimentaCarros();
  movimentaVaca();  
  atropelamento();
  mostraPlacar();
}
