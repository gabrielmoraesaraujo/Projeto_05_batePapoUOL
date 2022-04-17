let requisicao = "";
let nome = "";



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
    console.log("deu bom"); 
    alert("Bom bapo ;)");
    confirmacaoStatus();      
 }
 function confirmacaoStatus(){
    requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nome); }
 const meuInterval = setInterval(confirmacaoStatus, 5000);

    

function carregarpagina(){

}

//carregarpagina();  //carrega msg do servidor

function enviar(){

}

function saida(sair){


}




    
