const className = document.getElementById("className");
const schedule = document.getElementById("Schedule")
const capacity = document.getElementById("capacity");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", async function (event) {
    event.preventDefault(); 

    const classData = {
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
        const response = await fetch("http://localhost:8080/api/classes", {
            method: "POST",
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
        alert("Class added successfully!");

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to add class. Please try again.");
    }
});