import { useEffect, useMemo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHttp } from '../../hooks/http.hooks';
import { fetchCities, changeCurrentCity } from './ChooseCitySlice';

import bumper from  '../../assets/bumper.svg'
import doors from '../../assets/doors.svg'
import windshield from '../../assets/windshield.svg'

import './ChooseCity.sass'

const ChooseCity = ({setOpenSubHeader}) => {

    const dataCities = useSelector(state => state.cities.dataCities)

    const [currentLetter, setCurrentLetter] = useState(false)

    const dispatch = useDispatch()
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchCities(request))
    }, [])

    const setCurrentCity = useCallback((city) => {
        dispatch(changeCurrentCity(city))
    }, [dispatch])

    // const letters = useMemo([...new Set(dataCities.map(({name}) => name.match(/\D/)[0]).sort())].map(elem => elem), [])
    
    const letters = useMemo(() => [...new Set(dataCities.map(({ name }) => name[0]).sort())], [dataCities]);
    
    const createLetters = useMemo(() => {
        return letters.map((letter, i) => (
            <li onClick={() => setCurrentLetter(letter)} key={i} className='cities__letter'>
                {letter}
            </li>
        ));
    }, [letters]);

    const currentCites = useMemo( () => {
        return dataCities
            .filter(({name}) => name.startsWith(currentLetter))
            .map(({name, id}) => <li className='cities__current-city' onClick={() => {setCurrentCity(name), setOpenSubHeader(false)}} key={id}>{name}</li>)
    }, [currentLetter])
    
    
    return (
        <div className='cities' >
            {/* {currentSubHeader === "cities"
                ? <div className='cities__list'>
                    {createLeetterItems}
                </div>
                : <div className="container">
                    <div className="cities__imgs">
                        <div className='cities__imgs_img' ><img src={bumper} alt="" /><span>Billdörrar</span></div>
                        <div className='cities__imgs_img' ><img src={doors} alt="" /><span>Billstötfångare</span></div>
                        <div className='cities__imgs_img' ><img src={windshield} alt="" /><span>Vindruta</span></div>
                    </div>
                </div>} */}
                <ul className='cities__letters'>
                    {currentLetter ? currentCites : createLetters}
                </ul>
        </div>
    )
}

export default ChooseCity;

// console.log(["xihius", "ayuck", "bosgw", "rbosty", "dhiuwgd"].sort());