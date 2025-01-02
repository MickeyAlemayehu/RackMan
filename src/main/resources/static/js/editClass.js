const classID = document.getElementById("classID");
const addButton = document.getElementById("addButton");

addButton.onclick = async function () {
    try {
        const response = await fetch(`http://localhost:8080/api/classes/${classID.value}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        localStorage.setItem("classData", JSON.stringify(data));

        window.location.replace("editClassForm.html");
    } catch (error) {
        console.error("Error fetching class data:", error.message);
        alert("Failed to fetch class data. Please try again.");
    }
};