function loadDoc() {
    var xhttp = new XMLHttpRequest(); // this is the AJAX object
    xhttp.onreadystatechange = function() { // this returns the client's state
      if (this.readyState == 4 && this.status == 200) { // readyState = response's body
       document.getElementById("demo").innerHTML = this.responseText; // responseText = response type
      }
    };
    xhttp.open("GET", "ajax_info.txt", true); // method, url, async Boolean
    xhttp.send();
}