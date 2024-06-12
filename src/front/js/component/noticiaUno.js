import React from "react";
import "../../styles/noticiaUno.css";

const NoticiaUno = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>INSOMNIO CRÓNICO</h1>
                    <p>Un importante estudio estadístico ha concluido que el consumo de alimentos ultraprocesados se asocia con el insomnio crónico. Aunque la investigación no demuestra causalidad, sienta las bases para futuras investigaciones que recopilen datos cualitativos y cuantitativos sobre esta asociación y desarrollen programas de prevención e intervención en la relación dieta y sueño.</p>
                    <p>Realizado por expertos de la Universidad Sorbona París Norte, el estudio destaca que la ingesta de alimentos ultraprocesados está aumentando en todo el mundo, y estos alimentos están vinculados a diversos problemas de salud física y mental. Los investigadores señalan que pocos estudios han examinado el impacto del consumo de alimentos ultraprocesados en la salud del sueño, especialmente en el insomnio crónico. Este estudio, que involucró una gran muestra de 38,570 personas, tenía como objetivo determinar esta asociación.</p>
                    <p>El equipo de investigación enfatiza que, en una era de abundantes alimentos ultraprocesados, los trastornos del sueño también están en aumento. Estudios previos han mostrado una asociación estadística significativa entre un alto consumo de alimentos ultraprocesados y una mala calidad del sueño. Estos alimentos contienen ingredientes como conservantes, emulsionantes, colorantes, saborizantes artificiales y otros aditivos, que podrían estar relacionados con la mala calidad del sueño.</p>
                    <p>Utilizando la clasificación NOVA de la Universidad de Sao Paulo, los investigadores categorizaron el consumo de alimentos y analizaron datos recopilados semestralmente entre 2013 y 2015. Los resultados revelaron que las personas que sufrían de insomnio crónico consumían más alimentos ultraprocesados, representando entre el 16% y el 20% de su ingesta energética total. Esta asociación se observó tanto en hombres como en mujeres, con una prevalencia ligeramente mayor en hombres.</p>
                    <p>Si bien el estudio es observacional y no establece causalidad, es el primero de su tipo en ampliar nuestra comprensión sobre los efectos del consumo de alimentos ultraprocesados en el sueño. Los hallazgos respaldan la necesidad de futuras investigaciones para recopilar datos completos y desarrollar medidas preventivas e intervenciones relacionadas con la dieta y el sueño.</p>
                    <p>Para más detalles, puede visitar la página de la Universidad Sorbona París Norte y la revista Journal of the Academy of Nutrition and Dietetics.</p>
                </div>
                <div className="col-4">
                    <div className="image-container">
                        <img className="imagen" src="https://images.pexels.com/photos/25338174/pexels-photo-25338174/free-photo-of-comida-mujer-efecto-desenfocado-patatas-fritas.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descripción de la imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticiaUno;