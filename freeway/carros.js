function mostraCarros(){
  for(let i=0; i < imgCarro.length; i++)
    image(imgCarro[i], xCarro[i], yCarro[i], 50, 30);
}

function movimentaCarros(){  
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
       xCarro[i] -= velocidadeCarro[i];
      
       // Carros para esquerda
       
           if (xCarro[i] < -55){
            xCarro[i] = 605;
              velocidadeCarro[i] = ceil(random(2,5));
        }

    }else{
    // Carros para direita
      xCarro[i] += velocidadeCarro[i];
      
        if (xCarro[i] > 605){
          xCarro[i] = -65;
          velocidadeCarro[i] = ceil(random(2,5));
      }// If
    }// Else
  }// For
}// Function


