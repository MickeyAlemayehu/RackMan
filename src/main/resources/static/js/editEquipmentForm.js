const stored_equipmentData = JSON.parse(localStorage.getItem("equipmentData"));
const equiName = document.getElementById("equName");
const equiCategory = document.getElementById("equCategory");
const equiStatus = document.getElementById("equStatus");
const addButton = document.getElementById("addButton");

console.log(stored_equipmentData);

equiName.value = `${stored_equipmentData.equiName}`;
equiCategory.value = `${stored_equipmentData.equiCategory}`;
equiStatus.value = `${stored_equipmentData.equiStatus}`; 

addButton.addEventListener("click", async function (event) {
    event.preventDefault(); 

    const equipmentData = {
        equID: stored_equipmentData.equID, 
        equiName: equiName.value.trim(),
        equiCategory: equiCategory.value.trim(),
        equiStatus: equiStatus.value.trim(),
    };

    if (!equipmentData.equiName || !equipmentData.equiCategory || !equipmentData.equiStatus) {
        console.error("All fields are required.");
        alert("Please fill out all fields.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/equipment/${equipmentData.equID}`, {  
            method: "PUT",
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
        alert("Failed to update equipment. Please try again.");
    }
});
