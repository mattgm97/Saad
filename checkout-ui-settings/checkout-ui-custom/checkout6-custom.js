// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
// Anula o arquivo checkout-custom que foi estilizado pelo time do cliente

function removejscssfile(filename, filetype) {
  var targetelement = filetype == 'js' ? 'script' : filetype == 'css' ? 'link' : 'none' //determine element type to create nodelist from
  var targetattr = filetype == 'js' ? 'src' : filetype == 'css' ? 'href' : 'none' //determine corresponding attribute to test for
  var allsuspects = document.getElementsByTagName(targetelement)
  for (var i = allsuspects.length; i >= 0; i--) {
    //search backwards within nodelist for matching elements to remove
    if (
      allsuspects[i] &&
      allsuspects[i].getAttribute(targetattr) != null &&
      allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1
    )
      allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
  }
}

removejscssfile('checkout-custom.css', 'css') //remove all occurences "somestyle.css" on page

// Anula o arquivo checkout-custom que foi estilizado pelo time do cliente - FIM
