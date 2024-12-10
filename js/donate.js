// document.getElementById('donate-now-btn-1').addEventListener('click', function(){
//     const inputDonatedAmount = getInputFieldValueById('input-balance')
    
//     console.log(inputDonatedAmount);

//     if(inputDonatedAmount === Number || inputDonatedAmount > 0){
//        const totalDonation = getTextValueById('total-donation');
//        console.log(totalDonation);


//        const newTotalDonation = totalDonation + inputDonatedAmount;
//        document.getElementById('total-donation').innerText = newTotalDonation;

//     //  calculate money;

//        const initialAmount = getTextValueById('available-account-balance');
//        console.log('available balance', initialAmount);

//        if(initialAmount > 0){
//         const availableBalance = initialAmount - inputDonatedAmount;

//        document.getElementById('available-account-balance').innerText = availableBalance;
//        }
//        else{
//         alert('Insufficient Amount')
//        }

     
//     }
//     else{
//         alert('Please input valid amount')
//     }
// })

function calculateDonatedMoney (){
    const inputAmount = getInputFieldValueById('input-balance-1');
    // console.log(inputAmount);
    
    // console.log(totalDonation);

    // validation
 if(inputAmount > 0 ){
     console.log(inputAmount);

     const totalDonation = getTextValueById('total-donation-1');

     const subTotal = inputAmount + totalDonation;
     
     document.getElementById('total-donation-1').innerText = subTotal;

    //  calculate available balance

    const currentBalance = getTextValueById('available-account-balance');
    console.log(currentBalance);
    if(currentBalance > 0){
        const availableBalance = currentBalance - inputAmount;
        document.getElementById('available-account-balance').innerText = availableBalance;
    }
    else{
        alert('Insufficient Amount')
    }

 }
 else{
    alert('Please provide a valid Amount')
 }

}


function calculateDonatedMoney (){
    const inputAmount = getInputFieldValueById('input-balance-2');
    // console.log(inputAmount);
    
    // console.log(totalDonation);

    // validation
 if(inputAmount > 0 ){
     console.log(inputAmount);

     const totalDonation = getTextValueById('total-donation-2');

     const subTotal = inputAmount + totalDonation;
     
     document.getElementById('total-donation-2').innerText = subTotal;

    //  calculate available balance

    const currentBalance = getTextValueById('available-account-balance');
    console.log(currentBalance);
    if(currentBalance > 0){
        const availableBalance = currentBalance - inputAmount;
        document.getElementById('available-account-balance').innerText = availableBalance;
    }
    else{
        alert('Insufficient Amount')
    }

 }
 else{
    alert('Please provide a valid Amount')
 }

}

function calculateDonatedMoney (){
    const inputAmount = getInputFieldValueById('input-balance-3');
   

    // validation
 if(inputAmount > 0 ){
     

     const totalDonation = getTextValueById('total-donation-3');

     const subTotal = inputAmount + totalDonation;
     
     document.getElementById('total-donation-3').innerText = subTotal;

    //  calculate available balance

    const currentBalance = getTextValueById('available-account-balance');
 

    if(currentBalance > 0){
        const availableBalance = currentBalance - inputAmount;
        document.getElementById('available-account-balance').innerText = availableBalance;
    }
    else{
        alert('Insufficient Amount')
    }

 }
 else{
    alert('Please provide a valid Amount')
 }

}




