const addButton = document.getElementById("add_card");
const container = document.querySelector(".cards-container");
let students = JSON.parse(localStorage.getItem("students")) || [];


function createCard(student)
{
    const card = document.createElement("div");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (event)
    {
        event.stopPropagation();
        card.remove();

        students = students.filter(function(item)
        {
            return item.name !== student.name;
        });

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );
    });


    card.classList.add("card");
    card.addEventListener("click", function ()
    {
        localStorage.setItem("selectedStudent", student.name);
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



for (let student of students)
{
    createCard(student);
}



addButton.addEventListener("click", function ()
{
    const studentName = prompt("اسم دانشجو را وارد کنید:");

    if (!studentName)
    {
        return;
    }

    students.push({
        name: studentName,
        schedule: [],
        exams: [],
        image: "default.png"
    });

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    createCard(students[students.length - 1]);
});
