function getInputFieldByValue(id){
 const inputValue =document.getElementById(id).value;
 const inputNumber=parseFloat(inputValue);
 return inputNumber;
}

function getTextFieldByValue(id){
  const textValue=document.getElementById(id).innerText;
  const textNumber=parseFloat(textValue);
  return textNumber;
}