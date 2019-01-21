// Define UI vars;

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listerners 

loadEventListerners();

//Load all event listeners 

function loadEventListerners(){
  form.addEventListener('submit', addTask);
}

//Add Assigment
function addTask(e){
  if(taskInput.value === ''){
    alert('Please add an Assignment');
  }
  
  // Create Li elements
  const li = document.createElement('li');
  li.className = 'collection-item';

  //Create a Text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link Element
  const link = document.createElement('a');

  // Add class 
  link.className = 'delete-item secondary-content';

  //Add icon html
  link.innerHTML = '<i class= "fa fa - remove"></i>';

  //Append the link to the li
  li.appendChild(link);

  //Append li to ul
  AssignmentList.appendChild(li);

  //Clear input
  taskInput.value = '';
 



  e.preventDefault();
}

