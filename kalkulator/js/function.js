function addChar(input, character) {
  if(input.value == null || input.value == "0")
   input.value = character
  else
   input.value += character
 }

 function hapus(input){
  input.value = "";
 }

 function sin(form) {
  form.nilai.value = Math.sin(form.nilai.value);
 }

 function exp(form) {
  form.nilai.value = Math.exp(form.nilai.value,form.nilai.value);
 }

 function mod(form) {
  form.nilai.value = Math.mod(form.nilai.value);
 }

 function akar(form) {
  form.nilai.value = Math.sqrt(form.nilai.value);
 }

 function pow(form) {
  form.nilai.value = Math.pow(form.nilai.value,form.nilai.value);
 }

 function cos(form) {
  form.nilai.value = Math.cos(form.nilai.value);
 }

 function tan(form) {
  form.nilai.value = Math.tan(form.nilai.value);
 }

 function log(form) {
  form.nilai.value = Math.log(form.nilai.value);
 }

 function ambil(form) {
  form.nilai.value = eval(form.nilai.value)
 }

 function checkNumber(str) {
  for (var i = 0; i < str.length; i++) {
   var ch = str.substring(i, i+1)
   if (ch < "0" || ch > "9") {
    if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
     && ch != "(" && ch!= ")") {
     alert("invalid entry!")
     return false
     }
    }
   }
   return true
 }
