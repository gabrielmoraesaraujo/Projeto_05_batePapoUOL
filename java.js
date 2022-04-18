let requisicao = "";
let nome = "";
let teste =[];
let variavellocal = [];



function inicio(){
    //alert("inicio funcioanndo");
    
    let nomeusuario = prompt("Qual o seu nome ?") ;
        
    nome = {name: nomeusuario};    
    requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome);    
    requisicao.then(tratarSucesso);
    requisicao.catch(tratarErro);   
}
inicio();

function tratarErro(){ 
  
    console.log("deu ruim");
    alert("Por favor, entre com outro nome de usuario !");
    inicio();   
 }

 function tratarSucesso(){
    //console.log("deu bom"); 
   // alert("Bom bapo ;)");
    variavellocal = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages"); 
    variavellocal.then(carregarpagina);     
 }

 function confirmacaoStatus(){
    requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nome); 
    //console.log(teste.length);
    //console.log(variavellocal.length);
}
 const meuInterval = setInterval(confirmacaoStatus, 5000);
 const carregaInterval = setInterval(tratarSucesso, 3000);
    

function carregarpagina(mensagens){
    mensagens = mensagens.data;
    let chat = document.querySelector(".meio");
    //chat.scrollIntoView(true);
    chat.innerHTML = "";
    

    for(i=0; i<mensagens.length; i++){

        if(mensagens[i].type==="status"){
            chat.innerHTML += `
        <li class="li.entrada">
        <div class="caixamensagem">
        <span> (${mensagens[i].time}) ${mensagens[i].from} ${mensagens[i].text} </span> 
        </div>
        `
        chat.scrollIntoView(false);

        }
        if(mensagens[i].type==="message"){
            chat.innerHTML += `
        <li class="status">
        <div class="caixamensagem">
        <span> (${mensagens[i].time}) ${mensagens[i].from} para ${mensagens[i].to}: ${mensagens[i].text} </span> 
        </div>
        `
        chat.scrollIntoView(false);

        }
        if(mensagens[i].type==="private_message"){
            chat.innerHTML += `
        <li class="li.reservada">
        <div class="caixamensagem">
        <span> (${mensagens[i].time}) ${mensagens[i].from} reservadamente para ${mensagens[i].to}: ${mensagens[i].text} </span> 
        </div>
        `
        chat.scrollIntoView(false);

        }

        
    }
    console.log(mensagens);
   }



function enviar(){

}

function saida(sair){


}




    
