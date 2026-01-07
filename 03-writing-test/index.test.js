// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test Case 1: Penjumlahan Bilangan Positif
test('harus mengembalikan hasil yang benar untuk dua bilangan positif', () => {
  assert.strictEqual(sum(5, 3), 8);
});

// Test Case 2: Penjumlahan dengan Angka Nol
test('harus mengembalikan angka yang sama saat dijumlahkan dengan nol', () => {
  assert.strictEqual(sum(10, 0), 10);
});

// Test Case 3: Penjumlahan Bilangan Negatif
test('harus mengembalikan hasil yang benar untuk dua bilangan negatif', () => {
  assert.strictEqual(sum(-7, -2), -9);
});

// Test Case 4: Penjumlahan Bilangan Positif dan Negatif
test('harus mengembalikan hasil yang benar untuk positif dan negatif', () => {
  assert.strictEqual(sum(15, -6), 9);
});

// Test Case 5: Penjumlahan Bilangan Pecahan (Floating-point)
test('harus mengembalikan hasil yang benar untuk bilangan pecahan', () => {
  const result = sum(0.1, 0.2);
  assert.strictEqual(result.toFixed(1), '0.3');
});

// Test Case 6: Penjumlahan String (Concatenation)
test('harus melakukan penggabungan (concatenation) string', () => {
  assert.strictEqual(sum('Hello', ' World'), 'Hello World');
});

// Test Case 7: Penjumlahan Angka dan String (Koersi Tipe)
test('harus mengonversi angka menjadi string dan menggabungkannya', () => {
  assert.strictEqual(sum(5, ' buku'), '5 buku');
});
