const memberName = document.getElementById("memberName");
const memberID = document.getElementById("memberID");
const memberAge = document.getElementById("memberAge");
const memberPhone = document.getElementById("memberPhone");
const memberAddress = document.getElementById("memberAddress");
const membershipPlan = document.getElementById("membershipPlan");
const expiryDate = document.getElementById("expiryDate");
const classID = document.getElementById("classID");
const addButton = document.getElementById("addButton");

// Retrieve member data from localStorage
const storedMemberData = JSON.parse(localStorage.getItem("memberData"));
console.log(storedMemberData);

if (storedMemberData) {
    console.log('check');
    console.log("N" + memberName.value);
    memberName.value = `${storedMemberData.memberName}` || "";
    // memberID.value = `${storedMemberData.memberID}`;
    memberAge.value = `${storedMemberData.memberAge}` || "";
    memberPhone.value = `${storedMemberData.memberPhone}` || "";
    memberAddress.value = `${storedMemberData.memberAddress}` || "";
    membershipPlan.value = `${storedMemberData.membership_plan}` || "";
    expiryDate.value = `${storedMemberData.expiryDate}` || "";
    classID.value = `${storedMemberData.classID}` || "";
}

addButton.addEventListener("click", async function (event) {
    event.preventDefault();

    const memberData = {
         memberID: storedMemberData.memberID,
        memberName: memberName.value.trim(),
        memberAge: memberAge.value.trim(),
        memberPhone: memberPhone.value.trim(),
        memberAddress: memberAddress.value.trim(),
        membership_plan: membershipPlan.value.trim(),
        expiryDate: expiryDate.value.trim(),
        classID: classID.value.trim(),
    };

    // Validate required fields
    if (
        !memberData.memberName ||
        !memberData.memberAge ||
        !memberData.memberPhone ||
        !memberData.memberAddress ||
        !memberData.membership_plan ||
        !memberData.expiryDate ||
        !memberData.classID
    ) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate age
    if (isNaN(memberData.memberAge) || memberData.memberAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(memberData.memberPhone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate class ID
    if (isNaN(memberData.classID) || memberData.classID <= 0) {
        alert("Please enter a valid class ID.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/member/${storedMemberData.memberID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(memberData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'An error occurred.'}`);
            return;
        }

        const result = await response.json();
        alert("Member updated successfully!");
        console.log("Success:", result);
    } catch (error) {
        alert("Failed to update member. Please try again.");
        console.error("Error:", error.message);
    }
});
