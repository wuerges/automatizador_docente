var encs =   [["10/08/2017", "T", "2", "Introdu\u00e7\u00e3o a Sistemas Digitais"], ["17/08/2017", "T", "2", "Introdu\u00e7\u00e3o a L\u00f3gica Sequencial"], ["22/08/2017", "T", "3", "Semana acad\u00eamica"], ["24/08/2017", "T", "2", "Semana acad\u00eamica"], ["29/08/2017", "T", "3", "Piscar luzes com o FPGA"], ["31/08/2017", "T", "2", "M\u00e1quinas de estado: Moore e Mealy"], ["05/09/2017", "T", "3", "Caso de estudo: Adaptador VGA"], ["07/09/2017", "T", "2", "M\u00e1quinas de estado: Moore e Mealy"], ["12/09/2017", "T", "3", "1. Teste se ponto est\u00e1 em tri\u00e2ngulo, em C. 2. Termino do trabalho de piscar leds."], ["14/09/2017", "T", "2", "M\u00e1quinas de estado: Moore e Mealy"], ["19/09/2017", "T", "3", "1. Verificar se um ponto est\u00e1 dentro de um Tri\u00e2ngulo em C. 2. Elabora\u00e7\u00e3o de testes. 3. Verificar se um ponto est\u00e1 dentro de um Tri\u00e2ngulo em Verilog."], ["26/09/2017", "T", "3", "Introducao a circuitos sequenciais."], ["03/10/2017", "T", "3", "Introdu\u00e7\u00e3o a circuitos sequenciais. Parte 2."], ["17/10/2017", "T", "3", "Multiplicacao de vetores com pipeline de 2 estagios."], ["24/10/2017", "T", "3", ""], ["26/10/2017", "T", "2", ""], ["02/11/2017", "T", "2", ""], ["09/11/2017", "T", "2", ""], ["16/11/2017", "T", "2", ""], ["23/11/2017", "T", "2", ""], ["30/11/2017", "T", "2", ""], ["07/12/2017", "T", "2", ""], ["14/12/2017", "T", "2", ""]]


encs = encs.filter(e => parseInt(e[2]) > 0);

function GetNovoEncontro() {
    return $( "img[title*='Novo Encontro']" ).parent()
}
function SetCampoData(t) {
  return $( "input[alt*='Data']" ).val(t);
}
function SetCampoTurno(t) {
  $( "option:contains('Manhã')" ).parent().val(t).change();
}
function SetCampoHoras(t) {
  $( "#corpo\\:somCht_input" ).val(t).change();
}
function SetCampoConteudo(t) {
  $( "textarea" ).val(t);
}


function takeOne() {
  console.log("Faltam " + encs.length + " encontros.");
  var e = encs.pop();
  if (e) {
    console.log("Processando " + e +".");
    $(document).ready(function() {
      console.log("indo verificar novo encontro");
      GetNovoEncontro().click();
      setTimeout(function() {
        $(document).ready(function () {
          SetCampoData(e[0]);
          SetCampoTurno(e[1]);
          SetCampoHoras(e[2]);
          SetCampoConteudo(e[3]);
          $( "a[title*='Salvar']" ).click();
          setTimeout(function () { $(document).ready(takeOne); }, 5000);
        });
      }, 5000);
    });
  }
}

takeOne();

