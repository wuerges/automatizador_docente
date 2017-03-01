
// ---------------------------------------
//
//
function removeAll() {
  el = $("img[title*='Excluir Encontro']").parent();
  if (el) {
    el.click();
    setTimeout(function() { 
      $(document).ready(function () { 
        $("span:contains('Confirmar')").parent()[0].click();
        setTimeout(function () { $(document).ready(removeAll); }, 2000);
      }); 
    }, 2000);
  }
}
