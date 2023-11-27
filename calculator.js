let inputBox =document.getElementById('inputBox')
let button = document.querySelectorAll('button')
console.log(button);

let string = ''

button.forEach(element =>{
      var data ='';
      element.addEventListener('click', (b)=>{
              if(b.target.innerText == '='){
                string = String(eval(string))
                inputBox.value = string;   
      }
      else if (b.target.innerText == 'AC'){
        string = ''
        inputBox.value = string;
      }
      else if (b.target.innerText == 'DEL'){
         string = string.substring(0,string.length-1)
         inputBox.value = string;
      }
      else if(b.target.id == 'plusMinus')
      {
          string = String(-eval(string))
          inputBox.value = string;
      }
      else{

            if(isNaN(b.target.innerText))
            {
                  console.log(string.charAt(string.length - 1));
                  console.log(isNaN(string.charAt(string.length - 1)));
                  if(isNaN(string.charAt(string.length - 1)) && string.charAt(string.length - 1) == b.target.innerText)
                  { 
                        string =string;
                  }else if(isNaN(string.charAt(string.length - 1)))
                  {
                        
                        string = string.slice(0, -1) + b.target.innerText
                        
                        inputBox.value = string

                  }
                  else
                  {
                        
                        string += b.target.innerText
                        inputBox.value = string
                  }

                  


                  console.log("hi0");
                  console.log(data);


                  
                 
            }
            else
            {
                  string += b.target.innerText
                  inputBox.value = string
            }
            

      }
      })




})