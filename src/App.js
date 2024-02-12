import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blog from "./components/Blog"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Blog />
      </BrowserRouter>
    </div>
  )
}

export default App
