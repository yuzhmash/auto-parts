import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import './Footer.sass'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__info'>
                <a href="">Om projektet</a>
                <a href="">Hjälp</a>
                <a href="">Regler</a>
                <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg==">Min inst</a>
            </div>
            <div className='footer__work'>
                <FontAwesomeIcon icon={faCopyright} style={{marginRight: '3px', width: '10px', height: '10px'}} />
                2024-2024 30%</div>
        </footer>
    )
}

export default Footer;