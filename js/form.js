$(function () {

    // Funções de abrir e fechar formulário.
    verificarCliqueFechar();
    abrirJanelaModal();


    function abrirJanelaModal() {
        $('.btn-desk').click(function (e) {
            e.stopPropagation();
            $('.modal-form').fadeIn();
        });
    }

    function verificarCliqueFechar() {
        var el = $('body, .closeBtn');
        el.click(function () {
            $('.modal-form').fadeOut();
        })


        $('.form').click(function (e) {
            e.stopPropagation();
        })

    }



    //Eventos do formulário.

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

    $('form#form1').submit(function(){
       
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();

        if(verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome]'));
             return false;
        } else if(verificarTelefone(telefone) == false) {
             aplicarCampoInvalido($('input[name=telefone]'));
             return false;

        } else if(verificarEmail(email) == false) {
            aplicarCampoInvalido($('input[name=email]'));
            return false;
        }
        
        else {
            alert("Formulário enviado com sucesso!");
        }

        return false;
         //Se chegou até o final é por que está tudo okay!
    })

    // Funções para estilizar o campo do formulário

    function aplicarCampoInvalido(el) {
       el.css('color','red');
       el.css('border','2px solid red');
       el.val('Campo Invalido!');
         // el.data('invalido','true');

    }

    function resetarCampoInvalido(el) {
        el.css('color','#41f04f');
        el.css('border','2px solid #41f04f');
        el.val('');
    }

    //Funções para organizar nosso campo.

    
    function verificarNome(nome) {


        //Contando a quantidade de espaços e os respectivos valores.
         
         if(nome == '') {
            return false;
         }

        var amount =   nome.split(' ').length;
        var splitStr = nome.split(' ');

        if( amount >= 2 ) {
            for(var i = 0; i < amount; i++ ) {
              if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                  
                } else {
                   
                    return false;
               } 

            }
        } else {
           
            return false;
        }
    }

    function verificarTelefone(telefone) {

        if(telefone == '') {
            return false;
        }

        if(telefone.match(/^\([0-9]{2}\)[0-9]{4}[0-9]{5}$/) == null) {
            return false;
        }

    }

    function verificarEmail(email) {
          if(email == '') {
            return false;
          }

          if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
            return false;
        }
    }


   
    
})


