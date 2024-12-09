document.getElementById('donate-now-btn-1').addEventListener('click', function(){
    const inputDonatedAmount = getInputFieldValueById('input-balance')
    
    console.log(inputDonatedAmount);

    if(inputDonatedAmount === Number || inputDonatedAmount > 0){
       const totalDonation = getTextValueById('total-donation');
       console.log(totalDonation);


       const newTotalDonation = totalDonation + inputDonatedAmount;
       document.getElementById('total-donation').innerText = newTotalDonation;

    //  calculate money;

       const initialAmount = getTextValueById('available-account-balance');
       console.log('available balance', initialAmount);

       if(initialAmount > 0){
        const availableBalance = initialAmount - inputDonatedAmount;

       document.getElementById('available-account-balance').innerText = availableBalance;
       }
       else{
        alert('Insufficient Amount')
       }

     
    }
    else{
        alert('Please input valid amount')
    }
})


