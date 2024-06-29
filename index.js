const inputBox = document.getElementById('inputBox');
const taskContainer = document.querySelector('.list-container');

function addTask(){
    if(inputBox.value == ''){
        alert('Please Enter your task name First in input field')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML ='\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

taskContainer.addEventListener('click',(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('TasksData',taskContainer.innerHTML);
}
function getData(){
    taskContainer.innerHTML = localStorage.getItem('TasksData')
}

getData()