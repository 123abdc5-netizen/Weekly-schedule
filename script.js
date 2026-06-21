const addButton = document.getElementById("add_card");
const container = document.querySelector(".cards-container");



function createCard(student, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        db.collection("students").doc(id).delete().then(() => {
            card.remove();
        });
    });

    card.addEventListener("click", function () {
        localStorage.setItem("selectedStudent", id);
        window.location.href = "student_information.html";
    });

    const img = document.createElement("img");
    img.src = student.image || "default.png";
    img.classList.add("profile-img");

    const name = document.createElement("div");
    name.classList.add("student-name");
    name.innerText = student.name;

    card.appendChild(deleteBtn);
    card.appendChild(img);
    card.appendChild(name);

    container.appendChild(card);
}


db.collection("students").get().then((snapshot) => {
    snapshot.forEach((doc) => {
        createCard(doc.data(), doc.id);
    });
});

addButton.addEventListener("click", function () {

    const studentName = prompt("اسم دانشجو را وارد کنید:");
    if (!studentName) return;

    db.collection("students").add({
        name: studentName,
        image: "default.png",
        schedule: [],
        exams: []
    });
});