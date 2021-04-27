import React from 'react';
import './home.css';
import './buttonOne.js'

function Welcome () {
  return (
    <div className="welcome">
      <h1>Notes Reminder</h1>
      <div className="btnsWelcome">

        <div>
        <button className="btnLogIn">Iniciar sesión</button>
        </div>

        <div>
        <button className="btnSignUp">Registrate</button>
        </div>

      </div>
      <p className="otherIncome">ó ingresa con</p>
    </div>
  );
}

export default Welcome;