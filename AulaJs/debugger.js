//Espere carregar todo o conteúdo HTML
window.onload = function(){ 
     //alert("Alo Ha Mundo!!!")
    console.log("Se quiser ma ver. tem que precionar F12 console...");
    console.log("a = " + a + "b = " + b );
    //Coctenaçao de string com o simbolo +
    console.log("a + b =" + parseInt(a+b)); 


};
 var a = 10;
  var b = 20;

  

  let entradas = document.querySelectorAll('input');
  let Resposta = document.querySelector('.Resposta');
  let botão = document.querySelector('#btnSomar');
  
 
  pegaNúmero1 = function(){
      return entradas[0].value;
  }
  pegaNúmero2 = function(){
    return entradas[1].value;
  }
    testarEntradasVazias = function(){
        if(pegaNúmero1() === ''|| pegaNúmero2() === '')
        return true;

        else

        return false;
    }

somar = function(){
    if(testarEntradasVazias()){
        Resposta.textContent = "Erro: Preencha os dois campos numéricos";
        Resposta.classList.romove('correta');
        Resposta.classList.add('errada');
        return false;
    }else{
        atualizaResposta();
        Resposta.classList.romove('errada');
        Resposta.classList.add('correta');

    }
    
}

atualizaResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;
    Resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}



 //Monitoramento do click no botão
//Quando o botão for clicado, a função somar será chamada!
botão.addEventListener('click',somar);


