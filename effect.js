// the viewPassword function allows the password to be seen
function viewPassword() {
    var temp = document.getElementById("password") 
    if (temp.type === "password") { 
        temp.type = "text"; 
    } 
    else { 
        temp.type = "password"; 
    } 
    console.log("Done")
  } 