//Topnav
function topnav() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className = " responsive";
    } else {
        x.className = "topnav";
    }
}

//Tickets
function ticket() {
    alert("Vstupenky na tento zápas jsou již vyprodané")
}