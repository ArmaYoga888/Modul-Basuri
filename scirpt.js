document.addEventListener("DOMContentLoaded", function () {
    let currentNumber = 0;

const songs = {
    1: { name: "Sabodo Teuing", file: "SOUND 1.mp3" },
    2: { name: "Prahu Layar", file: "SOUND 2.mp3" },
    3: { name: "Taman Curug", file: "SOUND 3.mp3" },
};

    // Ambil elemen
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
        currentNumberDisplay.textContent = currentNumber;
        songNameDisplay.textContent = songs[currentNumber].name;
        audioSource.src = songs[currentNumber].file;
        audioPlayer.load();
    }

    // Navigasi nomor
    previousBtn.onclick = function () {
        if (currentNumber > 0) {
            currentNumber--;
            updateScreen();
        }
    };

    nextBtn.onclick = function () {
        if (currentNumber < Object.keys(songs).length - 1) {
            currentNumber++;
            updateScreen();
        }
    };

    // Play & Stop Musik
    playBtn.onclick = function () {
        if (songs[currentNumber].file) {
            audioPlayer.play();
        }
    };

    stopBtn.onclick = function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    };

    // Inisialisasi tampilan awal
    updateScreen();
});