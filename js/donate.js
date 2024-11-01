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
      const date = new Date();

      // Transactions histry
      const div = document.createElement('div');
            div.classList.add('border');
            div.innerHTML = `
                <h4 class="text-2xl font-bold">
                 ${newCardBalance} Taka is Donated for famine-2024 at Feni, Bangladesh
                </h4>
               <p> ${date}</p>
            `
 
            document.getElementById('history-container').appendChild(div);
      
    }
    else{
      alert('Insufficient Balance');
      return;
    }
  }

})