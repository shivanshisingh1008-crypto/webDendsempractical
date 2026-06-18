function calculateSI() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;

    if (p === "" || r === "" || t === "") {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML =
        "Simple Interest =  " + si;
}