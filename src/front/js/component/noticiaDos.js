import React from "react";
import "../../styles/noticiaUno.css";

const NoticiaDos = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                <h1>COCINA INTELIGENTE</h1>
                <p>La Inteligencia Artificial (IA) está revolucionando el mundo culinario, desde asistentes virtuales como Siri y Google Assistant hasta algoritmos que analizan tendencias gastronómicas. Estos avances no solo facilitan la cocina diaria, sino que democratizan el conocimiento culinario y fomentan la creatividad.</p>
                <p>Hoy en día, asistentes como Siri, Alexa y Google Assistant ayudan en tiempo real con técnicas, medidas y sustituciones de ingredientes. Simplemente pidiendo una receta, estos asistentes pueden proporcionar desde la versión clásica hasta adaptaciones según gustos, necesidades dietéticas o ingredientes disponibles.</p>
                <p>Plataformas y aplicaciones con IA personalizan recetas según preferencias individuales y disponibles en la despensa, analizando patrones alimentarios para recomendar recetas saludables y ajustadas a objetivos específicos. Para chefs y restauradores, la IA es una herramienta valiosa para identificar tendencias y analizar datos de reseñas y redes sociales, permitiendo anticiparse a las demandas del mercado y satisfacer las expectativas de los clientes.</p>
                <p>La IA también puede generar automáticamente una multitud de recetas, combinando ingredientes y técnicas de cocción de maneras sorprendentes. Además, identifica patrones en grandes bases de datos de recetas para descubrir nuevas combinaciones. Empresas utilizan la IA para predecir el sabor y la textura de un plato antes de prepararlo, modelando las interacciones entre ingredientes y sus propiedades químicas, lo que facilita a los chefs ajustar y perfeccionar sus creaciones.</p>
                <p>Sin embargo, la IA en la cocina plantea desafíos éticos y prácticos. Existe el riesgo de dependencia excesiva, que podría reducir la creatividad y la intuición humana. Ferrán Adrià ha señalado la importancia de equilibrar el uso de esta tecnología.</p>
                <p>En resumen, la Inteligencia Artificial está transformando la cocina, ofreciendo oportunidades emocionantes mientras se requiere una regulación y uso equilibrado.</p>
            </div>
                <div className="col-4">
                    <div className="image-container">
                        <img className="imagen" src="https://images.pexels.com/photos/6489509/pexels-photo-6489509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descripción de la imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticiaDos;