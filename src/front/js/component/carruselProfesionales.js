import React, { useEffect } from 'react';
import '../../styles/Carousel.css'; // Ruta actualizada y confirmada

const Carousel2 = () => {
  const activate = (e) => {
    const slider = document.querySelector('.slider');
    const items2 = document.querySelectorAll('.item');

    if (e.target.matches('.next')) {
      slider.append(items2[0]);
    } else if (e.target.matches('.prev')) {
      slider.prepend(items2[items2.length - 1]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', activate, false);
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []);

  return (
    <>
    <h2 className="tituloCarruselCliente">UNETE A NUESTRO EQUIPO Y COMPARTE TU PASION CULINARIA CON EL MUNDO</h2>  
    <main>
      <div className="slider">
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
          <div className="content">
            <h2 className="title">Slide 1</h2>
            <p className="description">Description for Slide 1</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4252141/pexels-photo-4252141.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
          <div className="content">
            <h2 className="title">Slide 2</h2>
            <p className="description">Description for Slide 2</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3933217/pexels-photo-3933217.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
          <div className="content">
            <h2 className="title">Slide 3</h2>
            <p className="description">Description for Slide 3</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className="boton carrusel 2">
        <span className="btn prev">Previous</span>
        <span className="btn next">Next</span>
      </div>
    </main>
    </>
  );
};

export default Carousel2;

