import Item from './Item.js';

/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = []; // Properti untuk menampung daftar item
  }

  /**
   * Menambahkan Item baru ke inventaris.
   * @param {Item} item - Objek Item yang akan ditambahkan.
   */
  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    } else {
      console.error('Hanya objek Item yang dapat ditambahkan.');
    }
  }

  /**
   * Menghapus Item dari inventaris berdasarkan ID.
   * @param {number} id - ID Item yang akan dihapus.
   */
  removeItem(id) {
    // Memfilter array items, hanya menyisakan item yang ID-nya TIDAK sama dengan ID yang dihapus
    this.items = this.items.filter(item => item.id !== id);
  }

  /**
   * Mengembalikan string daftar detail semua item dalam inventaris.
   * @returns {string} String yang berisi detail setiap item, dipisahkan oleh baris baru.
   */
  listItems() {
    // Memetakan setiap objek Item ke string displayDetails() dan menggabungkannya dengan '\n'
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;