import React from 'react';
import PropTypes from 'prop-types'

// const mayorDeEdad = edad => edad > 18;
// const persona = {"nombre":"Alberto","Apellido":"Quiroga","edad":23}

/** const curso = {
    "title":"React desde cero",
    "image":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price":"50usd"
} */

const Curso = ({title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">
               {title}
            </h3>
            <div className="s-main-center">
                {`Prof.: ${profesor}`}
            <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)


Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}


Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular-material.png",
    price: "--",
    profesor: "No se encontró"
}
export default Curso;