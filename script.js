
const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "T-Shirt", category: "Clothing", price: 20 },
    { name: "Jeans", category: "Clothing", price: 40 },
    { name: "Book - JavaScript Guide", category: "Books", price: 15 },
    { name: "Book - CSS Mastery", category: "Books", price: 25 }
];


function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

function filterProducts(category) {
    let filteredProducts = [];
    if (category === 'All') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}


document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterProducts(this.getAttribute('data-category'));
    });
});


filterProducts('All');
