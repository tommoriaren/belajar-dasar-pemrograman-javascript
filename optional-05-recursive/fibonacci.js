// fibonacci.js
/**
 * Menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi.
 * F(n) = F(n-1) + F(n-2)
 * Kasus dasar: F(0)=0, F(1)=1
 *
 * Catatan: Rekursi di sini digunakan untuk membangun deret (array),
 * menggunakan parameter array default sebagai accumulator.
 *
 * @param {number} n - Elemen ke-n yang ingin dicapai (indeks maksimum).
 * @param {number[]} [arr = [0, 1]] - Array penampung deret yang sudah ada (accumulator).
 * @returns {number[]} Deret Fibonacci hingga elemen ke-n.
 */
function fibonacci(n, arr = [0, 1]) {
  // Kasus Khusus (F(0) dan F(1))
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  
  // Kasus Dasar: Deret sudah mencapai panjang yang diinginkan (n+1 elemen).
  if (arr.length > n) {
    return arr;
  }

  // Hitung nilai Fibonacci berikutnya
  const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
  
  // Tambahkan nilai berikutnya ke deret
  arr.push(nextFib);
  
  // Langkah Rekursif: Panggil fungsi untuk menghitung elemen berikutnya
  return fibonacci(n, arr);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;