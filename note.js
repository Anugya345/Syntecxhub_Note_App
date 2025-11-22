let addNote = document.getElementById("addNote");
let deleteIcon = document.querySelector(".icon");
let addBtn = document.getElementById("addBtn");
let editingNote = null;

addNote.addEventListener("click", function(){
    editingNote = null;
    document.querySelector(".addForm").style.display = "block";
    document.getElementById("title").value="";
    document.getElementById("discription").value="";
    document.getElementById("formTitle").textContent = "Add a Note";
    addBtn.textContent = "Add Note";
});

deleteIcon.addEventListener("click", function(){
    document.querySelector(".addForm").style.display = "none";
    editingNote = null;
    document.getElementById("formTitle").textContent = "Add a Note";
    addBtn.textContent = "Add Note";
});

addBtn.addEventListener("click", function(){
    if (editingNote) {
        // Update existing note
        editingNote.querySelector("h2").textContent = document.getElementById("title").value;
        editingNote.querySelector("p").textContent = document.getElementById("discription").value;
        editingNote = null;
    } else {
        // Create new note
        let div = document.createElement("div");
        div.classList.add("myNote");

        div.innerHTML = `
            <h2>${document.getElementById("title").value}</h2>
            <p>${document.getElementById("discription").value}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;

        // Add edit functionality
        div.querySelector(".editBtn").addEventListener("click", function(){
            editingNote = div;
            document.querySelector(".addForm").style.display = "block";
            document.getElementById("title").value = div.querySelector("h2").textContent;
            document.getElementById("discription").value = div.querySelector("p").textContent;
            document.getElementById("formTitle").textContent = "Edit Note";
            addBtn.textContent = "Update Note";
        });

        // Add delete functionality to the button
        div.querySelector(".deleteBtn").addEventListener("click", function(){
            div.remove();
        });

        document.querySelector(".newNote").appendChild(div);
    }

    // Reset form
    document.querySelector(".addForm").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("discription").value = "";
    document.getElementById("formTitle").textContent = "Add a Note";
    addBtn.textContent = "Add Note";
});







