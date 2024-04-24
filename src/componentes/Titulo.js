// TituloPortada.js

import React from 'react';
import "../App.css";
import escudoImg from "../img/escudos/normal.png";

function Titulo() {
  return (
    <>
      <img src={escudoImg} alt='Escudo UD Parc' className='escudoImgPortada'/>
      <h1 className="tituloPortada">UD PARC</h1>
    </>
  );
}

export default Titulo;
