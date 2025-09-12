let selectedDuration = "";
let selectedPrice = "";

function showPopup(duration, price) {
    selectedDuration = duration;
    selectedPrice = price;

    const popupOverlay = document.getElementById("popupOverlay");
    const popupText = document.getElementById("popupText");

    popupText.textContent = `Yakin kamu memilih durasi ${duration} dengan harga ${price}?`;
    popupOverlay.style.display = "flex";

    // tombol Ya, saya setuju
    document.getElementById("btnYes").onclick = function () {
        // konversi harga "Rp20.000" jadi angka 20000
        let numericPrice = selectedPrice.replace(/[^\d]/g, "");
        window.location.href = `https://sociabuzz.com/iqbaldwiansyah/support?amount=${numericPrice}&message=Saya+ingin+membeli+${encodeURIComponent(selectedDuration)}`;
    };
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
