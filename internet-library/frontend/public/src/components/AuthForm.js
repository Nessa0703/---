import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/token', {
        grant_type: '',
        username: email,
        password: password,
        scope: '',
        client_id: '',
        client_secret: ''
      });
      alert('Авторизация успешна!');
    } catch (error) {
      alert('Ошибка авторизации');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
      <button type="submit">Авторизоваться</button>
    </form>
  );
};

export default AuthForm;