function rate(rating) {
    for (let i = 1; i < 6; i++) {
        document.getElementById("paw" + i).classList.remove("rated");
    }
    for (let i = 1; i < rating + 1; i++) {
        document.getElementById("paw" + i).classList.add("rated");
    }
}

window.addEventListener("click", function(e) {
    if (document.getElementById("rating").contains(e.target)) {
        sumRates(rating);
    } else {
        for (let i = 1; i < 6; i++) {
            document.getElementById("paw" + i).classList.remove("rated");
        }
    }
});