import "./best_places.css"
import tour_f from "../assets/images/tour_first.jpg"
import tour_s from "../assets/images/tour_second.jpg"
import tour_t from "../assets/images/tour_third.jpg"

const Best_places = () => {
  return (
    <div className="Tours">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2 className="text-center">The Best Tours</h2>
              <span className="text-center block">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </span>
            </div>
          </div>
        </div>
        <section id="demos">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item flex flex-wrap">
                  <img
                    className="img-responsive"
                    src={tour_f}
                    alt="#"
                  />
                  <h3 className="text-center">Holiday Tour</h3>
                  <p className="text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="item flex flex-wrap">
                  <img
                    className="img-responsive"
                    src={tour_s}
                    alt="#"
                  />
                  <h3 className="text-center">New York</h3>
                  <p className="text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="item flex flex-wrap">
                  <img
                    className="img-responsive"
                    src={tour_t}
                    alt="#"
                  />
                  <h3 className="text-center">London</h3>
                  <p className="text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Best_places
