const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("please apni gannd mraiye");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        const span = document.createElement("span");
        span.innerHTML = `\u00d7`;
        listContainer.appendChild(li).appendChild(span);
        inputBox.value = "";
        save();
    }

}

listContainer.addEventListener("click",(e)=>{
     if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();

        
     }
     if (e.target.tagName === "SPAN" ) {
        e.target.parentElement.remove();
        save();
        
     }
})

function save() {
    localStorage.setItem("mat",listContainer.innerHTML);
    
}

function dikhana() {
    listContainer.innerHTML = localStorage.getItem("mat");
    
}
dikhana();