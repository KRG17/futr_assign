// TravelWithUs.js

import React from "react"
import "./travelWithUs.css"
import travelImage from "../assets/images/travel-banner.jpeg"

const TravelWithUs = () => {
  return (
    <div
      className="travel-banner"
      style={{ backgroundImage: `url(${travelImage})` }}
    >
      <div className="travel-content">
        <div className="text-center">
          <h1 className="travel-heading">TRAVEL</h1>
          <p className="travel-subheading">WITH US</p>
        </div>
        <div className="read-more text-center">
          <button>Read More</button>
        </div>
        <div className="w-full">
          <div className="find-tour">Find Your Tour</div>
          <div className="form-container mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="g1 grid grid-cols-1 md:grid-cols-3 w-full md:w-auto mb-4 md:mb-0">
                <div className="mb-2">
                  <label
                    htmlFor="keywords"
                    className="block text-gray-600 mb-1"
                  >
                    Keywords
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    className="input-field"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="category"
                    className="block text-gray-600 mb-1"
                  >
                    Category
                  </label>
                  <select
                    className="select-field"
                    placeholder="Any"
                  >
                    <option>Any</option>
                  </select>
                  <select className="select-field">
                    <option>Any</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="minPrice"
                    className="block text-gray-600  mb-1"
                  >
                    Min Price
                  </label>
                  <input
                    type="text"
                    id="minPrice"
                    className="input-field"
                    placeholder="00.0"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="duration"
                    className="block text-gray-600  mb-1"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="input-field"
                    placeholder="Any"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="date"
                    className="block text-gray-600  mb-1"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="input-field"
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="maxPrice"
                    className="block text-gray-600  mb-1"
                  >
                    Max Price
                  </label>
                  <input
                    type="text"
                    id="maxPrice"
                    className="input-field"
                    placeholder="00.0"
                  />
                </div>
              </div>
              <button className="search-button">search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelWithUs
