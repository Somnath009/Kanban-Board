const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")

const task = document.querySelectorAll(".task")

let dragElement = null

task.forEach((task) => {
    task.addEventListener("drag", (e) => {
        dragElement = task;
    })
})

function addDragEvent(column){
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over")
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        console.log("droped", dragElement, column);

        column.appendChild(dragElement);
        column.classList.remove("hover-over");
        
    })
}

addDragEvent(todo)
addDragEvent(progress)
addDragEvent(done)