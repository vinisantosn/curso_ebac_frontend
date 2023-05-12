$(document).ready(function(){
    // EVENTOS A ELEMENTOS UTILIZANDO JQUERY
    

    
    $('#form').on('submit', function(e){
        
        e.preventDefault();
        console.log($('#nome-tarefa').val())
        const nomeNovaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li class="nova-tarefa">${nomeNovaTarefa}</li>`);       
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click', '.nova-tarefa', function(){
        $(this).addClass("tarefa-realizada");
    })
})