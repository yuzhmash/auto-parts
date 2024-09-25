import { useState, memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import "./CarsFilters.sass"

const CarsFilters = memo(() => {

    const currentCity = useSelector(state => state.cities.currentCity)

    const [showHasbulla, setShowHasbulla] = useState(false)

    // const showHasbulla = () => {
    //     console.log("xyi");
    // }

    return (
        <div className="filters">
            <div className="filters__btns">
                <button className="filters__region-btn active-region-btn">{currentCity}</button>
                <button className="filters__region-btn">Alla regioner</button>
                <button className="filters__region-btn">En annan stad</button>
            </div>
            <div className="filters__btn-group">
                <button className="filters__btn-all active-btn-groupe">Allt</button>
                <button className="filters__btn-used-parts">Begagnade delar</button>
                <button className="filters__btn-new">Nya</button>
            </div>
            <div className="filters__form">
                <form className="form">
                    <select className="form__cars" name="cars" id="cars">
                        <option value="bil">bil</option>
                        <option value="nissan">Nissan</option>
                        <option value="lambo">Lambo</option>
                    </select>
                    <select className="form__models" name="models" id="models">
                        <option value="models">Modell</option>
                        <option value="nissan">Nissan</option>
                        <option value="lambo">Lambo</option>
                    </select>
                    <select className="form__generation" name="generation" id="generation">
                        <option value="generation">Generation</option>
                        <option value="nissan">Nissan</option>
                        <option value="lambo">Lambo</option>
                    </select>                    
                    <div className="form__price">
                        <input type="text" name="price-from" placeholder="Pris från, SEK" />
                        <input type="text" name="price-to" placeholder="till" />
                    </div>
                    <div className="form__year">
                        <input type="text" name="year-from" placeholder="År från" />
                        <input type="text" name="year-to" placeholder="till" />
                    </div>
                    <div className="form__type">
                        <select name="part-type" id="part-type">
                            <option value="part-type">Typ av del</option>
                            <option value="xyi">xyi</option>
                        </select>
                        <select name="what-type" id="what-type">
                            <option value="what-type">Vilken del</option>
                        </select>
                    </div>
                    <button className="form__clear">
                        <FontAwesomeIcon style={{fontSize: "15px", marginRight: "5px"}} icon={faXmark}/>
                        Återställ allt</button>
                    <button onClick={(e) => {e.preventDefault(), setShowHasbulla(!showHasbulla)}} className="form__hasbulla">
                        <FontAwesomeIcon style={{fontSize: "15px", marginRight: "5px"}} icon={faArrowDown}/>
                        See Hasbulla</button>
                        {showHasbulla ? <div className="hasbulla">
                                <div className="hasbulla__img"><img src="https://i.pinimg.com/564x/c9/73/e4/c973e40f6169b25835e6e069ec3f6878.jpg" alt="" /></div>
                                <div className="hasbulla__img"><img src="https://i.pinimg.com/564x/28/ee/82/28ee829269879ff4f5a16273f435cde6.jpg" alt="" /></div>
                                <div className="hasbulla__img"><img src="https://i.pinimg.com/564x/39/67/40/39674039150936ccf6d48bcb0bcadbe8.jpg" alt="" /></div>
                                <div className="hasbulla__img"><img src="https://i.pinimg.com/564x/90/c4/a4/90c4a4819b3d7f7578f33ea768fddff5.jpg" alt="" /></div>
                                <div className="hasbulla__img"><img src="https://i.pinimg.com/564x/5b/31/74/5b3174bb51095caf677273c756637eeb.jpg" alt="" /></div>
                            </div> : null}
                    <button className="form__btn">Sök</button>
                </form>
            </div>
        </div>
    )

})

export default CarsFilters;