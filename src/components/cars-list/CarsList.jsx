import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import bmw from '../../assets/cars-svg/BMW.svg'
import ford from '../../assets/cars-svg/ford.svg'
import audi from '../../assets/cars-svg/audi.svg'
import lamborghini from '../../assets/cars-svg/lamborghini.svg'

import './CarsList.sass'

const CarsList = () => {
    const [showXyi, setShowXyi] = useState(false)
    return (
        <section className='brands'>
            <div className='container'>
                <h1 className='title'>Välj bilmärke</h1>
                <ul>
                    <li><img className='brands__img' src={ford} alt="" style={{marginRight: '7px'}} /><span>Ford</span></li>
                    <li><img className='brands__img' src={bmw} alt="" style={{marginRight: '7px'}} />BMW</li>
                    <li><img className='brands__img' src={audi} alt="" style={{marginRight: '7px'}} />Audi</li>
                    <li><img className='brands__img' src={lamborghini} alt="" style={{marginRight: '7px'}} />Lamborghini</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img className='brands__img' src={bmw} alt="" style={{marginRight: '7px'}} />BMW</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img className='brands__img' src={lamborghini} alt="" style={{marginRight: '7px'}} />Lamborghini</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img className='brands__img' src={audi} alt="" style={{marginRight: '7px'}} />Audi</li>
                    <li><img className='brands__img' src={bmw} alt="" style={{marginRight: '7px'}} />BMW</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img className='brands__img' src={lamborghini} alt="" style={{marginRight: '7px'}} />Lamborghini</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    <li><img className='brands__img' src={bmw} alt="" style={{marginRight: '7px'}} />BMW</li>
                    <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
                    {showXyi ? <button onClick={() => setShowXyi(false)} className='brands__btn'>prova imorgon</button> : <button onClick={() => setShowXyi(true)} className='brands__btn'>
                        Visa alla bilmärke
                        <FontAwesomeIcon icon={faArrowDown} style={{marginLeft: '6px'}} /></button>}
                </ul>
            </div>
        </section>
    )
}

export default CarsList;