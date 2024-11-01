document.getElementById('btn-donate-1').addEventListener('click',function(event){
  event.preventDefault();
  const addMoney=  getInputFieldByValue('input-add-money');
  const mainBalance=getTextFieldByValue('main-balance');
  if(isNaN(addMoney)){
    alert("Not A number");
    return;
  }

  else if(addMoney>=0){
    if(mainBalance >= addMoney){
      const newBalance =mainBalance- addMoney;
      document.getElementById('main-balance').innerText=newBalance;
    }
    else{
      alert('Insufficient Balance');
      return;
    }
  }

})