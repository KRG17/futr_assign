import "./footer.css"
import insta from "../assets/icon/instagram.png"
import facebook from "../assets/icon/facebook.png"
import twitter from "../assets/icon/Twitter.png"
import linkedin from "../assets/icon/linkedin.png"

function Footer() {
  return (
    <footer
      className="footer text-white justify-center items-end"
      style={{ backgroundColor: "#022739" }}
    >
      <div className="social-media justify-center mb-4 gap-4 ml-24">
        <img
          className="w-4 h-3.5"
          src={facebook}
          alt="Facebook"
        />
        <img
          className="w-4 h-3.5"
          src={twitter}
          alt="Twitter"
        />
        <img
          className="w-4 h-3.5"
          src={linkedin}
          alt="LinkedIn"
        />
        <img
          className="w-4 h-3.5"
          src={insta}
          alt="Instagram"
        />
      </div>
      <div className="footer-sections flex justify-between w-full mx-20">
        <div className="footer-contact-us w-1/4 p-4">
          <h3 className="mb-4 text-xl font-bold tracking-wider">CONTACT US</h3>
          <p>
            123 Second Street Fifth <br />
            Avenue, <br />
            Manhattan, New York <br />
            +987 654 3210
          </p>
        </div>
        <div className="footer-links w-1/4 p-4">
          <h3 className="mb-4 text-xl font-bold tracking-wider">
            ADDITIONAL LINKS
          </h3>
          <ul className="list-none p-0">
            <li className="mb-2">About us</li>
            <li className="mb-2">Terms and conditions</li>
            <li className="mb-2">Privacy policy</li>
            <li className="mb-2">News</li>
            <li className="mb-2">Contact us</li>
          </ul>
        </div>
        <div className="footer-contact-form w-1/2 p-4">
          <h3 className="mb-4 text-xl font-bold tracking-wider">CONTACT</h3>
          <div className="contact-form flex flex-col">
            <div className="input-group flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-2 mr-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-2 mr-2"
              />
            </div>
            <textarea
              placeholder="Comment"
              rows="2"
              className="w-full p-2 mt-2"
            ></textarea>
            <div className="subscribe flex flex-col">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
