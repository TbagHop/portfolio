(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Professional work: reveal only after the 18+ warning is acknowledged
(function () {
    const btn = document.getElementById("pro-work-show");
    if (!btn) return;
    btn.addEventListener("click", () => {
        document.getElementById("pro-work-gate").hidden = true;
        document.getElementById("pro-work-cards").hidden = false;
    });
})();
