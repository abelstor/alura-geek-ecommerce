import { FooterForm } from '../components/FooterForm';

import logo from '../assets/icons/icon.png';
import alura from '../assets/icons/alura.png';
import geek from '../assets/icons/geek.png';

export const Footer = () => {

    const anio = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer__high">
                <div className="footer__about">
                    <div className="footer__about-logo">
                        <img src={logo} alt="logo" style={{ 'marginRight': '5px' }} />
                        <img src={alura} alt="alura" />
                        <img src={geek} alt="geek" />
                    </div>
                    <div className="footer__about-content">
                        <p> Quienes Somos </p>
                        <p> Política de privacidad </p>
                        <p> Programa de fidelidad </p>
                        <p> Nuestras tiendas </p>
                        <p> Quiero ser franquiciado </p>
                        <p> Anúncie Aquí </p>
                    </div>
                </div>
                <div className="footer__contact">
                    <FooterForm />
                </div>
            </div>

            <div className="footer__low">
                <p className="footer__low-copy">
                    &copy; {anio} Alura Geek || All rights reserved
                </p>
                <div className="footer__low-description">
                    Developed by&nbsp;
                    <a className="abelstor" href="https://abelstor.github.io/portfolio" target="blank">
                        abelstor
                    </a>
                </div>
            </div>
        </div>
    )
}