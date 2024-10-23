import React, { useState } from 'react';
import './LoginBox.css';

const LoginBox = () => {
  const [user, setUser] = useState(''); // Alterado para 'user'
  const [password, setPassword] = useState(''); // Alterado para 'password'

  const handleLogin = () => {
    // Você pode adicionar a lógica de autenticação aqui.
    console.log(`Usuário: ${user}, Senha: ${password}`); // Alterado para 'Usuário' e 'Senha'
    // Redirecionar para a página do catálogo após o login.
    window.location.href = '/catalogo';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário" // Alterado para 'Usuário'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password" // Alterado para 'password' para que a senha não seja visível
          placeholder="Senha" // Alterado para 'Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default LoginBox;
