const trainerName = document.getElementById("trainerName");
const trainerAge = document.getElementById("trainerAge");
const trainerPhone = document.getElementById("trainerPhone");
const trainerAddress = document.getElementById("trainerAddress");
const classID = document.getElementById("classID");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", async function (event) {
    event.preventDefault();

    // Construct the trainer data object
    const trainerData = {
        trainerName: trainerName.value.trim(),
        trainerAge: trainerAge.value.trim(),
        trainerPhone: trainerPhone.value.trim(),
        trainerAddress: trainerAddress.value.trim(),
        classID: classID.value.trim(),
    };

    // Validate required fields
    if (
        !trainerData.trainerName ||
        !trainerData.trainerAge ||
        !trainerData.trainerPhone ||
        !trainerData.trainerAddress ||
        !trainerData.classID
    ) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate age
    if (isNaN(trainerData.trainerAge) || trainerData.trainerAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(trainerData.trainerPhone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate class ID
    if (isNaN(trainerData.classID) || trainerData.classID <= 0) {
        alert("Please enter a valid class ID.");
        return;
    }

    try {
        // Send the POST request to the backend
        const response = await fetch("http://localhost:8080/api/trainer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trainerData),
        });

        // Handle non-200 responses
        if (!response.ok) {
            let errorMessage = "An error occurred.";
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch {
                console.error("Failed to parse error response as JSON.");
            }
            alert(`Error: ${errorMessage}`);
            return;
        }

        // Success response
        const result = await response.json();
        alert("Trainer added successfully!");
        console.log("Success:", result);

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to add trainer. Please try again.");
    }
});
