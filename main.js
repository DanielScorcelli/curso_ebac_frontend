$(document).ready(function(){
    let linha = 0;
  
   $('#botao-cancelar').click(function(){
    $("#txtarefa").val('');
   })

   $('form').on('submit', function(e){
     e.preventDefault();
     const tarefa = $("#txtarefa").val();
         const novoItem = $(`<li style="display:none">${tarefa}</li>`);
    
     $(tarefa).appendTo(novoItem);
     $(novoItem).appendTo('ul');

     if(linha %2 == 0) 
         $(novoItem).addClass('linhaclara')
       

     $(novoItem).fadeIn(3000);
     $("#txtarefa").val('');
     linha++;
     
    })
   
    $('ul').on("click","li",function(){
        $( this ).toggleClass( "linha-tachado" );
        $(this).fadeIn(3000);
    })
     $('ul').on("dblclick","li",function(){
          $(this).fadeIn(1000);
           $(this).remove();

    })
    
})
