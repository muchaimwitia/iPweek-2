function checkgender() {
  var century=document.getElementsByid("century").value;
  var CC=parseInt(century)
  var day = document.getElementsByid("day").value;
  var DD= parseInt(day);
  var month = document.getElementsByid("month").value;
  var MM = parseInt(month);
  var year = document.getElementsByCid("year").value;
  var YY = parseInt(year);
  var result =(((CC / 4) - 2 * CC- 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementsByid("male").checked){
  var gender = 'male';
  }
 else if (document.getElementById("female")){
  var gender = 'female';
  }
  if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
  alert("INVALID MONTH");
  }
  if(DD < 1 || DD > 31) {
  alert("INVALID DAY");
  }
  if(Math.ceil(result) == 1 && gender === 'male');{
  alert("Born on Monday ,your akan name is " + boy[1]);
  }
   if(Math.ceil(result) == 2 && gender === 'male') {  
  alert("Born on Tuesday ,your akan name is " + boy[2]);
  }
  else if (Math.ceil(result) == 3 && gender === 'male') {
  alert("Born on Wednesday ,your akan name is " + boy[3]);
  }
  else if (Math.ceil(result) === 4 && gender === 'male') {  
  alert("Born on Thursday,your akan name is " + boy[4]);
  }
  else if (Math.ceil(result) === 5 && gender === 'male') {  
  alert("Born on Friday,your akan name is " + boy[5]);
  }
  else if (Math.ceil(result) === 6 && gender === 'male') {  
  alert("Born on Saturday,your akan name is " + boy[6]);
  }
  else if (Math.ceil(result) === 0 && gender === 'male') {
  alert("Born on Sunday,your akan name is " + boy[0]);
  }
  else if (Math.ceil(result) === 1 && gender === 'female') {  
  alert("Born on monday ,your akan name is " + girl[1]);
  }
  else if (Math.ceil(result) === 2 && gender === 'female') {  
  alert("Born on Tuesday,your akan name is " + girl[2]);
  }
  else if (Math.ceil(result) === 3 && gender === 'female') {  
  alert("Born on Wednesday,your akan name is " + girl[3]);
  }
  else if (Math.ceil(result) === 4 && gender === 'female') {  
  alert("Born on Thursday,your akan name is " + girl[4]);
  }
  else if (Math.ceil(result) === 5 && gender === 'female') {  
  alert("Born on Friday,your akan name is " + girl[5]);
  }
  else if (Math.ceil(result) === 6 && gender === 'female') {
  alert("Born on Saturday,your akan name is " + girl[6]);
  }
  else if (Math.ceil(result) === 0 && gender === 'female') {
  alert("Born on Sunday,your akan name is " + girl[0]);
  }
  }