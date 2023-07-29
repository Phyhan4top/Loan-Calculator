const form=document.querySelector('#loan-form');
const amount= document.querySelector('#amount')
const interest= document.querySelector('#interest')
const years= document.querySelector('#years')
const Mpayment= document.querySelector('#monthly-payment');
const Tpayment= document.querySelector('#total-payment');
const tInterest= document.querySelector('#total-interest');

const card=document.querySelector('.card');
const result=document.querySelector('#results');
const loader=document.querySelector('#loading');

LoadAllEventListeners()
function LoadAllEventListeners(){
  form.addEventListener('submit',function(e){
loader.style.display='block';
result.style.display='none';
setTimeout(Calc,2000)
   e.preventDefault() 
  }


    
  )
  
  
}

function Calc(){


const principal=parseFloat(amount.value);
const calcinterest= parseFloat(interest.value)/100/12;
const calcpayment= parseFloat(years.value)*12;


// calc monthly
const x= Math.pow(1+ calcinterest,calcpayment);
const monthly=(principal*x*calcinterest)/(x-1);


if(isFinite(monthly)){
  Mpayment.value= monthly.toFixed(2)
  Tpayment.value=(monthly*calcpayment).toFixed(2);
  tInterest.value=((monthly*calcpayment)-principal).toFixed(2);
 
  loader.style.display='none';
  result.style.display='block';

}else{
showError('Please Check Your Input');
loader.style.display='none';
}



}
function showError(error){
  const errordiv=document.createElement('div');
errordiv.appendChild(document.createTextNode(error));
errordiv.className='alert alert-danger';
const heading=document.querySelector('h1 ');

card.insertBefore(errordiv,heading);

setTimeout(clrError, 3000)
}
function clrError(){
  document.querySelector('.alert').remove()
}

