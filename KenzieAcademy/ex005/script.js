let button = document.getElementById("item-button");
let input = document.getElementById("item-input");
let ul = document.getElementById("item-ul");
let items = document.getElementsByTagName('li');
let itemsButtons = document.getElementsByClassName("remove")


function criarElemento(){
  if (input.value === ""){
    alert('Digite algum valor')
  }
  else{
    let li = document.createElement("li");
  let xButton = document.createElement("button")
  xButton.innerHTML = "X"
  xButton.className = "remove";
  

  li.appendChild(xButton);

  let textInput = document.createTextNode(input.value);
  
  li.appendChild(textInput);

  ul.appendChild(li);
 
  


  input.value = "";
  buttonEvents();
  }
  

  
  
};

function deleteItem (){
  this.parentElement.remove();
}

function buttonEvents(){
  for (let i = 0; i < itemsButtons.length; i++){
    itemsButtons[i].addEventListener('click', deleteItem)
  }
}



button.addEventListener('click', criarElemento);
buttonEvents();