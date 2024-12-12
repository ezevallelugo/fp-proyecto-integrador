import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/checkout.css"

export default function Checkout() {

  // Payment Methods
  const listMethods = ["Visa", "Mastercard", "Mercado Pago", "Tarjeta Shopping", "PayPal"];

  // Months and Years for Expiration
  const listMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const listYears = ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036"];

  // States (Provinces)
  const listStates = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
    "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza",
    "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis",
    "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ];

  // Form State
  const [formData, setFormData] = useState({
    paymentMethod: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    name: '',
    lastName: '',
    locality: '',
    direction: '',
    postalCode: '',
    state: '',
    cellphone: '',
    saveInformation: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Form Submitted:', formData);
    // Add your payment processing logic here
  };

  return (
    <div className="flex justify-center checkout mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Information Section */}

        <div className="payment_information_container bg-white shadow-md rounded-lg p-6 order-2 md:order-1">
          <h2 className=" text-2xl font-bold mb-6 text-gray-800">Información del pago</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Payment Methods Dropdown */}
            <div className="mb-4">
              <label htmlFor="payment_methods" className="block text-gray-700 font-medium mb-2">
                Método de Pago
              </label>
              <select
                name="paymentMethod"
                id="payment_methods"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Seleccione un método de pago</option>
                {listMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <label htmlFor="card_number" className="block text-gray-700 font-medium mb-2">
                Número de tarjeta
              </label>
              <input
                type="number"
                id="card_number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Expiration Date */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="month" className="block text-gray-700 font-medium mb-2">
                  Mes
                </label>
                <select
                  name="expirationMonth"
                  id="month"
                  value={formData.expirationMonth}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Mes</option>
                  {listMonths.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
                  Año
                </label>
                <select
                  name="expirationYear"
                  id="year"
                  value={formData.expirationYear}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Año</option>
                  {listYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* CVV */}
            <div className="mb-4 relative">
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                Código de seguridad
              </label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                className="absolute right-2 top-10 text-gray-500 cursor-help"
                title="Código de seguridad de 3 dígitos"
              >
                ?
              </span>
            </div>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-gray-700 font-medium mb-2">Apellido</label>
                <input
                  type="text"
                  id="last_name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="localidad" className="block text-gray-700 font-medium mb-2">Localidad</label>
                <input
                  type="text"
                  id="localidad"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="direction" className="block text-gray-700 font-medium mb-2">Dirección</label>
                <input
                  type="text"
                  id="direction"
                  name="direction"
                  value={formData.direction}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Postal Code and State */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="postal_code" className="block text-gray-700 font-medium mb-2">Código postal</label>
                <input
                  type="number"
                  id="postal_code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 font-medium mb-2">Provincia</label>
                <select
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Seleccione una provincia</option>
                  {listStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cellphone */}
            <div className="mb-4">
              <label htmlFor="cellphone" className="block text-gray-700 font-medium mb-2">Teléfono / Celular</label>
              <input
                type="number"
                id="cellphone"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
                className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Save Information Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="checkSaveInformation"
                name="saveInformation"
                checked={formData.saveInformation}
                onChange={handleChange}
                className="mr-2 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="checkSaveInformation" className="text-gray-700">
                Guardar mi información para futuras compras
              </label>
            </div>

            {/* Pay Button */}
            <div className="text-center h-[39px]">
              <Link href="#" className="display-flex align-items-center justify-center w-[35%] px-6 py-3 rounded-full bg-[#067F38] text-white font-bold text-[15px] border-none cursor-pointer gap-8">
                <img src="/src/assets/payment_methods/icon-block.png" className="h-6 w-auto mr-2" style={{position: 'relative', top: '16%'}} />
                Pagar Ahora
              </Link>
            </div>
          </form>
        </div>



        {/* Payment Methods Section */}
        <div className="payment_method_container bg-white shadow-md rounded-lg p-6 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Métodos de pago</h2>
          <p className="mb-4 text-gray-600">Aceptamos los siguientes métodos de pagos seguro:</p>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <img
              className="h-[50px] object-contain"
              src="/src/assets/payment_methods/visa.png"
              alt="Visa"
            />
            <img
              className="h-[50px] object-contain"
              src="/src/assets/payment_methods/mastercard.png"
              alt="Mastercard"
            />
            <img
              className="h-[30px] object-contain"
              src="/src/assets/payment_methods/tarjetashopping.png"
              alt="Tarjeta Shopping"
            />
            <img
              className="h-[30px] object-contain"
              src="/src/assets/payment_methods/mercadopago.png"
              alt="Mercado Pago"
            />
            <img
              className="h-[30px] object-contain"
              src="/src/assets/payment_methods/paypal.png"
              alt="Paypal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};