import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import "../styles/cart.css";

// Sample initial cart items
const initialCartItems = [
    {
        id: 1,
        name: 'Remera',
        price: 15000,
        quantity: 1,
        image: '/src/assets/product/remera-1.png'
    }
];

export default function Cart() {

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0.2); // 20% default discount

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discountAmount = subtotal * discount;
    const shippingCost = 5700;
    const total = subtotal - discountAmount + shippingCost;

    // Remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Update item quantity
    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, newQuantity) }
                : item
        ));
    };

    // Apply coupon
    const applyCoupon = () => {
        // Simple coupon validation logic
        const validCoupons = {
            'DESCUENTO20': 0.2,
            'DESCUENTO10': 0.1,
            'DESCUENTO5': 0.05
        };

        if (validCoupons[couponCode.toUpperCase()]) {
            setDiscount(validCoupons[couponCode.toUpperCase()]);
            alert('Cupón aplicado exitosamente!');
        } else {
            alert('Cupón inválido');
        }
    };

    return (
        <div className="container-cart p-4 bg-gray-100">
            <section id="cart" className="mb-6">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <td className="p-2 text-center">Eliminar</td>
                            <td className="p-2 text-center">Imagen</td>
                            <td className="p-2 text-center">Producto</td>
                            <td className="p-2 text-center">Precio</td>
                            <td className="p-2 text-center">Cantidad</td>
                            <td className="p-2 text-center">Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="p-2 text-center">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 />
                                    </button>
                                </td>
                                <td className="p-2 text-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover mx-auto"
                                    />
                                </td>
                                <td className="p-2 text-center">{item.name}</td>
                                <td className="p-2 text-center">${item.price.toLocaleString()}</td>
                                <td className="p-2 text-center">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 text-center border rounded"
                                        min="1"
                                    />
                                </td>
                                <td className="p-2 text-center">
                                    ${(item.price * item.quantity).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section id="cart-add" className="flex justify-between">
                <div id="cupon" className="w-1/2 p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-bold mb-4">Usar cupón</h3>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Ingresar cupón"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="flex-grow p-2 border rounded-l"
                        />
                        <button
                            onClick={applyCoupon}
                            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
                        >
                            Aplicar
                        </button>
                    </div>
                </div>

                <div id="subtotal" className="w-1/2 p-4 bg-white rounded shadow ml-4">
                    <h3 className="text-xl font-bold mb-4">Total</h3>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="text-right">${subtotal.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Descuento ({discount * 100}%)</td>
                                <td className="text-right text-red-500">
                                    -${discountAmount.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Envío</td>
                                <td className="text-right">${shippingCost.toLocaleString()}</td>
                            </tr>
                            <tr className="font-bold">
                                <td>Total</td>
                                <td className="text-right">${total.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/checkout" className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 flex items-center justify-center">
                        <ShoppingCart className="mr-2" /> Continuar compra
                    </Link>
                </div>
            </section>
        </div>
    );
};