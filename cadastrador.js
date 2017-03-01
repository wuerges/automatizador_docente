
var encs = [["2/8/2016", "2"], ["4/8/2016", "2"], ["9/8/2016", "2"], ["11/8/2016", "2"], ["16/8/2016", "2"], ["18/8/2016", "2"], ["23/8/2016", "2"], ["25/8/2016", "0"], ["30/8/2016", "2"], ["1/9/2016", "2"], ["6/9/2016", "2"], ["8/9/2016", "2"], ["13/9/2016", "2"], ["15/9/2016", "2"], ["20/9/2016", "0"], ["22/9/2016", "2"], ["27/9/2016", "2"], ["29/9/2016", "2"], ["4/10/2016", "2"], ["6/10/2016", "2"], ["11/10/2016", "2"], ["13/10/2016", "2"], ["18/10/2016", "2"], ["20/10/2016", "2"], ["25/10/2016", "2"], ["27/10/2016", "2"], ["1/11/2016", "2"], ["3/11/2016", "2"], ["8/11/2016", "0"], ["10/11/2016", "0"], ["15/11/2016", "0"], ["17/11/2016", "0"], ["22/11/2016", "0"], ["24/11/2016", "0"], ["29/11/2016", "0"], ["1/12/2016", "0"], ["6/12/2016", "0"], ["8/12/2016", "0"], ["13/12/2016", "0"], ["15/12/2016", "0"], ["20/12/2016", "2"], ["22/12/2016", "2"], ["27/12/2016", "0"], ["29/12/2016", "0"], ["3/1/2017", "0"], ["5/1/2017", "0"], ["10/1/2017", "0"], ["12/1/2017", "0"], ["17/1/2017", "0"], ["19/1/2017", "0"], ["24/1/2017", "0"], ["26/1/2017", "0"], ["31/1/2017", "2"], ["2/2/2017", "2"], ["7/2/2017", "2"], ["9/2/2017", "2"], ["14/2/2017", "2"], ["16/2/2017", "2"], ["21/2/2017", "2"], ["23/2/2017", "2"]]

//var encs = [["1/8/2016", "3"], ["3/8/2016", "2"], ["8/8/2016", "3"], ["10/8/2016", "2"], ["15/8/2016", "3"], ["17/8/2016", "2"], ["22/8/2016", "3"], ["24/8/2016", "2"], ["29/8/2016", "3"], ["31/8/2016", "2"], ["5/9/2016", "3"], ["7/9/2016", "0"], ["12/9/2016", "3"], ["14/9/2016", "2"], ["19/9/2016", "3"], ["21/9/2016", "2"], ["26/9/2016", "3"], ["28/9/2016", "2"], ["3/10/2016", "3"], ["5/10/2016", "2"], ["10/10/2016", "3"], ["12/10/2016", "0"], ["17/10/2016", "3"], ["19/10/2016", "2"], ["24/10/2016", "3"], ["26/10/2016", "2"], ["31/10/2016", "3"], ["2/11/2016", "0"], ["7/11/2016", "0"], ["9/11/2016", "0"], ["14/11/2016", "0"], ["16/11/2016", "0"], ["21/11/2016", "0"], ["23/11/2016", "0"], ["28/11/2016", "0"], ["30/11/2016", "0"], ["5/12/2016", "0"], ["7/12/2016", "0"], ["12/12/2016", "0"], ["14/12/2016", "0"], ["19/12/2016", "3"], ["21/12/2016", "2"], ["26/12/2016", "0"], ["28/12/2016", "0"], ["2/1/2017", "0"], ["4/1/2017", "0"], ["9/1/2017", "0"], ["11/1/2017", "0"], ["16/1/2017", "0"], ["18/1/2017", "0"], ["23/1/2017", "0"], ["25/1/2017", "0"], ["30/1/2017", "3"]];

encs = encs.filter(e => parseInt(e[1]) > 0);

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
          SetCampoTurno('M');
          SetCampoHoras(e[1]);
          $( "a[title*='Salvar']" ).click();
          setTimeout(function () { $(document).ready(takeOne); }, 5000);
        });
      }, 5000);
    });
  }
}

takeOne();


