function validateLogin() {
    const Validusername = "luffy";
    const Validpassword = "zoro";

    const inputusername = document.getElementById('username').value;
    const inputpassword = document.getElementById('password').value;

    if (Validusername === inputusername && Validpassword === inputpassword) {
        window.location.href ="product.html";
    } else {
        alert("Enter correct values, baka.");
    }

    return false; 
}