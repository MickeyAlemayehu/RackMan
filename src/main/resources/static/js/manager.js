document.addEventListener("DOMContentLoaded", async function () {
    const managerName = document.getElementById("managerName");
    const managerAge = document.getElementById("managerAge");
    const managerPhone = document.getElementById("managerPhone");
    const mamangerAddress = document.getElementById("mamangerAddress");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    try {
        // Fetch the current manager profile
        const response = await fetch("http://localhost:8080/api/manager", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const managerData = await response.json();

            
            managerName.value = managerData.managerName || "";
            managerAge.value = managerData.managerAge || "";
            managerPhone.value = managerData.managerPhone || "";
            mamangerAddress.value = managerData.mamangerAddress || "";
            username.value = managerData.username || "";
            password.value = ""; 

        } else {
            const errorData = await response.json();
            alert = `Error: ${errorData.message || "Failed to load profile data."}`;
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        responseMessage.innerText = "Error: Unable to load profile data.";
    }
});

document.getElementById("updateManagerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const managerName = document.getElementById("managerName").value.trim();
    const managerEmail = document.getElementById("managerEmail").value.trim();
    const managerPhone = document.getElementById("managerPhone").value.trim();
    const managerPassword = document.getElementById("managerPassword").value.trim();


    if (!managerName || !managerEmail || !managerPhone || !managerPassword) {
        alert("Please fill out all fields.");
        return;
    }


    if (!/^\d{10}$/.test(managerPhone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const managerData = {
        managerName: managerName,
        managerAge: managerAge,
        managerPhone: managerPhone,
        mamangerAddress: mamangerAddress,
        username: username,
        password: password,
    };

    try {
        const response = await fetch("http://localhost:8080/api/manager", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(managerData),
        });

        if (response.ok) {
            const result = await response.json();
            alert("Profile updated successfully!");
            console.log("Success:", result);
        } else {
            let errorMessage = "An error occurred while updating the profile.";
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to update profile. Please try again.");
    }
});
