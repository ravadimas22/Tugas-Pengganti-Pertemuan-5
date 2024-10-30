// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = []; // Initialize orders as an empty array

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(), // Generate a unique ID
    customerName,
    items,
    totalPrice,
    status: 'Menunggu' // Default status
  };
  orders.push(newOrder); // Add new order to the orders array
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status; // Update the status of the order
  } else {
    console.error(`Order with ID ${orderId} not found.`);
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Filter orders with status 'Selesai'
    .reduce((total, order) => total + order.totalPrice, 0); // Sum their total prices
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const initialLength = orders.length;
  orders = orders.filter(order => order.id !== id); // Remove order by ID
  if (orders.length === initialLength) {
    console.error(`Order with ID ${id} not found for deletion.`);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
