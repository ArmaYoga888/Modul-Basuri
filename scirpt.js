document.addEventListener("DOMContentLoaded", function () {
    let currentNumber = 0;

    const songs = {
        0: { name: "Pilih Nomor", file: "" },
        1: { name: "Sabodo Teuing", file: "audio/SOUND 1.mp3" },
        2: { name: "Prahu Layar", file: "audio/SOUND 2.mp3" }
        // Tambahkan daftar lagu lainnya
    };

    // Ambil elemen tombol dan tampilan
    const currentNumberDisplay = document.getElementById("currentNumber");
    const songNameDisplay = document.getElementById("songName");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    const previousBtn = document.getElementById("previousBtn");
    const nextBtn = document.getElementById("nextBtn");
    const playBtn = document.getElementById("playBtn");
    const stopBtn = document.getElementById("stopBtn");

    // Fungsi update tampilan
    function updateScreen() {
        if (songs[currentNumber]) {
            currentNumberDisplay.textContent = currentNumber;
            songNameDisplay.textContent = songs[currentNumber].name;
            audioSource.src = songs[currentNumber].file;
            audioPlayer.load();
        }
    }

    // Navigasi nomor
    previousBtn.addEventListener("click", function () {
        if (currentNumber > 0) {
            currentNumber--;
            updateScreen();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentNumber < Object.keys(songs).length - 1) {
            currentNumber++;
            updateScreen();
        }
    });

    // Play & Stop Musik
    playBtn.addEventListener("click", function () {
        if (songs[currentNumber].file) {
            audioPlayer.play();
        }
    });

    stopBtn.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    // Inisialisasi tampilan awal
    updateScreen();
});