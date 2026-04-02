function addStudent() {
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || marks === "") {
        alert("Please enter all details");
        return;
    }

    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.innerText = name + " - Marks: " + marks;

    list.appendChild(li);

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}