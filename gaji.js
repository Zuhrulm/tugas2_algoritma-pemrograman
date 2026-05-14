// ======================================
// PROGRAM MENGHITUNG GAJI KARYAWAN
// ======================================

const prompt = require("prompt-sync")();

// Input
let golongan = prompt("Masukkan Golongan Karyawan (A/B/C): ");
let jamLembur = parseInt(prompt("Masukkan Jumlah Jam Lembur: "));

// Variabel
let gajiPokok = 0;
let persenLembur = 0;
let gajiLembur = 0;
let totalPenghasilan = 0;

// Menentukan gaji pokok
if (golongan == "A" || golongan == "a") {
    gajiPokok = 5000000;
}
else if (golongan == "B" || golongan == "b") {
    gajiPokok = 6500000;
}
else if (golongan == "C" || golongan == "c") {
    gajiPokok = 9500000;
}
else {
    console.log("Golongan tidak valid!");
}

// Menentukan persen lembur
if (jamLembur == 1) {
    persenLembur = 0.30;
}
else if (jamLembur == 2) {
    persenLembur = 0.32;
}
else if (jamLembur == 3) {
    persenLembur = 0.34;
}
else if (jamLembur == 4) {
    persenLembur = 0.36;
}
else if (jamLembur >= 5) {
    persenLembur = 0.38;
}
else {
    persenLembur = 0;
}

// Perhitungan
gajiLembur = gajiPokok * persenLembur;
totalPenghasilan = gajiPokok + gajiLembur;

// Output
console.log("\n========== HASIL PERHITUNGAN ==========");
console.log("Golongan Karyawan : ", golongan.toUpperCase());
console.log("Gaji Pokok        : Rp.", gajiPokok);
console.log("Gaji Lembur       : Rp.", gajiLembur);
console.log("Total Penghasilan : Rp.", totalPenghasilan);
console.log("=======================================");
