import React from 'react';

export default function ProductCard({ p }){
  function handleBuy(){
    const token = localStorage.getItem('authToken');
    if(!token){ alert('Please login to buy'); return; }
    // simple add-to-cart in localStorage
    const cartJson = localStorage.getItem('bw_cart') || '[]';
    const cart = JSON.parse(cartJson);
    const found = cart.find(i => i.productId === p.id);
    if(found) found.quantity += 1; else cart.push({ productId: p.id, name: p.name, price: p.price, quantity: 1 });
    localStorage.setItem('bw_cart', JSON.stringify(cart));
    alert('Added to cart');
  }

  return (
    <div style={{ border:'1px solid #ddd', padding:10, borderRadius:8 }}>
      <img src={p.imageUrl} alt={p.name} style={{ width:'100%', height:140, objectFit:'cover' }} />
      <h4>{p.name}</h4>
      <div style={{ minHeight:40 }}>{p.description}</div>
      <div style={{ fontWeight:700, marginTop:6 }}>₹{p.price}</div>
      <div style={{ marginTop:8 }}>
        <button onClick={handleBuy}>Buy / Add</button>
      </div>
    </div>
  );
}
