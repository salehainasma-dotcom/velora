const products = [
    {
        id: 1,
        name: "مانتو زنانه",
        price: 850000,
        image: "https://images.unsplash.com/photo-1548624149-f2b7c7a1e1c0?w=500"
    },
    {
        id: 2,
        name: "گردنبند ظریف",
        price: 320000,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500"
    },
    {
        id: 3,
        name: "کیف دستی",
        price: 650000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    }
];

function displayProducts() {
    const container = document.getElementById("products");

    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString("fa-IR")} تومان</p>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", displayProducts);