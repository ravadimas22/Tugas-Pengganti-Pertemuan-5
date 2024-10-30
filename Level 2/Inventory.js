/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungsi `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.items = []; // Properti untuk menampung daftar item
    }

    addItem(item) {
        this.items.push(item); // Menambahkan item ke dalam array items
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id); // Mencari index item berdasarkan id
        if (index !== -1) {
            this.items.splice(index, 1); // Menghapus item dari array jika ditemukan
            console.log(`Item with ID ${id} has been removed from the inventory.`);
        } else {
            console.log(`Item with ID ${id} not found in the inventory.`);
        }
    }

    listItems() {
        if (this.items.length === 0) {
            return 'Inventory is empty.'; // Mengembalikan pesan jika inventory kosong
        }
        return this.items.map(item => item.displayDetails()).join('\n'); // Mengembalikan string informasi detail dari setiap item
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
