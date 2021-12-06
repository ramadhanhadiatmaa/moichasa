function validate(){

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user == "moi" && pass == "desember"){
        
        window.location = "home.html"; // Redirecting to other page.
        sessionStorage.setItem('user', user);
        console.log(sessionStorage.getItem('user'));
        return false;

    }else{

        alert("Hayooo salah, Siapa kamu?");
        return false;
        
    }
}