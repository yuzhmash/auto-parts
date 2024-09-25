import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchCars, fetchPopularCars } from './CarsListSlice'
import { useHttp } from '../../hooks/http.hooks'
import { useSelector, useDispatch } from 'react-redux'
import { addCurrentCarName } from './CarsListSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import bmw from '../../assets/cars-svg/BMW.svg'
import ford from '../../assets/cars-svg/ford.svg'
import audi from '../../assets/cars-svg/audi.svg'
import lamborghini from '../../assets/cars-svg/lamborghini.svg'

import './CarsList.sass'

const CarsList = () => {
    
    const [showAllCars, setShowAllCars] = useState(false)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const {dataCars} = useSelector(state => state.cars)
    const {dataPopularCars} = useSelector(state => state.cars)

    console.log(dataPopularCars);

    useEffect(() => {
        dispatch(fetchCars(request))
        dispatch(fetchPopularCars(request))
    }, [])

    const handleClick = (name) => {
        dispatch(addCurrentCarName(name))
    }
    const some = (
        <>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li>
        <li><img src={ford} alt="" style={{marginRight: '7px'}} />Ford</li></>
        
    )

    return (
        <section className='brands'>
            <div className="brands__wrapper">
                <div className='container'>
                    <h1 className='title'>Välj bilmärke</h1>
                    <ul>
                        {showAllCars ? null : dataPopularCars.map(({name, image}, i) => {
                            return <li onClick={() => handleClick(name)} key={name}><NavLink style={{height: "35px", width: "35px"}} to={`/${name.replace(/ /, "_").toLowerCase()}`} end><img className='brands__img' src={image.optimized} alt="" style={{marginRight: '7px', maxWidth: "100%"}} /><span>{name}</span></NavLink></li>
                        })}
                        {showAllCars ? dataCars.map(({name, image}, i) => {
                            return <li onClick={() => handleClick(name)} key={name}><NavLink style={{height: "35px", width: "35px"}} to={`/${name.replace(/ /, "_").toLowerCase()}`} end><img className='brands__img' src={image.optimized} alt="" style={{marginRight: '7px', maxWidth: "100%"}} /><span>{name}</span></NavLink></li>
                        }) : <button onClick={() => setShowAllCars(true)} className='brands__btn'>
                            Visa alla bilmärke
                            <FontAwesomeIcon icon={faArrowDown} style={{marginLeft: '6px'}} /></button>}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CarsList;