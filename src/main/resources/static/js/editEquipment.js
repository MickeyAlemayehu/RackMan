const equID = document.getElementById("equID");
const addButton = document.getElementById("addButton");

addButton.onclick = async function () {
    try {
        const response = await fetch(`http://localhost:8080/api/equipment/${equID.value}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        localStorage.setItem("equipmentData", JSON.stringify(data));

        window.location.replace("editEquipmentForm.html");
    } catch (error) {
        console.error("Error fetching equipment data:", error.message);
        alert("Failed to fetch class data. Please try again.");
    }
};