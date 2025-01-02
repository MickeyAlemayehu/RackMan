const classData = JSON.parse(localStorage.getItem("classData"));
const className = document.getElementById("className");
const schedule = document.getElementById("schedule")
const capacity = document.getElementById("capacity");
const addButton = document.getElementById("addButton");

className.value = classData.className;
schedule.value = classData.schedule;
capacity.value = classData.value;

addButton.addEventListener("click", async function (event) {
    event.preventDefault(); 

    const classData = {
        classID : classData.classID,
        className: className.value.trim(),
        schedule: schedule.value.trim(),
        capacity: capacity.value.trim(),
    };

    if (!classData.className || !classData.schedule || !classData.capacity) {
        console.error("All fields are required.");
        alert("Please fill out all fields.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/classes/${classData.classID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);
        alert("Class edited successfully!");

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to edit class. Please try again.");
    }
});