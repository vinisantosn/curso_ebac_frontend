const form = document.getElementById('form');
const containerMensagemSucesso = document.querySelector('.mensagem-de-sucesso');
const containerMensagemErro = document.querySelector('.mensagem-de-erro');
let formEstaValido = false;


function validaComparacao(campoUm,campoDois) {
   return campoDois>campoUm;
}

form.addEventListener('keyup', function (e){
    
    containerMensagemSucesso.classList.replace('on','off')
    containerMensagemErro.classList.replace('on','off');
    
    const campoA = document.getElementById('campo-a');
    console.log(campoA.value)
    const campoB = document.getElementById('campo-b');
    console.log(campoB.value)
    
    const mensagemSucesso = `O número do campo B (${campoB.value}) é maior que o número do campo A (${campoA.value}), portanto se enviado o formulário será <strong>válido</strong>.`;
    const mensagemErro = `O número do campo B (${campoB.value}) é menor ou igual ao número do campo A (${campoA.value}), portanto se enviado o formulário será <strong>inválido</strong>.`;

    formEstaValido = validaComparacao(Number.parseFloat(campoA.value),Number.parseFloat(campoB.value));
    // console.log(formEstaValido);

    if (!formEstaValido) {        
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.classList.replace('off','on');    
    } else {        
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.classList.replace('off','on');        
    }
})


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    containerMensagemSucesso.classList.replace('on','off');
    containerMensagemErro.classList.replace('on','off');
    
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    formEstaValido = validaComparacao(Number.parseFloat(campoA.value),Number.parseFloat(campoB.value));

    campoA.value = '';
    campoB.value = '';
    
    alert(`Formulário enviado e ${formEstaValido?'válido':'inválido'}.` )
    
})
