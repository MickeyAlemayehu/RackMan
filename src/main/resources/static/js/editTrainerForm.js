const trainerName = document.getElementById("trainerName");
const trainerID = document.getElementById("trainerID");
const trainerAge = document.getElementById("trainerAge");
const trainerPhone = document.getElementById("trainerPhone");
const trainerAddress = document.getElementById("trainerAddress");
const classID = document.getElementById("classID");
const addButton = document.getElementById("addButton");

const trainerData = JSON.parse(localStorage.getItem("trainerData"));

trainerName.value = `${trainerData.trainerName}`;
trainerAge.value = `${trainerData.trainerAge}`;
trainerPhone.value = `${trainerData.trainerPhone}`;
trainerAddress.value = `${trainerData.trainerAddress}`;
classID.value = `${trainerData.classID}`;

console.log(trainerData);


addButton.addEventListener("click", async function (event) {
    event.preventDefault();

    // Construct the trainer data object
    const trainer = {
        trainerID: trainerData.trainerID,
        trainerName: trainerName.value.trim(),
        trainerAge: trainerAge.value.trim(),
        trainerPhone: trainerPhone.value.trim(),
        trainerAddress: trainerAddress.value.trim(),
        classID: classID.value.trim(),
    };

    // Validate required fields
    if (
        !trainer.trainerName ||
        !trainer.trainerAge ||
        !trainer.trainerPhone ||
        !trainer.trainerAddress ||
        !trainer.classID
    ) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate age
    if (isNaN(trainer.trainerAge) || trainer.trainerAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(trainer.trainerPhone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate class ID
    if (isNaN(trainer.classID) || trainer.classID <= 0) {
        alert("Please enter a valid class ID.");
        return;
    }

    try {
        // Send the PUT request to the backend
        const response = await fetch(`http://localhost:8080/api/trainer/${trainer.trainerID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trainer),
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
        alert("Trainer updated successfully!");
        console.log("Success:", result);

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to update trainer. Please try again.");
    }
});
