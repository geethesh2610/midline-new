// Navbar code start
const mobButton = document.querySelector("#nav-btn");
const mobNav = document.querySelector("#mobNav");
const mobProdBtn = document.querySelector("#mob-products");
const mobProdList = document.querySelector("#mob-products-list");
const deskProdBtn = document.querySelector("#desktop-prod-button");
const deskProd = document.querySelector("#desktop-prod");
const body = document.querySelector("body");

if (mobButton) {
    mobButton.addEventListener("click", function () {
        if (mobNav.classList.contains("-translate-y-full")) {
            mobNav.classList.remove("-translate-y-full");
            body.classList.add("overflow-hidden");
            return;
        }
        mobNav.classList.add("-translate-y-full");
        body.classList.remove("overflow-hidden");
    });
}

if (mobProdBtn) {
    mobProdBtn.addEventListener("click", function () {
        if (mobProdList.classList.contains("h-0", "overflow-hidden")) {
            mobProdList.classList.remove("h-0", "overflow-hidden");
            return;
        }
        mobProdList.classList.add("h-0", "overflow-hidden");
    });
}

if (deskProdBtn) {
    deskProdBtn.addEventListener("click", function () {
        console.log("sd");
        if (deskProd.classList.contains("translate-y-3")) {
            deskProd.classList.remove("translate-y-3", "opacity-0", "pointer-events-none");
            return;
        }
        deskProd.classList.add("translate-y-3", "opacity-0", "pointer-events-none");
    });
}

// Navbar code end
