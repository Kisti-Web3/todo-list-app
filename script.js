const inputBox = document.getElementById('input');
const listItem = document.getElementById('list-item');

function addTask() {
  if (inputBox.value === '') {
    alert("Write a task!")
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItem.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listItem.addEventListener("click", (e) =>{
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listItem.innerHTML);
}
function showTask() {
  listItem.innerHTML = localStorage.getItem("data");
}
showTask();