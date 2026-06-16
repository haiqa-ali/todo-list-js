const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    if(input.value.trim() === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${input.value}</span>
        <button class="delete">🗑️</button>
    `;

    taskList.appendChild(li);

    input.value = "";

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });

    li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

});
