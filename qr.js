
 

document.addEventListener('DOMContentLoaded', function() {
    let imgBox = document.getElementById("imgBox");
    let qrImg = document.getElementById("qrImg");
    let qrText = document.getElementById("qrText");
    let button = document.getElementById("qrButton");

    function generateQR() {
        const inputValue = qrText.value;
        if (inputValue.trim() === '') {
            alert('Please enter some text or URL to generate a QR code.');
            return;
        }
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }

    button.addEventListener('click', function() {
        console.log("Button clicked");
        generateQR();
    });
});
