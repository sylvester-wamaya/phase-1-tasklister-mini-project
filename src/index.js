document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    
    newTask(event.target.taskId.value)
    event.target.reset()
  })
})

  function newTask(tasks){
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.addEventListener("click", (e)=>{
      e.target.parentNode.remove()
    })
    
    btn.textContent = "x"
        li.textContent = `${tasks}  `
        li.appendChild(btn)
    
    console.log(li)
    document.querySelector("ul").appendChild(li)

  }

  

