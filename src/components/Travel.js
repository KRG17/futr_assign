import "../styles/travel.css"

const Travel = () => {
  return (
    <div className="amazing bg-cover bg-center flex items-center justify-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="amazing-box text-center text-white">
              <h2 className="text-5xl font-bold mb-4">ITALY TRAVEL GUIDE</h2>
              <br />
              <p className="text-gray-200 text-xl mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there
              </p>
              <div className="flex justify-center py-10">
                <a
                  href="#"
                  className="mr-6 py-2 px-4 text-lg bg-orange-600 text-white rounded-lg"
                >
                  Book Now
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-lg bg-orange-600 text-white rounded-lg"
                >
                  Get More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel
