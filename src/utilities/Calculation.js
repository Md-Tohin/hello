const addToCartLS = (product) => {
    let shoppingCart = {};
    const exists = localStorage.getItem('shopping-cart');
    if (exists) {
        shoppingCart = JSON.parse(exists);
    }

    const quantity = shoppingCart[product.id];
    if (quantity) {
        shoppingCart[product.id] = quantity + 1;
    }
    else {
        shoppingCart[product.id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const savedCart = () => {
    let shoppingCart = {};
    const exists = localStorage.getItem('shopping-cart');
    if(exists){
        shoppingCart = JSON.parse(exists)
    }
    return shoppingCart;
}

export { addToCartLS, savedCart };