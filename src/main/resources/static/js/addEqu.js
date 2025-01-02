const equName = document.getElementById("equName");
const equCategory = document.getElementById("equCategory");
const equStatus = document.getElementById("equStatus");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", async function (event) {
    event.preventDefault(); 

    const equipmentData = {
        equiName: equName.value.trim(),
        equiCategory: equCategory.value.trim(),
        equiStatus: equStatus.value.trim(),
    };

    if (!equipmentData.equiName || !equipmentData.equiCategory || !equipmentData.equiStatus) {
        console.error("All fields are required.");
        alert("Please fill out all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipmentData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);
        alert("Equipment added successfully!");

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to add equipment. Please try again.");
    }
});

