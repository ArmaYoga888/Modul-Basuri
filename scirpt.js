const songs = {
    0: { name: "Pilih Nomor", file: "" },
    1: { name: "Sabodo Teuing", file: "SOUND 1.mp3" },
    2: { name: "Prahu Layar", file: "SOUND 2.mp3" },
    3: { name: "Taman Curug", file: "SOUND 3.mp3" },
    4: { name: "The Final Countdown", file: "SOUND 4.mp3" },
    5: { name: "Di Tinggal Rabi", file: "SOUND 5.mp3" }
};

let currentNumber = 0;

// Ambil elemen dari HTML
const currentNumberDisplay = document.getElementById("currentNumber");
const songNameDisplay = document.getElementById("songName");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");

// Update tampilan
function updateScreen() {
    currentNumberDisplay.textContent = currentNumber;
    songNameDisplay.textContent = songs[currentNumber].name;
    audioSource.src = songs[currentNumber].file;
    audioPlayer.load();
}

// Navigasi nomor
previousBtn.addEventListener("click", () => {
    if (currentNumber > 1) {
        currentNumber--;
        updateScreen();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentNumber < Object.keys(songs).length - 1) {
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