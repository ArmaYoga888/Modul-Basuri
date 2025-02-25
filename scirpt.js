let currentNumber = 0; // Mulai dari 0

const songs = {
    0: { name: "Pilih Nomor", file: "" },
    1: { name: "Sabodo Teuing", file: "SOUND 1.mp3" },
    2: { name: "Prahu Layar", file: "SOUND 2.mp3" },
    3: { name: "Taman Curug", file: "SOUND 3.mp3" },
    4: { name: "The Final Countdown", file: "SOUND 4.mp3" },
    5: { name: "Di Tinggal Rabi", file: "SOUND 5.mp3" },
    6: { name: "Tembak Tembak Dor", file: "SOUND 6.mp3" },
    7: { name: "Garam Dan Madu", file: "SOUND 7.mp3" },
    8: { name: "Apt Thailand", file: "SOUND 8.mp3" },
    9: { name: "Dj Slow Santuy", file: "SOUND 9.mp3" },
    10: { name: "Suci Di Dalam Debu", file: "SOUND 10.mp3" },
    11: { name: "Pecak Welut", file: "SOUND 11.mp3" },
    12: { name: "Conan Rock", file: "SOUND 12.mp3" },
    13: { name: "Anugrah", file: "SOUND 13.mp3" },
    14: { name: "Lagu 14", file: "song14.mp3" },
    15: { name: "Lagu 15", file: "song15.mp3" },
    16: { name: "Lagu 16", file: "song16.mp3" },
    17: { name: "Lagu 17", file: "song17.mp3" },
    18: { name: "Lagu 18", file: "song18.mp3" },
    19: { name: "Lagu 19", file: "song19.mp3" },
    20: { name: "Lagu 20", file: "song20.mp3" },
    21: { name: "Lagu 21", file: "song21.mp3" },
    22: { name: "Lagu 22", file: "song22.mp3" },
    23: { name: "Lagu 23", file: "song23.mp3" },
    24: { name: "Lagu 24", file: "song24.mp3" },
    25: { name: "Lagu 25", file: "song25.mp3" },
    26: { name: "Lagu 26", file: "song26.mp3" },
    27: { name: "Lagu 27", file: "song27.mp3" },
    28: { name: "Lagu 28", file: "song28.mp3" },
    29: { name: "Lagu 29", file: "song29.mp3" },
    30: { name: "Lagu 30", file: "song30.mp3" },
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
    if (currentNumber < 30) {
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