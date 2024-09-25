import { useSelector } from "react-redux"

import CarsFilters from "../cars-filters/CarsFilters"

import "./CurrentCar.sass"

const CurrentCar = () => {

    const {currentCarName} = useSelector(state => state.cars)

    return (
        <div className="current-car">
            <div className="container">
                <h1 className="title" >
                    Säljer {currentCarName}
                </h1>
                <CarsFilters/>
            </div>
        </div>
    )
}

export default CurrentCar;