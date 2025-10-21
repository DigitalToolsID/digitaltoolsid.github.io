let currentInput = document.getElementById('display').value;

// Fungsi untuk menambahkan angka/operator ke layar
function appendToDisplay(value) {
    // Jika layar hanya menampilkan '0' dan pengguna memasukkan angka/operator (bukan desimal), ganti '0'
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = currentInput;
}

// Fungsi untuk menghapus layar (tombol C)
function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}

// Fungsi untuk menghapus karakter terakhir (tombol DEL)
function deleteLast() {
    currentInput = currentInput.slice(0, -1); // Menghapus karakter terakhir
    if (currentInput === '') {
        currentInput = '0'; // Jika semua terhapus, kembalikan ke '0'
    }
    document.getElementById('display').value = currentInput;
}

// Fungsi untuk menghitung hasil (tombol =)
function calculate() {
    try {
        // 'eval()' adalah cara cepat untuk menghitung string matematika.
        let result = eval(currentInput); 
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        // Menangani kesalahan perhitungan (misal: sintaks salah atau pembagian dengan nol)
        document.getElementById('display').value = 'Error';
        currentInput = '0';
    }
}