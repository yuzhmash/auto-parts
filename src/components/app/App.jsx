import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "../header/Header";
import CarsList from "../cars-list/CarsList";
import CurrentProducts from "../current-products/CurrentProducts";
import Footer from "../footer/Footer";
import ChooseCity from "../choose-city/ChooseCity";
import CurrentCar from "../current-car/CurrentCar"

import MainContent from "../../pages/MainContent";

import tire from '../../assets/tire.svg'
import rim from '../../assets/rim.svg'
import headlamps from '../../assets/headlamps.svg'

const App = () => {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/:carID" element={<CurrentCar/>}/>
                    {/* <CurrentProducts title={'Bilstråkaster'} img={headlamps} />
                    <CurrentProducts title={'Däck'} img={tire}/>
                    <CurrentProducts title={'Fälgar'} img={rim}/> */}
                    {/* <ChooseCity/> */}
                </Routes>
            </main>
            <Footer/>
        </Router>
    )
}

export default App;