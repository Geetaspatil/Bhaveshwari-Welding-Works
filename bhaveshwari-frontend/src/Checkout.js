import React, { useState, useEffect } from 'react';

export default function Checkout(){
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const c = JSON.parse(localStorage.getItem('bw_cart') || '[]');
    setCart(c);
  }, []);

  async function placeOrder(){
    const token = localStorage.getItem('authToken');
    if(!token){ alert('Please login'); return; }
    if(cart.length === 0){ alert('Cart empty'); return; }

    const items = cart.map(i => ({ productId: i.productId, quantity: i.quantity }));
    try{
      const res = await fetch('/api/orders/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({ items })
      });
      const data = await res.json();
      if(data.error){ alert('Error: ' + data.error); return; }
      alert('Order placed. id=' + data.orderId + ' Total=₹' + data.total);
      localStorage.removeItem('bw_cart');
      setCart([]);
    } catch(e){ console.error(e); alert('Network error'); }
  }

  return (
    <div>
      <h3>Checkout</h3>
      {cart.length === 0 ? <div>No items in cart</div> : (
        <ul>
          {cart.map((c, idx) => <li key={idx}>{c.name} — ₹{c.price} × {c.quantity}</li>)}
        </ul>
      )}
      <div style={{ marginTop: 10 }}>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}
