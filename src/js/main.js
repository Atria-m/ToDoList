document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle.checked = false;
  } else {
    body.classList.remove("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

const addBtn = document.querySelector(".input-todo button");
const inputBox = document.querySelector(".input-todo input");
const todoList = document.querySelector(".todo-list");
const deleteAllbtn = document.querySelector(".info-box button");

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;

  if (userEnteredValue.trim() !== "") {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

addBtn.addEventListener("click", function () {
  let userEnteredValue = inputBox.value.trim();

  if (userEnteredValue) {
    const getLocalStorageData = JSON.parse(localStorage.getItem("todo")) || [];
    getLocalStorageData.push(userEnteredValue);

    localStorage.setItem("todo", JSON.stringify(getLocalStorageData));

    addBtn.classList.remove("active");

    inputBox.value = "";

    showTasks();
  }
});

showTasks();
function showTasks() {
  let getLocalStorageData = localStorage.getItem("todo");

  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }

  const pendingTasks = document.querySelector(".pendingTasks");
  pendingTasks.textContent = listArray.length;

  if (listArray.length > 0) {
    deleteAllbtn.classList.add("active");
  } else {
    deleteAllbtn.classList.remove("active");
  }

  let newTag = "";

  listArray.forEach((element, index) => {
    newTag += `      <li
              class="group relative list-none mb-2.5 bg-[#ffe6f0] dark:bg-gray-800 py-2.5 px-4 rounded-md text-[#b34773] dark:text-gray-100 sm:text-sm md:text-base"
            >
              ${element}
              <span
                class="icon absolute left-0 top-1/2 -translate-y-1/2 w-[45px] py-2.5 px-4 bg-[#dd297d] dark:bg-[#db4141] text-white rounded-sm text-center cursor-pointer hidden group-hover:block transition-opacity duration-300"
              >
                <i class="fas fa-trash-alt" onclick="deleteTask(${index})"></i>
              </span>
            </li>`;
  });
  todoList.innerHTML = newTag;
}

function deleteTask(index) {
  const getLocalStorageData = JSON.parse(localStorage.getItem("todo")) || [];
  const updatedTasks = getLocalStorageData.filter((_, i) => i !== index);
  localStorage.setItem("todo", JSON.stringify(updatedTasks));
  showTasks();
}

deleteAllbtn.addEventListener("click", function () {
  localStorage.removeItem("todo");
  showTasks();
});
