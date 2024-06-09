import React, { useState } from 'react';
import './PaymentPage.css';
import { Link } from 'react-router-dom';

function PaymentPage({ cartCourses, totalAmount }) {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        alert('Payment successful!');
    };

    return (
        <div className="payment-page">
            <h2>Payment Page</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartCourses.map((item) => (
                        <li key={item.product.id}>
                            <span>{item.product.name} - {item.quantity} x ₹{item.product.price}</span>
                        </li>
                    ))}
                </ul>
                <p className="total-amount">Total Amount: ₹{totalAmount}</p>
            </div>
            <div className="payment-methods">
                <h3>Payment Methods</h3>
                <form onSubmit={handlePaymentSubmit}>
                    <div className="payment-options">
                        <div className="payment-option">
                            <label>
                                <input
                                    type="radio"
                                    value="creditCard"
                                    checked={paymentMethod === 'creditCard'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Credit Card
                            </label>
                            {paymentMethod === 'creditCard' && (
                                <div className="payment-details">
                                    <input type="text" placeholder="Card Number" required />
                                    <input type="text" placeholder="Card Holder Name" required />
                                    <input type="text" placeholder="Expiry Date (MM/YY)" required />
                                    <input type="text" placeholder="CVV" required />
                                </div>
                            )}
                        </div>
                        <div className="payment-option">
                            <label>
                                <input
                                    type="radio"
                                    value="debitCard"
                                    checked={paymentMethod === 'debitCard'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Debit Card
                            </label>
                            {paymentMethod === 'debitCard' && (
                                <div className="payment-details">
                                    <input type="text" placeholder="Card Number" required />
                                    <input type="text" placeholder="Card Holder Name" required />
                                    <input type="text" placeholder="Expiry Date (MM/YY)" required />
                                    <input type="text" placeholder="CVV" required />
                                </div>
                            )}
                        </div>
                        <div className="payment-option">
                            <label>
                                <input
                                    type="radio"
                                    value="netBanking"
                                    checked={paymentMethod === 'netBanking'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Net Banking
                            </label>
                            {paymentMethod === 'netBanking' && (
                                <div className="payment-details">
                                    <select required>
                                        <option value="">Select Bank</option>
                                        <option value="sbi">State Bank of India</option>
                                        <option value="hdfc">HDFC Bank</option>
                                        <option value="icici">ICICI Bank</option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className="payment-option">
                            <label>
                                <input
                                    type="radio"
                                    value="upi"
                                    checked={paymentMethod === 'upi'}
                                    onChange={handlePaymentMethodChange}
                                />
                                UPI
                            </label>
                            {paymentMethod === 'upi' && (
                                <div className="payment-details">
                                    <input type="text" placeholder="UPI ID" required />
                                </div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="pay-button">Pay Now</button>
                </form>
            </div>
            <div className="go-to-home">
                <Link to="/">Go back to Home</Link>
            </div>
        </div>
    );
}

export default PaymentPage;
