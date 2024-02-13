import "../styles/blog.css"
import first_blog from "../assets/images/blog-image0.jpg"
import second_blog from "../assets/images/blog-image.jpg"

function Blog() {
  return (
    <div
      id="blog"
      className="blog"
    >
      <div className="container shadow-none">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <div class="flex items-center mb-8 px-6">
                <div class="flex-1 h-px bg-teal-400"></div>
                <h2 class="mx-4">OUR BLOG</h2>
                <div class="flex-1 h-px bg-teal-400"></div>
              </div>

              <span>
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,
              </span>
            </div>
          </div>
        </div>
        <div className="row block">
          <div
            className="c1 flex items-center justify-center w-2/5 pl-20 ml-10"
            // style={{ width: "calc(50% - 8px)" }}
          >
            {/* First Blog Box */}
            <div className="blog-box mx-2">
              <figure className="d1">
                <span style={{ backgroundColor: "#022739" }}>16 July 2019</span>
                <img
                  src={first_blog}
                  alt="#"
                />
              </figure>
              <div className="travel flex justify-between">
                <span className="text-teal-400 font-semibold mr-18 pt-2">
                  Post By : Nisha Sharma
                </span>
                <div className="flex ">
                  <p>
                    <strong className="like">05</strong> Like
                  </p>
                  <p>
                    <strong className="comment">06</strong> Comment
                  </p>
                </div>
              </div>

              <h3>More Places To Explore</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web
              </p>
            </div>
          </div>
          <div
            className="c2 flex items-center justify-center w-2/5 pr-20 mr-10"
            // style={{ width: "calc(50% - 8px)" }}
          >
            {/* Second Blog Box */}
            <div className="w-full blog-box mx-2 ">
              <figure>
                <span style={{ backgroundColor: "#022739" }}>21 Aug 2019</span>
                <img
                  src={second_blog}
                  alt="#"
                />
              </figure>
              <div className="travel flex justify-between">
                <span className="text-teal-400 font-semibold mr-18 pt-2">
                  Post By : Nidhi Sharma
                </span>
                <div className="flex ">
                  <p>
                    <strong className="like ">05</strong> Like
                  </p>
                  <p>
                    <strong className="comment">06</strong> Comment
                  </p>
                </div>
              </div>

              <h3>More Places To Explore</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
