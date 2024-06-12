import React, { useEffect, useRef } from 'react';
import '../../styles/Carousel.css'; // Ruta actualizada y confirmada

const Carousel2 = ({ Carousel2 }) => {
  const sliderRef = useRef(null);

  const activate = (e) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll('.item');

    if (e.target.matches(`.siguiente-${Carousel2}`)) {
      slider.append(items[0]);
    } else if (e.target.matches(`.anterior-${Carousel2}`)) {
      slider.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', activate, false);
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, [Carousel2]);

  return (
    <>
    <h2 className="tituloCarruselCliente">UNETE A NUESTRO EQUIPO Y COMPARTE TU PASION CULINARIA CON EL MUNDO</h2>  
    <main>
    <div className="slider" ref={sliderRef}>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/21077136/pexels-photo-21077136/free-photo-of-llamas-en-la-cocina.jpeg)' }}>
          
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4252141/pexels-photo-4252141.jpeg)' }}>
          
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3933217/pexels-photo-3933217.jpeg)' }}>
          
            
        </div>
      </div>
      <div className="boton carrusel">
        <span className={`btn anterior-${Carousel2}`}>Previous</span>
        <span className={`btn siguiente-${Carousel2}`}>Next</span>
      </div>     
    </main>
    </>
  );
};

export default Carousel2;
