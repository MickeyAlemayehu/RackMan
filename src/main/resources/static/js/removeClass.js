const addButton = document.getElementById("addButton");
const classID = document.getElementById("classID");

addButton.addEventListener("click", async function () {
    // Ensure classID is not empty before proceeding
    if (!classID.value) {
        alert("Please provide a valid class ID.");
        return;
    }

    try {
        // Send DELETE request to backend
        const response = await fetch(`http://localhost:8080/api/classes/${classID.value}`, {
            method: "DELETE", // HTTP method for deletion
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Handle the response
        if (response.ok) {
            // Successful deletion
            const result = await response.json();
            alert("Class deleted successfully!");
            console.log("Deleted:", result);
        } else {
            // Handle error response
            let errorMessage = "An error occurred while deleting the class.";
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
        alert("Failed to delete class. Please try again.");
    }
});
