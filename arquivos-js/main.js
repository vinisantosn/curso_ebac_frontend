$(document).ready(function(){    
    
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: "(98) 00000-0000"
    });
    $('#cpf').mask('000.000.000-00',{
        placeholder:'000.000.000-01'
    });
    $('#cep').mask('00000-000',{
        placeholder:'65000-000'
    });

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: false
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome: 'Insira seu nome',
            email: 'Informe seu email',
            telefone: 'Por favor, digite seu número',
            cpf:'Insira seu CPF',
            cep:'Informe seu CEP'
        },
        submitHandler: function (form) {
            console.log(form);
            
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })

    $('form').on('submit', function(e){
        
        e.preventDefault();
        
        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#cpf').val('');
        $('#endereco').val('');
        $('#cep').val('');


    });
})