import React from 'react';
import './App.css'; // Certifique-se de que o CSS do App também está configurado
import LoginBox from './components/LoginBox';
import backgroundImage from './assets/background.gif'; // Importa o GIF de fundo

const App = () => {
    return (
        <div className="app" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoginBox />
        </div>
    );
};

export default App;
