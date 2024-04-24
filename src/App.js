import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';
import Menu from './componentes/Menu';
import RedesSociales from './componentes/RedesSociales';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function preloadImages(imageUrls) {
  return Promise.all(imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  }));
}

function App() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = require.context('./img/fotosPortada', true);
  const keys = images.keys();

  useEffect(() => {
    preloadImages(keys.map(key => images(key))).then(() => {
      setImagesLoaded(true);
    });
  }, [keys]);

  useEffect(() => {
    setBackgroundImage(images(keys[backgroundImageIndex]));
  }, [backgroundImageIndex, keys]);

  useInterval(() => {
    setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % keys.length);
  }, 3000); // Cambiar la imagen cada 3 segundos

  return (
    <div className="relative h-screen">
      {imagesLoaded ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <Titulo />
              <Menu />
              <RedesSociales />
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <p>Cargando...</p>
        </div>
      )}
    </div>
  );
}

export default App;
