function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Admin" && password == "1234"){
    window.location = "index.html";
    return false;
    }
    else{
    alert("Tài khoản hoặc mật khẩu không đúng!");
    }
    }