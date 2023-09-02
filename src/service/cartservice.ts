interface CartItems  {
    name: string,
    price: number
}


const sampleItems: CartItems[] = [
    { name: 'Smartphone', price: 49.99 },
    { name: 'Laptop', price: 9.99 },
    { name: 'Headphones', price: 9.99 },
    { name: 'Tablet', price: 9.99 },
    { name: 'Camera', price: 59.99 },
    { name: 'Smartwatch', price: 14.99 },
    { name: 'Wireless Mouse', price: 29.99 },
];

export async function getCartItems():Promise<CartItems[]> {
    return sampleItems;
}
