import React, { useState } from 'react';
import './AuthForm.css'; // импорт стилей

const AuthForm = () => {
  // Состояния для почты, пароля и сообщения
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Обработка изменения полей ввода
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Функция обработки отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Мокаем запрос на сервер
    try {
      const response = await fetch('https://mock-server.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage('Авторизация прошла успешно!');
      } else {
        setMessage('Авторизация провалена. Пожалуйста проверьте Ваш Эл. почту и/или Пароль');
      }
    } catch (error) {
      setMessage('Что-то пошло не так. Сделайте попытку авторизации позднее.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Авторизация</h2>

        <label htmlFor="email">Эл. почта:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Введите эл. почту"
          required
        />

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Введите пароль"
          required
        />

        <button type="submit">Авторизация</button>

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
