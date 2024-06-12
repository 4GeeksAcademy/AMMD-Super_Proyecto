import React, { useEffect, useRef } from 'react';
import '../../styles/Carousel.css'; // Ruta actualizada y confirmada

const Carousel = ({ Carrusel }) => {
  const sliderRef = useRef(null);

  const activate = (e) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll('.item');

    if (e.target.matches(`.next-${Carrusel}`)) {
      slider.append(items[0]);
    } else if (e.target.matches(`.prev-${Carrusel}`)) {
      slider.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', activate, false);
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, [Carrusel]);

  return (
    <>
    <h2 className="tituloCarruselCliente">DISFRUTA DE LOS PROFESIONALES Y SU ARTE CULINARIO DONDE TU QUIERAS</h2>  
    <main>
      <div className="slider" ref={sliderRef}>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/25440112/pexels-photo-25440112/free-photo-of-vegetales-verduras-persona-comida.jpeg)' }}>
          
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg)' }}>
          
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg)' }}>
          
            
        </div>
      </div>
      <div className="boton carrusel">
        <span className={`btn prev-${Carrusel}`}>Previous</span>
        <span className={`btn next-${Carrusel}`}>Next</span>
      </div>
    </main>
    </>
  );
};

export default Carousel;
