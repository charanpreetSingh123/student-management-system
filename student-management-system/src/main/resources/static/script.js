const API_URL = "/api/students";

document.addEventListener("DOMContentLoaded", () => {
    loadStudents();

    document.getElementById("studentForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const id = document.getElementById("studentId").value;
        const student = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            course: document.getElementById("course").value,
            age: parseInt(document.getElementById("age").value)
        };

        try {
            if (id) {
                await fetch(`${API_URL}/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(student)
                });
                alert("Student updated successfully!");
            } else {
                await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(student)
                });
                alert("Student added successfully!");
            }

            resetForm();
            loadStudents();
        } catch (error) {
            console.error("Error saving student:", error);
            alert("Something went wrong while saving the student.");
        }
    });
});

async function loadStudents() {
    try {
        const response = await fetch(API_URL);
        const students = await response.json();

        const tableBody = document.getElementById("studentTableBody");
        tableBody.innerHTML = "";

        if (students.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align:center; color:#94a3b8; padding:20px;">
                        No student records found.
                    </td>
                </tr>
            `;
            return;
        }

        students.forEach(student => {
            const row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.course}</td>
                    <td>${student.age}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-edit" onclick='editStudent(${JSON.stringify(student)})'>Edit</button>
                            <button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
                        </div>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error loading students:", error);
        alert("Failed to load student data.");
    }
}

function editStudent(student) {
    document.getElementById("studentId").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("course").value = student.course;
    document.getElementById("age").value = student.age;

    document.getElementById("formTitle").innerText = "Update Student";
    document.getElementById("submitBtn").innerText = "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

async function deleteStudent(id) {
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        alert("Student deleted successfully!");
        loadStudents();
    } catch (error) {
        console.error("Error deleting student:", error);
        alert("Something went wrong while deleting the student.");
    }
}

function resetForm() {
    document.getElementById("studentForm").reset();
    document.getElementById("studentId").value = "";

    document.getElementById("formTitle").innerText = "Add Student";
    document.getElementById("submitBtn").innerText = "Add Student";
}