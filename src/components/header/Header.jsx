import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import ChooseCity from '../choose-city/ChooseCity';

import './Header.sass'
import logo from '../../assets/logo.svg'

const Header = () => {
    const currentCity = useSelector(state => state.cities.currentCity)

    const [openSubHeader, setOpenSubHeader] = useState(false)

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <Link to="/"><img src={logo} alt="logo" />30%</Link>
                </div>
                <a onClick={() => setOpenSubHeader(!openSubHeader)} className="header__location">
                    <FontAwesomeIcon style={{marginRight: "5px"}} icon={faLocationDot} />
                    {currentCity}
                </a>
                <nav className='header__nav'>
                    <button onClick={() => setCurrentSubHeader('cars')} >Bilreservdelar</button>
                    <button onClick={() => setCurrentSubHeader('trucks')} >Lastbilsreservdelar</button>
                    <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg==">Träffa Dangiras</a>
                </nav>
                <div className='header__social'>
                    <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg=="><FontAwesomeIcon className='header__social_inst' icon={faInstagram} style={{ width: '16px', height: '17px' }}  /></a>
                    <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg=="> <FontAwesomeIcon className='header__social_face' icon={faFacebook} style={{ width: '16px', height: '17px' }}  /></a>
                    <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg=="><FontAwesomeIcon className='header__social_whats' icon={faWhatsapp} style={{ width: '16px', height: '17px' }}  /></a>
                    <a href="https://www.instagram.com/dangiras987?igsh=MWdjMm1sMDhvN2t0Zg=="><FontAwesomeIcon className='header__social_telega' icon={faTelegram} style={{ width: '16px', height: '17px' }}  /></a>
                </div>
                <button className='header__btn'>
                    <FontAwesomeIcon style={{marginRight: '13px'}} icon={faPlus}/>
                    Skapa annons
                </button>
                <div className='header__login'>
                    Inloggning och registrering
                </div>
            </header>
            {openSubHeader ? <ChooseCity setOpenSubHeader={setOpenSubHeader} /> : null}
        </>
    )
}

export default Header;