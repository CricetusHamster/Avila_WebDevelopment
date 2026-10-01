function submit(){
    let name = document.getElementById("name").value;
    let idNumber = document.getElementById("idNumber").value;
    let gradeAndSection = document.getElementById("gradeAndSection").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    document.getElementById("studentDetails").innerHTML = "<b>Student Details:</b><br>"  +
        "<br>Name: " + name +
        "<br>Student ID:    " + idNumber +
        "<br>Grade and section: " + gradeAndSection +
        "<br>Age: " + age +
        "<br>Email " + email;
}