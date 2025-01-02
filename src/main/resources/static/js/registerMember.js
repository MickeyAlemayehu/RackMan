const memberName = document.getElementById("memberName");
const  memberAge = document.getElementById("memberAge");
const memberPhone = document.getElementById("memberPhone");
const memberAddress = document.getElementById("memberAddress");
const membershipPlan = document.getElementById("membershipPlan");
const expiryDate = document.getElementById("expiryDate");
const classID = document.getElementById("classID");
const addButton = document.getElementById("addButton");


addButton.addEventListener("click", async function (event) {
    event.preventDefault(); 

    const memberData = {
        memberName: memberName.value.trim(),
        memberAge: memberAge.value.trim(),
        memberPhone: memberPhone.value.trim(),
        memberAddress: memberAddress.value.trim(),
        membershipPlan: membershipPlan.value.trim(),
        expiryDate: expiryDate.value.trim(),
        classID: classID.value.trim()
    };

    if (
        !memberData.memberName ||
        !memberData.memberAge ||
        !memberData.memberPhone ||
        !memberData.memberAddress ||
        !memberData.membershipPlan ||
        !memberData.expiryDate ||
        !memberData.classID
    ) {
        console.error("All fields are required.");
        alert("Please fill out all fields.");
        return;
    }

    if (isNaN(memberData.memberAge) || memberData.memberAge <= 0) {
        console.error("Invalid age value.");
        alert("Please enter a valid age.");
        return;
    }

    if (!/^\d{10}$/.test(memberData.memberPhone)) {
        console.error("Invalid phone number.");
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (isNaN(memberData.classID) || memberData.classID <= 0) {
        console.error("Invalid class ID.");
        alert("Please enter a valid class ID.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/member", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(memberData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Success:", result);
        alert("Member added successfully!");

    } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to add member. Please try again.");
    }
});
