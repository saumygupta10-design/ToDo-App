function addTask() {
  const value = document.getElementById("task").value;
  if (!value) return;
  const li = document.createElement("li");
  li.innerText = value;
  li.onclick = () => li.remove();
  document.getElementById("list").appendChild(li);
  document.getElementById("task").value = "";
}
