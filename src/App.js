import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "title":"React desde Cero", 
    "imagen":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "prices":30,
    "profesor": "Beto"
  },
  {
    "title":"Drupal desde Cero", 
    "imagen":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
    "prices":110,
    "profesor": "Alex"
  },
  {
    "title":"HRML desde Cero", 
    "imagen":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AuditionDesdeCero.png",
    "prices":300,
    "profesor": "Alvaro"
  }
]
const App = () => (
  <>
  <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="hola" src="https://www.freejpg.com.ar/asset/900/e9/e9a3/F100010513.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
    </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map(c=><Curso title={c.title} image={c.imagen} price={c.prices} profesor={c.profesor} />)
      }
    </div>  

    </>

)

export default App;