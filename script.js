
function generateQR() {
    const text = document.getElementById("qrText").value.trim();
    const output = document.getElementById("qrOutput");
    const downloadBtn = document.getElementById("downloadBtn");

    if (text === "") {
        alert("Please enter some text or URL!");
        return;
    }

    output.innerHTML = "";

    new QRCode(output, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.disabled = false;
}

function downloadQR() {
    const output = document.getElementById("qrOutput");
    const canvas = output.querySelector("canvas");

    if (!canvas) {
        alert("Please generate a QR code first!");
        return;
    }

    const link = document.createElement("a");

    link.href = canvas.toDataURL("image/png");
    link.download = "my-qr-code.png";

    link.click();
}
