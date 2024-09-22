function selfDestruct() {
    let confirmation = confirm("Are you sure? This action is irreversible!");

    if (!confirmation) {
        alert("Try Harder.");
        return;
    }

    let countdown = 10;
    let countdownElement = document.getElementById('countdown');
    let interval = setInterval(() => {
        countdownElement.textContent = `Account deletion in... ${countdown}`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            document.getElementById("finalMessage").textContent = "BOOM! 💥 Your account has been deleted.";
            document.body.style.backgroundColor = "black";
            document.body.style.color = "red";
            document.getElementById("destructBtn").remove();
        }
    }, 1000);
}
