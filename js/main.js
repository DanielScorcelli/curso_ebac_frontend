$(document).ready(function(){
 
    
            $('#cpf').mask('999.999.999-99',{
                placeholder: '000.000.000-00'
            })
            $('#cep').mask('00.000-000',{
                placeholder: '25.665-300'
            })

            $('form').validate({
                rules:{
                    nome:{
                        required:true
                    },
                    email:{
                        required:true, 
                        email:true
                    },
                    telefone:{
                        required:true
                    },
                    cpf:{
                        cpf:true,
                        required:true
                    },
                    cep:{
                        cep:true,
                        required:true
                    }
                },
                messages:{
                    cpf:'Por favor insira o seu CPF',
                    cep:'Por favor insira o seu CEP'
               
                },})
               
    
})