import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blog from "./components/Blog"
import Travel from "./components/Travel"
import BestPlaces from "./components/Best_places"
import TravelWithUs from "./components/TravelWithUs"
import AboutUs from "./components/AboutUs"
import London from "./components/London"
import TravelingOffers from "./components/TravelingOffers"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <TravelWithUs />
        <AboutUs />
        <TravelingOffers />
        <London />
        <BestPlaces />
        <Travel />
        <Blog />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
