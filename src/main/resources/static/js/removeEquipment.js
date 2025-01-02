const addButton = document.getElementById("addButton");
const equID = document.getElementById("equID");

addButton.addEventListener("click", async function () {
    if (!equID.value) {
        alert("Please provide a valid Equipment ID.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/equipment/${equID.value}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {

            const result = await response.json();
            alert("Equipment deleted successfully!");
            console.log("Deleted:", result);
        } else {
            let errorMessage = "An error occurred while deleting the equipment.";
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (error) {
                console.error("Failed to parse error response.");
            }
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to delete Equipment. Please try again.");
    }
});
