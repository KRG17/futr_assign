import planeImage from "../assets/images/plane-img.png"
import "../styles/aboutUs.css"

const AboutUs = () => {
  return (
    <div
      id="about"
      className="about-section"
    >
      <div className="about-container mb-16">
        <div className="row">
          <div className="col-md-12">
            <div className="about-title">
              <div class="flex items-center px-40">
                <div class="flex-1 h-px bg-teal-400"></div>
                <h2 class="mx-4 font-bold text-2xl">OUR JOURNEY OF TRAVEL</h2>
                <div class="flex-1 h-px bg-teal-400"></div>
              </div>
              <span className="font-semibold">
                Fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem
                Ipsum is that it
                <br /> has a more-or-less normal distribution of letters.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-bg mb-2 pl-12 pr-28 relative">
        <div className="container2 flex justify-between">
          <div className="about-box about-border relative z-10">
            <p className="w-3/5">
              <span>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable.
              </span>
            </p>
          </div>
          <div className="plane-img-container absolute top-0 right-0 bottom-0 z-20">
            <img
              src={planeImage}
              alt="images"
            />
          </div>
        </div>
      </div>
      <div className="read-more-container">
        <div className="container3 mb-8">
          <div className="row">
            <div className="col-md-12">
              <div className="read-more flex justify-center">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
