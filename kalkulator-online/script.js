/*
======================================================
FINAL CLEAN JAVASCRIPT FOR SIMPLE CALCULATOR
Fixes: All button functions and adds copyResult()
======================================================
*/

// Mendapatkan elemen display
const display = document.getElementById('display');

// Variabel untuk menyimpan perhitungan
let currentInput = '0';
let operator = null;
let previousInput = null;

// Memastikan display selalu diperbarui
function updateDisplay() {
    display.value = currentInput;
}

// 1. Fungsi untuk menambahkan nilai ke display
function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// 2. Fungsi untuk menghapus display (C)
function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

// 3. Fungsi untuk menghapus karakter terakhir (DEL)
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// 4. Fungsi untuk melakukan perhitungan
function calculate() {
    try {
        // Menggunakan eval() untuk perhitungan sederhana
        // Catatan: Dalam proyek profesional, eval() dihindari karena risiko keamanan.
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = "Error";
    }
    updateDisplay();
}

// 5. FINAL FIX: Fungsi untuk menyalin hasil ke clipboard (COPY)
function copyResult() {
    // 1. Dapatkan elemen display
    const displayElement = document.getElementById('display');
    
    // 2. Buat elemen input sementara untuk menyalin teks
    const tempInput = document.createElement('input');
    
    // 3. Atur nilai input sementara dengan nilai display
    tempInput.value = displayElement.value;
    
    // 4. Tambahkan elemen input sementara ke body dokumen
    document.body.appendChild(tempInput);
    
    // 5. Pilih teks di dalamnya
    tempInput.select();
    
    // 6. Salin teks ke clipboard (Metode modern)
    document.execCommand('copy');
    
    // 7. Hapus elemen input sementara
    document.body.removeChild(tempInput);
    
    // Opsional: Beri tahu pengguna bahwa hasil telah disalin (dengan alert sederhana)
    alert("Result copied to clipboard!");
}


// Inisialisasi display saat halaman dimuat
updateDisplay();