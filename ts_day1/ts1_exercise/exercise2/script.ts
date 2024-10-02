// Define a type for menu items
type MenuItem = {
    name: string;
    price: number;
    isSpecial: boolean;
};

// Define constants for the restaurant name and address
const restaurantName: string = "The TypeScript Bistro";
const restaurantAddress: string = "1234, TypeScript St., Code City";

// Menu items array with strict types
const menuItems: MenuItem[] = [
    { name: "Spaghetti Bolognese", price: 12.99, isSpecial: true },
    { name: "Margherita Pizza", price: 9.99, isSpecial: false },
    { name: "Caesar Salad", price: 8.99, isSpecial: false },
    { name: "Tiramisu", price: 6.99, isSpecial: true },
];

// Function to display menu items on the page
function displayMenuItems(): void {
    const menuDiv: HTMLElement | null = document.getElementById('menuItems');
    if (menuDiv) {
        menuItems.forEach((item) => {
            const menuItemCard: string = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                            ${item.isSpecial ? '<span class="badge bg-success">Special</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
            menuDiv.innerHTML += menuItemCard;
        });
    }
}

displayMenuItems();
