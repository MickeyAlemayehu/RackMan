const trainerID = document.getElementById("trainerID");
const addButton = document.getElementById("addButton");

addButton.onclick = async function () {
    try {
        const response = await fetch(`http://localhost:8080/api/trainer/${trainerID.value}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        localStorage.setItem("trainerData", JSON.stringify(data));

        window.location.replace("editTrainerForm.html");
    } catch (error) {
        console.error("Error fetching trainer data:", error.message);
        alert("Failed to fetch trainer data. Please try again.");
    }
};