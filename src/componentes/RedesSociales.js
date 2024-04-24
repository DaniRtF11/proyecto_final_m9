// RedesSociales.js

import React from 'react';
import "../App.css";
import instagram from "../img/redesSociales/instagram.png";
import twitter from "../img/redesSociales/X.png";




function RedesSociales() {
    return (
        <div className="py-4 w-full grid-cols-1 ">
        <ul className="flex justify-center todasOpciones">
          <li className="logoRRSS">
            <img src={instagram}/>
          </li>
          <li className="logoRRSS">
          <img src={twitter} />
          </li>
        </ul>
      </div>
    );
  }
  
  export default RedesSociales;
  