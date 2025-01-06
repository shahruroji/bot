document.getElementById("sendButton").addEventListener("click", handleUserInput);
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleUserInput();
});

window.onload = function () {
    addMessage("bot", "Hai! Ada yang bisa saya bantu mengenai pertanyaan seputar SIM?");
};

let conversationEnded = false;

function handleUserInput() {
    if (conversationEnded) return; // Jangan tanggapi jika percakapan sudah selesai

    const userInput = document.getElementById("userInput").value.trim();
    if (userInput) {
        addMessage("user", userInput);
        const botResponse = getBotResponse(userInput);
        setTimeout(() => addMessage("bot", botResponse), 500);
        document.getElementById("userInput").value = "";
    }
}

function addMessage(sender, text) {
    const messagesContainer = document.getElementById("messages");
    const message = document.createElement("div");
    message.className = `message ${sender}-message`;
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase(); // Convert input to lowercase

    if (input.includes("terima kasih") || input.includes("terimakasih")) {
        conversationEnded = true;
        return "Terima kasih sudah menggunakan layanan kami!";
    }
    
    // Pertanyaan dan jawaban
    if (input.includes("syarat") && input.includes("membuat sim")) {
        return "Syarat membuat SIM: KTP, usia minimal sesuai jenis SIM, lulus tes kesehatan, lulus tes teori, dan lulus tes praktek.";
    } else if (input.includes("biaya") && input.includes("sim")) {
        return "Biaya pembuatan SIM: SIM A Rp 120.000, SIM C Rp 100.000 (belum termasuk biaya tes kesehatan).";
    } else if (input.includes("jam buka") && input.includes("sim")) {
        return "Jam buka pelayanan SIM biasanya pukul 08.00 - 15.00 pada hari kerja.";
    } else if (input.includes("usia") && input.includes("sim")) {
        return "Usia minimal untuk membuat SIM: SIM A 17 tahun, SIM C 17 tahun, SIM B1 20 tahun.";
    } else if (input.includes("dokumen") && input.includes("sim")) {
        return "Dokumen yang diperlukan: KTP asli, fotokopi KTP, dan pas foto.";
    } else if (input.includes("tes teori")) {
        return "Tes teori meliputi pertanyaan tentang rambu lalu lintas, peraturan jalan, dan etika berkendara.";
    } else if (input.includes("tes praktek")) {
        return "Tes praktek meliputi uji mengemudi seperti zigzag, angka 8, dan parkir sesuai peraturan.";
    } else if (input.includes("perpanjang sim")) {
        return "Untuk perpanjang SIM: KTP asli, fotokopi KTP, SIM lama, dan tes kesehatan.";
    } else if (input.includes("bikin sim") && input.includes("online")) {
        return "Anda dapat membuat SIM online melalui website resmi Korlantas Polri di sim.korlantas.polri.go.id.";
    } else if (input.includes("hilang") && input.includes("sim")) {
        return "Jika SIM hilang: buat laporan kehilangan di kepolisian, siapkan KTP asli, fotokopi KTP, dan surat kehilangan.";
    } else if (input.includes("sim mati")) {
        return "Jika SIM sudah mati, Anda harus membuat SIM baru dengan proses yang sama seperti pembuatan awal.";
    } else {
        return "Maaf, saya tidak mengerti pertanyaan Anda. Coba gunakan kata kunci seperti 'syarat membuat SIM', 'biaya SIM', atau 'perpanjang SIM'.";
    }
}
