let selectedDuration = "";
let selectedPrice = "";

function showPopup(duration, price) {
    selectedDuration = duration;
    selectedPrice = price;

    const popupOverlay = document.getElementById("popupOverlay");
    const popupText = document.getElementById("popupText");

    popupText.textContent = `Yakin kamu memilih durasi ${duration} dengan harga ${price}?`;
    popupOverlay.style.display = "flex";

    // Tombol Ya, saya setuju → hanya buka Sociabuzz di tab baru
    document.getElementById("btnYes").onclick = function () {
        window.open("https://sociabuzz.com/iqbaldwiansyah/support", "_blank");
        closePopup();
    };
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
