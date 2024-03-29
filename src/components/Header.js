import "../styles/header.css"
import logoImg from "../assets/images/logo-2.png"
import mailIconImg from "../assets/images/mail_icon.png"
import locationMarkerImg from "../assets/images/location_marker.png"
import telephoneLogoImg from "../assets/images/telephone_logo.png"
import topArrow from "../assets/images/top_arrow.png"

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_white_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <div className="top_arrow">
                    <img
                      src={topArrow}
                      alt="#"
                    />
                  </div>
                  <div className="header_information w-6/12">
                    <ul>
                      <li>
                        <img
                          src={locationMarkerImg}
                          alt="#"
                        />
                        145.street road new York
                      </li>
                      <li>
                        <img
                          src={telephoneLogoImg}
                          alt="#"
                        />
                        +71 5678954378
                      </li>
                      <li>
                        <img
                          src={mailIconImg}
                          alt="#"
                        />
                        Demo@hmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row2">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src={logoImg}
                        alt="#"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active">
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#travel">Travel</a>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#contact">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
