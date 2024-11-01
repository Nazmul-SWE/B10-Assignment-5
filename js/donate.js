document.getElementById('btn-donate-1').addEventListener('click',function(event){
  event.preventDefault();
  const addMoney=  getInputFieldByValue('input-add-money');
  const mainBalance=getTextFieldByValue('main-balance');
  const cardBalance= getTextFieldByValue('donated-value');
  if(isNaN(addMoney)){
    alert("Not A number");
    return;
  }

  else if(addMoney>=0){
    if(mainBalance >= addMoney){
      const newBalance =mainBalance- addMoney;
      const newCardBalance= cardBalance+addMoney;
      document.getElementById('main-balance').innerText=newBalance;
      document.getElementById('donated-value').innerText=newCardBalance;

      // Transactions histry
      const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
               <p>New Balance ${newBalance}. New card balance ${newCardBalance} </p>
            `
 // <p>${newCardBalance} withdraw. New Balance ${newBalance}</p>
            document.getElementById('history-container').appendChild(div);
      
    }
    else{
      alert('Insufficient Balance');
      return;
    }
  }

})