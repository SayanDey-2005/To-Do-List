const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = inputBox.value;
  listContainer.appendChild(li);

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; // × symbol
  span.style.float = "right";
  span.style.marginRight = "10px";
  span.style.cursor = "pointer";
  li.appendChild(span);

  span.addEventListener("click", () => {
    li.remove();
  });

  inputBox.value = "";
}
