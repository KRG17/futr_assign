import "../styles/loading.css"
import loadingGif from "../assets/images/loading.gif"

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <img
          src={loadingGif}
          alt="Loading..."
        />
      </div>
    </div>
  )
}

export default Loading
