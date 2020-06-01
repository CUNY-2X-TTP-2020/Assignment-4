let radius_b = document.getElementById("calculate_radius");
radius_b.addEventListener("click", get_volume);

function get_volume() {
    let radius = document.getElementById("radius").value;
    let message = document.getElementById("msg");
    console.log(typeof(radius));
    if (radius === "") {
        message.innerText = "Please enter the radius first.";
    } else {
        let r = parseInt(radius);
        let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        message.innerText = `The volume of the sphere is ${volume}`
    }
}