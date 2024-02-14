import React, { useState, useEffect } from "react"
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
import Loading from "./components/Loading"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  )
}

export default App
