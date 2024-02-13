import londonImage from "../assets/images/London.jpg"
import "../styles/london.css"

const London = () => {
  return (
    <div className="London">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <div class="flex items-center mb-4 px-48">
                <div class="flex-1 h-px bg-teal-400"></div>
                <h2 class="mx-4 font-bold">BEST THINGS TO DO, LONDON</h2>
                <div class="flex-1 h-px bg-teal-400"></div>
              </div>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, <br />
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="London-img">
          <figure>
            <img
              src={londonImage}
              alt="img"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default London
