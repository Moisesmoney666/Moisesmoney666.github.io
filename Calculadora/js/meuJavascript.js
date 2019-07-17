
            function minhaFunção() {
                //uso mais para saída de dados
             document.getElementById("demo").innerHTML = "Parágrafo mudado.";
             


             //window.alert("Este é um alerta!);
             //uso mais comum para depuraçao de codigo
             console.log("só apareço com F12");
            }

            function minhaFunção2() {
                 if (document.getElementById("demo1").innerText.length === 0){
                    document.getElementById("demo1").innerHTML = "Olá Dollinho!";
                    document.getElementById("demo2").innerHTML = "O melhor do Brasil. O melhor";
                    document.querySelector("#divCentral").style.border = "2px solid red"

                 } else{
                    document.getElementById("demo1").innerHTML = "";
                    document.getElementById("demo2").innerHTML = "";
                    document.querySelector("#divCentral").style.border = "None";
                
                 }

               
            }
              