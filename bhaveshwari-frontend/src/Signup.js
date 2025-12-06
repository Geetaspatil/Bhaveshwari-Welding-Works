import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [form, setForm] = useState({ username:'', password:'' });
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const text = await res.text();
      if(res.ok){
        alert('Signup successful — please login');
        navigate('/login');
      } else {
        alert('Signup failed: ' + text);
      }
    } catch(err){ console.error(err); alert('Network error'); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth:360 }}>
      <h3>Signup</h3>
      <div><input name="username" placeholder="Username" value={form.username} onChange={handleChange} required /></div>
      <div><input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /></div>
      <div style={{ marginTop:8 }}><button type="submit">Signup</button></div>
    </form>
  );
}
