

 const nome = document.getElementById('nome')
 const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const cartao =  document.getElementById('card-number')
const form = document.querySelector('.form');

const balls = document.querySelectorAll('.ball');

balls.forEach((ball) => {
    ball.addEventListener('click', function(event) {
        const parentButton = event.target.closest("input");
        const dataName = parentButton.getAttribute('data-name');
        const numCartao = localStorage.setItem("tipoCartao", dataName);
        console.log(numCartao)
    })

})


 

document.querySelector('button').addEventListener('click', () => {
setTimeout(() => {
    

    const nomeValue = localStorage.setItem("nome", nome.value);
    const emailValue = localStorage.setItem("email", email.value);
    const telefoneValue = localStorage.setItem("telefone", telefone.value);
    const cartaoValue = localStorage.setItem("numCartao", cartao.value);
    const mensagem = document.querySelector('.mensagem');



    console.log(mensagem)

   const userName = localStorage.getItem("nome");
   const userEmail = localStorage.getItem("email");
   const userTelefone = localStorage.getItem("telefone");
   const usercartao = localStorage.getItem("numCartao");
  


   
   checkUser()

   nome.value = ''
   email.value = ''
   telefone.value = ''
   cartao.value = ''
   
   function checkUser(){
 


    if(userName && userEmail && userTelefone && usercartao !== ''){
        
        console.log(userName)
        console.log("deuu")
        const elemento = document.createElement('div');
        elemento.innerHTML = `<div>
                            <span>Enviado com sucesso!!</span>
                            </div>` 
                          
        mensagem.appendChild(elemento)
        
    } 

  

}
}, 2000);
//remove o elemento se clicar duas vezes
 const botao = document.querySelector('button');
botao.addEventListener('click', limparElemento);

function limparElemento() {
  if (mensagem.querySelector('div')) {
    mensagem.removeChild(mensagem.querySelector('div'));
  }

    
   
   }
   
   
})

