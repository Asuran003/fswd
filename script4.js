const menuItems = [
    { id: 1, name: "Pizza", price: 9.99 },
    { id: 2, name: "Burger", price: 5.99 },
    { id: 3, name: "Sushi", price: 12.99 },
];

let selectedItems = [];

function displayMenu() {
    const menuDiv = document.getElementById('menu');
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
            <strong>${item.name}</strong> - $${item.price} 
            <button onclick="addToOrder(${item.id})">Add to Order</button>
        `;
        menuDiv.appendChild(itemDiv);
    });
}

function addToOrder(id) {
    const item = menuItems.find(item => item.id === id);
    if (item) {
        selectedItems.push(item);
        updateOrderSummary();
    }
}

function updateOrderSummary() {
    const orderDiv = document.getElementById('orderSummary');
    orderDiv.innerHTML = '';

    const itemCount = {};
    selectedItems.forEach(item => {
        itemCount[item.id] = (itemCount[item.id] || 0) + 1;
    });

    let totalAmount = 0;

    for (const id in itemCount) {
        const item = menuItems.find(item => item.id === Number(id));
        const quantity = itemCount[id];
        totalAmount += item.price * quantity;

        const summaryItemDiv = document.createElement('div');
        summaryItemDiv.innerHTML = `${item.name} x${quantity} - $${(item.price * quantity).toFixed(2)}`;
        orderDiv.appendChild(summaryItemDiv);
    }

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${totalAmount.toFixed(2)}</strong>`;
    orderDiv.appendChild(totalDiv);
}

document.getElementById('orderButton').addEventListener('click', () => {
    if (selectedItems.length === 0) {
        alert('No items selected!');
    } else {
        alert('Order placed!');
        // Here you could send the order to the server
        selectedItems = [];
        updateOrderSummary();
    }
});

displayMenu();
