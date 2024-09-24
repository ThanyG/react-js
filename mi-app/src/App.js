import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Esto es lo que comentan de sus expetiencias en el mundo IT:</h1>
     <Testimonio
     nombre='Lucia Bostian'
     pais='Suecia'
     imagen='lucia'
     cargo='Ingeniera en Sofware'
     empresa='Spotify'
     testimonio='Soy ingeniera en software diseño, desarrollo, prueban y mantengo programas y sistemas informáticos. Creo soluciones tecnológicas optimizando el rendimiento, la seguridad y la escalabilidad del software, trabajando en colaboración con equipos de desarrollo, analizando necesidades y resolviendo problemas' />

     <Testimonio
       nombre='Kevin Peralta'
       pais='Estados Unidos'
       imagen='kevin'
       cargo='full stack Developer'
       empresa='Mercado Libre'
       testimonio='Como Desarrollador Full Stack Senior, me especializo en crear soluciones web escalables y de alto impacto utilizando ReactJS, Node.js, MongoDB y AWS. Lidero el desarrollo de experiencias e-commerce fluidas con Shopify, centrándome en el rendimiento, interfaces intuitivas y eficaces integraciones con APIs. Mi pasión por la optimización UX me impulsa a mejorar continuamente las interacciones y la eficiencia del sitio' />
   <Testimonio
       nombre='Juan Gonzalez'
       pais='Mexico'
       imagen='juan'
       cargo='It recluter'
       empresa='Amazon'
       testimonio='Me especializo en ayudar a las empresas emergentes a construir sus propios equipos remotos de ingeniería de software' />
  

    </div>
    </div>
  );
}

export default App;
