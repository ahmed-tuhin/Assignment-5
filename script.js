const allBtn = document.getElementsByClassName('btn');

let select = 0;
for( const btn of allBtn){
    btn.addEventListener('click', function(event){
        select = select + 1;

       const seatNumber = event.target.parentNode.childNodes[3].innerText; 
      
      

       const ticketPrice = document.getElementById("ticket-price").innerText ;
       
       
   

     
     
     setInnerText('selected-seat',select);
        
    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}