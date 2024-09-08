import "./Home.css"
import ilustracion1 from "../../assets/Ilustracion1.webp"
//import Ilustracionchica from "../../assets/Ilustracionchica.png"
import titulo from "../../assets/titulo.webp"
import logoHorizontal from "../../assets/logoHorizontal.png"

function Home() {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
      <img className="imgHome" src={ilustracion1} alt="Ilustracion" />
      <div className="content">
        <img className="imgTitulo" src={titulo} alt="tituloDeLaAplicacion" />
      </div>
      <div className="social-menu">
      <ul>
        <li>
          <a 
            href="https://wa.me/5493816208913" 
            target="_blank" 
            className="buttonIcon"
          >
            <i className="icon fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/tuki.marketing/" 
            target="_blank" 
            className="buttonIcon"
          >
            <i className="icon fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      </div>
      <footer className="footer">
        <img src={logoHorizontal} alt="Logo Horizontal" className="logo-footer" />
      </footer>
    </div>
    </div>
  )
}

export default Home