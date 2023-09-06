$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    $('#tel').mask('(00)00000-0000');
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
            interesse:{
                required:false,
            },
            message:{
                required:true,
            },
        },
        
        messages:{
            nome:"Por favor, insira o seu nome",
            email:"Verifique se digitou seu e-mail corretamente",
            telefone:"Este campo é obrigatório"
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(eventos, validador){
            let camposIncorretos= validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
            else{
                form.subit()
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino= $('#contato');
        const nomeVeiculo= $(this).parent().find('h3').text();
        $('#interesse').val(nomeVeiculo);
        $('html').animate({
            scrollTop:destino.offset().top
        },1000)
    })
    
    
})