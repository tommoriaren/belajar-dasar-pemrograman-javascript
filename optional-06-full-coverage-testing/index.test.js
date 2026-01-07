// index.test.js

import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Mengimpor fungsi default sum

// Blok pengujian utama untuk fungsi sum()
test('Pengujian Menyeluruh (Full Coverage) untuk fungsi sum()', (t) => {

  // --- 1. Pengujian Kasus Sukses (Positif dan Valid) ---
  t.test('harus mengembalikan hasil penjumlahan yang benar untuk bilangan positif', () => {
    // 1.1 Penjumlahan bilangan bulat
    assert.strictEqual(sum(5, 3), 8, 'Gagal: 5 + 3 harusnya 8');
    
    // 1.2 Penjumlahan dengan nol
    assert.strictEqual(sum(10, 0), 10, 'Gagal: 10 + 0 harusnya 10');
    
    // 1.3 Penjumlahan bilangan pecahan (floating point)
    assert.strictEqual(sum(1.5, 2.5), 4, 'Gagal: 1.5 + 2.5 harusnya 4');
  });

  // --- 2. Pengujian Validasi Tipe Data (Gagal Jika Bukan Number) ---
  t.test('harus mengembalikan 0 jika salah satu atau kedua argumen bukan number', () => {
    // 2.1 Argumen pertama bukan number
    assert.strictEqual(sum('5', 3), 0, 'Gagal: Argumen pertama string harus mengembalikan 0');
    
    // 2.2 Argumen kedua bukan number
    assert.strictEqual(sum(5, '3'), 0, 'Gagal: Argumen kedua string harus mengembalikan 0');
    
    // 2.3 Kedua argumen bukan number
    assert.strictEqual(sum('a', 'b'), 0, 'Gagal: Kedua argumen string harus mengembalikan 0');
    
    // 2.4 Argumen berupa null (tipe object)
    assert.strictEqual(sum(5, null), 0, 'Gagal: null harus mengembalikan 0');
    
    // 2.5 Argumen berupa undefined
    assert.strictEqual(sum(undefined, 5), 0, 'Gagal: undefined harus mengembalikan 0');
  });
  
  // --- 3. Pengujian Validasi Nilai Negatif (Gagal Jika Ada yang Negatif) ---
  t.test('harus mengembalikan 0 jika salah satu atau kedua argumen adalah bilangan negatif', () => {
    // 3.1 Argumen pertama negatif
    assert.strictEqual(sum(-5, 3), 0, 'Gagal: Argumen pertama negatif harus mengembalikan 0');
    
    // 3.2 Argumen kedua negatif
    assert.strictEqual(sum(5, -3), 0, 'Gagal: Argumen kedua negatif harus mengembalikan 0');
    
    // 3.3 Kedua argumen negatif
    assert.strictEqual(sum(-5, -3), 0, 'Gagal: Kedua argumen negatif harus mengembalikan 0');
    
    // 3.4 Penjumlahan pecahan negatif
    assert.strictEqual(sum(10, -0.5), 0, 'Gagal: Pecahan negatif harus mengembalikan 0');
  });
});