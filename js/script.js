function showbest2() {
    document.getElementById("best-sellers-1").style.display = "none";
    document.getElementById("best-sellers-2").style.display = "flex";
    document.getElementById("first-slider").style.backgroundColor = "grey";
    document.getElementById("second-slider").style.backgroundColor = "white";
};

function showbest1() {
    document.getElementById("best-sellers-2").style.display = "none";
    document.getElementById("best-sellers-1").style.display = "flex";
    document.getElementById("first-slider").style.backgroundColor = "white";
    document.getElementById("second-slider").style.backgroundColor = "grey";
};