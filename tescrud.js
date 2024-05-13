let data = [];

let form = document.getElementById("task-form");
let input = document.getElementById("task");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let acceptData = () => {
    data.push({
        text: input.value,
        id: Date.now()
    });
    input.value = "";
    displayData();
};

let displayData = () => {
    posts.innerHTML = "";
    data.forEach((task) => {
        let taskHTML = `
            <div>
                <p>${task.text}</p>
                <button class="btn btn-danger" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        posts.innerHTML += taskHTML;
    });
};

let deleteTask = (id) => {
    data = data.filter((task) => task.id !== id);
    displayData();
};

displayData();