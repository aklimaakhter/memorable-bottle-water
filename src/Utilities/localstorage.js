const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);

    }
    return [];
}

const saveToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}
const addToLocalStorage = (id)=>{
    const cart = getStoredCart();
    cart.push(id);
    saveToLocalStorage(cart)
}

const removeToLocalStorage = (id)=>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx!==id);
    saveToLocalStorage(remaining)
}
export {addToLocalStorage, getStoredCart,removeToLocalStorage};