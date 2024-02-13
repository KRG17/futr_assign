import travelIcon1 from "../assets/icon/travel-icon.png"
import travelIcon2 from "../assets/icon/travel-icon2.png"
import travelIcon3 from "../assets/icon/travel-icon3.png"
import travelIcon4 from "../assets/icon/travel-icon4.png"
import "../styles/travelingOffers.css"

const TravelingOffers = () => {
  return (
    <div
      id="travel"
      className="traveling"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <div class="flex items-center mb-2 px-24">
                <div class="flex-1 h-px bg-teal-400"></div>
                <h2 class="mx-4">SELECT OFFERS FOR TRAVELLING</h2>
                <div class="flex-1 h-px bg-teal-400"></div>
              </div>
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </span>
            </div>
          </div>
        </div>
        <div className="row mx-40">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="traveling-box">
              <i>
                <img
                  src={travelIcon1}
                  alt="icon"
                />
              </i>
              <h3>Different Countrys</h3>
              <p>There are many variations of passages of Lorem Ipsum</p>
              <div className="read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="traveling-box">
              <i>
                <img
                  src={travelIcon2}
                  alt="icon"
                />
              </i>
              <h3>Mountains Tours</h3>
              <p>There are many variations of passages of Lorem Ipsum</p>
              <div className="read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="traveling-box">
              <i>
                <img
                  src={travelIcon3}
                  alt="icon"
                />
              </i>
              <h3>Bus Tours</h3>
              <p>There are many variations of passages of Lorem Ipsum</p>
              <div className="read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="traveling-box">
              <i>
                <img
                  src={travelIcon4}
                  alt="icon"
                />
              </i>
              <h3>Summer Rest</h3>
              <p>There are many variations of passages of Lorem Ipsum</p>
              <div className="read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelingOffers
