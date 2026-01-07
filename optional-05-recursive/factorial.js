// factorial.js
/**
 * Menghitung faktorial dari sebuah bilangan bulat positif menggunakan rekursi.
 * Faktorial n! = n * (n-1)!
 * Kasus dasar: 0! = 1
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} Hasil faktorial.
 */
function factorial(n) {
  // Kasus Dasar (Base Case): Jika n adalah 0 atau 1, faktorialnya adalah 1.
  if (n === 0 || n === 1) {
    return 1;
  }

  // Langkah Rekursif: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;