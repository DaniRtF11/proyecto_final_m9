// Menu.js

import React from 'react';
import "../App.css";

function Menu() {
  return (
    <div className="py-4 w-full grid-cols-1 ">
      <ul className="flex justify-center todasOpciones">
        <li className="menuOpcion">
          <a href="#" className="font-semibold">EQUIPOS</a>
        </li>
        <li className="menuOpcion">
          <a href="#" className="font-semibold">HISTORIA</a>
        </li>
        <li className="menuOpcion">
          <a href="#" className="font-semibold">MULTIMEDIA</a>
        </li>
        <li className="menuOpcion">
          <a href="#" className="font-semibold">CONTACTO</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
