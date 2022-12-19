window.onload = start;

let Month = document.querySelector("#expiryMonth")

let option = document.createElement("option")



function start(){
  
    for( let i=1; i<=12;i++){
      let option= document.createElement("option")
      let span= document.createElement("span")
      
      if(i<=9){
        option.appendChild(span)
      Month.appendChild(option)
      span.innerHTML= "0" + i
      }
      else{
        option.appendChild(span)
      Month.appendChild(option)
      span.innerHTML= i

      } 
  }
  let Year = document.querySelector("#expiryYear")
  for( let i=2035; i>=2000;i--){
      let option= document.createElement("option")
      let span= document.createElement("span")
      
      
        option.appendChild(span)
      Year.appendChild(option)
      span.innerHTML= i

      }
  }
let submitbtn=document.querySelector("#submitbtn")

submitbtn.onclick = ()=>{

let inpname=document.querySelector("#name")
let putname=document.querySelector(".name")

putname.innerHTML = inpname.value

let inpnumber=document.querySelector("#number")
let putnumber=document.querySelector(".number")


  

  putnumber.innerHTML = inpnumber.value




let inpmonth=document.querySelector("#expiryMonth")
let putmonth =document.querySelector(".month")

putmonth.innerHTML = inpmonth.value

let inpyear=document.querySelector("#expiryYear")
let putyear =document.querySelector(".year")

putyear.innerHTML = inpyear.value

let inpcvv=document.querySelector("#cvv")
let putcvv =document.querySelector(".cvv")

putcvv.innerHTML = inpcvv.value


let thanks = document.querySelector(".thanks")
let rightdiv =document.querySelector(".right")

thanks.innerHTML= "Thank You for submit......🙏🏻"
            rightdiv.remove();
        





}

