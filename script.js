$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const urlNew = $('#url-new').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${urlNew}"/>`).appendTo(newItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${urlNew}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(newItem);
            $(newItem).appendTo('ul');
            $(newItem).fadeIn(1000);
            $('#urlNew').val('')
    })
})