let requisicao = "";
let nome = "";
let teste =[];
let variavellocal = [];
let nomeusuario = "";
let statusCode = 0;



function inicio(){
        
    nomeusuario = prompt("Qual o seu nome ?") ;
        
    nome = {name: nomeusuario};    
    requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome);    
    requisicao.then(tratarSucesso);
    requisicao.catch(tratarErro);   
}
inicio();

function tratarErro(){ 
    alert("Por favor, entre com outro nome de usuario !");
    inicio();   
 }

 function tratarSucesso(){

    variavellocal = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages"); 
    variavellocal.then(carregarpagina);     
 }

 function confirmacaoStatus(){
    requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nome); 
    requisicao.then(tratarStatus);  
}
function tratarStatus(resposta){
        statusCode = resposta.status;
        console.log(statusCode);
}
 const meuInterval = setInterval(confirmacaoStatus, 5000);
 const carregaInterval = setInterval(tratarSucesso, 3000);
 


function carregarpagina(mensagens){
    mensagens = mensagens.data;
    let chat = document.querySelector(".meio");
    chat.innerHTML = "";
    
    for(i=0; i<mensagens.length; i++){

        if(mensagens[i].type==="status"){
            chat.innerHTML += `
        <li class="entrada">
        <div class="caixamensagem">
        <span> <span class="cinza">(${mensagens[i].time})</span>  <span class="negrito">${mensagens[i].from}</span> ${mensagens[i].text} </span> 
        </div> 
        `
        chat.scrollIntoView(false);

        }
        if(mensagens[i].type==="message"){
            chat.innerHTML += `
        <li class="status">
        <div class="caixamensagem">
        <span> <span class="cinza">(${mensagens[i].time})</span>  <span class="negrito">${mensagens[i].from}</span> para ${mensagens[i].to}: ${mensagens[i].text} </span> 
        </div>
        `
        chat.scrollIntoView(false);

        }
        if(mensagens[i].type==="private_message"){
            chat.innerHTML += `
        <li class="reservada">
        <div class="caixamensagem">
        <span> <span class="cinza">(${mensagens[i].time})</span>  <span class="negrito">${mensagens[i].from}</span> reservadamente para ${mensagens[i].to}: ${mensagens[i].text} </span> 
        </div>
        `
        chat.scrollIntoView(false);
        }        
    }
    
   }

function enviar(){

    if(statusCode===200){

    let valorIput = document.querySelector("input").value;
        
    const objeto = {
        from: nomeusuario,
        to: "Todos",
        text: valorIput,
        type: "message" 
    };

   let promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', objeto);
   promise.then(deubom);
   promise.catch(deuRuim);  
   
 }   else window.location.reload();
} 




