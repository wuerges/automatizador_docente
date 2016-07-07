
// ---------------------------------------
//
//
function removeAll() {
  el = $(document.getElementById('corpo:j_idt99:0:j_idt117'));
  if (el) {
    el.click();
    setTimeout(function() { 
      $(document).ready(function () { 
        $(document.getElementById('corpo:j_idt257')).click();
        setTimeout(function () { $(document).ready(removeAll); }, 2000);
      }); 
    }, 2000);
  }
}
