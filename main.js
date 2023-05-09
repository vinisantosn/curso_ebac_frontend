const form = document.getElementById('form');
let formEstaValido = false;

function validaComparacao(campoUm,campoDois) {
   return campoDois>campoUm;
}





form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const campoA = document.getElementById('campo-a');
    console.log(campoA.value)
    const campoB = document.getElementById('campo-b');
    console.log(campoB.value)
    

    const mensagemSucesso = `O número do campo B (${campoB.value}) é maior que o número do campo A (${campoA.value}), portanto formulário válido.`;
    const mensagemErro = `O número do campo B (${campoB.value}) é menor ou igual ao número do campo A (${campoA.value}), portanto formulário inválido.`;

    formEstaValido = validaComparacao(Number.parseFloat(campoA.value),Number.parseFloat(campoB.value));
    console.log(formEstaValido)

    if (!formEstaValido) {
        const containerMensagemErro = document.querySelector('.mensagem-de-erro');
        containerMensagemErro.innerHTML = mensagemErro;
            
        containerMensagemErro.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        
        
    } else {
        const containerMensagemSucesso = document.querySelector('.mensagem-de-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        
        containerMensagemSucesso.style.display = 'block';
        
        campoA.value = '';
        campoB.value = '';

    }
    


    
    
})
