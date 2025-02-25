let currentNumber = 0; // Tambahkan ini agar tidak error

const songs = {
    0: { name: "Pilih Nomor", file: "" },
    1: { name: "Sabodo Teuing", file: "audio/SOUND 1.mp3" },
    2: { name: "Prahu Layar", file: "audio/SOUND 2.mp3" },
    3: { name: "Taman Curug", file: "audio/SOUND 3.mp3" },
    4: { name: "The Final Countdown", file: "audio/SOUND 4.mp3" },
    5: { name: "Di Tinggal Rabi", file: "audio/SOUND 5.mp3" },
    6: { name: "Tembak Tembak Dor", file: "audio/SOUND 6.mp3" },
    7: { name: "Garam Dan Madu", file: "audio/SOUND 7.mp3" },
    8: { name: "Apt Thailand", file: "audio/SOUND 8.mp3" },
    9: { name: "Dj Slow Santuy", file: "audio/SOUND 9.mp3" },
    10: { name: "Suci Di Dalam Debu", file: "audio/SOUND 10.mp3" }
};

// Elemen DOM
const currentNumberDisplay = document.getElementById("currentNumber");
const songNameDisplay = document.getElementById("songName");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");

// Update layar
function updateScreen() {
    currentNumberDisplay.textContent = currentNumber;
    songNameDisplay.textContent = songs[currentNumber].name;
    audioSource.src = songs[currentNumber].file;
    audioPlayer.load();
}

// Navigasi nomor
previousBtn.addEventListener("click", () => {
    if (currentNumber > 0) {
        currentNumber--;
        updateScreen();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentNumber < 10) { // Ubah sesuai jumlah lagu
        currentNumber++;
        updateScreen();
    }
});

// Play & Stop Musik
playBtn.addEventListener("click", () => {
    if (songs[currentNumber].file) {
        audioPlayer.play();
    }
});

stopBtn.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Inisialisasi tampilan awal
updateScreen();