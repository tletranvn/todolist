const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //to add a cross icon to delete the task :
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //to cross the line
        li.appendChild(span);
    }
    inputBox.value = ''; // clear the input right after it is on the list
    saveTasks(); // Save tasks every time, otherwise the list is deleted when refresh    
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);



//ajouter tache quand tapper le bouton
const addButton = document.getElementById("add-button");
addButton.addEventListener('click', addTask);

//soit permettre d'executer quand tapper "Entrer"
inputBox.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        addTask();
    }
});

// Save tasks to keep data when refreshing the page
function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Show tasks when page reloads
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();
