import "./Home.css"
import ilustracion1 from "../../assets/Ilustracion1.webp"
import titulo from "../../assets/titulo.webp"
import logoFooter from "../../assets/logofooter.png";


function Home() {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <img className="imgHome" src={ilustracion1} alt="Ilustracion" />
        <img className="imgTitulo" src={titulo} alt="tituloDeLaAplicacion" />
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
        <img src={logoFooter} alt="Logo de la empresa" className="logo-footer" />
      </footer>
    </div>
  )
}

export default Home