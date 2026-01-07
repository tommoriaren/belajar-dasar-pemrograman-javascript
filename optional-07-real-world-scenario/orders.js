// orders.js

// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

/**
 * Fungsi pembantu untuk menghitung total harga dari daftar item.
 * @param {Array<{name: string, price: number}>} items - Daftar item yang dipesan.
 * @returns {number} Total harga.
 */
function calculateItemTotal(items) {
  // Menggunakan method reduce untuk menjumlahkan semua harga
  return items.reduce((sum, item) => sum + item.price, 0);
}


// TODO: selesaikan fungsi addOrder
/**
 * Menambahkan pesanan baru ke dalam array orders.
 * @param {string} customerName - Nama pelanggan.
 * @param {Array<{name: string, price: number}>} items - Daftar item yang dipesan.
 */
function addOrder(customerName, items) {
  const totalPrice = calculateItemTotal(items);

  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu', // Status awal selalu 'Menunggu'
  };

  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
/**
 * Memperbarui status pesanan berdasarkan ID.
 * @param {string} orderId - ID Pesanan yang akan diperbarui.
 * @param {string} status - Status baru ('Menunggu', 'Diproses', atau 'Selesai').
 */
function updateOrderStatus(orderId, status) {
  // Menggunakan find() untuk mencari objek pesanan berdasarkan ID
  const orderToUpdate = orders.find(order => order.id === orderId);

  if (orderToUpdate) {
    orderToUpdate.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
/**
 * Menghitung total pendapatan dari semua pesanan yang berstatus 'Selesai'.
 * @returns {number} Total pendapatan.
 */
function calculateTotalRevenue() {
  // 1. Filter pesanan yang statusnya 'Selesai'
  const completedOrders = orders.filter(order => order.status === 'Selesai');

  // 2. Menggunakan reduce untuk menjumlahkan totalPrice dari pesanan yang sudah selesai
  return completedOrders.reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
/**
 * Menghapus pesanan dari array orders berdasarkan ID.
 * @param {string} id - ID Pesanan yang akan dihapus.
 */
function deleteOrder(id) {
  // Menggunakan filter untuk membuat array baru yang tidak menyertakan pesanan dengan ID yang diberikan
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };