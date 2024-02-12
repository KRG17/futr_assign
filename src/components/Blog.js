import React from "react"
import "./blog.css"
import first_blog from "../assets/images/blog-image0.jpg"
import second_blog from "../assets/images/blog-image.jpg"

function Blog() {
  return (
    <div
      id="blog"
      className="blog"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>OUR BLOG</h2>
              <span>
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,
              </span>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap justify-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {/* First Blog Box */}
            <div className="blog-box mx-2">
              <figure>
                <span>4 Feb 2019</span>
                <img
                  src={first_blog}
                  alt="#"
                />
              </figure>
              <div className="travel">
                <span>Post By : Travel Agency</span>
                <p>
                  <strong className="Comment">06</strong> Comment
                </p>
                <p>
                  <strong className="like">05</strong> Like
                </p>
              </div>
              <h3>London Amazing Tour</h3>
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {/* Second Blog Box */}
            <div className="blog-box mx-2">
              <figure>
                <span>10 Feb 2019</span>
                <img
                  src={second_blog}
                  alt="#"
                />
              </figure>
              <div className="travel">
                <span>Post By : Travel Agency</span>
                <p>
                  <strong className="Comment">06</strong> Comment
                </p>
                <p>
                  <strong className="like">05</strong> Like
                </p>
              </div>
              <h3>London Amazing Tour</h3>
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
