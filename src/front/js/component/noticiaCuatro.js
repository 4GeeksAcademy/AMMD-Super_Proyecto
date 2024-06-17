import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/noticiaUno.css";

const NoticiaCuatro = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>CRISIS POTASIO</h1>
                    <p>Una reciente investigación en Reino Unido revela que la deficiencia de potasio amenaza la seguridad alimentaria mundial. Aproximadamente el 20% de los suelos agrícolas globales carecen gravemente de potasio, un nutriente esencial para el crecimiento de las plantas. Este problema ya ha reducido el rendimiento de cultivos en países como India.</p>

                    <h2>Alarma en la Agricultura</h2>
                    <p>El estudio, realizado por expertos del University College de Londres, la Universidad de Edimburgo y el Centro de Ecología e Hidrología del Reino Unido, advierte que se extrae más potasio de las cosechas de lo que se repone mediante fertilizantes. Este desequilibrio podría comprometer la capacidad de cultivar suficientes alimentos para la humanidad y el ganado.</p>

                    <h2>Importancia del Potasio</h2>
                    <p>El potasio es vital para varios procesos en las plantas, incluyendo la fotosíntesis y la resistencia al estrés. Sin embargo, a nivel mundial, su reposición es insuficiente, afectando la fertilidad del suelo. El 75% de los arrozales de China y el 66% del cinturón del trigo en Australia carecen de potasio, lo que ya está afectando la producción.</p>

                    <h2>Dependencia y Volatilidad</h2>
                    <p>El potasio se extrae principalmente de la potasa, cuyas reservas se concentran en unos pocos países como Canadá, Bielorrusia y Rusia. Esta dependencia de importaciones hace vulnerables a muchos países a interrupciones en el suministro, exacerbadas por la volatilidad de los precios.</p>

                    <h2>Seis Acciones Urgentes</h2>
                    <p>Para abordar esta crisis, los investigadores proponen seis acciones clave:</p>
                    <ol>
                        <li>Evaluar las reservas de potasio globales para identificar regiones en riesgo.</li>
                        <li>Predecir las fluctuaciones de precios y mejorar la información sobre los recursos de potasio.</li>
                        <li>Ayudar a los agricultores con recomendaciones específicas de fertilización.</li>
                        <li>Evaluar los efectos ambientales de la minería de potasa y considerar alternativas como la polihalita.</li>
                        <li>Desarrollar una economía circular del potasio, reciclando y reutilizando este nutriente.</li>
                        <li>Fomentar la cooperación internacional para gestionar mejor el potasio.</li>
                    </ol>

                    <h2>Propuesta de Resolución</h2>
                    <p>Con la creciente demanda de alimentos y la atención global en el fósforo y el nitrógeno, el potasio no debe ser olvidado. Los investigadores sugieren una resolución en una futura asamblea ambiental de las Naciones Unidas para establecer una gestión integrada de nutrientes y asegurar la seguridad alimentaria global.</p>
                </div>
                <div className="col-4">
                    <div className="image-container">
                        <img className="imagen" src="https://images.pexels.com/photos/4877840/pexels-photo-4877840.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Descripción de la imagen" />
                    </div>
                    <button type="button" className="btn" onClick={handleHome}>VOLVER</button>
                </div>
            </div>
        </div>
    );
};

export default NoticiaCuatro;
