import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckProduct from './CheckProduct';
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'; 
import { db } from './firebase';

function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
    //   generate the special stripe secret which allows us to vharge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
    }, [basket])
    
    console.log('THE SECRET IS >>>', clientSecret);
    console.log('👦', user);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            db
            .collection('users')
            .doc(user.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true })
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    
  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout (
                    <Link to="/checkout">{basket.length} items</Link>
                )
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>

                </div>
                <div className="payment_address">
                    {/* <p>{user.email}</p> */}
                    <p>123 React Lane</p>
                    <p>Mumbai, Maharashtra</p>
                </div>
            </div>  
            
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>

            <div className="payment_items">
                {basket.map(item => (
                    <CheckProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>

        {/* Payment method */}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment method</h3>
            </div>
            <div className="payment_details">
                 {/* Stripe */}
                 <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="payment_priceContainer">
                        <CurrencyFormat renderText={(value)=> (
                            <h3>Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                        />
                        <button disabled={processing}>
                            <span>{"Buy now"}</span>
                        </button>
                    </div>
                    {/* Errors */}
                    {error && <div>{error}</div>}
                 </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Payment