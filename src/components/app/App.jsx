import Header from "../header/Header";
import CarsList from "../cars-list/CarsList";
import CurrentProducts from "../current-products/CurrentProducts";
import Footer from "../footer/Footer";
import ChooseCity from "../choose-city/ChooseCity";

import MainContent from "../../pages/MainContent";

import tire from '../../assets/tire.svg'
import rim from '../../assets/rim.svg'
import headlamps from '../../assets/headlamps.svg'

const App = () => {
    return (
        <>
            <Header/>
            <MainContent/>
            {/* <CurrentProducts title={'Bilstråkaster'} img={headlamps} />
            <CurrentProducts title={'Däck'} img={tire}/>
            <CurrentProducts title={'Fälgar'} img={rim}/> */}
            <Footer/>
            {/* <ChooseCity/> */}
        </>
    )
}

export default App;