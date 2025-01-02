const loginInput = document.getElementById("loginInput");
const loginPassword = document.getElementById("loginPassword");
const loginSubmit = document.getElementById("loginSubmit");
const addButton = document.getElementById("addButton");
const SearchEquID = document.getElementById("SearchEquID");



loginSubmit.onclick = async function (){
    try{
        const response = await fetch("http://localhost:8080/api/manager");
        const data = await response.json();
        if (loginInput.value == data.username && loginPassword.value == data.password){
            window.alert("Logged in successfully!");
            window.location.replace('Dashboard.html');
        }
        else{
            window.alert("Invalid Credentials\nTry again!!");
        }
    }
    catch(error){
        console.error(error);
    }
    
}