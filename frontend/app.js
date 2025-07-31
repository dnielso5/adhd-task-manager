const api = "http://localhost:8009"

function addTask() {
  const title = document.getElementById("task-title").value
  const mode = document.getElementById("task-mode").value
  fetch(`${api}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, mode })
  }).then(() => loadTasks())
}

function loadTasks() {
  fetch(`${api}/tasks`).then(r => r.json()).then(tasks => {
    const list = document.getElementById("task-list")
    list.innerHTML = ""
    tasks.forEach(t => {
      const li = document.createElement("li")
      li.textContent = `${t.title} [${t.mode}] - ${t.points} pts`
      list.appendChild(li)
    })
  })
}

document.addEventListener("DOMContentLoaded", loadTasks)
