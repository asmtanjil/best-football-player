      /*-----------------------------------
      common functions
-------------------------------------*/
function getElementByInputId(input){
  const inputFieldElement = document.getElementById(input);
  const inputString = inputFieldElement.value;
  const inputNumber = parseFloat(inputString);
  inputFieldElement.value = '';
  return inputNumber;
  }
  
  
  
  /*-----------------------------------------
   Event Listener for Select Button
  --------------------------------------------*/
  const items = document.getElementsByClassName('select-btn');
  let count = 1;
  for(let i = 0; i < items.length; i++){
  const item = items[i];
  item.addEventListener('click', function(event){
  event.preventDefault();
  if(count <= 5 && !event.target.classList.contains('active')){
    let playerName= event.target.parentNode.children[0].innerText;
    // create new element and push the text.
    let bestFivePlayers = document.getElementById('player-list');
    let li = document.createElement('li');
    li.innerText = playerName;
    bestFivePlayers.appendChild(li);
    event.target.classList.add('active');
    event.target.setAttribute('disabled', 'disabled');
    count += 1;
  }
  else if(count > 5){
    alert('You have already selected your best five Players');
  }
  });
  }
  
  
  /*-----------------------------------------
   event handler for calculate button
  --------------------------------------------*/
  document.getElementById('calculate-btn').addEventListener('click', function(){
  const element = document.getElementById('player-list');
  let totalPlayer = element.childNodes.length - 1;
  
  const perPlayerBudget = getElementByInputId('budget-per-player');
  const playerExpenceField = document.getElementById('player-expence');
  
  
  if (isNaN(perPlayerBudget) || perPlayerBudget < 0) {
  alert('Enter valid number');
  return;
  }
  
  const totalPlayerExpence = totalPlayer * perPlayerBudget;
  playerExpenceField.innerText = totalPlayerExpence;
  
  });
  
  
  
  /*-----------------------------------------
  Event Handler for Calculating Total Budget
  --------------------------------------------*/
  
  document.getElementById('calculate-total-btn').addEventListener('click', function(){
  const playerExpenceField = document.getElementById('player-expence');
  const totalPlayerExpenceString = playerExpenceField.innerText;
  const totalPlayerExpence = parseFloat(totalPlayerExpenceString);
  
  const managerExpence = getElementByInputId('manager-budget');
  const coachExpence = getElementByInputId('coach-budget');
  
  if (isNaN(managerExpence) || isNaN(coachExpence) || managerExpence < 0 || coachExpence < 0) {
  alert('Enter valid number');
    return;
  }
  
  const subTotal = managerExpence + coachExpence;
  const allTotal = totalPlayerExpence + subTotal;
  
  const totalFieldElement = document.getElementById('total-field');
  totalFieldElement.innerText = allTotal;
  });
  