const memberID = document.getElementById("memberID");
const addButton = document.getElementById("addButton");

addButton.onclick = async function () {
    try {
        const response = await fetch(`http://localhost:8080/api/member/${memberID.value}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        localStorage.setItem("memberData", JSON.stringify(data));

        window.location.replace("editMemberForm.html");
    } catch (error) {
        console.error("Error fetching member data:", error.message);
        alert("Failed to fetch member data. Please try again.");
    }
};