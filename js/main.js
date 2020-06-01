let sub_b = document.getElementById("submit_button");
sub_b.addEventListener("click", submit_form);


function submit_form() {
    let pword = document.getElementById("passwordId").value;
    let message = document.getElementById("msg");
    let uname = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let enter_msg = document.getElementById("Outermsg");
    if (pword == "" || uname == "" || email == "") {
        message.innerText = "Form is not complete. Cannot proceed further.";
    } else if (pword !== "12345678") {
        alert("Password is incorrect!");
    } else if (pword === "12345678") {
        var form = document.getElementById("inner");
        form.remove();
        enter_msg.innerText = `${uname}, Welcome To This Place`;
        let img = document.getElementById("okayImage");
        img.src = "public/okay.gif";
    }
}