// JS CAROUSEL DE DEPOIMENTOS
$('#recipeCarousel').carousel({
    interval: 10000
});

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

// JS EFEITO IMAGENS INDEX
$(document).ready(function(){
    $("#img-matheus-principal").hide().fadeIn(6000);
    $("#img-seta").hide();
    // $("#img-matheus-esqueleto").hide();

    // MOSTRANDO A SETA ÂNCORA
    $(window).scroll(function() {
        if ($(this).scrollTop() < 400){
            $("#img-seta").hide(1000);
         }
        else{
          $("#img-seta").show(1000);
         }
    });
});

// JS FORMULÁRIO PÁGINA CONTATO
$(document).ready( function() {
    $("#formulario").on('submit', function(e){
       e.preventDefault();
       alert("Mensagem enviada!")
    });
});

// JS FORMULÁRIO PÁGINA CADASTRO
$(document).ready( function() {
    $("#formulario-cadastro").on('submit', function(e){
       e.preventDefault();
       alert("Cadastro efetuado com sucesso!");
    });
});

// JS PÁGINA DE DÚVIDAS FREQUENTES
$(document).ready(function(){
    $(".div-duvidas-primeiro").hide().fadeIn(2000);
    $(".div-duvidas-segundo").hide();
    $("#div-duvidas-terceiro").hide();
    $("#noticias").hide();

    // MOSTRANDO A SEGUNDA SEÇÃO QUANDO ROLA
    $(window).scroll(function() {
        if ($(this).scrollTop() < 300){
            $(".div-duvidas-segundo").hide(1000);
         }
        else{
          $(".div-duvidas-segundo").show(2000);
        }
    });

    // MOSTRANDO A TERCEIRA SEÇÃO QUANDO ROLA
    $(window).scroll(function() {
        if ($(this).scrollTop() < 700){
            $("#div-duvidas-terceiro").hide(1000);
         }
        else{
          $("#div-duvidas-terceiro").show(2000);
        }
    });
});

// JS PÁGINA DE LESÕES COMUNS
// $(document).ready(function(){
//     $("#sec-primeira-lesao").hide().show(1000);
//     // $("#sec-segunda-lesao").hide().slideDown(4000);
//     $("#sec-terceira-lesao").hide();
//     $("#sec-quarta-lesao").hide();
//     $("#sec-quinta-lesao").hide();
//     $("#sec-sexta-lesao").hide();
//     $("#sec-setima-lesao").hide();


// });

//Validação do CPF
function VerificaCPF() {
    strCpf = document.getElementById("cpf").value;
    var soma = 0;
    var resto;
  
    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("Por favor insira um CPF válido.");
      document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
      return false;
    }
  
    for (i = 1; i <= 9; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
  
    resto = soma % 11;
  
    if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
  
    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("Por favor insira um CPF válido.");
      document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
      return false;
    }
  
    soma = 0;
  
    for (i = 1; i <= 10; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
  
    resto = soma % 11;
  
    if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
  
    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("Por favor insira um CPF válido.");
      document.getElementById("cpf").style.background = "#f6cacc"; // alterar background
      return false;
    }
    document.getElementById("cpf").style.background = "#f2fdfd";
    return true;
}