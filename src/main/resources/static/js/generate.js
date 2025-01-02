document.addEventListener("DOMContentLoaded", () => {
    // Fetch data for all tables
    fetchData('equipment', '#equipmentTable');
    fetchData('trainer', '#trainerTable');
    fetchData('member', '#memberTable');
    fetchData('classes', '#classTable');
});

// Function to fetch data and populate the table
async function fetchData(table, tableId) {
    try {
        const response = await fetch(`http://localhost:8080/api/${table}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${table} data`);
        }

        const data = await response.json();
        const tableBody = document.querySelector(`${tableId} tbody`);
        tableBody.innerHTML = ''; // Clear any previous data

        // Iterate through data and create rows
        data.forEach(row => {
            const tr = document.createElement('tr');

            // Create table cells dynamically for each row's values
            Object.entries(row).forEach(([key, value]) => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });

            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error(`Error fetching ${table} data:`, error);
    }

}
