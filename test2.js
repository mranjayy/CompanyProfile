// Latihan: Kalkulator Sederhana
// Fungsi untuk menjumlahkan dua angka
function tambah(a, b) {
    return a + b;
}

// Fungsi untuk mengurangi dua angka
function kurang(a, b) {
    return a - b;
}

// Fungsi untuk mengalikan dua angka
function kali(a, b) {
    return a * b;
}

// Fungsi untuk membagi dua angka
function bagi(a, b) {
    if (b === 0) {
        return 'Pembagi tidak boleh 0!';
    }
    return a / b;
}

// Contoh penggunaan
let num1 = 10;
let num2 = 5;

console.log(`Tambah: ${tambah(num1, num2)}`);
console.log(`Kurang: ${kurang(num1, num2)}`);
console.log(`Kali: ${kali(num1, num2)}`);
console.log(`Bagi: ${bagi(num1, num2)}`);
