const menuItems = [
    { id: 1, name: "Pizza", price: 9.99 },
    { id: 2, name: "Burger", price: 5.99 },
    { id: 3, name: "Sushi", price: 12.99 },
];

function displayMenu() {
    const menuDiv = document.getElementById('menu');
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `<strong>${item.name}</strong> - $${item.price}`;
        menuDiv.appendChild(itemDiv);
    });
}

document.getElementById('orderButton').addEventListener('click', () => {
    alert('Order placed!');
});

displayMenu();
