var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();


        var qtdPalavras = conteudo.split(" ").length -1;
        $("#tamanho-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#tamanho-caracteres").text(qtdCaracteres);

    });
}


function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function() {
        var campoDigitacao = $(".campo-digitacao");
        var digitado = campo.val();

        //var comparavel = frase.substring(0 , digitado.length);
        if (frase.startsWith(digitado)){
            campoDigitacao.removeClass("campo-digitacao-vermelho");
        }else{
            campoDigitacao.removeClass("campo-digitacao:focus");
            campoDigitacao.addClass("campo-digitacao-vermelho");
        }
    });
}


function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        $("#botao-reiniciar").attr("disabled", true);
        var id = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante > 3 && tempoRestante <= 6){
                $("#tempo-digitacao").addClass("timer-amarelo");
            }
            if (tempoRestante <= 3) {
                $("#tempo-digitacao").removeClass("timer-amarelo");
                $("#tempo-digitacao").addClass("timer-vermelho");
            }
            if (tempoRestante < 1) {
                clearInterval(id);
                finalizaJogo();
            }
        },1000);
    });
}


function finalizaJogo() {
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled", false);
    campo.toggleClass("campo-digitacao-desativado");
    inserePlacar();
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#tamanho-palavras").text("0");
    $("#tamanho-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    campo.toggleClass("campo-digitacao-desativado");
    inicializaCronometro();
    $("#botao-reiniciar").attr("disabled", true);
    $("#tempo-digitacao").removeClass("timer-vermelho");
    $(".campo-digitacao").removeClass("campo-digitacao-vermelho");
}



function inserePlacar() {
    var placar = $(".placar").find("tbody");
    console.log(placar);
}

