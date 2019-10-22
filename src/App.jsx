import React from 'react';
import Simulator from './Simulator.jsx';


function $(formula) {
    return `\\(${formula}\\)`;
}

export default function App(props) {
    return (
        <div className="wrapper">
            <h1>El teorema del límite central explicado de forma sencilla y visual.</h1>

            <section>
                <h2>Introduccion</h2>
                <p>
                    Esta web intenta explicar de forma sencilla y visual el <a href="https://en.wikipedia.org/wiki/Central_limit_theorem" target="_blank">Teorema del Límite Central</a>.
                    La versión original en inglés puede ser vista en <a href="http://www.github.com/mkfreeman/central-limit">este enlace</a>.
                    </p>

                <p>
                    Cualquier idea o sugerencia es bienvenida! Puedes contactarme <a href="http://twitter.com/iagolast" target="_blank" rel="noopener noreferrer">via Twitter</a>.
                </p>
            </section>

            <section>
                <h2> Definiciones </h2>
                <p> Si {$('X_{1} ... X_{n}')} es una secuencia de variables aleatorias independientes e indenticamente distribuidas con una media {$('\\mu')} y una varianza {$('\\sigma^2')} entonces la variable aleatoria </p>
                <img style={{ display: 'block', margin: 'auto' }} src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d72fdfeaf2fbd2867495272a4f36d6647be54149" />
                <p> seguira una distribucón normal con media {$('\\mu')} y varianza {$('\\frac{\\sigma^2}{n}')} cuando {$('n')} sea suficientemente grande.</p>
            </section>

            <section>
                <h2>La población</h2>
                <p>
                    Imaginemos una población total formada por 100 elementos donde se ha medido un solo parametro que puede tomar valores entre -100 y 100.
                </p>

                <Simulator charts={['popDistribution']} controls={[]} width={props.width} height={57} />

                <p>
                    En la visualización vemos representada esta población mediante un círculo por cada elemento. La posicion horizontal representa el valor del parametro y la media real de la población {$('\\mu')} se muestra mediante una linea vertical de color negro.
                </p>


                <section>
                    <h2>Muestreos</h2>
                    <p>
                        En la siguiente visualizacion se ha añadido un boton que permite tomar una muestra de 10 individuos de la población y calcular su media {$('X_{i}')}.
                    </p>

                    <Simulator charts={['popDistribution']} controls={['one_sample']} width={props.width} height={57} />

                    <p>
                        Como se puede comprobar, la media de la muestra {$('X_{i}')} y la media real de la población {$('\\mu')} pueden tener diferencias significativas. Pero ¿que pasa con la media de las medias muestrales {$('\\overline{X}')} a
                        medida que tomamos {$('n')} muestras?
                    </p>

                </section>

            </section>

            <section>
                <h2>Multiples Muestreos</h2>
                <div>
                    <p>
                        Vamos a realizar multiples muestreos anotando la media de cada uno de ellos {$('X_{i}')} y pintando en rojo la media de todos ellos {$('\\overline{X}')}
                    </p>

                    <Simulator charts={['popDistribution', 'sampleMeans']} controls={['one_sample']} width={props.width} height={57} />
                </div>
                <p>
                    Al repetir el proceso muchas veces se puede ver como la diferencia entre la media real de la población {$('\\mu')} y la media de las medias muestrales {$('\\overline{X}')} se va reduciendo!
                </p>
            </section>

            <section>
                <h2>Visualizando las distribuciones</h2>
                <p>
                    En La siguiente visualizacion se muestran los histogramas y funciones de densidad para la población y para la media de las medias de las medias de las muestras.
                    Se ve bastante claro que <strong> la distribución de la población no es una distribución normal </strong>
                </p>

                <Simulator charts={['popDistribution', 'sampleMeans']} showHist={true} controls={['one_sample']} width={props.width} height={100} />

                <p>
                    Sin embargo ¿Que pasa con funcion de densidad de {$('\\overline{X}')} a medida que tomamos muestras?
                </p>
            </section>

            <section>
                <h2>Teorema del límite central</h2>

                <p> Recordemos la definición dada al principio:</p>

                <img style={{ display: 'block', margin: 'auto' }} src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d72fdfeaf2fbd2867495272a4f36d6647be54149" />

                <p>
                    A medida que {$('n')} va creciendo, es decir a medida que tomamos muestras {$('X_{i}')}, la distribución de {$('\\overline{X}')} se aproxima a una normal con media {$('\\mu')} y
                    varianza {$('\\frac{\\sigma^2}{n}')}.
                </p>

                <p>
                    Recordemos que las muestras {$('X_{1} ... X_{n}')} son variables aleatorias independientes que estan identicamente distribuidas (Aunque no siguen una distribucion normal) con media {$('\\mu')} y varianza {$('\\sigma^2')}.
                </p>

                <Simulator charts={['popDistribution', 'sampleMeans']} showHist={true} controls={['toggle_sampling']} width={props.width} height={100} />

            </section>

            <section>
                <h2>Implicaciones</h2>
                <p>
                    Aplicación de tests estadísticos: El hecho de que un muestreo se pueda aproximar mediante una distribución normal a partir de cierto numero de muestras permite utilizar
                    <a href="https://es.wikipedia.org/wiki/Prueba_t_de_Student" target="_blank" rel="noopener noreferrer"> tests estadísticos </a> aunque las distribuciones no esten normalmente distribuidas.
                </p>
                <p>
                    Precisión de los estimadores: Como se ha demostrado a medida que crece el número de muestras la diferencia entre la media real y la estimada disminuye.
                </p>

            </section>
        </div>
    );
}